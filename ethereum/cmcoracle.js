const web3 = require('./web3')
const CMCOracle = require('./build/CMCOracle.json')

module.exports = new web3.eth.Contract(
  JSON.parse(CMCOracle.interface),
  '0xE98f4cd15B283BA6e216EFD1196D83aDc6B5FCB0'
)
