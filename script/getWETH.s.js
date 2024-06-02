const { ethers, getNamedAccounts, network } = require("hardhat")
const AMOUNT = ethers.utils.pardeEther("0.02")

async function getWeth(){
    const {deployer} = await getNamedAccounts()
//call the deposit function on WETH 
//ABI. CONTRACT ADDRESSS // 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
    const iweth = await ethers.getContractAt("iweth", "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", deployer)
    const tx = await iweth.deposit({Value : AMOUNT})
    await tx.wait(1)
    const wethBalance = await iWeth.balanceOf(deployer)
    console.log(`Got ${wethBalance.toString()} WETH`)
}

module.exports = {getWeth}