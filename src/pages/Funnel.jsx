import React from 'react'
import { FunnelForm } from '../components/create-funnel/funnel/FunnelForm';
import Layout from "../layout/Layout";
import { FunnelProvider } from "../context/FunnelContext";
import { Container, createTheme, ThemeProvider, Typography } from "@mui/material";

const Funnel = () => {
  return (
    <Container>
        <Typography variant="h4" color="text.primary" sx={{  textAlign: 'center', fontSize: '35px', marginBottom: '48px' }}>
          Add Funnels
        </Typography>
        <FunnelProvider>
          <Layout>
            <FunnelForm />
          </Layout>
        </FunnelProvider>
    </Container>
  )
}

export default Funnel
