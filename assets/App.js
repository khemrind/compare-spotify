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

  // - Constants -

  const [visible, setVisible] = useState(true);
  const [sessionid, setSessionID] = useState(null);
  const [hashSource, setHashSource] = useState(null);
  const [text, setText] = useState('');
  const [mainDepth, setMainDepth] = useState(0);
  const [fadeDepth, setFadeDepth] = useState(1);

  // - Initialization -

  useEffect(() => {
    // session
    request('/app/session',{
      'id': setSessionID,
      'input': setHashSource
    }, {})
    // fade
    setTimeout(() => { 
      setVisible(false) 
      setTimeout(() => {
        setMainDepth(1) // push to front
        setFadeDepth(0)
      }, 400)
    }, 1400)
  }, []); // empty dependencies -> runs 1x

  // - Render Actions -

  useEffect(() => {});

  // - Input Actions -
  
  function handleSubmit() {
    request('/app/', {'text': setText}, { count: count })
    count++;
  }

  // - Styling -

  const fullscreen = {width:"100%", height:"100%", position:"absolute", top:0, left:0, right:0, bottom:0}

  // - App View -
  return (
    <Container> 
      <Fade in={visible} style={Object.assign({}, {transition:"opacity .35s linear", backgroundColor:"white", zIndex:fadeDepth}, fullscreen)}>
        <p></p>
      </Fade>
      <Container style={Object.assign({}, {margin:'30px', zIndex:mainDepth}, fullscreen)}>
        <Row>
          <Col>{sessionid}</Col>
        </Row>
        <Row>
          <Col>obtained from {hashSource}</Col>
        </Row>
        <Row>
          <Col><Button onClick={handleSubmit} variant="primary">button {text}</Button></Col>
        </Row>
      </Container>
    </Container>
  )
}

export default App;
