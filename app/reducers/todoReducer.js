import { combineReducers } from 'redux';
import { ADD_TODO_SUCCESS, RECEIVE_TODOS, COMPLETE_TODO_SUCCESS, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/todo';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
  case ADD_TODO_SUCCESS:
    return [...state, action.todo];
  case RECEIVE_TODOS:
    return action.todos.map((todo) => {
      return Object.assign({}, todo);
    });
  case COMPLETE_TODO_SUCCESS:
    return [
      ...state.slice(0, action.index),
      Object.assign({}, action.todo),
      ...state.slice(action.index + 1)
    ];
  default:
    return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
