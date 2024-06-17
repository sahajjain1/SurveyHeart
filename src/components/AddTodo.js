import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { TextField, Button, Box } from '@mui/material';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({ todo: text.trim(), completed: false }));
      setText('');
    }
  }, [dispatch, text]);

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" alignItems="center" gap={2}>
      <TextField
        value={text}
        onChange={e => setText(e.target.value)}
        label="Add Todo"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">Add</Button>
    </Box>
  );
};

export default AddTodo;
