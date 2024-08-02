import { createSlice } from '@reduxjs/toolkit';
import { addNotification } from '../notifications/notificationsSlice';

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    updateScore(state, action) {
      const { id, score } = action.payload;
      const task = state.tasks?.find(task => task.id === id);
      if (task) {
        task.score = score;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, setFilter, setSort, updateScore } = tasksSlice.actions;

export const addTaskWithNotification = (task) => (dispatch) => {
  dispatch(addTask(task));
  dispatch(addNotification({
    id: Date.now(),
    message: 'Task added successfully!',
    type: 'success',
  }));
};

export const editTaskWithNotification = (task) => (dispatch) => {
  dispatch(editTask(task));
  dispatch(addNotification({
    id: Date.now(),
    message: 'Task edited successfully!',
    type: 'info',
  }));
};

export const deleteTaskWithNotification = (taskId) => (dispatch) => {
  dispatch(deleteTask(taskId));
  dispatch(addNotification({
    id: Date.now(),
    message: 'Task deleted successfully!',
    type: 'warning',
  }));
};

export default tasksSlice.reducer;
