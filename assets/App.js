import React, { useState, useEffect } from 'react';
import Controller from './Controller';
import { request, interval } from './Controller';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade'

var count = 0

function App() {

  // - Constants -

  // onsite
  const [visible, setVisible] = useState(true);
  const [sessionid, setSessionID] = useState(null);
  const [text, setText] = useState(null);
  const [mainDepth, setMainDepth] = useState(0);
  const [fadeDepth, setFadeDepth] = useState(1);
  const [authCode, setAuthCode] = useState(null);
  // offsite
  const [waitForCode, setWaitForCode] = useState(null);
  const [redirecturl, setRedirectURL] = useState(null);

  // - Initialization -

  useEffect(() => {
    // session
    request('/app/session',{ 
      'id': setSessionID,
      'url': setRedirectURL,
    }, {})
    // fade
    setTimeout(() => { 
      setVisible(false) 
      setTimeout(() => {
        setMainDepth(1) // push to front
        setFadeDepth(0)
      }, 400)
    }, 1250)
  }, []); // -> runs once

  // - Rendering -

  useEffect(() => {
    console.log('render')
    if ((authCode != null && authCode != 'none') && waitForCode != null) {
      clearInterval(waitForCode)
    }
  });

  // - Input Actions -
  
  function handleSubmit() {
    request('/app', {'text': setText}, { count: count })
    count++;
  }

  function openVerifyTab() {
    if (redirecturl != null) {
      window.open(redirecturl, '_blank')
    }
    setWaitForCode(interval(() => {
      request('/app/verify', {'code': setAuthCode}, { id: sessionid })
    }, 1500, 10))
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
          <Col>session identifier: {sessionid}</Col>
        </Row>
        <Row>
          <Col>authorization code: {authCode}</Col>
        </Row>
        <Row>
          <Col><Button onClick={handleSubmit} variant="warning">request {text}</Button></Col>
        </Row>
        <Row>
          <Col><Button onClick={openVerifyTab} variant="primary">login</Button></Col>
        </Row>
      </Container>
    </Container>
  )
}

export default App;
