import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import { DropDown, SwitchToggle } from "../common";
import { EDIT_FLOW } from "../constant/flow";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        padding: 5,
        width: 400,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
      role="presentation"
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ fontSize: 30, color: "#1B3E6F", marginBottom: 5 }}>
          Checkout Settings
        </Typography>

        <DropDown
          style={{ width: "100%", marginBottom: 2 }}
          label="Checkout Page URL"
          options={EDIT_FLOW.checkout_page_url}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography variant="h6">Add Order Bump</Typography>
          <SwitchToggle style={{ width: "50px" }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography variant="h6">Opt-in Box Pre Selected</Typography>
          <SwitchToggle style={{ width: "50px" }} />
        </Box>

        <TextField
          sx={{ marginTop: 2 }}
          fullWidth
          id="outlined-basic"
          label="Please add order bump text to display on checkout"
          variant="outlined"
        />

        <DropDown
          style={{ width: "100%", marginTop: 4 }}
          label="Select Product for Order Bump"
          options={EDIT_FLOW.checkout_page_url}
        />
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", paddingTop: 2 }}
      >
        <Button
          sx={{ width: "48%", color: "text.primary" }}
          onClick={toggleDrawer(false)}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#1B3E6F", width: "48%" }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0, 32, 81, 0.8)",
          },
        }}
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
