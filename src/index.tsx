import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

export const customHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

