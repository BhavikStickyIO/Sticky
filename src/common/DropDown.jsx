import React from "react";
import { Chip, FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const DropDown = ({
  label = "",
  options = [],
  name = "",
  handleChange = () => {},
  value = "",
  isChipShow = false
}) => {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 500, marginTop: "15px" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          name={name}
          label={label}
          onChange={handleChange}
          sx={{ textAlign: "start" }}
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
        <Chip
          label={value}
          onDelete={() => {}}
          sx={{
            backgroundColor: "#E0F7FA",
            borderRadius: "0px",
            marginRight: "50px",
          }}
        />
      )}
    </div>
  );
};

export default DropDown;
