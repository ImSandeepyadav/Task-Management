import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { List } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'ALL') return true;
      return task.status === filter;
    })
    .filter((task) => task.title.toLowerCase().includes(searchQuery));

  return (
    <List style={{ display: 'flex', gap: '12px' }}>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </List>
  );
};

export default TaskList;
