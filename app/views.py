import app
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
        response = { 'code': session.data['code'] }
    else:
        # needs to be a proper BAD_REQUEST response
        response = { 'code': 'none' } 
    return JsonResponse(response)
    