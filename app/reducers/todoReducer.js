import { combineReducers } from 'redux';
import { List } from 'immutable';

import { ADD_TODO_SUCCESS, RECEIVE_TODOS, REQUEST_TODOS, COMPLETE_TODO_SUCCESS, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/todo';

const { SHOW_ALL } = VisibilityFilters;

const initialState = {
  isProcessing: false,
  data: []
};

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
  case ADD_TODO_SUCCESS:
    return {
      isProcessing: false,
      data: [...state.data, action.todo]
    }
  case REQUEST_TODOS:
    return {
      ...state,
      isProcessing: true
    }
  case RECEIVE_TODOS:
    return {
      isProcessing: false,
      data: List(action.todos).toArray()
    }
  case COMPLETE_TODO_SUCCESS:
    return {
      isProcessing: false,
      data: [
        ...state.data.slice(0, action.index),
        Object.assign({}, action.todo),
        ...state.data.slice(action.index + 1)
      ]
    }
  default:
    return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
