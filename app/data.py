import math
from tekore import Spotify

def getUser(client: Spotify):

    return client.current_user().display_name

def getListeningComparison(clientA: Spotify, clientF: Spotify):

    listeningA = clientA.current_user_top_tracks('long_term', limit=10).items
    listeningF = clientF.current_user_top_tracks('long_term', limit=10).items

    popA = 0
    popF = 0

    for track in listeningA:
        popA += track.popularity
    popA = round((popA / len(listeningA)) / 10, 1)

    for track in listeningF:
        popF += track.popularity
    popF = round((popF / len(listeningF)) / 10, 1)

    track_idsA = []
    for track in listeningA:
        track_idsA.append(track.id)

    track_idsF = []
    for track in listeningF:
        track_idsF.append(track.id)

    audioA = clientA.tracks_audio_features(track_idsA)
    audioF = clientF.tracks_audio_features(track_idsF)

    matrix = []

    for A in audioA:
        tableA = (A.acousticness, A.valence, 
            A.danceability, A.instrumentalness, 
            A.speechiness, A.energy)
        compare = []
        for F in audioF:
            tableF = (F.acousticness, F.valence, 
                F.danceability, F.instrumentalness, 
                F.speechiness, F.energy)
            error = 0
            for index in range(0, len(tableA)):
                error += (tableA[index] - tableF[index]) ** 2
            distance = math.sqrt(error)
            compare.append(distance)
        matrix.append(compare.copy())
        compare.clear()

    minTable = []

    for compare in matrix:
        minTable.append(min(compare))

    average = 0
    for error in minTable:
        average += error
    average = (average / len(minTable)) * 100

    scale = math.sqrt(2)
    similarity = 100 - (average / scale)

    return (similarity, popA, popF)
