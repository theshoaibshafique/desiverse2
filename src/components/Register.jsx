import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';

const Register = () => {
  return (
    <Box
      id="desiverse"
      sx={{
        background: '#1d232a',
        p: { xs: '40px 10px 0px', lg: '80px 250px 0px' },
        textAlign: 'center',
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              background: '#000',
              borderRadius: '25px',
              p: { xs: '10px', lg: '40px' },
            }}
          >
            <Box sx={{ mb: '20px' }}>
              <img
                src="https://www.sandbox.game/img/30_Landing/raffle-doggies/ticket2.png"
                alt=""
                style={{ width: '100%', objectFit: 'cover' }}
              />
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{ color: '#fff', fontWeight: 'bold' }}
                gutterBottom
              >
                SNOOPVERSE EARLY ACCESS PASS
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: '#BDC0C2' }}
              >
                The Snoopverse Early Access pass gives you access to the Snoop
                Dogg Metaverse Experiences in The Sandbox before anyone else.
                Become a part of the development, give your feedback, enter
                Snoop's world!
              </Typography>
            </Box>
            <Box>
              <List>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <CircleIcon sx={{ fontSize: '10px' }} />
                    </ListItemIcon>
                    <ListItemText>
                      Whitelist access to Doggies drop
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
