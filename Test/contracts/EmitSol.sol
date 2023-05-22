// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract EmitSol{
    string public name = "MILK";
    string public symbol = "MILK";
    uint256 public totalSupply = 1000000;

    mapping(address => uint256) public milkBalances;
    mapping(address => uint256) public ethBalances;
    mapping(address => uint256) public lastEmitTime;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Deposit(address indexed depositor, uint256 amount);
    event Emit(address indexed recipient, uint256 amount);

    constructor() {
        milkBalances[msg.sender] = totalSupply;
    }

    function deposit() public payable {
        require(msg.value > 0, "Must deposit a positive amount");

        uint256 amount = msg.value;
        ethBalances[msg.sender] += amount;
        emit Deposit(msg.sender, amount);

        emitTokens(msg.sender);
    }

    function emitTokens(address recipient) internal {
        uint256 currentTimestamp = block.timestamp;
        uint256 timeElapsed = currentTimestamp - lastEmitTime[recipient];
        uint256 tokensToEmit = timeElapsed * 11;

        milkBalances[recipient] += tokensToEmit;
        lastEmitTime[recipient] = currentTimestamp;
        emit Emit(recipient, tokensToEmit);
    }

    function transfer(address _to, uint256 _value) public returns (bool){
        require(_to != address(0), "invalid recipient address");
        require(_value <= milkBalances[msg.sender], "insufficient balance");
        
        milkBalances[msg.sender] -= _value;
        milkBalances[_to] += _value;

        emit Transfer(msg.sender, _to, _value);
        return true;

    }

    function userDepositedBalance(address _owner) public view returns (uint256) {
        return ethBalances[_owner];
    }

    function getMilkBalance(address _owner) public view returns (uint256) {
        return milkBalances[_owner];
    }

}