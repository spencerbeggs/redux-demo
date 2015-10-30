import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import TodoApp from './TodoApp';

export default function getRoutes({ dispatch, getState }) {

  const onEnter = function(nextState, replaceState) {
    console.log(getState());
  };

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/todo" component={TodoApp} onEnter={onEnter} />
    </Route>
  );
};
