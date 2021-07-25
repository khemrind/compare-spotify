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
