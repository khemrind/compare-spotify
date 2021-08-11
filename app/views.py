from app.session import Session
from django.http import JsonResponse
from django.http import HttpRequest
from django.shortcuts import render
from app.process import handler
from app import auth, tool

def index(request: HttpRequest): 
    ## get session keys
    sessionID = request.GET.get('session')
    session = Session(sessionID)
    handler.initialize(sessionID)
    response = {
        'A.url': session.data['A']['url'],
        'F.url': session.data['F']['url']}
    return JsonResponse(response)

def session(request: HttpRequest): 
    ## authorize session client
    code = request.GET.get('code')
    state = tool.state_decode(request.GET.get('state'))
    sessionID = state.get('session')
    account = state.get('account')
    # load session
    session = handler.read(sessionID)
    if session != None:
        # load token
        process.load_token(sessionID, account, code)
        # build profile
        process.load_username(sessionID, account)
        process.load_listening(sessionID, account)
        process.load_artists(sessionID, account)
    return render(request, 'frontend/close.html')

def data(request: HttpRequest):
    ## get specific session data
    sessionID = request.GET.get('session')
    objectPath = request.GET.get('objectPath').split('.')
    # load session
    session = handler.read(sessionID)
    # attempt retrieve data
    response = { 'data': None }
    if session != None:
        pointer = session.data
        try:
            for node in objectPath:
                pointer = pointer[node]
            response = { 'data': pointer }
        except: pass
    return JsonResponse(response)

def func(request: HttpRequest):
    ## start specific data process
    function = request.GET.get('function')
    arguments = request.GET.getlist('args[]')
    getFunctions()[function](*arguments)
    return JsonResponse({})

from inspect import getmembers
from app import process
def getFunctions():
    ## get process functions
    table = {}
    for member in getmembers(process):
        table[member[0]] = member[1]

    return table
