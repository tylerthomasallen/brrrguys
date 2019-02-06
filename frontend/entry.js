import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components';
require("regenerator-runtime");

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Container />, root);
});
