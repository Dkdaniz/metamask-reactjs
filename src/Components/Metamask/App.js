import React, { Component } from 'react'
import MetamaskChecker from '@metamask-checker/react'
 
import Loader from './components/Loader'
import Err from './components/Error'
import Content from './components/Content'
 
class App extends Component {
 
  async initialize (provider, account, network) {
    console.log(provider, account, network)
  }
 
  render () {

    const props = {
      /* Ethereum network_id (numeric) which should be selected in Metamask */
      // network : null,
 
      /* Ethereum account (address) which should be selected in Metamask */
      // account : null,
 
      /* Function which executes on checking error */
      // onCheckError   : async (error) => null,
 
      /* Function which executes on checking success */
      onCheckSuccess : async (provider, account, network) => await this.initialize(provider, account, network),
 
      renderDefault : () => <Loader />,
 
      renderErrored : error => <Err message={error.message || 'Unexpected error'} />,
 
      renderChecked : (provider, account, network) => <Content />
    }
 
    return <MetamaskChecker {...props} />
  }
}

export default App;