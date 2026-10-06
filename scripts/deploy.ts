const hre = require("hardhat");

async function main() {
  const ProofTrack = await hre.ethers.getContractFactory("ProofTrack");
  const proofTrack = await ProofTrack.deploy();

  await proofTrack.waitForDeployment();

  console.log(`ProofTrack deployed to ${await proofTrack.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
