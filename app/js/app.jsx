import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import getRoutes from './routes';

import createStore from './store/configureStore';

const store = createStore();

render(
  <Provider store={store}>
    {getRoutes(store)}
  </Provider>,
  document.getElementById('app')
);