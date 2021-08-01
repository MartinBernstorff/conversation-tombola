import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//create a new Airtable object in React 
const DATA = []

ReactDOM.render(
  <App tasks={DATA} />,
  document.getElementById('root')
);