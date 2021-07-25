import React, { useState, useEffect } from 'react';
import Controller from './Controller';
import { request } from './Controller';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade'

var count = 0

function App() {

  const [visible, setVisible] = useState(true);
  const [sessionid, setSessionID] = useState(null);
  const [text, setText] = useState('');
  

  useEffect(() => {
    if (sessionid == null) {
      request(setSessionID, 'id', '/app/session', {})
    }
    if (visible == true) {
      setTimeout(() => { setVisible(false) }, 1600)
    }
  });
  
  function handleSubmit() {
    request(setText, 'text', '/app/', { count: count })
    count++;
  }

  return (
    <Container> 
      <Fade in={visible} style={{transition:"opacity .35s linear", backgroundColor:"white", width:"100%", height:"100%", zIndex:1, position:"absolute", top:0, left:0, right:0, bottom:0}}>
        <p></p>
      </Fade>
      <Container style={{margin:'30px', zIndex:0, position:"absolute", top:0, left:0}}>
        <Row>
          <Col>{sessionid}</Col>
        </Row>
        <Row>
          <Col><Button onClick={handleSubmit} variant="primary">button {text}</Button></Col>
        </Row>
      </Container>
    </Container>
  )
}

export default App;
