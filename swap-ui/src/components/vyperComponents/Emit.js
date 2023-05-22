import React, {useState, useEffect} from 'react'
import { ethers } from "ethers";

function App({provider, privateKey, wallet, contractAddress, abi, contract, secondAddress}){

     useEffect(() => {

        const interval = setInterval(() => {
            emit()
        }, 100000)
        return () => {
            clearInterval(interval) 
        }
    }, [])

    const emit = async () => {
        try {
            const tx = await contract.emitTokens()
            // await tx.wait()
            // console.log('successful emit')
        } catch (error) {
            // console.log(error)
        }
    }

    
    return(
        <div>
            <button onClick={emit}>emit tokens</button>
        </div>
    )
}

export default App;