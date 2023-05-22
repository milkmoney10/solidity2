// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract P2PSwap {
    mapping(address => uint256) public balances;
    mapping(address => uint256) public ethBalance;
    mapping(address => mapping(address => uint256)) public allowed;


    event Deposit(address indexed account, uint256 amount);
    event Withdraw(address indexed account, uint256 amount);
    event Swap(address indexed sender, uint256 amountOut);
    event Test(address indexed sender, uint256 amountIn, uint256 amountOut);
    
    function deposit() public payable {
        require(msg.value > 0, "Must deposit a positive amount");

        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) public {
        require(amount > 0, "Must withdraw a positive amount");
        require(amount <= balances[msg.sender], "Insufficient balance");

        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
        emit Withdraw(msg.sender, amount);
    }

    function testing(uint256 amountOut) external payable {
        require(msg.value > 0, "Amount must be greater than zero");
        require(amountOut > 0, "Amount out must be greater than zero");
        require(balances[msg.sender] >= msg.value, "Insufficient balance");

        uint256 amountIn = msg.value;
        uint256 calculatedAmountOut = amountIn * amountOut;

        balances[msg.sender] -= amountIn;
        balances[msg.sender] += calculatedAmountOut;

        emit Test(msg.sender, amountIn, calculatedAmountOut);
    }

    // function swap(uint256 amountIn, uint256 amountOut, address recipient) external {
    //     require(amountIn > 0, "Amount in must be greater than zero");
    //     require(balances[msg.sender] >= amountIn, "Insufficient balance");

 

    //     balances[msg.sender] -= amountOut;
    //     payable(recipient).transfer(amountOut);

    //     emit Swap(msg.sender, amountIn, amountOut);
    // }


    //i think that the amountOut can only be calculated
    //from within the function, it cannot be dictated  duriing a function call
    //that is how it would work in an AMM
    function swap(uint256 amountOut, address recipient) external{
        // require(amountIn > 0, "Amount in must be greater than zero");
        // require(balances[msg.sender] >= amountIn, "Insufficient balance");

        balances[msg.sender] -= amountOut;
        payable(recipient).transfer(amountOut);

        emit Swap(msg.sender, amountOut);
    }

    function getEthBalance(address _owner) public view returns (uint256) {
        return _owner.balance;
    }

    function contractBalance() public view returns(uint256){
        return balances[msg.sender];
    }

    function userBalance(address _owner) public view returns(uint256){
        return balances[_owner];
    }
}
