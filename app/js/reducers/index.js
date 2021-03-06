import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';

import todo from './todoReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  auth,
  todo,
  routing
});

export default rootReducer;
