from threading import Thread, main_thread
from functools import partial
from queue import Queue
from typing import Dict, List, Union
from app.session import Session
import time

class Commit():

    def __init__(self, identifier):
        self.id = identifier
        self.finished = False
        self.change: function = None

    def done(self):
        self.finished = True

    def publish(self):
        session = Session.load(self.id)
        self.change(session)
        session.save()

class Process:

    def __init__(self, task, *args):
        self.task = partial(task, *args)

class Group(Queue[Union[Process, Commit]]):

    def __init__(self, identifier):
        super().__init__(maxsize=0)
        self.id = identifier

    def peek(self) -> Union[Process, Commit]:
        return self.queue[0]

class Handler:

    def __init__(self):

        self.queue: List[Group] = []

        self.scheduler = Thread(target=self.main)
        self.scheduler.start()

    def finalize(self):
        print('handler closed: with', len(self.queue), 'groups')

    def initialize(self, identifier):
        self.queue.append(Group(identifier))

    def register(self, identifier) -> Commit: 
        # ! blocks handler thread while commit is unfinished !
        commit = Commit(identifier)
        for group in self.queue:
            if group.id == identifier:
                group.put_nowait(commit)
        return commit

    def read(self, identifier) -> Session:
        print('read session: ' + identifier)
        executed = False
        session = None
        def read_request():
            nonlocal executed
            nonlocal session
            session = Session.load(identifier)
            executed = True
            print('read session executed')
        for group in self.queue:
            print(group.id)
            if group.id == identifier:
                group.put_nowait(Process(read_request))
        while not executed:
            time.sleep(0)
        return session
        
    def main(self):

        print('handler thread started.')
        
        while main_thread().is_alive():

            # normal; process a single queue loop
            for group in self.queue:
                if not group.empty():
                    item = group.peek()
                    # commit
                    if isinstance(item, Commit) and item.finished == True:
                        item = group.get_nowait()
                        item.publish()
                        group.task_done()
                        time.sleep(0)
                    # some task
                    elif isinstance(item, Process):
                        item = group.get_nowait()
                        item.task()
                        group.task_done()
                        time.sleep(0)

            # idle; let system operate on other threads
            else: time.sleep(0)

        self.finalize()
        
handler = Handler()

