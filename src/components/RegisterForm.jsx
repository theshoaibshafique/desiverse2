import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { db } from './firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RegisterForm = ({ currentAccount, connectWalletAction }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && email) {
      setSubmitting(true);
      await addDoc(collection(db, 'registeredUsers'), {
        email,
        username,
        walletAdrress: currentAccount || '',
        date: new Date().toLocaleString(),
      });
      setError(false);
      setUsername(null);
      setEmail(null);
      setSubmitting(false);
      setOpen(true);
    } else {
      console.log(error);
      setError(true);
      setOpen(true);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',

        mt: { xs: '40px' },
      }}
    >
      {currentAccount ? (
        <Box
          sx={{
            border: '3px solid white',
            boxShadow:
              '0px 0px 0px 1px #f37a0e,inset 0px 0px 0px 1px #f37a0e, 0px 2px 0px 2px #f37a0e',
            borderRadius: '0.3em',
            p: '20px',
            cursor: 'pointer',
            textAlign: 'center',
            fontWeight: '600',
            width: '90%',
          }}
        >
          Wallet Connected
          <Typography
            variant="subtitle2"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {currentAccount}
          </Typography>
        </Box>
      ) : (
        <Button
          variant="contained"
          onClick={connectWalletAction}
          fullWidth
          color="warning"
          sx={{
            fontSize: '18px',
            color: '#fff',
          }}
        >
          Connect Wallet
        </Button>
      )}

      <TextField
        type="text"
        placeholder="username"
        name="username"
        value={username}
        fullWidth
        color="warning"
        variant="filled"
        focused
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <TextField
        type="email"
        placeholder="email address"
        name="email"
        value={email}
        fullWidth
        variant="filled"
        color="warning"
        focused
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Button
        onClick={handleSubmit}
        disabled={submitting}
        fullWidth
        variant="outlined"
        color="warning"
        sx={{ fontSize: '16px', color: '#f37a0e', border: '2px solid #f37a0e' }}
      >
        Submit
      </Button>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {error ? (
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Please Fill All Fields
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Registered Succesfully
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
};

export default RegisterForm;
