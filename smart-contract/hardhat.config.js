require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/_cqfxl5yx4HFvVpPh0HgNOwKHpYANpiX',
      accounts: [
        '0x07e307abF88E82c69D67890a448562814Ca19Bcc',
      ],
    },
  },
}
