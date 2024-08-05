import React from 'react'
import './intro.css';
import Image from '../../assets/imagebackground.png'

const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro-main'>
       <span className='empower'>
       Empower your product<br/>
       management journey
       </span>
       <span className='unlock'>
       Unlock Your Potential with Expert-Led Learning and<br/> Community Support
       </span>
       <span className='reviews'>
        <span className='number'>4.8 </span>500+ Student Reviews
       </span>
       <button className='book'>Book a 1:1 Mentor Call </button>
       <button className='getstarted'>
        Get Started 
       </button>
      </div>
      <div>
        <img className='image' src={Image}/>
      </div>
    </div>
  )
}

export default Intro;