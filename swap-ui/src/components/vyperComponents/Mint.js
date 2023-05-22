import React, {useState} from 'react'
import { ethers } from "ethers";

function App({provider, privateKey, wallet, contractAddress, abi, contract, secondAddress}){

    const mint = async () => {
        try{
           
            const result = await contract.mint(wallet.address, 1)
            await result.wait()
            // console.log(result)
        } catch (error){
            console.log(error)
        }
    }

    
    return(
        <div>
            <button onClick={mint}>mint new tokens</button>
        </div>
    )
}

export default App;