const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const campaignFactory = require('./build/CampaignFactory.json')
const cmcOracle = require('./build/CMCOracle.json')

const provider = new HDWalletProvider(
  'decrease affair earth jar focus grief stairs device sunset retreat option timber',
  // 'http://localhost:8545'
  // 'https://rinkeby.infura.io/CUPMzVvwmEvEbkWA8zml'
  'https://ropsten.infura.io/CUPMzVvwmEvEbkWA8zml'
)
const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()

  console.log('Attempting to deploy from account:', accounts[0])

  const campaignFactoryResult = await new web3.eth.Contract(JSON.parse(campaignFactory.interface))
    .deploy({ data: campaignFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] })
  console.log('CampaignFactory deployed to', campaignFactoryResult.options.address)

  const cmcOracleResult = await new web3.eth.Contract(JSON.parse(cmcOracle.interface))
    .deploy({ data: cmcOracle.bytecode })
    .send({ gas: '1000000', from: accounts[0] })
  console.log('CMCOracle deployed to', cmcOracleResult.options.address);
}
deploy()
