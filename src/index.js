import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const mode = 'dark';

let theme = createTheme({
  palette: {
    mode: mode,
    // ...(mode === 'dark'
    //   ? {
    //       divider: '#1E2D3D',
    //       background: {
    //         default: '#011627',
    //         paper: '#011627',
    //       },
    //     }
    //   : {}),
  },

  typography: {
    fontFamily: [
      'Montserrat,sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  // components: {
  //   MuiPaper: {
  //     styleOverrides: {
  //       root: {
  //         backgroundImage: 'none',
  //       },
  //     },
  //   },
  // },
});

theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
