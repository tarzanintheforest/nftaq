// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const ExampleNfts = await hre.ethers.getContractFactory("ExampleNfts");
  const exampleNfts = await ExampleNfts.deploy();

  await exampleNfts.deployed();

  console.log("Example Nft's deployed to:", exampleNfts.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  //0x0def831691c1216e96dab5739624a081aa721fcd