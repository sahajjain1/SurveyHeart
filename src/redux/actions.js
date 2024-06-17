// src/redux/actions.js

import axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const API_URL = 'https://dummyjson.com/todos';

export const fetchTodos = () => async dispatch => {
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: FETCH_TODOS, payload: response.data.todos });
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addTodo = todo => dispatch => {
  const newTodo = {
    ...todo,
    id: Math.random().toString(36).substr(2, 9),
  };
  dispatch({ type: ADD_TODO, payload: newTodo });
};

export const updateTodo = todo => dispatch => {
  dispatch({ type: UPDATE_TODO, payload: todo });
};

export const deleteTodo = id => dispatch => {
  dispatch({ type: DELETE_TODO, payload: id });
};
