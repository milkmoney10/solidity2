import React, {useState, useEffect} from 'react'
import { ethers } from "ethers";

function App({provider, privateKey, wallet, contractAddress, abi, contract, secondAddress}){
    const [address, set_owner_address] = useState('0')
    const [balance, setBalance] = useState('0')
    
    useEffect(() => {

        const interval = setInterval(() => {
            owner_address();
        }, 100000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    
    const owner_address = async () => {
        try {
            const tx = await contract.get_owner_address()
            set_owner_address(tx)


            //get balance
            const result = await contract.balanceOf(tx)
            const parsed = parseInt(result._hex, 16)
            setBalance(parsed)
        
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       // Call your function here
    //       myFunction();
    //     }, 1000);
    
    //     // Cleanup the interval on component unmount
    //     return () => {
    //       clearInterval(interval);
    //     };
    //   }, []);

    // const myFunction = async () => {
    //     console.log('Running function...');
    //     // Do something here
    // };

    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
  
            <p>contract owner - {address}</p>
            <p>balance of {wallet.address}: {balance}</p>
        </div>
    )
}

export default App;