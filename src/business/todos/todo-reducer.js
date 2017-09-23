import {createReducer} from 'redux-act';

import {
  addTodo,
  setInput
} from './todo-actions';

const initialState = {
  list: [],
  inputContent: ''
};

export default createReducer({
  [addTodo]: state => state.inputContent === '' ? state : {
    ...state,
    list: [
      ...state.list,
      state.inputContent
    ],
    inputContent: ''
  },
  [setInput]: (state, content) => ({
    ...state,
    inputContent: content
  })
}, initialState)