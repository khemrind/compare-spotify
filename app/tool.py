import hashlib
from django.http.request import HttpHeaders

def session_id(headers: HttpHeaders):

    return hashlib.sha224(str(headers).replace(' ', '').encode()).hexdigest()
