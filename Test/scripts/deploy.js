const { ethers } = require("hardhat");




async function main() {
 
  // const Contract = await ethers.getContractFactory("Token");
  const Contract = await ethers.getContractFactory("P2PSwap")
  const contract = await Contract.deploy();
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
}); 

