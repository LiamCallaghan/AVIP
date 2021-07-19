import React from 'react'
import InfoBar from './InfoBar'
import avip from '/Users/liam/Development/avip/src/images/AVIP.png'
import oneBrackets from '/Users/liam/Development/avip/src/images/-1.png'

class Home extends React.Component {

  render() {
    return (
      <section>
        <img className='logo' src={oneBrackets} alt='logo' />
        <div className='banner'><img className='mainLogo' src={avip} alt='banner' /></div>
        <h1>Coming Soon</h1>
        <InfoBar />
      </section>
    )
  }
}

export default Home