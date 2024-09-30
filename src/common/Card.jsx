import React from 'react';
import { Card, CardContent, CardHeader, Box } from '@mui/material';

const CustomCard = ({ title, children }) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: '20px auto',
        boxShadow: 3,
        borderRadius: 3,
        padding: 2,
      }}
    >
      {title && (
        <CardHeader
          title={title}
          sx={{
            textAlign: 'center',
            fontSize: '1.5rem',
          }}
        />
      )}
      <CardContent>
        <Box>{children}</Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
