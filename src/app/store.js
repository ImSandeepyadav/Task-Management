import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';
import filterReducer from '../features/filter/filterSlice';
import progressReducer from '../features/progress/progressSlice';
import authReducer from '../features/auth/authSlice';
import profileReducer from '../features/profile/profileSlice';
import searchReducer from '../features/search/searchSlice';
import notificationsReducer from '../features/notifications/notificationsSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
    progress: progressReducer,
    auth: authReducer,
    profile: profileReducer,
    search: searchReducer,
    notifications: notificationsReducer,
  },
});
