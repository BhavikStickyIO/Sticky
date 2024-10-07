import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',  // You can customize the font family here
    // fontSize: 16,  // Base font size for the entire application
    h1: {
      fontSize: '1.5rem', // Customize specific heading sizes
      color: '#1B3E6F',    // Global font color for h1
    },
     h6: {
      fontSize: 14, // Customize specific heading sizes
      color: '#1B3E6F',    // Global font color for h1
      fontWeight: 'bold'
    },
    h2: {
      fontSize: 16,
    //   color: '#444444',    // Global font color for h2
    },
    // body1: {
    //   fontSize: '1rem',    // Global font size for body text
    //   color: '#555555',    // Global font color for body text
    // },
    // body2: {
    //   fontSize: '0.875rem',
    //   color: '#666666',    // Global font color for smaller text
    // },
    button: {
      fontSize: '0.875rem',
      color: '#ffffff',    // Global font color for buttons
    },
  },
  palette: {
    text: {
      primary: '#1B3E6F', // Global text color
      secondary: '#666666',
    },
  },
});

export default theme;
