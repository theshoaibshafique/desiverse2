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
    'Your entry ticket to the Desi future in web3.',
    'Exclusive founders pass holders have the priviligeto be whitelisted for any new digital drops.',
    'The founders pass NFT holder has lifetime access to all benefits and club amenities  ',
    'Holders will be able to rent their Pass to family members, invite them to join you.',
    'Founder-2-Founder sessions. You are like a co-founder to us, so you meet and greet the founders team to create the future together. .',
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
                src="img/founder-pass.gif"
                alt="desiverse"
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
                Become the status of a Co-Founder and start our community as
                literally the very very first. The Founder’ pass gives you a
                life time full access to all priorities happening in the
                Desiverse Metaverse, as long as you hold it in your wallet :-)
                the one and only founderpass round is limited to 3333 - there
                are 1.7 bil people living in the Desi subcontintnet - be part of
                the 0.0000001% founders pass holders - today + your lifetime.
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
                alt="desiverse"
                style={{ width: '80%', objectFit: 'cover' }}
              />
            </Box>

            <Box>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: '#BDC0C2', mb: '20px' }}
              >
                We are the answer to all which search desi digital content in
                the internet. We strive to digitize our Desi culture to make it
                accessible for everybody on planet Earth, Moon and Mars.
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: '#BDC0C2' }}
              >
                Finally a bit of FOMO? Become a Founder of DesiverseDAO by
                getting the Founder`s pass!
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
