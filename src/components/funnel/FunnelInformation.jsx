import React, { useState } from 'react';
import { TextField, Button, FormControl, Box, Typography } from '@mui/material';
import {CustomCard} from '../../common'; // Import the CustomCard component

const FunnelInformation = () => {
  const [formData, setFormData] = useState({
    funnelName: '',
    funnelDescription: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Funnel Form Data:', formData);
  };

  return (
    <CustomCard title="Create Funnel">
      <FormControl fullWidth>
        <TextField
          label="Funnel Name"
          variant="outlined"
          name="funnelName"
          value={formData.funnelName}
          onChange={handleChange}
          margin="normal"
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          label="Funnel Description"
          variant="outlined"
          name="funnelDescription"
          value={formData.funnelDescription}
          onChange={handleChange}
          margin="normal"
        />
      </FormControl>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </CustomCard>
  );
};

export default FunnelInformation;
