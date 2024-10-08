import React from 'react'
import { FunnelForm } from '../components/funnel/FunnelForm';
import Layout from "../layout/Layout";
import { FunnelProvider } from "../context/FunnelContext";
import { Container, createTheme, ThemeProvider, Typography } from "@mui/material";
import EventTable from '../components/event/event-table/Event';


const theme = createTheme({
  typography: {
    fontFamily: 'Roboto'
  },
});
const Event = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
       <EventTable />
      </ThemeProvider>
    </Container>
  )
}

export default Event
