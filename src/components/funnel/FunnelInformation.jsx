import React, { useState } from 'react';
import { TextField, Button, FormControl, Box, Typography } from '@mui/material';
import { CustomCard, CardSectionHeader, InputField } from '../../common';
import { useTheme } from '@mui/material/styles';

import DropDown from '../../common/DropDown';
import Divider from '@mui/material/Divider';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
//Dropdown
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];



const FunnelInformation = () => {
  const [name, setName] = React.useState('');
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([names[0]]);

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   console.log("Event", event.target)
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     value
  //   );
  // };
  const [formData, setFormData] = useState({
    funnelName: '',
    funnelDescription: '',
  });

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const [age, setAge] = React.useState('');



  return (
    <>
      <CustomCard title="Funnel Information">
        <InputField label="Name" />
        <InputField label="Description" rows={4} defaultValue="Description"/>
        <DropDown DropDownName="Default Channel" />
        <DropDown DropDownName="Expense Assumption Profile"/>
        <InputField label="Daily Subscription Limit" />
        <DropDown DropDownName="Max Grace Period" />
        <Divider sx={{ margin: '20px' }} />
        <CardSectionHeader subTitle="Shopify Configuration"  />
        <DropDown DropDownName="Sticky Checkout Domain" />
        <DropDown DropDownName="Traffic Source" />
        <InputField label="Shopify Store URL" />
        <InputField label="Store Name" />
        <InputField label="Shopify API Token" />
      </CustomCard>
    </>

  );
};

export default FunnelInformation;
