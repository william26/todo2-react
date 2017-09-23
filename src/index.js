import React, {Component} from 'react';
import reactDom from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import TodoList from 'components/TodoList';

import todoReducer from 'business/todos/todo-reducer';

const rootReducer = combineReducers({
  todos: todoReducer
});

const store = createStore(rootReducer);

reactDom.render((
  <Provider store={store}>
    <TodoList />
  </Provider>
), document.getElementById('root'));