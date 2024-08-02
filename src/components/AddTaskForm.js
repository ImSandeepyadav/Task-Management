import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskWithNotification } from '../features/tasks/tasksSlice';
import { TextField, Button, Box, Typography } from '@mui/material';

const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('TO DO');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTaskWithNotification({ title, description, dueDate, status }));
    setTitle('');
    setDescription('');
    setDueDate('');
    setStatus('TO DO');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '100%',
        maxWidth: 600,
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f5f5f5',
      }}
      style={{marginBottom: '40px'}}
    >
      <Typography variant="h6" component="div" gutterBottom>
        Add New Task
      </Typography>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
        variant="outlined"
        sx={{
          marginBottom: '15px',
          '& .MuiInputLabel-root': { color: '#555' },
          '& .MuiOutlinedInput-root': { 
            borderColor: '#ddd',
            '&:hover fieldset': { borderColor: '#333' }
          },
        }}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        variant="outlined"
        sx={{
          marginBottom: '15px',
          '& .MuiInputLabel-root': { color: '#555' },
          '& .MuiOutlinedInput-root': { 
            borderColor: '#ddd',
            '&:hover fieldset': { borderColor: '#333' }
          },
        }}
      />
      <TextField
        type="date"
        label="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
        variant="outlined"
        sx={{
          marginBottom: '15px',
          '& .MuiInputLabel-root': { color: '#555' },
          '& .MuiOutlinedInput-root': { 
            borderColor: '#ddd',
            '&:hover fieldset': { borderColor: '#333' }
          },
        }}
      />
      <TextField
        label="Status"
        select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        SelectProps={{ native: true }}
        fullWidth
        variant="outlined"
        sx={{
          marginBottom: '15px',
          '& .MuiInputLabel-root': { color: '#555' },
          '& .MuiOutlinedInput-root': { 
            borderColor: '#ddd',
            '&:hover fieldset': { borderColor: '#333' }
          },
        }}
      >
        <option value="TO DO">To Do</option>
        <option value="IN PROGRESS">In Progress</option>
        <option value="DONE">Done</option>
      </TextField>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
        sx={{
          padding: '10px',
          borderRadius: '4px',
          backgroundColor: '#1976d2',
          '&:hover': { backgroundColor: '#115293' }
        }}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default AddTaskForm;
