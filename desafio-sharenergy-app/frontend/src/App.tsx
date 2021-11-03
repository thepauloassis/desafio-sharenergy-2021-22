import React, { Suspense } from 'react';
import './App.css';

import './translations/i18n';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme';

import Routes from './routes/routes';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <CssBaseline />
      <Suspense fallback={null}>
        <ThemeProvider theme={theme}>
          <ToastContainer position="bottom-left" autoClose={3000} />
          <Routes />
        </ThemeProvider>
      </Suspense>
    </>
  );
}

export default App;
