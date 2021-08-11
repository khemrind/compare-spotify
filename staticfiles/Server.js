import axios from 'axios';
import React, { useState, useEffect } from 'react';

/**
 * Request extension for stateful data with loading times.
 * @param {String} session unique session identifier
 * @param {String} endpoint api endpoint
 * @param {String} object data object to retrieve
 * @returns an access object
 */
export default function Access(session, endpoint, object) {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(null);
  const [buffer, setBuffer] = useState(null);
  const [repeat, setRepeat] = useState(null);
  const [max, setMax] = useState(7);
  const waittime = 2700

  useEffect(() => { // end cases
    if (buffer != null || max == 0) {
      // assign value
      setValue(buffer)
      // reset
      clearInterval(repeat)
      setMax(7)
      setRepeat(null)
      setBuffer(null)
      setLoading(false)
    }
  })

  function load() { // localized scope unaware of state changes
    var count = 7
    if (repeat == null) { // create an interval
      setLoading(true)
      setRepeat(setInterval(() => {
        // make requests
        request(endpoint, 
          {'data': setBuffer}, 
          {'session': session, 'objectPath': object})
        count -= 1
        setMax(count)
      }, waittime))
    }
  }
  
  return {
    'value': value,
    'loading': loading,
    'load': load
  }
}

/**
 * Request extension for react state elements.
 * @param {string} endpoint API endpoint to use
 * @param {Object.<string, React.Dispatch<React.SetStateAction<any>>>} assignment response object attribute as key, state variable's set method as value
 * @param {*} data parameters to send along with request
 */
 export function request(endpoint, assignment, data) {
  axios.get(endpoint, { params: data })
    .then(response => {
      var payload = response.data
      for (let key in assignment) {
        try {
          assignment[key](payload[key])
        } catch (error) {
          console.log('Assignment error:')
          console.log(error)
        }
      }
      console.log(payload) // for development only
    }).catch(function (error) {_handleError(error)})
}

/**
 * Request extension for simple server function calls.
 * @param {String} functionName function name in process.py
 * @param {Array.<string|number>} args function arguments
 */
export function process(functionName, args) {
  axios.get('/app/func', 
    { params: {
        'function': functionName,
        'args': args
      }
    })
    .then(response => {
      var payload = response.data
      console.log(payload) // for development only
    }).catch(function (error) {_handleError(error)})
}

/**
 * Error handling function for requests.
 */
function _handleError(error) {
  if (error.response) { // request made and server responded
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) { // request made but no response
    console.log(error.request);
  } else { // request setup triggered an error
    console.log('[Error]', error.message);
  }
}


