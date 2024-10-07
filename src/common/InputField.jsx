import React from "react";
import { TextField, Button, FormControl, Box, Typography } from "@mui/material";

const InputField = ({
  label,
  rows,
  placeholder = "",
  style = { width: 500, margin: "auto", marginTop: "15px" },
  size = "",
}) => {
  const [name, setName] = React.useState("");
  return (
    <div>
      <Box component="form" style={style} noValidate autoComplete="off">
        <TextField
          fullWidth
          id="outlined-controlled"
          label={label}
          value={name}
          rows={rows}
          size={size}
          placeholder={placeholder}
          multiline
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </Box>
    </div>
  );
};

export default InputField;
