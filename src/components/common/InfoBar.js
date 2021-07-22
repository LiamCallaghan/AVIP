import React from 'react'

const InfoBar = () => {
  return (
    <section className='infoBar'>
      <div className='emailInput'>
        <input placeholder='@'></input>
      </div>
      <div className='socialBox'>
        <button><img className='socialIcon' src='https://i.imgur.com/hdnmUWo.png' /></button>
        <button><img className='socialIcon' src='https://i.imgur.com/HssvT9b.png' /></button>
      </div>
    </section>
  )
}

export default InfoBar