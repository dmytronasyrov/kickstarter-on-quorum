import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x0147b2D8DE040CC510574DD717Aa4BD62d67f3B1'
)
export default instance
