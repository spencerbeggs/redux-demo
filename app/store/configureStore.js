import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createHashHistory';
import routes from '../routes';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import makeRouteHooksSafe from '../helpers/makeRouteHooksSafe';

const getRoutes = makeRouteHooksSafe(routes);

const finalCreateStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ getRoutes, createHistory }),
  applyMiddleware(createLogger())
)(createStore);

export default function configureStore(initialState) {

  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}