import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import todo from './todoReducer';

const rootReducer = combineReducers({
  todo,
  router
});

export default rootReducer;