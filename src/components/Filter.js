import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/filter/filterSlice';
import { FormControl, InputLabel, Select, MenuItem, Typography, Box } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box 
      sx={{ 
        width: '100%', 
        maxWidth: 400, 
        marginBottom: '40px', 
        padding: '10px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        backgroundColor: '#f9f9f9'
      }}
    >
      <Typography variant="h6" component="div" gutterBottom>
        Filter Tasks
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="filter-select-label"></InputLabel>
        <Select
          labelId="filter-select-label"
          value={filter}
          onChange={handleFilterChange}
          sx={{ 
            borderRadius: '4px', 
            backgroundColor: '#ffffff', 
            '& .MuiSelect-select': { 
              padding: '10px' 
            }, 
            '& .MuiOutlinedInput-root': { 
              '& fieldset': { 
                borderColor: '#cccccc' 
              }, 
              '&:hover fieldset': { 
                borderColor: '#888888' 
              } 
            } 
          }}
        >
          <MenuItem value="ALL">All</MenuItem>
          <MenuItem value="TO DO">To Do</MenuItem>
          <MenuItem value="IN PROGRESS">In Progress</MenuItem>
          <MenuItem value="DONE">Done</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
