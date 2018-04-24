import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'

import web3 from '../ethereum/web3'
import factory from '../ethereum/factory'
import cmcoracle from '../ethereum/cmcoracle'
import { Link } from '../routes'

import Layout from '../components/Layout'

class CampaignIndex extends Component {

  static async getInitialProps () {
    const campaigns = await factory.methods.getDeployedCampaigns().call()

    const accounts = await web3.eth.getAccounts()
    const btcCapBefore = await cmcoracle.methods.getBTCCap().call()
    console.log("CAP BEFORE:", btcCapBefore);
    const res = await cmcoracle.methods.updateBTCCap().call()
    console.log("RES:", res);
    const btcCapAfter = await cmcoracle.methods.getBTCCap().call()
    console.log("CAP AFTER:", btcCapAfter);

    return { campaigns }
  }

  renderCampaigns () {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${ address }`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      }
    })

    return <Card.Group items={ items } />
  }

  render () {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button floated="right" content="Create Campaign" icon="add circle" primary/>
            </a>
          </Link>

          { this.renderCampaigns() }
        </div>
      </Layout>
    )
  }
}

export default CampaignIndex
