import React, { useState } from "react";
import { Select, MenuItem, Chip, FormControl, InputLabel } from "@mui/material";

const SecondaryDropdown = ({
  label,
  options = [],
  isShipping,
  isPayment,
  isCoupon,
  isReturn,
  MenuProps,
}) => {
  const [selectedOption, setSelectedOptions] = useState([]);
  console.log(options, "options");


  const handleChange = (event) => {
    console.log('event', event)
    setSelectedOptions(event.target.value);
    setSelectedOptions([value]); 
  };

  const handleClear = (optionToDelete) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((option) => option !== optionToDelete)
    );
  };

  const currentOptions = isShipping ? shippingOptions : options;

  
  return (
    <div>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>{label}</InputLabel>
        <Select
          multiple
          value={selectedOption}
          onChange={handleChange}
          label={label}
          MenuProps={MenuProps}
        >
          {isShipping &&
            shippingOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}

          {(isPayment || isCoupon || isReturn) &&
            options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {selectedOption.length > 0 && (
        <>
          {selectedOption?.map((chipTitle) => (
            <Chip
              label={chipTitle}
              onDelete={() => handleClear(chipTitle)}
              sx={{
                backgroundColor: "#E0F7FA",
                borderRadius: "0px",
                marginRight: "10px",
                marginBottom:"10px"
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default SecondaryDropdown;