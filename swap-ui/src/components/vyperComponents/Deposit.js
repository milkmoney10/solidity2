import React, {useState, useEffect} from 'react'
import { ethers } from "ethers";

function App({provider, privateKey, wallet, contractAddress, abi, contract, secondAddress}){



    const [balance, setBalance] = useState('0')
    const [addressBalance, setAddressBalance] = useState('0')
    const [address, setAddress] = useState(wallet['address'])
 
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
        getContractDepositBalance()
        getUserDepositBalance(wallet['address'])
    }, [])

    const deposit = async () => {
        try {
            console.log('hit')
           const tx = await contract.deposit({value: 1})
           console.log(tx)
           await tx.wait()
           console.log('successful deposit')
 
        } catch (error){
            console.log(error)
        }
    }

    const getContractDepositBalance = async () => {
        try{
 
            const result = await contract.getDepositedBalance()
     
            const intValue = parseInt(result._hex)
            setBalance(intValue)

        } catch (error){
            console.log(error)
        }
    }

    const getUserDepositBalance = async () => {
        try{

            // const result = await contract.getUserDepositedBalance(wallet['address'])
            const result = await contract.getUserDepositedBalance(address)
     
            const intValue = parseInt(result._hex)
            setAddressBalance(intValue)
            // console.log(`user deposit for ${testUser}:`, intValue)

        } catch (error){

        }
    }
    return(
        <div>
            <button onClick={deposit}>deposit</button>

            <p>total contract balance: {balance}</p>
            <p>balance of address {address}: {addressBalance}</p>
        </div>
    )
}

export default App;