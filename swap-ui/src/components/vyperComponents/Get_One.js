// import React, { useState, useEffect } from 'react';
// import Web3 from 'web3';
// import { ethers } from "ethers";
// import ABI from '../artifacts/contracts/Token.vy/Token.json'


// function App(){
//     async function handleClick() {
//         try {
//           // const web3 = new Web3('http://localhost:8545')
//           // const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545"); // replace with your local node URL
//           // const privateKey = '0xaa400c6743c4e9aee7ff60bcd301bb420c807d425872b902c77d8782c9e351ac'
//           // const wallet = new ethers.Wallet(privateKey, provider)
//           const provider = new ethers.providers.Web3Provider(window.ethereum);
//           const contractAddress = '0x2124C5caCd09D0315fd5015B5dCc234df2022550'
       
//           const abi = ABI['abi']
//           const contract = new ethers.Contract(contractAddress, abi, provider)
//           const result = await contract.getOne()
//           console.log(result.toString())
     
//         }catch (error) {
//           console.log(error)
//         }
//       } 
    
//     return(
//         <div>
//             <button onClick={handleClick}>getOne</button>
   
//         </div>
//     )
// }

// export default App;