import React, { useState } from 'react';
import { Card, Tabs, Tab } from '@mui/material';

const LeftSidebar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card
      sx={{
        height: '35vh',
        width: 250,
        boxShadow: 3,
        position: 'sticky',
        top: 30,
        bgcolor: 'background.paper',
        justifyContent: 'flex-start',
        marginRight: "60px"
      }}
    >
      <Tabs
        orientation="vertical"
        aria-label="Vertical tabs example"
        value={value}
        onChange={handleChange}
        sx={{
          minWidth: 200,
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
            left: 0,           },
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
