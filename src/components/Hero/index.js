import { CssBaseline, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h6 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

theme.typography.body2 = {
  fontSize: '1.0rem',
  '@media (min-width:600px':{
    fontSize: '1.2rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  }
}

function Hero() {
  return (
    <>
      <CssBaseline />
      <Box
      sx={{
        width: '100%',
        display: 'flex',
        marginTop: '20px',
        marginBottom: '20px',
      }}
      >
        <Box
        sx={{
          margin: '0 20px',
          width: '100%',
        }}
        >
          <Paper 
          elevation={3}
          sx={{
            height: '350px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            // eslint-disable-next-line
            background: 'rgb(204, 204, 204)', /* Fallback for older browsers without RGBA-support */
            // eslint-disable-next-line
            background: 'rgba(204, 204, 204, 0.5)'
          }}
          >
            <ThemeProvider theme={theme}>
            <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
            }}>
            <Typography variant="h6" textAlign="center" mb={2} fontStyle="italic" color="#072040">“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”</Typography>
            <Typography variant="body2" textAlign="center" color="#072040">– Antoine de Saint-Exupery</Typography>
            </div>
            </ThemeProvider>
          </Paper>
        </Box>
      </Box>
    </>
  )
}

export default Hero