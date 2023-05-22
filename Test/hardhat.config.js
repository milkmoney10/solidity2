require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-vyper");


// See https://hardhat.org/config/ for config options.
module.exports = {
  vyper: {
    version: "0.3.7"
  },
  solidity: "0.8.0",
  paths: {
    sources: './contracts',
    artifacts: '../swap-ui/src/artifacts/'
  }, 
  networks: {
    ganache: {
      url: "http://localhost:8546",
      chainId: 1337, 
  
    },
    // localhost: {
    //   url: "http://localhost:8545",
    //   accounts: {
    //     mnemonic: "test test test test test test test test test test test junk",
    //   },
    // },
    // hardhat: {
    //   hardfork: "london",
    //   // Base fee of 0 allows use of 0 gas price when testing
    //   initialBaseFeePerGas: 0,
    //   accounts: {
    //     mnemonic: "test test test test test test test test test test test junk",
    //     path: "m/44'/60'/0'",
    //     count: 10
    //   }
    // },
  },

};
