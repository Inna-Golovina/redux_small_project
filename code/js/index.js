import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allRedusers from './redusers';
import WebPage from './components/WebPage';

const store = createStore (allRedusers);

ReactDOM.render(
  <Provider store={store}>
    <WebPage />
  </Provider>,
  document.getElementById('fieldToShow')
);
