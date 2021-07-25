from django.http import JsonResponse
from django.http import HttpRequest
from app import tool

def index(request: HttpRequest): # single request example
    count = request.GET.get('count')
    data = { 'text': f"e{count}" }
    return JsonResponse(data)

def session(request: HttpRequest):
    id, input = tool.session_id(request.headers)
    data = { 'id': id,  'input': input}
    # create session object
    return JsonResponse(data)

# def auth(request: HttpRequest): # auth request cycle

    # a request cycle is expected:
    # client-side processing is required
    # request(auth): needs url.
    #   endpoint name, cycle
    # respond(url): sends url.
    # request(verification): logs in Spotify and sends code.
    # response(success): respond with success.
    