import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/Yelp-folder/css/index.css'

import Connector from './Yelp-folder/connectors';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Connector/>
  </React.StrictMode>,
  document.getElementById('root')
);
