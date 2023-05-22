import ape 
import pytest


# Standard test comes from the interpretation of EIP-20
ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"

# def test_initial_state(token, owner):
#     assert token.name() == 'MILK'
#     assert token.symbol() == 'MILK'
#     print(token.symbol())
#     assert token.decimals == 15

def test_deposit(token, owner, depositor):
    tx = token.deposit(value=3, sender=depositor)
    # print(token)
    # assert token.depositorCount() == 1
    # assert token.total_deposits() == 3
    # print(token.DepositorList(0), depositor)


    
    tx = token.emitTokens(sender=depositor)
    print(token.total_supply())
    assert breaking 

# def test_deposit(test, owner, depositor):
#     tx = test.deposit(value=3, sender=depositor)
#     print('********************')
#     print(test.total_supply())
#     print(test.TokenBalances(0))
#     assert breaking



# def test_deposit(token, owner, depositor):
    
    #token.deposit()
    # tx = token.approve(depositor, 300, sender=owner)
    # logs = list(tx.decode_logs(token.Approval))
    #token.Approval uses the event Approval i think, use again for deposit

# def test_deposit_and_stake(token, depositor):
#     deposit_amount = 100
#     tx = token.deposit(value=deposit_amount, sender=depositor)
#     logs = list(tx.decode_logs(token.Deposit))
#     print(logs)

#     # Verify the balance was updated correctly
#     assert token.balances(depositor) == deposit_amount
#     print(token.balances(depositor), '**deposit balance**')
    
#     # test staking function

#     stake_amount = 10
#     tx = token.stake(stake_amount, sender=depositor)
#     logs = list(tx.decode_logs(token.Stake))
#     print(token.balances(depositor), '**deposit balance**')
#     print(token.stakedBalances(depositor), '**staking balance**')

#     assert token.stakedBalances(depositor) == 10

#     assert breaking
 