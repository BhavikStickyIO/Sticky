import React from "react";
import Funnel from "./pages/Funnel";
import EditFlow from "./pages/EditFlow";
import Drawer from "./layout/Drawer";
import { ThemeProvider } from "@mui/material";
import theme from "./common/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Funnel /> */}
        <EditFlow />
        {/* <Drawer /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
