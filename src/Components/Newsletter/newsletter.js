import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <span className='subscribe'>Subscribe to Newletter</span>
      <span className='subs'>Subscribe to our Newsletter to stay up-to-date on latest courses, updates, news and discounts from us.</span>
      <div className='email'>
      <input className='emaila' placeholder='Email Address' type="email"/>
      <button className='join'>Join now</button>
      </div>
    </div>
  )
}

export default Newsletter;