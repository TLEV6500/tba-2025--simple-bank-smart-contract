import { task } from "hardhat/config";

task<string>("deploy", "Deploy a smart contract in the `contracts` directory with the specified `ContractName`")
    .addParam<string>("contractName", "the smart contract's name")
    .setAction(async (args, hre) => {
        const contractName = args.contractName;
        console.log(`Deploying contract "${contractName}"...`);
        if (contractName.length == 0) throw new Error("Invalid argument to `npm run deploy` script, usage: `npm run deploy -- <ContractName>`");

        const contract = await hre.ethers.deployContract(contractName);
        await contract.waitForDeployment();
        console.log(`Contract "${contractName}" deployed to ${await contract.getAddress()}`);
        console.log(`Here is the abi for ${contractName}:`);
        const abi = (await hre.artifacts.readArtifact(contractName)).abi;
        console.log(JSON.stringify(abi))
    })