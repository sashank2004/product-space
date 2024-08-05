import React from 'react'
import './end.css'

const End = () => {
  return (
    <div className='end'>
      <div className='productspace'>
        <span className='p'>P_</span>
        <span className='capital'>PRODUCT<br/>SPACE</span>
        <span className='agreat'>A Great Place to Upskill</span>
        <span className='copyright'>Ⓒ Propel Learnings</span>
      </div>
      <div className='other'>
        <div className='resources'>
          <span className='resource'>RESOURCES</span>
          <span className='terms'>Terms and Conditions</span>
          <span className='privacy'>Privacy policy</span>
          <span className='refund'>Refund Policy</span>
          <span className='contactus'>Contact us</span>
        </div>
        <div className='follow'>
          <span className='followus'>FOLLOW US</span>
          <div className='linkedin'>Linkedin</div>
          <div className='discord'>Discord</div>
        </div>
      </div>
    </div>
  )
}

export default End;