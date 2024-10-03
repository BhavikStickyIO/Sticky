import React from 'react'
import { FunnelForm } from '../components/create-funnel/funnel/FunnelForm';
import Layout from "../layout/Layout";
import { FunnelProvider } from "../context/FunnelContext";
import { Container, createTheme, ThemeProvider, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto'
  },
});

const Funnel = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Typography variant="h4" sx={{ color: "rgb(27, 62, 111)", textAlign: 'center', fontSize: '35px', marginBottom: '48px' }}>
          Add Funnels
        </Typography>
        <FunnelProvider>
          <Layout>
            <FunnelForm />
          </Layout>
        </FunnelProvider>
      </ThemeProvider>
    </Container>
  )
}

export default Funnel
