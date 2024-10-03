import { Box, Typography } from "@mui/material";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Divider } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Navmenus = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}>
        <SettingsIcon />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "black", borderWidth: 1 }}
        />
        <ModeEditIcon />
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          color: "#1B3E6F",
        }}
        variant="h4"
      >
        Checkout
      </Typography>
    </div>
  );
};

export default Navmenus;
