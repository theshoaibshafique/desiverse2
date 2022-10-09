import React, { useState } from 'react';

import { Box } from '@mui/material';

const Avatars = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Box
      sx={{
        height: '400px',
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <img
          src={item.gif}
          alt=""
          style={{ height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <img
          src={item.img}
          alt=""
          style={{ height: '100%', objectFit: 'cover' }}
        />
      )}
    </Box>
  );
};

export default Avatars;
