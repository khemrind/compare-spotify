import json
import uuid
       
def encode_json(object):
    return json.dumps(object)

def decode_json(object):
    return json.loads(object)

def produce_uuid():
    return uuid.uuid4().hex
