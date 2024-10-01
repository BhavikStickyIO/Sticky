import React, { useState } from "react";
import { CustomCard } from "../../common";
// import { Select, MenuItem, Chip, FormControl, InputLabel } from "@mui/material";
import SecondaryDropdown from "../../common/SecondaryDropdown";

const ShippingInformation = () => {
  // const [shippingMethod, setShippingMethod] = useState('');

  // const shippingOptions = [
  //   { value: 'free', label: 'Free Delivery' },
  //   { value: 'express', label: 'Express Delivery' },
  //   { value: 'standard', label: 'Standard Delivery' },
  // ];

  // const handleChange = (event) => {
  //   setShippingMethod(event.target.value);
  // };

  // const handleClear = () => {
  //   setShippingMethod('');
  // };

  return (
    <CustomCard title="Shipping">
      {/* <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Pick Shipping Methods</InputLabel>
        <Select
          value={shippingMethod}
          onChange={handleChange}
          label="Pick Shipping Methods"
        >
          {shippingOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}

      {/* {shippingMethod && (
        <div style={{ marginTop: '10px' }}>
          <Chip
            label={
              <span style={{ paddingRight: '20px' }}> 
                {shippingOptions.find(option => option.value === shippingMethod)?.label}
              </span>
            }
            onDelete={handleClear}
            style={{ backgroundColor: '#E0F7FA', borderRadius: '0px', marginRight: '50px' }}
          />
        </div>
      )} */}
      <SecondaryDropdown label="Shipping Methods"/>
    </CustomCard>
  );
};

export default ShippingInformation;
