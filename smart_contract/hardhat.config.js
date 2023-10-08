//https://eth-sepolia.g.alchemy.com/v2/DM7x-veYtfF5QuSkUbRW7OHJSwCh3e5Z
//0xC7a556954a68087d334A53faC058053210A5BC0C

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/DM7x-veYtfF5QuSkUbRW7OHJSwCh3e5Z',
      accounts: ['c064c081b28a7f2324592bbf257c4664c563d99f3d64296919e4c34662d56544'],
    },
  },
};