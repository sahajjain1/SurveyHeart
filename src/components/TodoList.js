// src/components/TodoList.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, deleteTodo, updateTodo } from '../redux/actions';
import TodoItem from './TodoItem';
import { List, Typography } from '@mui/material';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = todo => {
    dispatch(updateTodo(todo));
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>Todos</Typography>
      <List>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} onUpdate={handleUpdate} />
        ))}
      </List>
    </>
  );
};

export default TodoList;
