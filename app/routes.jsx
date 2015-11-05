import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import TodoApp from './containers/TodoApp';
import Login from './containers/Login';

export default function getRoutes({ dispatch, getState }) {

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/todo" component={TodoApp} />
    </Route>
  );
};
