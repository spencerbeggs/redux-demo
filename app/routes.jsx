import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import RequireAuth from './containers/RequireAuth'
import Home from './containers/Home';
import TodoApp from './containers/TodoApp';
import Login from './containers/Login';

export default function getRoutes({ dispatch, getState }) {

  return (
    <Route component={App}>
      <Route path="/login" component={Login} />
      <Route path="/" component={RequireAuth}>
        <IndexRoute component={Home} />
        <Route path="/todo" component={TodoApp} />
      </Route>
    </Route>
  );
};
