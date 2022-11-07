import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { headingTheme } from './themeFonts';

const UniqueAvatars = () => {
  const uitems = [
    {
      title1: 'Traditional',
      title2: 'Avatars ',
      img: 'img/uavat-1.gif',
      details:
        'A set of dope, fresh & funky avatars which have been custom designed by the teams at The Sandbox and Snoop Dogg himself. Only one exists of each, who will be the lucky one?',
    },
    {
      title1: 'Traditional',
      title2: 'Animals',
      img: 'img/uavat-2.gif',
      details:
        'A set of dope, fresh & funky avatars which have been custom designed by the teams at The Sandbox and Snoop Dogg himself. Only one exists of each, who will be the lucky one?',
    },
    {
      title1: 'Traditional',
      title2: 'Rides',
      img: 'img/uavat-3.gif',
      details:
        'A set of dope, fresh & funky avatars which have been custom designed by the teams at The Sandbox and Snoop Dogg himself. Only one exists of each, who will be the lucky one?',
    },
  ];
  return (
    <Box
      id="avatars"
      sx={{
        background: '#1d232a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: { xs: '40px 10px 0px', lg: '80px 300px 0px' },
      }}
    >
      <Box>
        <ThemeProvider theme={headingTheme}>
          <Typography
            variant="h4"
            sx={{
              color: '#f37a0e',
            }}
            gutterBottom
          >
            500 years culture packed in pixels
          </Typography>
        </ThemeProvider>
      </Box>
      <Typography variant="body1" gutterBottom sx={{ color: '#BDC0C2' }}>
        Each avatar is handmade, playabale and culturual appropriate - lets make
        it accessible for everybody in the world. Our vision of the global Desi
        Metaverse.
      </Typography>
      <Box sx={{ mt: '50px' }}>
        <Grid container spacing={2}>
          {uitems.map((item) => (
            <Grid item xs={12} lg={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    background: '#f37a0e',
                    borderRadius: '36px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Box>
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Box>
                <Box sx={{ mt: '40px' }}>
                  <ThemeProvider theme={headingTheme}>
                    <Typography variant="h5" sx={{ color: '#BDC0C2' }}>
                      {item.title1}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ color: '#f37a0e' }}
                      gutterBottom
                    >
                      {item.title2}
                    </Typography>
                  </ThemeProvider>
                  {/* <Typography variant="body1" sx={{ color: '#BDC0C2' }}>
                    {item.details}
                  </Typography> */}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default UniqueAvatars;
