import React from 'react'
import './placed.css'
import img from '../../assets/menuicon.jpg'

const Placed = () => {
  return (
    <div className='placed'>
     <div className='placedItem'>
      <img className='img' src={img}/>
      <div>
      <span className='data'>2000+ Members</span><br/>
      <span className='objects'>ALREADY PLACED</span>
      </div>
     </div>
     <div className='placedItem'>
      <img className='img' src={img}/>
      <div> <span className='data'>46.7 LPA</span><br/>
      <span className='objects'>HIGHEST PACKAGE</span></div>
     
     </div>
     <div className='placedItem'>
      <img className='img' src={img}/>
      <div>
      <span className='data'>4.5x Increament</span><br/>
      <span className='objects'>AVERAGE CTC</span>
      </div>
     
     </div>
     <div className='placedItem'>
      <img className='img' src={img}/>
      <div><span className='data'>70% Certificate</span><br/>
      <span className='objects'>COMPLETION</span></div>
      
     </div>
    </div>
  )
}

export default Placed;