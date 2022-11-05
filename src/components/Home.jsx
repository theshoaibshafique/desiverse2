import { Box, Grid } from '@mui/material';
import React from 'react';
// import Avatars from './Avatars';
import Header from './Header';
// import { ThemeProvider } from '@mui/material/styles';
// import { headingTheme } from './themeFonts';
import { useTimer } from 'react-timer-hook';

const Home = () => {
  const time = new Date('2022-11-18');
  const expiryTimestamp = time.setSeconds(time.getSeconds());

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  const counter = [
    {
      title: 'Days',
      value: days,
    },
    {
      title: 'Hours',
      value: hours,
    },
    {
      title: 'Minutes',
      value: minutes,
    },
    {
      title: 'Seconds',
      value: seconds,
    },
  ];

  return (
    <Box
      id="#home"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        backgroundImage: 'url(BG-2400.png)',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        position: 'relative',
        backgroundSize: 'cover',
      }}
    >
      <Header />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          px: { xs: '20px', lg: '100px' },
          mt: { lg: '-40px' },
          width: '100%',
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
          <Grid item xs={12} md={6}>
            <Box>
              <img
                src="img/truck.gif  "
                alt=""
                style={{ width: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',

                mt: { xs: '-80px', lg: '0px' },
              }}
            >
              <Box sx={{ width: '400px' }}>
                <img
                  src="desiverse-logo.png"
                  alt=""
                  style={{ width: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {counter.map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      width: '150px',
                      border: '5px solid #000',
                      borderRadius: '9px',
                      p: '0px',
                      textAlign: 'center',
                      '&:hover': {
                        border: '5px dotted #000',
                      },
                    }}
                  >
                    <p
                      style={{
                        color: '#ed1c2d',
                        fontSize: '24px',
                      }}
                    >
                      {item.value}
                    </p>
                    <p>{item.title}</p>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Box sx={{ display: { xs: 'block', lg: 'none' }, width: '300px' }}>
        <img
          src="img/truck.gif  "
          alt=""
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </Box> */}
      <Box sx={{ maxWidth: '800px', mb: { xs: '170px', lg: '100px' } }}>
        {/* <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          10K NEXT-GENERATION,
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'black' }}>
          METAVERSE AVATARS
        </Typography> */}
      </Box>
      {/* <Box
        sx={{
          maxWidth: { xs: '350px', lg: '935px' },
          position: 'absolute',
          bottom: { xs: -100, lg: -250 },
        }}
      >
        <video
          src="https://installers.sandbox.game/Snoop_Avatars2022_Teaser_Music2_optim.mp4"
          autoplay="autoplay"
          loop="loop"
          controls="controls"
          muted="muted"
          playsinline
          //   height="535px"
          width="100%"
        ></video>
      </Box> */}
    </Box>
  );
};

export default Home;
