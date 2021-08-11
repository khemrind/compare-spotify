import React, { useState, useEffect } from 'react';
import Access, { request, process } from './Server';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Collapse from 'react-bootstrap/Collapse';
const { v4: uuidv4 } = require('uuid');
const sessionID = uuidv4();

function App() {

  // - Constants -

  // onsite
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const usernameA = Access(sessionID, '/app/data', 'A.username');
  const usernameF = Access(sessionID, '/app/data', 'F.username');
  const similarity = Access(sessionID, '/app/data', 'similarity');
  const similarArtists = Access(sessionID, '/app/data', 'similarArtists');
  const [loggedIn, setLoggedIn] = useState(false);
  // offsite
  const [urlA, setUrlA] = useState(null);
  const [urlF, setUrlF] = useState(null);

  // - Initialization -

  useEffect(() => {
    // session
    request('/app', { 
      'A.url': setUrlA,
      'F.url': setUrlF,
    }, {'session': sessionID})
    // loading fade
    setTimeout(() => { 
      setLoading(false) 
      setTimeout(() => {
        setVisible(false) 
      }, 400)
    }, 1250)
  }, []); // -> runs once

  // - Rendering -

  useEffect(() => {
    // compare btn
    if (usernameA.value != null && usernameF.value != null) {
      setLoggedIn(true)
    } else { setLoggedIn(false) }
  });

  // - Input Actions -

  function loginA() {
    if (urlA != null) {
      window.open(urlA, '_blank')
    }
    usernameA.load()
  }

  function loginF() {
    if (urlF != null) {
      window.open(urlF, '_blank')
    }
    usernameF.load()
  }

  function getComparison() {
    if (loggedIn) {
      process('compare', [sessionID])
      similarity.load()
    }
  }

  function getSimilarArtists() {
    if (loggedIn) {
      process('similar_artists', [sessionID])
      similarArtists.load()
    }
  }

  // - App View -

  return (
    <Container fluid className='d-flex vh-100'>
      { visible == true &&
        <Fade in={loading} className='position-fixed' style={{transition:"opacity .35s linear", backgroundColor:"white", zIndex: 1}}>
          <p className='vw-100 vh-100'></p></Fade>
      } <Col className='p-3'>
      <Row className="mb-2"><h4 className="square bg-light rounded text-muted p-3">Session Identifier: {sessionID}</h4></Row>
      <Row className="mb-2">
        <Col className='col-auto p-0 me-2'>
        <p className="square bg-light rounded text-muted m-0 p-2">
          <Button onClick={loginA}>authenticate 1st user</Button>
          <em className="m-2">User: {usernameA.loading ? 'authenticating..': usernameA.value}</em>
        </p></Col>
        <Col className='col-auto p-0'>
        <p className="square bg-light rounded text-muted m-0 p-2">
          <Button onClick={loginF}>authenticate 2nd user</Button>
          <em className="m-2">User: {usernameF.loading ? 'authenticating..': usernameF.value}</em>
        </p></Col>
      </Row>
      <Row className="mb-2"><Col className='col-auto p-0'>
        <p className="square bg-light rounded text-muted p-2">
            <Button disabled={!loggedIn} style={{zIndex: 0}} onClick={getComparison} variant='warning'>compare</Button>
            <em className="m-2">Similarity: {similarity.loading ? 'loading..': similarity.value}%</em>
        </p>
      </Col></Row>

      <Row>
        <Col className='col-auto'>
        <Card>
          <Card.Header className="text-center">
            <Button disabled={!loggedIn} style={{zIndex: 0}} onClick={getSimilarArtists} variant='info'>
              {similarArtists.loading ? 'loading..': 'similar artists'}</Button></Card.Header>
          <Collapse in={similarArtists.value != null}>
            <ListGroup variant="flush">
              {similarArtists.value != null && similarArtists.value.map(item => 
              <ListGroup.Item>{item}</ListGroup.Item>
              )}
            </ListGroup>
          </Collapse>
          <Card.Footer className="text-center text-muted">
            <em>{similarArtists.value != null && similarArtists.value.length} artists</em>
            </Card.Footer>
        </Card>
        </Col>
      </Row>

      </Col></Container>
  )
}

export default App;
