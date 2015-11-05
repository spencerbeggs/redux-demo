import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import 'bootstrap/dist/css/bootstrap.css';

import createStore from './store/configureStore';

let store = createStore();

render(
  <Provider store={store}>
    <ReduxRouter />
  </Provider>,
  document.getElementById('app')
);