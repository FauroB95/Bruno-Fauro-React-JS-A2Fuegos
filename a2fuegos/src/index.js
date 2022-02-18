import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; /*Se importo porque sino salia un error de Webpack*/
import 'bootstrap';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

