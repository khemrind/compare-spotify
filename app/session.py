from app.models import StoredSession
from app import auth
from app import tool

class Session:

    id: str = '' # unique identifier
    properties: dict = {} # session properties
    content: dict = {} # presentable content
    data: dict = {} # session data

    def __init__(self, loading = False):

        if not loading:
            self.id = tool.produce_uuid()
            self.data['stateA'] = 'A' + self.id
            self.data['stateF'] = 'F' + self.id
            self.data['urlA'] = auth.user_get_url(self.data['stateA'])
            self.data['urlF'] = auth.user_get_url(self.data['stateF'])
            self.save()

    def save(self):
        stored: StoredSession = self.query()
        if stored == None: # new Session
            StoredSession.objects.create(
                id = self.id,
                properties = tool.encode_json(self.properties),
                content = tool.encode_json(self.content),
                data = tool.encode_json(self.data)
            )
        else: # existing session
            stored.properties = tool.encode_json(self.properties)
            stored.content = tool.encode_json(self.content)
            stored.data = tool.encode_json(self.data)
            stored.save()
            
    def query(self):
        return StoredSession.objects.filter(id = self.id).first()

    def __str__(self):
        return '<Session: ' + self.id + '>'

    @classmethod
    def load(cls, identifier: str):
        if identifier == None:
            return None
        stored: StoredSession = StoredSession.objects.filter(id = identifier).first()
        if stored != None:
            session = Session(loading=True)
            session.id = stored.id
            session.properties = tool.decode_json(stored.properties)
            session.content = tool.decode_json(stored.content)
            session.data = tool.decode_json(stored.data)
            return session
        else: return None

