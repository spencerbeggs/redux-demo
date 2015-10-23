import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions/todo';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class TodoApp extends Component {
  render() {

    const { dispatch, visibleTodos, visibilityFilter } = this.props;

    return (
      <Row>
        <Col xs={8}>
          <AddTodo
            onAddClick={text =>
              dispatch(addTodo(text))
            } />
          <TodoList
            todos={visibleTodos}
            onTodoClick={index =>
              dispatch(completeTodo(index))
            } />
          <Footer
            filter={visibilityFilter}
            onFilterChange={nextFilter  =>
              dispatch(setVisibilityFilter(nextFilter))
            } />
        </Col>
      </Row>
    );
  }
}

TodoApp.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

function selectTodos(todos, filter) {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos;
  case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
  case VisibilityFilters.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
  }
}

function select(state) {
  const todo = state.todo;
  return {
    visibleTodos: selectTodos(todo.todos, todo.visibilityFilter),
    visibilityFilter: todo.visibilityFilter
  };
}

export default connect(select)(TodoApp);