import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Link from "@mui/material/Link";
import { DropDown } from "../../../common";
import { CHECKOUT } from "../../../constant/flow";
// import { useFunnelContext } from "../../../context/FunnelContext";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "none", boxShadow: "none" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              gap: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              noWrap
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Edit Flows
            </Typography>
            <DropDown
              name="checkout_sites"
              options={CHECKOUT.checkout_sites}
              style={{ width: "390px" }}
              label="checkout.myappstore.com"
              // handleChange={handlePrimaryDropdown}
              // value={dropdownValues?.checkout_sites}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Link href="#">ADD PAGES</Link>
            <Link href="#">FUNNEL TEMPLATES</Link>
            <Link href="#">DOMAIN SETTINGS</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
