import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import { store } from './app/store/configureStore';

export const customHistory = createBrowserHistory();


ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
        <Provider store={store}>
          <App />
        </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

