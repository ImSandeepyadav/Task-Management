import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/auth/authSlice';
import { TextField, Button, Box, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(registerUser({ name, email, phone, password }));
      navigate('/login');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <Card style={{ maxWidth: '400px', width: '100%', marginTop: '20px', borderRadius: "20px" }}>
      <CardContent>
        <Typography variant="h5" component="div" style={{ marginBottom: '20px' }}>
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleRegister}
          style={{ width: '100%' }}
        >
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            style={{ marginBottom: '10px' }}
          />
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
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            fullWidth
            style={{ marginBottom: '10px' }}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Register
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
