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
          Desenvolvido por:
          <a href="https://github.com/thepauloassis" target="_blank">
            <span> Paulo Assis</span>
          </a>
        </p>
        <span className="verse">
          "Porque pela graça sois salvos, mediante a fé; e isto não vem de vós;
          é dom de Deus;" (Efésios 2:8)
        </span>
      </Box>
    </Box>
  );
};

export default Footer;
