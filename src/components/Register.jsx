import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Link,
} from '@mui/material';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { ThemeProvider } from '@mui/material/styles';
import { headingTheme } from './themeFonts';

const Register = ({ currentAccount, connectWalletAction }) => {
  const founderBenifits = [
    'This is an entry ticket to to the Desiverse exclusive Founders club. ',
    'Founders pass will allow the holders to be whitelisted for all the future content/NFT drops.',
    'Lifetime access to all the upcoming events in the metaverse by Desiverse.',
    'Holders will be able to rent their Pass to new members.',
    'Exclusive sessions with the Founder and the team to learn more about the journey and the vision.',
  ];
  return (
    <Box
      id="founders"
      sx={{
        background: '#1d232a',
        p: { xs: '40px 10px 20px', lg: '80px 250px 40px' },
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
                src="img/founder-pass.png"
                alt=""
                style={{ width: '58%', objectFit: 'cover' }}
              />
            </Box>
            <Box>
              <ThemeProvider theme={headingTheme}>
                <Typography
                  variant="h4"
                  sx={{ color: '#BDC0C2', fontWeight: 'bold' }}
                  gutterBottom
                >
                  FOUNDER PASS
                </Typography>
              </ThemeProvider>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: '#BDC0C2' }}
              >
                The Founder pass gives you access to the Desiverse Metaverse
                Experiences before anyone else. Become a part of the
                development, give your feedback, enter Desiverse!
              </Typography>
            </Box>
            <Box>
              <List>
                {founderBenifits.map((i) => (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <CircleIcon sx={{ fontSize: '10px' }} />
                    </ListItemIcon>
                    <ListItemText sx={{ fontSize: '16px' }}>{i}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              background: '#000',
              borderRadius: '25px',
              p: { xs: '10px', lg: '40px' },
              height: '100%',
            }}
          >
            <Box sx={{ mb: '20px' }}>
              <img
                src="img/reg-av.gif"
                alt=""
                style={{ width: '80%', objectFit: 'cover' }}
              />
            </Box>

            <Box>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: '#BDC0C2', mb: '20px' }}
              >
                We are the answer to all which search desi content in the
                metaverse. We strive to digitize our Desi culture on to web 3.0.
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: '#BDC0C2' }}
              >
                Become a Founder of DesiverseDAO by getting the Founder’s pass
                with amazing perks
              </Typography>
            </Box>

            <Box>
              <Box sx={{ mt: '60px' }}>
                <Link
                  href="https://opensea.io/collection/desiverse-founders-pass"
                  target="_blank"
                  sx={{
                    color: '#fff',
                    background: '#f37a0e',
                    fontSize: '24px',
                    p: '20px 60px',
                    borderRadius: '99px',
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                  }}
                  underline="none"
                >
                  Buy Now
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
