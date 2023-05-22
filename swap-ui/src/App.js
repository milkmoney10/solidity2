
import './App.css';
import ABI from './artifacts/contracts/Test2.vy/Test2.json'
import solABI from './artifacts/contracts/EmitSol.sol/EmitSol.json'
import swap_ABI from './artifacts/contracts/P2PSwap.sol/P2PSwap.json'
import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers' 
import Deposit from './components/vyperComponents/Deposit' 
import Stake from './components/vyperComponents/Stake'
import Emit from './components/vyperComponents/Emit'
import GetOwnerAddress from './components/vyperComponents/GetOwnerAddress'
import Mint from './components/vyperComponents/Mint'
import Transfer from './components/vyperComponents/Transfer'
import SecondBalance from './components/vyperComponents/SecondBalance'
import EmitDeposit from './components/EmitDeposit'
import Swap from './components/Swap'
import Nft from './components/nftComponents/Nft'

function App() {
  const provider = new ethers.providers.JsonRpcProvider("http://localhost:8546"); // replace with your local node URL
  // PK for wallet 0xB2ea04c4168FD7AF72fFfdC636198F9EC2F15CAe
  // const privateKey = '0x4a88b07c7704a2253f5b7779c73a157796823c6e4b5363c0e2b8d0b6d05a4205'
  // PK for wallet 0x1F8343f305f054983a1531dad8f68c53dC974255
  const privateKey = '0x6e5f8fe021e2db5df6a9e2125fa5477d1f844b749938658c73f5ce07668fdaa7'
  const wallet = new ethers.Wallet(privateKey, provider)
  const contractAddress = '0x71c5f1992Dcbd8a04bdfd98f5e186297cF218325'

  const abi = ABI['abi']
  const contract = new ethers.Contract(contractAddress, abi, wallet)
  const secondAddress = '0xdB7e55ACe79E9240Afd4259f4b48f49246C1433E'
  
  const emitContractAddress = '0x0B160F680EecC1406Aa5bC425f41072354730F01'
  const emitABI = solABI['abi']
  const emitContract = new ethers.Contract(emitContractAddress, emitABI, wallet)

  const swapContractAddress = '0x1859fA95bf7e3eD2Aa634F862912F1D4f3C8723A'
  const swapABI = swap_ABI['abi']
  const swapContract = new ethers.Contract(swapContractAddress, swapABI, wallet)
  //make nft contract instead of AMM? easier first project
  return ( 
    <div className="App">
      <Nft 
        wallet={wallet}
        contract={swapContract}
        secondAddress={secondAddress}
        />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Swap 
        wallet={wallet}
        contract={swapContract}
        secondAddress={secondAddress}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <p>deposit contract + emit using solidity</p>
      <EmitDeposit 
      wallet={wallet}
      contract={emitContract}
      secondAddress={secondAddress}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Deposit
        provider={provider}
        privateKey={privateKey}
        wallet={wallet}
        contractAddress={contractAddress}
        abi={abi}
        contract={contract}
        secondAddress={secondAddress}
      />
      <Stake provider={provider}
        privateKey={privateKey}
        wallet={wallet}
        contractAddress={contractAddress}
        abi={abi}
        contract={contract}
        secondAddress={secondAddress}
        />
      <Emit provider={provider}
        privateKey={privateKey}
        wallet={wallet}
        contractAddress={contractAddress}
        abi={abi}
        contract={contract} 
        secondAddress={secondAddress}
        />
      <GetOwnerAddress provider={provider}
        privateKey={privateKey}
        wallet={wallet}
        contractAddress={contractAddress}
        abi={abi}
        contract={contract}/>
      <Mint provider={provider}
        privateKey={privateKey}
        wallet={wallet}
        contractAddress={contractAddress}
        abi={abi}
        contract={contract}
        secondAddress={secondAddress}
        />
      <Transfer provider={provider}
        privateKey={privateKey}
        wallet={wallet}
        contractAddress={contractAddress}
        abi={abi}
        contract={contract}
        secondAddress={secondAddress}
        />
      <SecondBalance provider={provider}
        privateKey={privateKey}
        wallet={wallet}
        contractAddress={contractAddress}
        abi={abi}
        contract={contract}
        secondAddress={secondAddress}
        />

    </div>
  );
}

export default App;
