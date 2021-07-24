import React, { useState, useEffect } from 'react';
import Controller from './Controller'
import { request } from './Controller';
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
    request('/app/', setText, {count: count})
    count++;
  }

  return (
    <Container>
      <Button onClick={handleSubmit} variant="primary">button {text}</Button>
    </Container>
  )
}

export default App;
