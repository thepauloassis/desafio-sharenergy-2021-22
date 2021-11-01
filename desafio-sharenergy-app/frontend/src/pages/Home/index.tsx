import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Chart from '../../components/Chart';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Home = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ width: '100%', height: '100vh' }}>
          <Chart />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
