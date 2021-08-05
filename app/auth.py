from tekore._auth.refreshing import RefreshingCredentials
from tekore._auth.refreshing import RefreshingToken
from tekore._auth.util import UserAuth

client_id = 'd1c0609dade3434197f56752749768b5'
client_secret = 'e8bdeaf95b63422e8578c0f3847d1583'
redirect_uri = 'https://compare-spotify.herokuapp.com/app/session' 
# redirect_uri = 'http://127.0.0.1:8000/app/session'

import tekore as core
scope = [
        core.scope.playlist_read_private,
        core.scope.user_follow_read,
        core.scope.user_library_read,
        core.scope.user_read_private,
        core.scope.user_top_read,
        core.scope.user_read_recently_played
    ]

def app_verify():
    app_token = core.request_client_token(client_id, client_secret)
    return core.Spotify(app_token)

def user_get_url(state: str):
    cred = RefreshingCredentials(client_id, client_secret, redirect_uri)
    return cred.user_authorisation_url(scope, state, show_dialog=True)

def user_verify(code: str):
    cred = RefreshingCredentials(client_id, client_secret, redirect_uri)
    return cred.request_user_token(code)

def verify_prompt():
    spotify = app_verify()
    token = core.prompt_for_user_token(
        client_id=client_id, 
        client_secret=client_secret, 
        redirect_uri=redirect_uri, 
        scope=scope)
    spotify.token = token
    return spotify
