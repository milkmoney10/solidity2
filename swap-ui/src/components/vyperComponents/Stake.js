import React, {useState} from 'react'
import { ethers } from "ethers";

function App({provider, privateKey, wallet, contractAddress, abi, contract, secondAddress}){

    const stake = async () => {
        try {
            const tx = await contract.stake(1)
            await tx.wait()
            console.log('successful stake')
        } catch (error) {
            console.log(error)
        }
    }

    const getContractStakeBalance = async () => {
        try {
            const result = await contract.getStakingBalance()
            const intValue = parseInt(result._hex)
            console.log('total staked in contract: ', intValue)
        } catch (error) {
            console.log(error)
        }
    }

    const getUserStakeBalance = async () => {
        try {
            const testUser = '0x1BFa18A8F8dfeB57d46b9AA94f3474Db422548ab'
            // const result = await contract.getUserDepositedBalance(wallet['address'])
            const result = await contract.getUserStakingBalance(wallet['address'])
            const intValue = parseInt(result._hex)
            console.log(`user stake for ${wallet['address']}:`, intValue)
            // console.log(`user deposit for ${testUser}:`, intValue)
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <div>
            <button onClick={stake}>stake</button>
            <button onClick={getContractStakeBalance}>get contract total stake balance</button>
            <button onClick={getUserStakeBalance}>get user stake balance</button>
        </div>
    )
}

export default App;