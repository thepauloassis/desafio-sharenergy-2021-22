import React from 'react';
import './style.css';

import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box component="div" sx={{ display: 'block', height: '80px' }}>
      <Box
        component="footer"
        className="footer"
        sx={{
          position: 'relative',
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span>Desafio Sharenergy 2021-22</span>
        <p>
          Desenvolvidor por:
          <a href="https://github.com/thepauloassis" target="_blank">
            <span> Paulo Assis</span>
          </a>
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
