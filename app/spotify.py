import tekore as core

client_id = 'd1c0609dade3434197f56752749768b5'
client_secret = 'e8bdeaf95b63422e8578c0f3847d1583'
redirect_uri = 'http://127.0.0.1:8000'

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

def user_verify(): # returns a url for authentication and closure for token
    cred = RefreshingCredentials(client_id, client_secret, redirect_uri)
    auth = UserAuth(cred, scope)

    def user_token(redirection):
        return auth.request_token(redirection)

    return (auth.url, user_token)
