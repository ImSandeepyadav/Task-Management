import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profilePicture: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfilePicture: (state, action) => {
      state.profilePicture = action.payload;
      localStorage.setItem('profilePicture', action.payload);
    },
    loadProfilePicture: (state) => {
      const storedPicture = localStorage.getItem('profilePicture');
      if (storedPicture) {
        state.profilePicture = storedPicture;
      }
    },
  },
});

export const { setProfilePicture, loadProfilePicture } = profileSlice.actions;
export default profileSlice.reducer;
