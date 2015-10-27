import Promise from 'bluebird';

const TODOS = [
  { text: 'Hello React', completed: false },
  { text: 'Hello Redux', completed: false }
];

export default {

  add(text) {
    return Promise.delay(1000)
      .then(() => {
        let todo = { text: text, completed: false };
        TODOS.push(todo);
        return todo;
      });
  },

  get() {
    return Promise.delay(2000)
      .then(() => {
        return TODOS;
      });
  },

  complete(index) {
    return Promise.delay(1000)
      .then(() => {
        let todo = TODOS[index];
        todo.completed = true;
        return todo;
      });
  }
};
