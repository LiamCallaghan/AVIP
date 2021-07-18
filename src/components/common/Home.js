import React from 'react'
import avip from '/Users/liam/Development/avip/src/images/AVIP.png'

class Home extends React.Component {

  render() {
    return (
      <section>
        <img className='banner' src={avip} alt='banner' />
      </section>
    )
  }
}

export default Home