import './App.css';
import Home from './components/Home';
import MidSection from './components/MidSection';
import Register from './components/Register';
import UniqueAvatars from './components/UniqueAvatars';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Partners from './components/Partners';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('G-GC5W7DQCFX');

  const [currentAccount, setCurrentAccount] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        return;
      } else {
        //  console.log('We have the ethereum object', ethereum);

        /*
         * Check if we're authorized to access the user's wallet
         */
        const accounts = await ethereum.request({ method: 'eth_accounts' });

        /*
         * User can have multiple authorized accounts, we grab the first one if its there!
         */
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log('Found an authorized account:', account);
          setCurrentAccount(account);
        } else {
          console.log('No authorized account found');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Make sure you have MetaMask!');
        return;
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Home />
      <MidSection />
      <UniqueAvatars />
      <Register
        currentAccount={currentAccount}
        connectWalletAction={connectWalletAction}
      />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
