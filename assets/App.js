import React, { useState, useEffect } from 'react';
import { request, interval } from './Controller';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade'

function App() {

  // - Constants -

  // onsite
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const [session, setSession] = useState(null);
  const [stateA, setStateA] = useState(null);
  const [stateF, setStateF] = useState(null);
  const [usernameA, setUsernameA] = useState(null);
  const [usernameF, setUsernameF] = useState(null);
  const [similarity, setSimilarity] = useState(null);
  const [popularityA, setPopularityA] = useState(null);
  const [popularityF, setPopularityF] = useState(null);
  const [compareActive, setCompareActive] = useState('disabled');
  // offsite
  const [getUserA, setGetUserA] = useState(null);
  const [getUserF, setGetUserF] = useState(null);
  const [urlA, setUrlA] = useState(null);
  const [urlF, setUrlF] = useState(null);

  // - Initialization -

  useEffect(() => {
    // session
    request('/app',{ 
      'session': setSession,
      'stateA': setStateA,
      'stateF': setStateF,
      'urlA': setUrlA,
      'urlF': setUrlF,
    }, {})
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
    console.log('render')
    // logging in A
    if ((usernameA != null && usernameA != 'none') && getUserA != null) {
      clearInterval(getUserA)
      setGetUserA(null) // able to log in again
    }
    // logging in F
    if ((usernameF != null && usernameF != 'none') && getUserF != null) {
      clearInterval(getUserF)
      setGetUserF(null)
    }
    if ((usernameA != null && usernameA != 'none') &&
        (usernameF != null && usernameF != 'none')) {
      setCompareActive('')
    }
  });

  // - Input Actions -

  function loginA() {
    if (urlA != null) {
      window.open(urlA, '_blank')
    }
    if (getUserA == null) { // log in once at a time
      setGetUserA(interval(() => {
        request('/app/user', {'user': setUsernameA}, { session: session, state: stateA })
      }, 1500, 10))
    }
  }

  function loginF() {
    if (urlF != null) {
      window.open(urlF, '_blank')
    }
    if (getUserF == null) {
      setGetUserF(interval(() => {
        request('/app/user', {'user': setUsernameF}, { session: session, state: stateF })
      }, 1500, 10))
    }
  }

  function compare() {
    if ((usernameA != null && usernameA != 'none') &&
        (usernameF != null && usernameF != 'none')) {
      request('/app/compare', 
      {'similarity': setSimilarity, 'popularityA': setPopularityA, 'popularityF': setPopularityF},
      {session: session}
      )
    }
  }

  // - App View -

  return (
    <Container fluid className='d-flex vh-100'>
      { visible == true &&
        <Fade in={loading} className='position-fixed' style={{transition:"opacity .35s linear", backgroundColor:"white", zIndex: 1}}>
          <p className='vw-100 vh-100'></p></Fade>
      } <Col className='p-3'>
      <Row><h4 className="square bg-light rounded text-muted mb-2 p-3">Session Identifier: {session}</h4></Row>
      <Row>
        <Col className='col-auto'>
        <p className="square bg-light rounded text-muted mb-2 p-2">
          <Button onClick={loginA}>authenticate 1st user</Button>
          <em className="m-2">User: {usernameA}</em>
        </p></Col>
      </Row>
      <Row>
        <Col className='col-auto'>
        <p className="square bg-light rounded text-muted mb-2 p-2">
          <Button onClick={loginF}>authenticate 2nd user</Button>
          <em className="m-2">User: {usernameF}</em>
        </p></Col>
      </Row>
      <Row>
      <Col className='col-auto'>
      <p className="square bg-light rounded text-muted mb-2 p-2">
          <Button className={'' + compareActive} style={{zIndex: 0}} onClick={compare} variant='warning'>compare</Button>
          <em className="m-2">Similarity: {similarity}% | 1st Popularity: {popularityA} | 2nd Popularity: {popularityF}</em>
        </p></Col>
      </Row>
      </Col></Container>
  )
}

export default App;
