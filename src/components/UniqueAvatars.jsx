import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const UniqueAvatars = () => {
  const uitems = [
    {
      title1: 'Dope',
      title2: 'AVATARS',
      img: 'uavat.gif',
      details:
        'A set of dope, fresh & funky avatars which have been custom designed by the teams at The Sandbox and Snoop Dogg himself. Only one exists of each, who will be the lucky one?',
    },
    {
      title1: 'Dope',
      title2: 'AVATARS',
      img: 'uavat.gif',
      details:
        'A set of dope, fresh & funky avatars which have been custom designed by the teams at The Sandbox and Snoop Dogg himself. Only one exists of each, who will be the lucky one?',
    },
    {
      title1: 'Dope',
      title2: 'AVATARS',
      img: 'uavat.gif',
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
        <Typography
          variant="h3"
          sx={{
            color: '#f37a0e',
            fontWeight: 'bold',
            maxWidth: '480px',
          }}
        >
          A CHANCE TO GET UNIQUE AVATARS
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom>
        First-ever avatar to be part of a metaverse music video. Unique,
        hand-crafted, and playable Doggies coming to The Sandbox. Designed and
        crafted with tha Doggfather himself.
      </Typography>
      <Box sx={{ mt: '50px' }}>
        <Grid container spacing={4}>
          {uitems.map((item) => (
            <Grid item xs={12} lg={4}>
              <Box>
                <Box
                  sx={{
                    background: '#f37a0e',

                    borderRadius: '36px',
                    width: '250px',
                    height: '250px',
                  }}
                >
                  <Box
                    sx={{
                      width: '300px',
                      height: '320px',
                    }}
                  >
                    <img
                      src={item.img}
                      alt=""
                      style={{ width: '100%', objectFit: 'cover' }}
                    />
                  </Box>
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
