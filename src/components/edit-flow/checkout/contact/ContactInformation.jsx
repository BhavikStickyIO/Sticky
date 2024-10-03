import { Box, Typography } from "@mui/material";
import React from "react";
import { InputField } from "../../../../common";

const ContactInformation = () => {
  return (
    <div>
      <Box>
        <Typography variant="h5" sx={{ color: "#1B3E6F" }}>
          Contact
        </Typography>
        <InputField />
      </Box>
    </div>
  );
};

export default ContactInformation;
