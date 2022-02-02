const {ethers} = require('hardhat');

async function main (){
  const CryptoBeetles = await ethers.getContractFactory('CryptoBeetles');
  const cryptoBeetles = await CryptoBeetles.deploy("CryptoBeetles","CBET");

  await cryptoBeetles.deployed();
  console.log(`CryptoBeetles deployed at ${cryptoBeetles.address}`);

  const newItemId = await  cryptoBeetles.mint("https://ipfs.io/ipfs/''");//input ipfs hash
  console.log(`New Item ID: ${newItemId} minted successfully`);
    // mintNFT()

  // try {
    
  // } catch (error) {
  //   console.log(`CryptoBeetles deployment failed: ${error}`);
  // }
  // once deployed mint first nft
  // const mintNFT = async ()=>{
    // try {
    //   const newItemId = await  cryptoBeetles.mint("https://ipfs.io/ipfs/QmQgRw12Y5sBHTJxUdc4svFxLKmJaMnRqncNjH1JnQ1srs")
    //   console.log(`New Item ID: ${newItemId} minted successfully`);
    // } catch (error) {
    //   console.log(`Error minting NFT: ${error}`);
    // }
  //}
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
