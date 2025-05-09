import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();
import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";
import "./ignition/deploy.task";

const pvk = process.env.PRIVATE_KEY as string

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    base_sepolia: {
      accounts: [
        pvk
      ],
      url: "https://sepolia.base.org/"
    }
  }
};

export default config;