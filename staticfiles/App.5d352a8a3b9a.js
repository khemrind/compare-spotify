import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var count = 0

function App() {

  useEffect(() => {});

  const [text, setText] = useState('');
  
  function handleSubmit() {
    axios.get('/app/', {
      params: {
        count: count
      }
    })
    .then(response => {
      console.log(response.data)
      setText(response.data.text)
    }).catch( function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.log('Error', error.message);
      }
    })
    count++;
  }

  return (
    <Container>
      <div>
        <Row>
          <Col><Button onClick={handleSubmit} variant="primary">button</Button></Col>
          <Col><p class="text-center">{text}</p></Col>
        </Row>
      </div>
    </Container>
  )
}

export default App;
