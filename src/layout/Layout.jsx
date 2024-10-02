import React from "react";
import LeftSidebar from "./LeftSidebar";
import Filter from "./Filter";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
          <LeftSidebar />
          {children}
          <Filter />
      </Box>
    </>
  );
};

export default Layout;
