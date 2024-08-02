import React from 'react';
import { Container, CssBaseline, Box, AppBar, Toolbar, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import ProgressScore from './components/ProgressScore';
import ProfilePicture from './components/ProfilePicture';
import SearchBar from './components/SearchBar';
import Notifications from './components/Notifications';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Container maxWidth="md" style={{ padding: '20px' }}>
        <CssBaseline />
        <AppBar position="static" style={{ marginBottom: '20px' }}>
          <Toolbar>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Task Management App
            </Typography>
            {isAuthenticated && <ProfilePicture />}
          </Toolbar>
        </AppBar>
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Routes>
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <>
                    <SearchBar style={{ marginBottom: '20px' }} />
                    <AddTaskForm style={{ marginBottom: '20px' }} />
                    <Filter style={{ marginBottom: '20px' }} />
                    <TaskList style={{ marginBottom: '20px' }} />
                    <ProgressScore style={{ marginBottom: '20px' }} />
                    <Notifications />
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
