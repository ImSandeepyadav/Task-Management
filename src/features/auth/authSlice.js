import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginUser: (state, action) => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === action.payload.email && storedUser.password === btoa(action.payload.password)) {
        state.isAuthenticated = true;
        state.user = storedUser;
      }
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
