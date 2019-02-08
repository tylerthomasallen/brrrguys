import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store';
require("regenerator-runtime");

let store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
