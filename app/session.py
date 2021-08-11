from app.models import StoredSession
from app import auth
from app import tool

class Session:

    id: str = '' # unique identifier
    properties: dict = {} # session properties
    data: dict = {} # session data

    def __init__(self, identifier: str, loading = False):

        self.id = identifier

        if not loading:
            self.data['A'] = {}
            self.data['F'] = {}
            self.data['A']['url'] = auth.user_get_url({'session': self.id, 'account': 'A'})
            self.data['F']['url'] = auth.user_get_url({'session': self.id, 'account': 'F'})
            self.save()

    def save(self):

        stored: StoredSession = self.query()
        if stored == None: # new Session
            StoredSession.objects.create(
                id = self.id,
                properties = tool.encode_json(self.properties),
                data = tool.encode_json(self.data)
            )
        else: # existing session
            stored.properties = tool.encode_json(self.properties)
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
            session = Session(loading=True, identifier=stored.id)
            session.properties = tool.decode_json(stored.properties)
            session.data = tool.decode_json(stored.data)
            return session
        else: return None
