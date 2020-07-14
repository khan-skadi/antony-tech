import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';

import Footer from './views/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App key="1" />, <Footer key="2" />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
