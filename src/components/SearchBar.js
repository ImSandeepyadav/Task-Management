import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/search/searchSlice';
import { TextField } from '@mui/material';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <TextField
      label="Search Tasks"
      variant="outlined"
      fullWidth
      onChange={handleSearchChange}
      style={{ marginBottom: '20px' }}
    />
  );
};

export default SearchBar;
