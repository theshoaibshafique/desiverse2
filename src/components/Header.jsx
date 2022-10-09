import { Box, Link } from '@mui/material';
import React from 'react';

const Header = () => {
  const headerItems = [
    {
      title: 'HOME',
      link: '#home',
    },
    {
      title: 'UNIQUE AVATARS',
      link: '#avatars',
    },
    {
      title: 'DESIVERSE',
      link: '#desiverse',
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
          borderTop: '1px solid #eda50e',
          borderBottom: '1px solid #eda50e',
        }}
      >
        {headerItems.map((item) => (
          <Link
            href={item.link}
            key={item.title}
            underline="none"
            sx={{
              color: '#fff',
              fontSize: '15px',
              fontWeight: 'bold',
              '&:hover': {
                color: '#eda50e',
              },
            }}
          >
            {item.title}
          </Link>
        ))}
      </Box>
      <Box>
        <img src="desiverse-logo.png" alt="" />
      </Box>
    </Box>
  );
};

export default Header;