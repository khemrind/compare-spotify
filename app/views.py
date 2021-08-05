from django.http import JsonResponse
from django.http import HttpRequest
from django.shortcuts import render
from app import auth
from app import data

def index(request: HttpRequest): 
    ## get session keys
    session = Session()
    response = {
        'session': session.id,
        'stateA': session.data['stateA'],
        'stateF': session.data['stateF'],
        'urlA': session.data['urlA'],
        'urlF': session.data['urlF']}
    return JsonResponse(response)

from app.session import Session
def session(request: HttpRequest): 
    ## authorize session client
    code = request.GET.get('code')
    state = request.GET.get('state')
    session = Session.load(state[1:len(state)]) # omit A, F
    if state[0] == 'A':
        session.data['tokenA'] = str(auth.user_verify(code))
    else:
        session.data['tokenF'] = str(auth.user_verify(code))
    session.save()
    return render(request, 'frontend/close.html')

def _getClient(sessionID: str, state: str):
    # attempt session load
    session = Session.load(sessionID)
    if session != None:
        try:
            spotify = auth.app_verify()
            token = None
            if state[0] == 'A':
                token = session.data['tokenA']
            elif state[0] == 'F':
                token = session.data['tokenF']
            if token != None:
                spotify.token = token
            return spotify
        except:
            return None

def user(request: HttpRequest): 
    ## get client username
    response = {}
    sessionID = request.GET.get('session')
    state = request.GET.get('state')
    client = _getClient(sessionID, state)
    if client != None:
        response = {'user': data.getUser(client)}
    else: response = {'user': 'none'} # "UNAUTHORIZED" needs formal response flow
    return JsonResponse(response)

def compare(request: HttpRequest): 
    # get comparison data
    response = {}
    sessionID = request.GET.get('session')
    session = Session.load(sessionID)
    if session != None:
        clientA = auth.app_verify()
        clientF = auth.app_verify()
        clientA.token = session.data['tokenA']
        clientF.token = session.data['tokenF']
        (similarity, popularityA, popularityF) = data.getListeningComparison(clientA, clientF)
        response = {'similarity': similarity, 'popularityA': popularityA, 'popularityF': popularityF}
    # NO ELSE: empty response may cause FrontEnd Controller assignment error !watch!
    return JsonResponse(response)