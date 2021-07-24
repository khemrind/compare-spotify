import axios from 'axios';
import React from 'react';

// class Controller {

//     constructor(viewname) {
        
//     }

// }

/**
 * 
 * @param {string} endpoint 
 * @param {*} data 
 * @param {React.Dispatch<React.SetStateAction<any>>} setstate
 * @returns data from axios response
 */
export function request(endpoint, setstate, data) {
  var payload = null
  axios.get(endpoint, { params: data })
    .then(response => {
      payload = response.data.text
      setstate(payload)
      console.log(response) // for development only
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