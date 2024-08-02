import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const ProgressScore = () => {
  const score = useSelector((state) => state.progress.score);

  return (
    <Typography variant="h6" style={{ marginBottom: '20px' }}>
      Progress Score: {score}
    </Typography>
  );
};

export default ProgressScore;
