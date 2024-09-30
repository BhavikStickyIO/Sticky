import React from 'react'
import { TextField, Button, FormControl, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const DropDown = ({ DropDownName }) => {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 500, marginTop: '15px' }}>
        <InputLabel id="demo-simple-select-label">{DropDownName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={DropDownName}
          onChange={handleChange}
          sx={{ textAlign: 'start' }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default DropDown
