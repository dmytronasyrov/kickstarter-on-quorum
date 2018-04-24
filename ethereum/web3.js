const Web3 = require('web3')

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  module.exports = new Web3(window.web3.currentProvider)
} else {
  const provider = new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws');
  //https://ropsten.infura.io/CUPMzVvwmEvEbkWA8zml
  // const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/CUPMzVvwmEvEbkWA8zml')
  // const provider = new Web3.providers.HttpProvider('ws://localhost:8545')
  module.exports = new Web3(provider)
}
