import React from 'react';
import './style.css';

import Box from '@mui/material/Box';

import CustomerCard from '../../Card';
import CustomerTable from '../Datatable';

const CustomerDashboard = () => {
  return (
    <>
      <Box
        component="div"
        m={2}
        sx={{
          maxWidth: 1200,
          margin: '0 auto',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        {/* <Box
          component="div"
          mt={5}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <CustomerCard cardTitle={'Total de Clientes'} cardContent={100} />
          <CustomerCard />
          <CustomerCard />
          <CustomerCard />
        </Box> */}
        <Box>
          <Box mt={5} sx={{ width: '100%', height: 300 }}>
            <CustomerTable />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CustomerDashboard;
