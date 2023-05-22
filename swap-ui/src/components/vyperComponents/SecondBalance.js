import React, {useState, useEffect} from 'react'
import { ethers } from "ethers";

function App({provider, privateKey, wallet, contractAddress, abi, contract, secondAddress}){
    const [address, set_owner_address] = useState(secondAddress)
    const [balance, setBalance] = useState('0')

    useEffect(() => {

        const interval = setInterval(() => {
            balance_of();
        }, 100000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const balance_of = async () => {
        try {
    
            const result = await contract.balanceOf(secondAddress)
            // await tx.wait()
            const parsed = parseInt(result._hex, 16)
            
            setBalance(parsed)
        } catch (error) {
            console.log(error)
        }
    }

    
    return(
        <div>
            <p>2nd balance of {address}: {balance}</p>
        </div>
    )
} 

export default App;