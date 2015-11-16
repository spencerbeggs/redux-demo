import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Admin from './containers/Admin'
import Home from './containers/Home';
import TodoApp from './containers/TodoApp';
import Login from './containers/Login';
import NotFound from './containers/NotFound';

export default function getRoutes({ dispatch, getState }) {

  function requireAuth(nextState, replaceState) {
    if (!getState().auth.token) {
      replaceState(null, `/login?nextPathname=${nextState.location.pathname}`);
    }
  }

  return (
    <Route component={App}>
      <Route path="/login" component={Login} />
      <Route path="/" component={Admin} onEnter={requireAuth}>
        <IndexRoute component={Home} />
        <Route path="/todo" component={TodoApp} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  );
};
