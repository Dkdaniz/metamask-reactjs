import React from 'react'

import logo from './Assets/metiisto.svg';
import './App.css';

import Web3 from 'web3';

function App() {
  let web3 = Web3 | undefined;
  
  const handleClick = async () => {
    if (!web3) {
      try {
        const networkId = parseInt((window).ethereum.chainId);
        if(networkId !== 97){
          window.alert('NETWORK INVALID');
        }else{
          await (window).ethereum.enable();

          web3 = new Web3((window).ethereum);
        }
      } catch (error) {
        window.alert('You need to allow MetaMask.');
        return;
      }
    }
  }
  

  return (
    <>
     
      <p>Entrar no Sistema</p>
      <button onClick={handleClick}> login </button>
    </>
  );
}

export default App;
