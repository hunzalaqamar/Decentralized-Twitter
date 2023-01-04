# Decentralized-Twitter
This is a DAPP which is a twitter clone, it's front-end is made in reactjs and backend is a solidity contract

Configure the hardhat.config file in server folder first before running the project the url will come from Alchemy and the network will be the private key from your metamask wallet

# To Start

0. run command "npm i" and if it gives any error of security or something then type "npm i -f".
1. Configure the hardhat.config file in server folder.
2. Have some fake ether in your Goerli test network using goerli faucet.
3. now navigate to your server folder and open cmd and type "npx hardhat run scripts/deploy.js --network goerli".
4. Now your contract is deployed and it will give an address in the cmd which will be used to track the transaction in Goerli etherscan website. just google goerli etherscan and paste that address into the searchbar you'll be able to see the transaction in which your contract is being deployed in the goerli testnet.
5. Now navigate to client folder and run command "npm i -f".
6. Now run command "npm start".
7. Connect your metamask wallet and have fun.
