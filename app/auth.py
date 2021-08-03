import tekore as core
from tekore._client.full import Spotify

client_id = 'd1c0609dade3434197f56752749768b5'
client_secret = 'e8bdeaf95b63422e8578c0f3847d1583'
redirect_uri = 'https://compare-spotify.herokuapp.com/app/session' 
# redirect_uri = 'http://127.0.0.1:8000/app/session'

from tekore._auth.refreshing import RefreshingCredentials
from tekore._auth.util import UserAuth

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

def user_get_auth():
    cred = RefreshingCredentials(client_id, client_secret, redirect_uri)
    auth = UserAuth(cred, scope)
    return (auth.url, auth.state)

def user_verify(code: str):
    cred = RefreshingCredentials(client_id, client_secret, redirect_uri)
    return cred.request_user_token(code)

