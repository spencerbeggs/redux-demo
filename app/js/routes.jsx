import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import { syncReduxAndRouter } from 'redux-simple-router';

import App from './containers/App';
import Admin from './containers/Admin'
import Home from './containers/Home';
import TodoApp from './containers/TodoApp';
import Login from './containers/Login';
import NotFound from './containers/NotFound';

const history = createHistory();

export default function getRoutes(store) {

  syncReduxAndRouter(history, store);

  function requireAuth(nextState, replaceState) {
    if (!store.getState().auth.token) {
      replaceState(null, `/login?nextPathname=${nextState.location.pathname}`);
    }
  }

  return (
    <Router history={history}>
      <Route component={App}>
        <Route path="/login" component={Login} />
        <Route path="/" component={Admin} onEnter={requireAuth}>
          <IndexRoute component={Home} />
          <Route path="/todo" component={TodoApp} />
        </Route>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  );
};
