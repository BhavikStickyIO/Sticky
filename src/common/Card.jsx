import React from 'react';
import { Card, CardContent, CardHeader, Box, Typography } from '@mui/material';
import CardSectionHeader from './CardSectionHeader'
const CustomCard = ({ title, children, subTitle = "" }) => {
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
      <CardSectionHeader title={title} subTitle={subTitle} marginLeft='1.2rem' />
      <CardContent> 
        <Box>{children}</Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
