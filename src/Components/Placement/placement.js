import React from 'react'
import './placement.css'
import img from '../../assets/girlimage.png'
import head from '../../assets/head.png'
import byju from '../../assets/byjulogo.png'
import arrow from '../../assets/arrow.png'

const Placement = () => {
  return (
    <div className='placement'>
      <span className='placement-heading'>Placement <span className='number'>Highlights</span></span>
      <div className='main'>
        <div className='photopluscontent'>
        <div className='photo'>
           <img className='girlimage' src={img}/>
           <span className='ed'>Ed Trefzger</span>
        </div>
        <div className='content'>
          <span className='content-heading'>"The best decision I made during my transition to the PM role"</span>
          <span className='content-para'>After having a friendly chat with Rohan over LinkedIn, I joined the cohort, and joining the cohort was the best decision I made during my transition to a core PM role.  The sessions conducted by Rohan were always collaborative and knowledgeable, and at the end of it, we were all quite clear about what was expected from us in the role.</span>
        </div>
        </div>
        <div className='images'>
          <div className='containbyju'>
          <button className='byju-button'>
            <img className='byjuimg' src={byju}/>
            <span className='analytics'>Analytics<br/> Consultant</span>
          </button>
          </div>
          <div className='containarrow'>
            <img className='arrow' src={arrow}/>
          </div>
          <div className='containhead'>
          <button className='head-button'>
            <img className='head' src={head}/>
            <span className='consultant'>Analytics<br/>Consultant</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Placement;