from app import auth
from django.http import JsonResponse
from django.http import HttpRequest
from django.shortcuts import render

def index(request: HttpRequest):
    count = request.GET.get('count')
    response = { 'text': f"e{count}" }
    return JsonResponse(response)

from app.session import Session
def session(request: HttpRequest):
    response = {}
    code = request.GET.get('code')
    identifier = request.GET.get('state')
    # unauthorized session
    if code == None or identifier == None: 
        session = Session()
        print(session)
        response = { 
            'id': session.id, 
            'url': session.data['authurl'] }
        return JsonResponse(response)
    # authorized session
    else: 
        session = Session.load(identifier)
        session.data['code'] = code
        session.save()
        return render(request, 'frontend/close.html')

def verify(request: HttpRequest):
    response = {}
    session = None
    identifier = request.GET.get('id')
    if identifier != None:
        session = Session.load(identifier)
    # session load attempted
    if session != None:
        try:
            response = { 'code': session.data['code'] }
        except:
            response = { 'code': 'none' }
    else:
        response = { 'code': 'none' } 
    return JsonResponse(response)

def data(request: HttpRequest):
    response = {}
    session = Session.load(request.GET.get('id'))
    if session != None:
        code = session.data['code']
        spotify = auth.app_verify()
        spotify.token = auth.user_verify(code)
        listening = ''
        for item in spotify.current_user_top_tracks('long_term', limit=10).items:
            listening += item.name + '\n'
        response = { 'listening': listening }
    return JsonResponse(response)