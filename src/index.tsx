import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import './index.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router> */}
      <HashRouter basename="/">
        <App />
      </HashRouter>
      {/* </Router> */}
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
