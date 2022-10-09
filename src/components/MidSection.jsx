import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const MidSection = () => {
  return (
    <Box>
      <Box
        sx={{
          //   paddingTop: { xs: '120px', lg: '300px' },
          p: { xs: '120px 10px 0px', lg: '250px 300px 0px' },
          background: '#1d232a',
        }}
      >
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Box sx={{ mt: '30px', textAlign: { xs: 'center', lg: 'left' } }}>
              <Typography
                variant="h4"
                sx={{ color: 'white', fontWeight: 'bold' }}
              >
                WHAT ARE
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: '#eda50e', fontWeight: 'bold' }}
              >
                THE DOGGIES?
              </Typography>
              <Typography variant="body1" sx={{ color: '#BDC0C2' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                velit, facere magni provident architecto quidem sint inventore
                magnam quia amet dicta officia, eum accusantium distinctio,
                excepturi deserunt commodi officiis fugit.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box>
              <video
                src="https://installers.sandbox.game/SnoopWebDance_3_4_1.mp4"
                autoplay="autoplay"
                loop="loop"
                muted="muted"
                playsinline
                width="100%"
              ></video>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* ===================================================================================================== */}

      <Box
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
      </Box>
    </Box>
  );
};

export default MidSection;