from typing import List
from tekore._model.artist import FullArtist
from tekore._model.audio_features import AudioFeatures
from app.session import Session
from app.handler import handler
from app import auth
from app import tool

# constants
acoustic_mean = 0.3
acoustic_sd = 0.3193
valence_mean = 0.57
valence_sd = 0.2424
dance_mean = 0.57
dance_sd = 0.1663
instr_mean = 0.2
instr_sd = 0.2321
energy_mean = 0.6
energy_sd = 0.2325

# handler commits: READ, etc. before WRITE, as writing blocks the handler thread

def _getAccount(sessionID: str, account: str, write_only=False):
    # attempt session load
    session = handler.read(sessionID)
    if session != None:
        spotify = auth.app_verify()
        spotify.token = session.data[account]['token']
        if write_only:
            return spotify
        else:
            return (spotify, session)
    else: return None

def _buffer(func, parameter, size: int):
    list = []
    pool = len(parameter)
    index = 0
    while(len(list) < pool):
        end = (index+size) if (index+size) < pool else pool
        list += func(parameter[index:end])
        index += size
    return list

def load_token(sessionID: str, account: str, code: str):
    # save auth token to account in session
    token = str(auth.user_verify(code))
    commit = handler.register(sessionID)
    def change(session: Session):
        session.data[account]['token'] = token
    commit.change = change
    commit.done()

def load_username(sessionID: str, account: str):
    # save client display name in session
    client = _getAccount(sessionID, account, write_only=True)
    commit = handler.register(sessionID)
    def change(session: Session):
        session.data[account]['username'] = client.current_user().display_name
    commit.change = change
    commit.done()

from tekore._model.playlist import SimplePlaylist
def load_listening(sessionID: str, account: str):
    # build list of listening track ids
    client = _getAccount(sessionID, account, write_only=True)
    commit = handler.register(sessionID)
    onRepeat: SimplePlaylist = client.search('On Repeat', ('playlist',), limit=1)[0].items[0]
    repeatRewind: SimplePlaylist = client.search('Repeat Rewind', ('playlist',), limit=1)[0].items[0]
    tracks = (
        [track.id for track in client.current_user_top_tracks('long_term', limit=50).items] + 
        [track.id for track in client.current_user_top_tracks('medium_term', limit=50).items] + 
        ([x.track.id for x in client.playlist(onRepeat.id).tracks.items] if onRepeat.description == 'Songs you love right now' else None) +
        ([x.track.id for x in client.playlist(repeatRewind.id).tracks.items] if repeatRewind.description == 'Your past favorites' else None) 
    )
    def change(session: Session):
        session.data[account]['listening'] = list(set(tracks))
    commit.change = change
    commit.done()

def load_artists(sessionID: str, account: str):
    # build list of artist ids
    client = _getAccount(sessionID, account, write_only=True)
    commit = handler.register(sessionID)
    artists = (
        [artist.id for artist in client.current_user_top_artists('medium_term', limit=50).items] + 
        [artist.id for artist in client.current_user_top_artists('long_term', limit=50).items] + 
        [artist.id for artist in client.followed_artists(limit=50).items]
    )

    def change(session: Session):
        session.data[account]['artists'] = list(set(artists))
    commit.change = change
    commit.done()

def compare(sessionID: str): 
    # build comparison data
    session = handler.read(sessionID)
    clientA = _getAccount(sessionID, 'A', write_only=True)
    clientF = _getAccount(sessionID, 'F', write_only=True)
    commit = handler.register(sessionID)
    if session == None: return
    # get track ids
    track_idsA = session.data['A']['listening']
    track_idsF = session.data['F']['listening']
    audioA: List[AudioFeatures] = _buffer(clientA.tracks_audio_features, track_idsA, 100)
    audioF: List[AudioFeatures] = _buffer(clientF.tracks_audio_features, track_idsF, 100)

    matrix = [] # distance matrix
    for A in audioA:
        tableA = (A.acousticness, A.valence, 
            A.danceability, A.instrumentalness, A.energy)
        compare = []
        for F in audioF:
            tableF = (F.acousticness, F.valence, 
                F.danceability, F.instrumentalness, F.energy)
            distance = [
                tool.dist(acoustic_mean, acoustic_sd, tableA[0], tableF[0]),
                tool.dist(valence_mean, valence_sd, tableA[1], tableF[1]),
                tool.dist(dance_mean, dance_sd, tableA[2], tableF[2]),
                tool.dist(instr_mean, instr_sd, tableA[3], tableF[3]),
                tool.dist(energy_mean, energy_sd, tableA[4], tableF[4]),
            ]
            avg_distance = sum(distance)/len(tableA)
            compare.append(avg_distance)
        matrix.append(compare.copy())
        compare.clear()

    minTable = [] # minimum distance table
    for compare in matrix:
        minTable.append(min(compare))

    average = 0 # average minimum distance
    for error in minTable:
        average += error
    average = (average / len(minTable)) * 100

    similarity = round(100 - average, 2)

    def change(session: Session):
        session.data['similarity'] = similarity
    commit.change = change
    commit.done()

def similar_artists(sessionID: str):
    session = Session.load(sessionID)
    spotify = auth.app_verify()

    commit = handler.register(sessionID)
    intersection = set.intersection(
        set(session.data['A']['artists']), 
        set(session.data['F']['artists'])
    )

    artistNames: List[FullArtist] = _buffer(spotify.artists, list(intersection), 50)
    artistNames = [x.name for x in artistNames]

    def change(session: Session):
        session.data['similarArtists'] = artistNames
    commit.change = change
    commit.done()
