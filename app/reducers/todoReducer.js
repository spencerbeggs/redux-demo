import { combineReducers } from 'redux';
import { List, Map } from 'immutable';

import { TODO_REQUEST, ADD_TODO_SUCCESS, RECEIVE_TODOS, COMPLETE_TODO_SUCCESS, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/todo';

const { SHOW_ALL } = VisibilityFilters;

const initialState = Map({
  isProcessing: false,
  todos: List(),
});

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function todos(state = initialState, action) {
  switch (action.type) {
  case TODO_REQUEST:
    return state.set('isProcessing', true);
  case ADD_TODO_SUCCESS:
    return state.merge({
      isProcessing: false,
      todos: state.get("todos").push(action.todo)
    });
  case RECEIVE_TODOS:
    return state.merge({
      isProcessing: false,
      todos: List(action.todos)
    });
  case COMPLETE_TODO_SUCCESS:
    return state.merge({
      isProcessing: false,
      todos: state.get('todos').set(action.index, action.todo)
    });
  default:
    return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
