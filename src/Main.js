

import React from 'react';
import { Container, Typography, Button } from '@mui/material';

import TextField from '@mui/material/TextField';

const Main = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        justifyContent: 'center',
        height: '100%',
        width: '100%', // Set width to 100% for all screen sizes
        '@media (min-width: 600px)': {
          width: '80%', // Adjust width for screens with a minimum width of 600px
        },
      }}
    >
      <Typography variant="h4" gutterBottom>
        Centered Content
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>

      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
    </Container>
  );
};

export default Main;



























