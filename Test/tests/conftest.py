import pytest
from ape import Contract
from eip712.messages import EIP712Message


@pytest.fixture(scope="session")
def Permit(chain, token):
    class Permit(EIP712Message):
        _name_: "string" = "TestToken"
        _version_: "string" = "1.0"
        _chainId_: "uint256" = chain.chain_id
        _verifyingContract_: "address" = token.address
  
        owner: "address"
        spender: "address"
        value: "uint256"
        nonce: "uint256"
        deadline: "uint256"


    return Permit
 


@pytest.fixture(scope="session")
def owner(accounts):
    print(accounts)
    return accounts[0]

@pytest.fixture(scope="session")
def token(owner, project):
    
    print(owner)
    print(project)

    print('********************************')
    return owner.deploy(project.Test2)

@pytest.fixture(scope="session")
def depositor(accounts):
    return accounts[3]

@pytest.fixture(scope="session")
def test(owner, project):
    return owner.deploy(project.Test)











# @pytest.fixture(scope="session")
# def receiver(accounts):
#     return accounts[1]

# @pytest.fixture(scope="session")
# def asset():
#     return Contract("0x6B175474E89094C44Da98b954EedeAC495271d0F")  # DAI Ethereum Mainnet

# @pytest.fixture(scope="session")
# def depositor(accounts):
#     return accounts[3]

# @pytest.fixture(scope="session")
# def token(owner, project):
#     return owner.deploy(project.Token)

# @pytest.fixture(scope="session")
# def staker(accounts):
#     return(accounts[3])