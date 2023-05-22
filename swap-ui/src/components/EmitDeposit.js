import React, {useState, useEffect} from 'react'
import { ethers } from "ethers";

function App({wallet, contractAddress, abi, contract, secondAddress}){



    const [balance, setBalance] = useState('0')
    const [addressBalance, setAddressBalance] = useState('0')
    const [address, setAddress] = useState(wallet['address'])
    const [milkBalance, setMilkBalance] = useState('0')

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
        getUserDepositBalance()
    }, [])

    const deposit = async () => {
        try {
            console.log('hit')
           const tx = await contract.deposit({value: 1})
           console.log(tx)
        //    await tx.wait()
           console.log('successful deposit')
 
        } catch (error){
            console.log(error)
        }
    }

    const getUserDepositBalance = async () => {
        try{

            // const result = await contract.getUserDepositedBalance(wallet['address'])

            const result = await contract.userDepositedBalance(address)
 
            const intValue = parseInt(result._hex)
            setAddressBalance(intValue)
            // console.log(`user deposit for ${testUser}:`, intValue)

        } catch (error){
            console.log(error)
        }
    }

    const getMilkBalance = async () => {
        try{
            const result = await contract.getMilkBalance(address)
            const intValue = parseInt(result._hex)
            setMilkBalance(intValue)
        } catch (error) {
            console.log(error)
        }
    }

    const emitMilk = async () => {
        try{
            const result = await contract.emitTokens(address)
            const intValue = parseInt(result._hex)
            // setMilkBalance(intValue)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <button onClick={deposit}>Deposit Eth</button>
            <button onClick={getUserDepositBalance}>update User Eth Balance</button>
            <button onClick={getMilkBalance}>update User Milk Balance</button>
            <button onClick={emitMilk}>Emit Milk</button>
            <p>Balance of address {address}: {addressBalance}</p>
            <p>User MILK balance {address}: {milkBalance}</p>

        </div>
    )
}

export default App;