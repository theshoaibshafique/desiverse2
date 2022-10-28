import { Box } from '@mui/material';
import React from 'react';
// import Avatars from './Avatars';
import Header from './Header';

const Home = () => {
  // const avatarsList = [
  //   {
  //     id: 1,
  //     img: 'img/horse.png',
  //     gif: 'img/horse.gif',
  //   },
  //   {
  //     id: 2,
  //     img: 'img/man.png',
  //     gif: 'img/man.gif',
  //   },
  //   {
  //     id: 3,
  //     img: 'img/woman.png',
  //     gif: 'img/women.gif',
  //   },
  //   {
  //     id: 4,
  //     img: 'img/riksha.png',
  //     gif: 'img/riksha.gif',
  //   },
  //   {
  //     id: 5,
  //     img: 'img/truck.png',
  //     gif: 'img/truck.gif',
  //   },
  // ];
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
          display: { xs: 'none', lg: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: '100px',
          mt: '60px',
        }}
      >
        {/* {avatarsList.map((item) => (
          <Avatars item={item} key={item.id} />
        ))} */}
        <Box>
          <img
            src="img/allcharacters.gif  "
            alt=""
            style={{ width: '100%', objectFit: 'cover' }}
          />
        </Box>
        <Box>
          <img src="desiverse-logo.png" alt="" />
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', lg: 'none' }, width: '300px' }}>
        <img
          src="img/allcharacters.gif  "
          alt=""
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </Box>
      {/* <Box
        sx={{ maxWidth: '800px', mt: '40px', mb: { xs: '170px', lg: '330px' } }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          10K NEXT-GENERATION,
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'black' }}>
          METAVERSE AVATARS
        </Typography>
        <Typography variant="body1" sx={{ color: 'black' }}>
          Unique, hand-crafted, and playable The Doggies are coming to The
          Sandbox. Designed and crafted with tha Doggfather himself.
        </Typography>
      </Box> */}
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
