const axios = require('axios')

const CMCOracle = require('./cmcoracle')
const web3 = require('./web3')

console.log("Starting to listen for the event");

const event = CMCOracle.events.CallbackGetBTCCap({}, (error, result) => {
  console.log(error);
  console.log(result);
  // axios.get('https://api.coinmarketcap.com/v1/global/')
  //   .then(async resp => {
  //     const cmcJson = JSON.parse(b.toString())
  //     const btcMarketCap = parseInt(cmcJson.total_market_cap_usd)
  //
  //     try {
  //       const accounts = await web3.eth.getAccounts()
  //       await CMCOracle.methods.setBTCCap(btcMarketCap, { from: accounts[0] })
  //     } catch (err) {
  //       console.log("ORACLE ERR:", err)
  //     }
  //   })
})
console.log(event);
