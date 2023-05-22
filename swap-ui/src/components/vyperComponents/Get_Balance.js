// import React, { useState, useEffect } from 'react';
// import Web3 from 'web3';
// import { ethers } from "ethers";
// import ABI from '../artifacts/contracts/Token.vy/Token.json'

 
// function App(){

//     const handleButtonClick = async () => {
//         try{
//           const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545"); // replace with your local node URL
//           const privateKey = '0xaa400c6743c4e9aee7ff60bcd301bb420c807d425872b902c77d8782c9e351ac'
//           const wallet = new ethers.Wallet(privateKey, provider)
//           const contractAddress = '0xCe86526114fFf899912916A116b8eF364a2D12E9'
//           const abi = ABI['abi']
       
//           const contract = new ethers.Contract(contractAddress, abi, wallet)
//           const address = '0x5B9ED7CdBd6A5E6Dab47F8AFB4CaBCB82b53b921'
//           const result = await contract.get_eth_balance(address);
//           const valueInWei = ethers.BigNumber.from(result._hex)
//           const valueInEth = parseInt(ethers.utils.formatEther(valueInWei))
//           console.log(valueInEth)
//         } catch (error) {
//           console.log(error)
//         }
     
//       }
//     return(
//         <div>
//             <button onClick={handleButtonClick}>Get Balance</button>
//             {/* <p>Balance: {balance}</p> */}
//         </div>
//     )
// }

// export default App;