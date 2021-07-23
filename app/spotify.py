import tekore as core
import math

client_id = 'd1c0609dade3434197f56752749768b5'
client_secret = 'e8bdeaf95b63422e8578c0f3847d1583'
redirect_uri = 'http://127.0.0.1:8000'

from tekore._auth.refreshing import RefreshingCredentials
from tekore._auth.util import UserAuth

def user_verify(client_id, client_secret, redirect_uri, scope): # returns a url for authentication and closure for token
    cred = RefreshingCredentials(client_id, client_secret, redirect_uri)
    auth = UserAuth(cred, scope)

    def user_token(redirection):
        return auth.request_token(redirection)

    return (auth.url, user_token)