// src/components/TodoItem.js

import React, { useCallback, useState } from 'react';
import { ListItem, ListItemText, IconButton, TextField, Checkbox } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.todo);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleSave = useCallback(() => {
    setIsEditing(false);
    onUpdate({ ...todo, todo: editText });
  }, [editText, onUpdate, todo]);

  const handleCheckboxChange = useCallback(() => {
    onUpdate({ ...todo, completed: !todo.completed });
  }, [onUpdate, todo]);

  return (
    <ListItem>
      <Checkbox checked={todo.completed} onChange={handleCheckboxChange} />
      {isEditing ? (
        <TextField
          value={editText}
          onChange={e => setEditText(e.target.value)}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <ListItemText primary={todo.todo} />
      )}
      <IconButton onClick={handleEdit}><Edit /></IconButton>
      <IconButton onClick={() => onDelete(todo.id)}><Delete /></IconButton>
    </ListItem>
  );
};

export default TodoItem;
