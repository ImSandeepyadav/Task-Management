import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score += 1;
    },
    decrementScore: (state) => {
      state.score -= 0.5;
    },
  },
});

export const { incrementScore, decrementScore } = progressSlice.actions;
export default progressSlice.reducer;
