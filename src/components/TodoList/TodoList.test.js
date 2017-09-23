import React from 'react';
import {mount} from 'enzyme';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

describe('TodoList component', () => {
  let store;
  let TodoList;
  let rendered;

  beforeEach(() => {
    store = createStore(combineReducers({
      todos: require('business/todos/todo-reducer').default
    }));

    TodoList = require('./index.js').default;
    rendered = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  });

  function addTodo(rendered, todoName) {
    rendered.find('input').node.value = todoName;
    rendered.find('input').simulate('change');
    rendered.find('button').simulate('click');
  }

  it('should allow the user to add a todo', () => {
    expect(rendered.find('ul').text()).toEqual('');

    addTodo(rendered, 'my first todo');
    addTodo(rendered, 'my second todo');

    expect(rendered.find('ul li').map(e => e.text())).toEqual([
      'my first todo',
      'my second todo'
    ])
  });

  it('shouldnt add empty todos', () => {
    addTodo(rendered, '');

    expect(rendered.find('ul').text()).toEqual('');
  });
});