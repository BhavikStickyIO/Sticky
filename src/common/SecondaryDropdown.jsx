import React, { useState } from "react";
// import { CustomCard } from "../../common";
import { Select, MenuItem, Chip, FormControl, InputLabel } from "@mui/material";

const SecondaryDropdown = ({ label }) => {
  const [shippingMethod, setShippingMethod] = useState("");

  const shippingOptions = [
    { value: "free", label: "Free Delivery" },
    { value: "express", label: "Express Delivery" },
    { value: "standard", label: "Standard Delivery" },
  ];

  const handleChange = (event) => {
    setShippingMethod(event.target.value);
  };

  const handleClear = () => {
    setShippingMethod("");
  };

  return (
    <div>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>{label}</InputLabel>
        <Select value={shippingMethod} onChange={handleChange} label={label}>
          {shippingOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {shippingMethod && (
        <div style={{ marginTop: "10px" }}>
          <Chip
            label={
              <span style={{ paddingRight: "20px" }}>
                {
                  shippingOptions.find(
                    (option) => option.value === shippingMethod
                  )?.label
                }
              </span>
            }
            onDelete={handleClear}
            style={{
              backgroundColor: "#E0F7FA",
              borderRadius: "0px",
              marginRight: "50px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SecondaryDropdown;
