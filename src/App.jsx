import React from "react";
import Funnel from "./pages/Funnel";
import Layout from "./layout/Layout";
import { FunnelProvider } from "./context/funnelContext";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography variant="h4" sx={{ color: "rgb(27, 62, 111)", textAlign: 'center' }}>
        Add Funnels
      </Typography>
      <FunnelProvider>
        <Layout>
          <Funnel />
        </Layout>
      </FunnelProvider>
    </>
  );
}

export default App;
