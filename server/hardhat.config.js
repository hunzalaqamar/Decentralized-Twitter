require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "goerli",

  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/VFzv69UEIT2Kp4-i7hcGfCZueMA4x26_",
      accounts: [
        "0723d714176d6ef5c87f29d0ea57135c7c757c912665f6ed6a9101cd73545d3b",
      ],
    },
  },
};
