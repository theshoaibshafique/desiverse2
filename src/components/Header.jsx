import { Box, Link } from '@mui/material';
import React from 'react';

const Header = () => {
  const headerItems = [
    {
      title: 'HOME',
      link: '#home',
    },

    {
      title: 'DESIVERSE',
      link: '#desiverse',
    },
    {
      title: 'FOUNDERS CLUB',
      link: '#founders',
    },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          // display: { xs: 'none', lg: 'flex' },
          display: 'flex',
          gap: { xs: '45px', lg: '200px' },
          mt: '40px',
          p: { xs: '20px 10px', lg: '20px 100px' },
          borderTop: '2px solid #eda50e',
          borderBottom: '2px solid #eda50e',
        }}
      >
        {headerItems.map((item) => (
          <Link
            href={item.link}
            key={item.title}
            underline="none"
            sx={{
              color: '#fff',
              fontSize: '18px',
              letterSpacing: { lg: '3px' },
              '&:hover': {
                color: '#eda50e',
              },
            }}
          >
            {item.title}
          </Link>
        ))}
      </Box>
      {/* <Box>
        <img src="desiverse-logo.png" alt="" />
      </Box> */}
    </Box>
  );
};

export default Header;
