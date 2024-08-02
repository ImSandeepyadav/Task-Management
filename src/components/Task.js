import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskWithNotification, updateScore } from '../features/tasks/tasksSlice';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import Deadline from './Deadline';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTaskWithNotification(task.id));
  };

  const handleComplete = () => {
    const now = new Date();
    const dueDate = new Date(task.dueDate);
    if (now <= dueDate) {
      dispatch(updateScore(1));
    } else {
      dispatch(updateScore(-0.5));
    }
    handleDelete();
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        margin: '40px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        transition: '0.3s ease-in-out', 
        '&:hover': { 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' 
        } 
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
          Due in: <Deadline dueDate={task.dueDate} />
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
          Status: {task.status}
        </Typography>
        <Box 
          display="flex" 
          justifyContent="space-between" 
          marginTop="20px"
          gap='10px'
        >
          <Button 
            variant="contained" 
            color="success" 
            onClick={handleComplete} 
            sx={{ 
              backgroundColor: '#4caf50', 
              '&:hover': { 
                backgroundColor: '#388e3c' 
              } 
            }}
          >
            Complete
          </Button>
          <Button 
            variant="contained" 
            color="error" 
            onClick={handleDelete} 
            sx={{ 
              backgroundColor: '#f44336', 
              '&:hover': { 
                backgroundColor: '#d32f2f' 
              } 
            }}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Task;
