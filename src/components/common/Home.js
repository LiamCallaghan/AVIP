import React from 'react'
import avip from '/Users/liam/Development/avip/src/images/AVIP.png'
import oneBrackets from '/Users/liam/Development/avip/src/images/-1.png'

class Home extends React.Component {

  render() {
    return (
      <section>
        <img className='logo' src={oneBrackets} alt='logo' />
        <img className='banner' src={avip} alt='banner' />
      </section>
    )
  }
}

export default Home