import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { DropDown } from "../../../common";
import { CHECKOUT } from "../../../constant/flow";
// import { useFunnelContext } from "../../../context/FunnelContext";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "none", boxShadow: "none" }}>
        <Toolbar sx={{ margin: 0, alignItems: "flex-start", height: "100px" }}>
          <Box
            sx={{
              display: "flex",
              gap: 6,
            }}
          >
            <Typography
              variant="h1"
              noWrap
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: "35px",
                color: "#1B3E6F",
              }}
            >
              Edit Flows
            </Typography>
            <DropDown
              name="checkout_sites"
              options={CHECKOUT.checkout_sites}
              style={{ width: "390px", marginTop: 0, height:45, padding: 0 }}
              label="checkout.myappstore.com"
              // handleChange={handlePrimaryDropdown}
              // value={dropdownValues?.checkout_sites}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
            }}
          >
            <Link href="#" sx={{ color: "#40B4E2", fontWeight: 600 }}>
              ADD PAGES
            </Link>
            <Link href="#" sx={{ color: "#40B4E2", fontWeight: 600 }}>
              FUNNEL TEMPLATES
            </Link>
            <Link href="#" sx={{ color: "#40B4E2", fontWeight: 600 }}>
              DOMAIN SETTINGS
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
