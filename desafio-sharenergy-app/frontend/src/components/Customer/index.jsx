import React from 'react';
import './style.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Header from '../Header';
import Footer from '../../components/Footer';
import CustomerDashboard from './Dashboard';

const CustomerHome = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ width: '100%', height: '100vh' }}>
          <CustomerDashboard />
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default CustomerHome;
