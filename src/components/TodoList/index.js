import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as todoService from 'business/todos/todo-service';
import * as todoActions from 'business/todos/todo-actions';

export class TodoList extends Component {
  state = {
    content: ''
  };
  renderTodos() {
    return this.props.todolist.map((todo, index) =>
      <li key={index}>{todo}</li>
    )
  }
  addTodo() {
    this.props.dispatch(todoActions.addTodo());
  }
  render() {
    return (
      <form action="javascript:void(0);">
        <ul>
          {this.renderTodos()}
        </ul>
        <input
         type="text"
         value={this.props.inputContent}
         onChange={e => this.props.dispatch(todoActions.setInput(e.target.value))} />
        <button type="submit" onClick={() => this.addTodo()}>Add todo</button>
      </form>
    );
  }
}

export default connect(state => ({
  todolist: todoService.getTodos(state),
  inputContent: todoService.getInputContent(state)
}))(TodoList);