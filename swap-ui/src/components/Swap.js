import React, {useState, useEffect} from 'react'
import { ethers } from "ethers";

function App({wallet, contractAddress, abi, contract, secondAddress}){
    const [ethBalance, setEthBalance] = useState('0')
    const [ethBalance2, setEthBalance2] = useState('0')
    const [contractBalance, setContractBalance] = useState(0)
    const [address, setAddress] = useState(wallet['address'])
    const [amountIn, setAmountIn] = useState(0);
    const [amountOut, setAmountOut] = useState(0);
    const [inputValueIn, setInputValueIn] = useState('');
    const [inputValueOut, setInputValueOut] = useState('');

    const [ownerBalance, setOwnerBalance] = useState(0)
  
    useEffect(() => {

        const interval = setInterval(() => {
            getEthBalance(address, secondAddress)
            getContractBalance()
            getOwnerBalance()
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const getEthBalance = async (address1, address2) => {
        try{
            const result = await contract.getEthBalance(address1)
            const result2 = await contract.getEthBalance(address2)
            const intValue = parseInt(result._hex)
            const intValue2 = parseInt(result2._hex)
            const parsedBalance = (intValue / 1e18).toFixed(2)
            const parsedBalance2 = (intValue2 / 1e18).toFixed(2)
            setEthBalance(parsedBalance)
            setEthBalance2(parsedBalance2)
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChangeIn = (event) => {
        setInputValueIn(event.target.value);
      };
    
    const handleInputChangeOut = (event) => {
        setInputValueOut(event.target.value);
    };

    const handleButtonClick = () => {
        if (inputValueIn !== '') {
            setAmountIn(Number(inputValueIn));
            }
        if (inputValueOut !== '') {
            setAmountOut(Number(inputValueOut));
            }
    };

    const trade = async () => {
        try {
            const send = ethers.utils.parseEther('0.01')
            const receive = ethers.utils.parseEther('0.02')
            const tx = await contract.deposit({value:send})
            const response = await contract.swap(receive, address)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const deposit = async () => {
        try {
            const value = ethers.utils.parseEther('0.01')
            const tx = await contract.deposit({value: value})
        } catch (error){
            console.log(error)
        }
    }

    const getContractBalance = async() => {
        try{
            const result = await contract.contractBalance()
            const intValue = parseInt(result._hex)
            const parsedBalance = (intValue / 1e18).toFixed(2)
            setContractBalance(parsedBalance)
           
        } catch(error) {
            console.log(error)
        }
    }
    
    const getOwnerBalance = async () => {
        try {
            const result = await contract.userBalance(address)
            const intValue = parseInt(result._hex)
            const parsedBalance = (intValue / 1e18).toFixed(2)
            setOwnerBalance(parsedBalance)
        } catch(error){
            console.log(error)
        }
    }

    const test = async () => {
        try {
            const amountOut = ethers.utils.parseEther('0.01')
            const value = ethers.utils.parseEther('0.01')
            const swapTx = await contract.testing(amountOut, { value: value });
            await swapTx.wait();
        } catch(error) {
            console.log(error)
        }
    }
    return(
        <div>
            <p>swap.js</p>
            <button onClick={deposit}>Deposit 0.01 eth</button>
            
            <p>Eth balance for {address}: {ethBalance} eth</p>
            <p>Eth balance for {secondAddress}: {ethBalance2} eth</p>
            <p>Eth balance for contract balances[msg.sender]: {contractBalance} eth</p>
            <p>balances[_owner]: {ownerBalance}</p>
            <input value={inputValueIn} onChange={handleInputChangeIn} />
            <input value={inputValueOut} onChange={handleInputChangeOut} />
            <button onClick={handleButtonClick}>Set Amounts</button>
            <p>Current amountIn: {amountIn}</p>
            <p>Current amountOut: {amountOut}</p>
            {/* <button onClick={swap}>Swap {amountOut} eth for {amountIn} eth</button> */}
            <button onClick={trade}>Trade</button>
            <button onClick={test}>test</button>
        </div>
    )
}

export default App;