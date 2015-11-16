import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import todo from './todoReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  auth,
  todo,
  router
});

export default rootReducer;