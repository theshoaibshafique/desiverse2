import React from 'react';
import { Box, Link, Typography, Avatar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { headingTheme } from './themeFonts';

const Partners = () => {
  return (
    <Box sx={{ background: '#1d232a', textAlign: 'center', pb: '40px' }}>
      <ThemeProvider theme={headingTheme}>
        <Typography
          variant="h4"
          sx={{
            color: '#f37a0e',
          }}
        >
          Our Supporters
        </Typography>
      </ThemeProvider>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          mt: '40px',
        }}
      >
        <Box>
          <Link href="https://matesol.net/" target="_blank">
            <Avatar
              src="matesole-logo.png"
              sx={{
                bgcolor: '#fff',
                width: { xs: 150, lg: 200 },
                height: { xs: 150, lg: 200 },
              }}
            />
          </Link>
        </Box>
        <Box>
          <Link href="https://www.halalverse.io/" target="_blank">
            <Avatar
              src="halalverse-logo.jpeg"
              sx={{ width: { xs: 150, lg: 200 }, height: { xs: 150, lg: 200 } }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
