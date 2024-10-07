import React from 'react'
import { FunnelForm } from '../components/funnel/FunnelForm';
import Layout from "../layout/Layout";
import { FunnelProvider } from "../context/FunnelContext";
import { Container, createTheme, ThemeProvider, Typography } from "@mui/material";
import DomainTable from '../components/domain/domain-table/Domain';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto'
  },
});
const Domain = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
       <DomainTable />
      </ThemeProvider>
    </Container>
  )
}

export default Domain
