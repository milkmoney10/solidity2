# # @version 0.3.7

# #address where deposited tokens are held
# deposit_address: address



# # a mapping of user addresses to their deposited balances
# deposit_balances: public(HashMap[address, uint256])
# # a mapping of user addresses to their staked balances
# staking_balances: public(HashMap[address, uint256])
# #a mapping of user user milk balance
# milk_balance: public(HashMap[address, uint256])


# total_deposits: public(uint256) # a public variable to keep track of the total deposits made to the contract
# total_staking: public(uint256)# a public variable to keep track of the total stakes made to the contract


# balances: public(HashMap[address, uint256])
# #erc20 token parameters

# name: public(String[5])
# symbol: public(String[5])
# decimals: public(uint256)
# totalSupply: public(uint256)
# balancesToken: public(HashMap[address, uint256])
 
# lastBlockNumber: public(uint256)
# milkPerBlock: public(uint256)



# event Deposit:
#     _sender: address
#     _amount: uint256

# event Stake:
#     _sender: address
#     _amount: uint256

# #event emitted when an ERC20 token is emitted

# event ERC20Token:
#     _sender: address
#     _recipient: address
#     _amount: uint256

# event Transfer:
#     _from: address
#     _to: address
#     _value: uint256

# @external
# def __init__():
#     self.deposit_address = msg.sender
#     self.name = "milk"
#     self.symbol = "milk"
#     self.decimals = 18
#     self.totalSupply = 1000000
#     self.balances[msg.sender] = self.totalSupply

#     self.lastBlockNumber = block.number
#     self.milkPerBlock = 1

 
# @external
# @payable
# def deposit():
#     assert msg.value > 0, "Must deposit a positive amount" # validate the deposit amount is greater than zero
#     self.deposit_balances[msg.sender] += msg.value # add the deposited amount to the sender's balance
#     self.total_deposits += msg.value # add the deposited amount to the total deposits
#     log Deposit(msg.sender, msg.value) # emit an event log of the deposit

# @view
# @external
# def getDepositedBalance() -> uint256:
#     return self.total_deposits #returns the full deposited balance for the contract
#     # return self.balances[msg.sender] # return the deposited balance for the current user

# @view
# @external
# def getUserDepositedBalance(user: address) -> uint256:
#     return self.deposit_balances[user] # return the deposited balance for a specific user




















# @external
# @payable
# def stake(amount: uint256):
#     assert amount > 0, "Must be a positive amount"
#     assert self.deposit_balances[msg.sender] >= amount, "Not enough balance to stake"
#     self.deposit_balances[msg.sender] -= amount
#     # self.total_deposits -= amount
#     self.staking_balances[msg.sender] += amount
#     self.total_staking += amount
#     log Stake(msg.sender, msg.value)



# @view
# @external
# def getStakingBalance() -> uint256:
#     return self.total_staking

# @view
# @external
# def getUserStakingBalance(user: address) -> uint256:
#     return self.staking_balances[user]







# @view
# @external 
# def getOne() -> uint256: 
#     return 1

# @view
# @external
# def get_eth_balance(addr: address) -> uint256:
#     return addr.balance


# # # Zero address constant
# # ZERO_ADDRESS: address = 0x0000000000000000000000000000000000000000
# #replace all instances of ZERO_ADDRESS with empty(address) to fix any
# #zero address errors