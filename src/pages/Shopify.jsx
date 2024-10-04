import React from 'react'
import { FunnelForm } from '../components/funnel/FunnelForm';
import Layout from "../layout/Layout";
import { FunnelProvider } from "../context/FunnelContext";
import { Container, createTheme, ThemeProvider, Typography } from "@mui/material";
import ShopifyTable from '../components/shopify/shopify-table/Shopify';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto'
  },
});

const Shopify = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
       <ShopifyTable />
      </ThemeProvider>
    </Container>
  )
}

export default Shopify
