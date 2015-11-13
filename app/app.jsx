import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import getRoutes from './routes';

import createStore from './store/configureStore';

let store = createStore();

render(
  <Provider store={store}>
    <ReduxRouter>
      {getRoutes(store)}
    </ReduxRouter>
  </Provider>,
  document.getElementById('app')
);