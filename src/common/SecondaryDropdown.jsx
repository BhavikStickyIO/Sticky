import React, { useState } from "react";
import {
  Select,
  MenuItem,
  Chip,
  FormControl,
  InputLabel,
  Icon,
  Box,
} from "@mui/material";
import { DeleteForever } from "@mui/icons-material";

const SecondaryDropdown = ({
  label = "",
  name = "",
  // handleChange = () => {},
  options = [],
  isShipping,
  isPayment,
}) => {
  const [selectedOption, setSelectedOptions] = useState([]);
  console.log(selectedOption, "selectedOptuon");

  const handleChange = (event) => {
    setSelectedOptions(event.target.value);
    setSelectedOptions([value]);
  };

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
          {isShipping &&
            shippingOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}

          {isPayment &&
            options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Box display="flex" alignItems="center" gap={1}>
                  {option.icon && <img src={option.icon}/>}
                  {option.label}
                </Box>
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
                marginRight: "10px",
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default SecondaryDropdown;
