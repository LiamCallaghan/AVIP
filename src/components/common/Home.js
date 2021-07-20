import React from 'react'
import InfoBar from './InfoBar'

class Home extends React.Component {

  render() {
    return (
      <section>
        <img className='logo' src='https://i.imgur.com/8QnElNS.png' alt='logo' />
        <div className='banner'><img className='mainLogo' src='https://i.imgur.com/Yiq5niK.png' alt='banner' /></div>
        <h1>Coming Soon</h1>
        <InfoBar />
      </section>
    )
  }
}

export default Home