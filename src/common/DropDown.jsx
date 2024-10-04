import React from "react";
import { Box, Chip, FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const DropDown = ({
  label = "",
  options = [],
  name = "",
  handleChange = () => { },
  value = "",
  isChipShow = false,
  MenuProps,
  multiple
}) => {

  const handleClose = () => {
    handleChange({ target: { name, value: "" } });
  };
  return (
    <Box>
      <FormControl sx={{ width: "100%",marginTop: "15px" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          name={name}
          label={label}
          onChange={handleChange}
          sx={{ textAlign: "start" }}
          MenuProps={MenuProps}
          multiple={multiple} 
        >
          {options.length > 0 &&
            options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {isChipShow && value && (
        <Box sx={{ mt: 2 }}>
          <Chip
            label={value}
            onDelete={handleClose}
            sx={{
              backgroundColor: "#E0F7FA",
              borderRadius: "0px",
              marginRight: "50px",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default DropDown;
