import React, { useState } from 'react';
import { Card, Tabs, Tab } from '@mui/material';
import { useFunnelContext } from '../context/FunnelContext';

const LeftSidebar = () => {
  const { value, setValue } = useFunnelContext()
  const handleChange = (event, newValue) => {
    setValue((prev) => ({
      ...prev,
      sliderFunnel: newValue
    }));
  };

  return (
    <Card
      sx={{
        height: '35vh',
        width: '330px',
        boxShadow: 3,
        position: 'sticky',
        top: 70,
        bgcolor: 'background.paper',
        justifyContent: 'flex-start',
        marginRight: "60px"
      }}
    >
      <Tabs
        orientation="vertical"
        aria-label="Vertical tabs example"
        value={value.sliderFunnel}
        onChange={handleChange}
        sx={{
          textAlign: 'left',
          '& .MuiTab-root': {
            textAlign: 'left',
            alignItems: 'flex-start',
          },
          '& .Mui-selected': {
            color: '#40B4E2',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#40B4E2',
            width: '3px',
            left: 0,
          },
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px'
        }}
      >
        <Tab label="FUNNEL INFORMATION" />
        <Tab label="PAYMENT INFORMATION" />
        <Tab label="SHIPPING" />
        <Tab label="THIRD-PARTY PROVIDERS" />
      </Tabs>
    </Card>
  );
};

export default LeftSidebar;
