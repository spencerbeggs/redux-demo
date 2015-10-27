import todoApi from '../api/todoApi';

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const COMPLETE_TODO_REQUEST = 'COMPLETE_TODO_REQUEST';
export const COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS';

export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodoRequest() {
  return { type: ADD_TODO_REQUEST };
}

export function addTodoSuccess(todo) {
  return { type: ADD_TODO_SUCCESS, todo };
}

export function addTodo(text) {

  return function(dispatch) {

    dispatch(addTodoRequest());

    return todoApi.add(text)
      .then((todo) => {
        dispatch(addTodoSuccess(todo));
      });

  };

}

export function requestTodos() {
  return { type: REQUEST_TODOS };
}

export function receiveTodos(todos) {
  return { type: RECEIVE_TODOS, todos };
}

export function fetchTodos() {

  return function(dispatch) {

    dispatch(requestTodos());

    return todoApi.get()
      .then((todos) => {
        dispatch(receiveTodos(todos));
      });

  };

}

export function completeTodoRequest() {
  return { type: COMPLETE_TODO_REQUEST };
}

export function completeTodoSuccess(index, todo) {
  return { type: COMPLETE_TODO_SUCCESS, index, todo };
}

export function completeTodo(index) {

  return function(dispatch) {

    dispatch(completeTodoRequest());

    return todoApi.complete(index)
      .then((todo) => {
        dispatch(completeTodoSuccess(index, todo));
      });

  };

}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
