import React from 'react';
import { Container, Typography } from '@mui/material';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom align="center" sx={{ mt: 4 }}>Todo App</Typography>
      <ErrorBoundary>
        <AddTodo />
        <TodoList />
      </ErrorBoundary>
    </Container>
  );
};

export default App;
