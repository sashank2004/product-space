import React from 'react';
import './connect.css';
import triangle from '../../assets/triangle.png'
import globe from '../../assets/globe.png'

const Connect = () => {
  return (
    <div className='connect'>
      <div className='connect-main'>
      <span className='want'>Want to know if PM is the right fit <span className='number'>for you</span>?</span>
      <span className='unlockyour'>Unlock Your Potential with Expert-Led Learning and Community Support. </span>
      <div className='buttons'>
        <button className='meet'>Meet 1-1 with Mentors</button>
        <button className='student'>Connect with Student</button>
      </div>
      </div>
    </div>
  )
}

export default Connect;