# Vyper 0.3.7

# A simple ERC20 token contract that allows the contract owner to mint new tokens

# MILK token parameters
name: public(String[4])
symbol: public(String[4])
decimals: public(uint256)
total_supply: public(uint256)

emitRate: public(uint256)
lastEmitTime: public(uint256)

depositors: DynArray[uint256, 1024]
##iterate over depositors list. add to depositors list in the deposit function


depositorCount: public(uint256)
##index for depositors

# A mapping of balances for each address
balances: public(HashMap[address, uint256])

# a mapping of user addresses to their deposited balances
deposit_balances: public(HashMap[address, uint256])

# a public variable to keep track of the total deposits made to the contract
total_deposits: public(uint256)


# The contract owner
#owner: address
owner: public(address)

# The event that gets emitted on token transfer
# Transfer: event({_from: indexed(address), _to: indexed(address), _value: uint256})

event Transfer:
    _from: address
    _to: address
    _value: uint256

event Deposit:
    _sender: address
    _amount: uint256

event EmitTokens:
    _sender: address
    _amount: uint256

#######################testing

DepositorList: public(DynArray[address, 1024]) 



# Initialize the MILK token
@external
def __init__():
    self.name = "MILK"
    self.symbol = "MILK"
    self.decimals = 18
    self.total_supply = 1000000
    self.balances[msg.sender] = self.total_supply
    self.owner = msg.sender
    
    self.emitRate = 11
    self.lastEmitTime = block.timestamp
    self.depositorCount = 0

    # self.TokenBalances = []


# Transfer tokens from the sender to the recipient
@external
def transfer(_to: address, _value: uint256) -> bool:
    assert _to != empty(address), "Invalid recipient address."
    assert _value <= self.balances[msg.sender], "Insufficient balance."
    self.balances[msg.sender] -= _value
    self.balances[_to] += _value
    log Transfer(msg.sender, _to, _value)
    return True

# Get the balance of tokens for a specific address
@external
@view
def balanceOf(_owner: address) -> uint256:
    # return self.balances[msg.sender]
    return self.balances[_owner]

# Mint new tokens and add them to the total supply
@external
def mint(_to: address, _value: uint256) -> bool:
    assert msg.sender == self.owner, "Only the contract owner can mint new tokens."
    assert _to != empty(address), "Invalid recipient address."
    self.total_supply += _value
    self.balances[_to] += _value
    log Transfer(empty(address), _to, _value)
    return True

@external
@view
def get_owner_address() -> address:
    return self.owner


# @external
# def test_arrays() -> :
#     self.tokenBalances.append(50)
#     return self.tokenBalances

@external
@payable
def deposit():
    assert msg.value > 0, "Must deposit a positive amount" # validate the deposit amount is greater than zero
    self.deposit_balances[msg.sender] += msg.value # add the deposited amount to the sender's balance

    self.total_deposits += msg.value # add the deposited amount to the total deposits
    self.DepositorList.append(msg.sender)
    self.depositorCount += 1
    log Deposit(msg.sender, msg.value) # emit an event log of the deposit
    # log EmitTokens(msg.sender, msg.value)

@view
@external
def getDepositedBalance() -> uint256:
    return self.total_deposits #returns the full deposited balance for the contract
    # return self.balances[msg.sender] # return the deposited balance for the current user

@view
@external
def getUserDepositedBalance(user: address) -> uint256:
    return self.deposit_balances[user] # return the deposited balance for a specific user


@external
def emitTokens():
    currentTimestamp: uint256 = block.timestamp
    timeElapsed: uint256 = currentTimestamp - self.lastEmitTime
    tokensToEmit: uint256 = timeElapsed * self.emitRate
    # tokensToEmit: uint256 = 3020

    for i in self.DepositorList:
        pass
        #each depositor will receive X amount of tokens in X period
        #so just update each user's balance during the loop
        # depositorAddress: address = self.depositors[i]
        self.balances[i] += tokensToEmit
        self.total_supply += tokensToEmit

    self.lastEmitTime = currentTimestamp
    #this will require user to call the function in order to update token balances
    