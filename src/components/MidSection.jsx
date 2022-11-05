import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { headingTheme } from './themeFonts';

const MidSection = () => {
  return (
    <Box id="desiverse">
      <Box
        sx={{
          //   paddingTop: { xs: '120px', lg: '300px' },
          // p: { xs: '120px 10px 0px', lg: '250px 300px 0px' },
          p: { xs: '40px 10px ', lg: '60px 300px' },
          background: '#1d232a',
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid item xs={12} lg={6}>
            <Box sx={{ mt: '30px', textAlign: { xs: 'center', lg: 'left' } }}>
              <ThemeProvider theme={headingTheme}>
                <Typography variant="h4" sx={{ color: '#BDC0C2' }}>
                  INTRODUCING
                </Typography>
                <Typography variant="h4" sx={{ color: '#eda50e' }} gutterBottom>
                  DESIVERSE
                </Typography>
              </ThemeProvider>
              <Typography variant="body1" sx={{ color: '#BDC0C2' }}>
                <span style={{ fontWeight: 'bold', fontSize: '24px' }}>
                  What is desi??
                </span>{' '}
                A slang used to identify the people of of India, Pakistan and
                Bangladesh(The subcontinent). You get a glimpse of our culture -
                for the very first time as digital assets in web3. Our desi
                designs reflects famous and authentic Desi artifacts -
                borderless, transparent and packed with an overload of
                happiness. We access the metaverse to bring you endless gaming
                possibilities like treasure hunts, events and awesome
                memberships. Be part of of it, express yourself.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box>
              <img
                src="img/allcharacters.gif"
                alt=""
                style={{ width: '90%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* ===================================================================================================== */}

      {/* <Box
        sx={{
          //   paddingTop: { xs: '120px', lg: '300px' },
          p: { xs: '40px 10px ', lg: '90px 300px ' },
          background: '#e8b046',
        }}
      >
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: { xs: 'center', lg: 'left' },
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: 'black', fontWeight: 'bold' }}
              >
                GET YOUR
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: '#fff', fontWeight: 'bold' }}
              >
                DOGGIES
              </Typography>
              <Typography variant="bod1" sx={{ mt: '20px' }}>
                The Doggies are SOLD OUT! Head over to OpenSea and explore all
                available avatars for sale.
              </Typography>
              <Box sx={{ mt: '20px' }}>
                <Link
                  href="#"
                  target="_blank"
                  underline="none"
                  sx={{
                    background: 'black',
                    width: 'fit-content',
                    color: 'white',
                    cursor: 'pointer',
                    p: { xs: '10px 20px', lg: '15px 40px' },
                    borderRadius: '99px',
                    fontWeight: 'bold',
                    mt: '15px',
                  }}
                >
                  GO TO OPEN SEA
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Box
              sx={{
                width: { lg: '350px' },
              }}
            >
              <img
                src="https://www.sandbox.game/img/30_Landing/raffle-doggies/LD-gif-1.gif"
                alt=""
                style={{ width: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  );
};

export default MidSection;
