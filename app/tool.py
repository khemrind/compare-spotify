import hashlib
from django.http.request import HttpHeaders

def session_id(headers: HttpHeaders):

    input = str(headers).replace(' ', '')
    return (hashlib.sha224(input.encode()).hexdigest(), input)
