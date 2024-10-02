import React, { useState } from "react";
import { Select, MenuItem, Chip, FormControl, InputLabel } from "@mui/material";

const SecondaryDropdown = ({
  label,
  isMulti = false,
  options = [],
  isShipping,
  isPayment,
}) => {
  const [selectedOption, setSelectedOptions] = useState([]);
  console.log(selectedOption, "selectedOptuon");

  

  const handleChange = (event) => {
    setSelectedOptions(event.target.value);
    setSelectedOptions([value]); // Single select stores as array with one value
  };

  const handleClear = (optionToDelete) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((option) => option !== optionToDelete)
    );
  };

  // Determine options based on the type (shipping or payment)
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
        >
          {/* Conditionally rendering shipping or payment options */}
          {isShipping &&
            shippingOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}

          {isPayment &&
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
              onDelete={() => {}}
              sx={{
                backgroundColor: "#E0F7FA",
                borderRadius: "0px",
                marginRight: "50px",
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default SecondaryDropdown;