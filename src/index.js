import React from 'react';
import ReactDOM from 'react-dom';

//css
import 'jquery/dist/jquery.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootswatch/dist/minty/bootstrap.css';
import './index.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

