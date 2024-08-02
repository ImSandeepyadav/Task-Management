import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';
import { TextField, Button, Box, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    // Redirect to task management page or home after login
    navigate('/');
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <Card style={{ maxWidth: '400px', width: '100%', marginTop: '20px', borderRadius: "20px" }}>
      <CardContent>
        <Typography variant="h5" component="div" style={{ marginBottom: '20px' }}>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
          style={{ width: '100%' }}
        >
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            style={{ marginBottom: '10px' }}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginBottom: '10px' }}>
            Login
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleRegisterRedirect} fullWidth>
            Register
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
