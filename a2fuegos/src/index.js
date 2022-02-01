import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; /*Se importo porque sino salia un error de Webpack*/
import 'bootstrap';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

