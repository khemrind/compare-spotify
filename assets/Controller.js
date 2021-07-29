import axios from 'axios';
import React from 'react';

/**
 * Axios api data request function helper for react state elements.
 * @param {string} endpoint API endpoint to use
 * @param {Object.<string, React.Dispatch<React.SetStateAction<any>>>} assignment response object attribute as key, state variable's set method as value
 * @param {*} data parameters to send along with request
 */
 export function request(endpoint, assignment, data) {
  axios.get(endpoint, { params: data })
    .then(response => {
      var payload = response.data
      for (let key in assignment) {
        assignment[key](payload[key])
      }
      console.log(payload) // for development only
    }).catch( function (error) {
      if (error.response) { // request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) { // request made but no response
        console.log(error.request);
      } else { // request setup triggered an error
        console.log('[Error]', error.message);
      }
  })
}

/**
 * Extended setInterval function.
 * @param {() => void} closure code to be executed
 * @param {number} waittime the interval
 * @param {number} limit function expires when code runs this many times
 * @returns NodeJS.Timer that can be interrupted with clearInterval(self)
 */
export function interval(closure, waittime, limit) {
  var max = limit
  var interval = setInterval(() => {
    if (max == 0) {
      clearInterval()
    } else {
      closure()
    }
    max -= 1
  }, waittime)
  return interval

}
