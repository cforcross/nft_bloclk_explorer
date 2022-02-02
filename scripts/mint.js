const {ethers} = require('hardhat');
const cryptoBeetlesJson = require('../artifacts/contracts/CryptoBeetles.sol/CryptoBeetles.json');

async function main (){
    const abi = cryptoBeetlesJson.abi;
    const provider = new ethers.providers.InfuraProvider('rinkeby', process.env.RINKEBY_PROJECT_ID);
    const wallet = new ethers.Wallet(process.env.RINKEBY_KEY, provider);
    const signer = wallet.connect(provider);
    const cryptoBeetles = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer);
    await cryptoBeetles.mint(process.env.IPFS_HASH);
    console.log("Minted successfully");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
