import { Box, Card, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import {CONFIGURATIONS,OPTIONS } from '../constant/filter'

const Filter = () => {
  const [configChecks, setConfigChecks] = useState(
    CONFIGURATIONS.reduce((acc, config) => ({ ...acc, [config]: true }), {})
  );
  const [optionChecks, setOptionChecks] = useState(
    OPTIONS.reduce((acc, option) => ({ ...acc, [option]: true }), {})
  );

  const handleConfigChange = (event) => {
    setConfigChecks({
      ...configChecks,
      [event.target.name]: event.target.checked,
    });
  };

  const handleOptionChange = (event) => {
    setOptionChecks({
      ...optionChecks,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <Card  
    sx={{
      padding: 2,      
      width: '300px',  
      top:30,
      height: '90vh',
      position:'sticky',
      marginLeft:"60px",
      backgroundColor:'#EAEBED'
    }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Configurations
      </Typography>
      <FormGroup>
        {CONFIGURATIONS.map((config) => (
          <FormControlLabel
            key={config}
            control={
              <Checkbox
                checked={configChecks[config]}
                onChange={handleConfigChange}
                name={config}
              />
            }
            label={config}
          />
        ))}
      </FormGroup>
  
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Options
      </Typography>
      <FormGroup>
        {OPTIONS.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={optionChecks[option]}
                onChange={handleOptionChange}
                name={option}
              />
            }
            label={option}
          />
        ))}
      </FormGroup>
  </Card>
  
  
  )
}

export default Filter
