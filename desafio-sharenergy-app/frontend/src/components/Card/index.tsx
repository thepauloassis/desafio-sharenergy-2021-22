import React from 'react';
import './style.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const CustomerCard = (props) => {
  return (
    <Card sx={{ width: 275, height: 150 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.cardTitle}
        </Typography>
        <Typography variant="h4">{props.cardContent}</Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default CustomerCard;
