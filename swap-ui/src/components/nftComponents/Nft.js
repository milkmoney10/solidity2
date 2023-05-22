import React, {useState, useEffect} from 'react'
import { ethers } from "ethers";

function App({wallet, contractAddress, abi, contract, secondAddress}){



    // useEffect(() => {

    //     const interval = setInterval(() => {
    //         getContractDepositBalance()
    //         getUserDepositBalance(wallet['address'])
    //     }, 1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [])

    useEffect(() => {
        
    }, [])


   


    const emitMilk = async () => {
        try{
          
         
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            

        </div>
    )
}

export default App;