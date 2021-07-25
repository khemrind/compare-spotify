import axios from 'axios';
import React from 'react';

/**
 * Axios api data request function helper for react state elements.
 * @param {React.Dispatch<React.SetStateAction<any>>} setstate state variable's set method
 * @param {string} object response object to use in setstate
 * @param {string} endpoint API endpoint to use
 * @param {*} data parameters to send along with request
 */
export function request(setstate, object, endpoint, data) {
  var payload = null
  axios.get(endpoint, { params: data })
    .then(response => {
      payload = response.data[object]
      setstate(payload)
      console.log(response.data) // for development only
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