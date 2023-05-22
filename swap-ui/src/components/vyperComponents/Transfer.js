import React, {useState} from 'react'
import { ethers } from "ethers";

function App({provider, privateKey, wallet, contractAddress, abi, contract, secondAddress}){
    const [address, setAddress] = useState(secondAddress)

    const transfer = async () => {
        try{
            const result = await contract.transfer(secondAddress, 1)
            await result.wait()
            console.log(result)
        } catch (error){
            console.log(error)
        }
    }
 
    
    return(
        <div>
            <button onClick={transfer}>transfer tokens</button>
        </div>
    )
}

export default App;