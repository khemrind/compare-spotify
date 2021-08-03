import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// sequential override applies for stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('react-app'));