import json
def encode_json(object):
    return json.dumps(object)

def decode_json(object):
    return json.loads(object)

def state_encode(state: dict):
    # example: {'property': 500, 'other': 'string'}
    # encoding -> "property.500~other.string"
    result = ""
    for key in state.keys():
        result += key + '.' + str(state.get(key))
        result += '~'
    return result[0:len(result)-1]

def state_decode(state: str):
    result = {}
    for chunk in state.split('~'):
        pair = chunk.split('.')
        key = pair[0]
        value = pair[1]
        result[key] = value
    return result

import uuid
def produce_uuid():
    return uuid.uuid4().hex

from statistics import NormalDist
def dist(mean, sd, valueA, valueF):

    def _sd(mean, sd, value):
        return (mean - value) / sd

    def _emp_distance(A, F):
        dist = NormalDist(mu=0, sigma=1)
        if A == F: return 0
        elif A > F:
            return dist.cdf(A) - dist.cdf(F)
        else: return dist.cdf(F) - dist.cdf(A)

    return _emp_distance(_sd(mean, sd, valueA), _sd(mean, sd, valueF))
    