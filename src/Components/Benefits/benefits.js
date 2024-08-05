import React from 'react'
import './benefits.css'
import mentor from '../../assets/mentorshipimage.png'
import session from '../../assets/livesession.png'
import industry from '../../assets/industry.png'
import interview from '../../assets/interview.png'

const Benefits = () => {
  return (
    <div className='benefits'>
      <span className='benefits-heading'>
        <span className='number'>Benefits</span> of joining Product Space
      </span>
      <div className='benefits-content'>
        <div className='mentorship'>
          <div className='mentorship-content'>
           <span className='ment'><span className='number'>1:1 </span>Mentorship</span>
           <span className='ment-para'>After having a friendly chat with Rohan over LinkedIn, I joined the cohort, and joining the cohort was the best decision I made during my transition to a core PM role.  The sessions conducted by Rohan were always collaborative and knowledgeable, and at the end of it, we were all quite clear about what was expected from us in the role.</span>
          </div>
          <img className='imag' src={mentor}/>
        </div>
        <div className='mentorship'>
          <div className='mentorship-content'>
           <span className='ment'><span className='number'>Live </span>Sessions</span>
           <span className='ment-para'>After having a friendly chat with Rohan over LinkedIn, I joined the cohort, and joining the cohort was the best decision I made during my transition to a core PM role.  The sessions conducted by Rohan were always collaborative and knowledgeable, and at the end of it, we were all quite clear about what was expected from us in the role.</span>
          </div>
          <img className='imag' src={session}/>
        </div>
        <div className='mentorship'>
          <div className='mentorship-content'>
           <span className='ment'><span className='number'>Industry </span>Alligned</span>
           <span className='ment-para'>After having a friendly chat with Rohan over LinkedIn, I joined the cohort, and joining the cohort was the best decision I made during my transition to a core PM role.  The sessions conducted by Rohan were always collaborative and knowledgeable, and at the end of it, we were all quite clear about what was expected from us in the role.</span>
          </div>
          <img className='imag' src={industry}/>
        </div>
        <div className='mentorship'>
          <div className='mentorship-content'>
           <span className='ment'><span className='number'>Interview </span>Focused</span>
           <span className='ment-para'>After having a friendly chat with Rohan over LinkedIn, I joined the cohort, and joining the cohort was the best decision I made during my transition to a core PM role.  The sessions conducted by Rohan were always collaborative and knowledgeable, and at the end of it, we were all quite clear about what was expected from us in the role.</span>
          </div>
          <img className='imag' src={interview}/>
        </div>
      </div>
    </div>
  )
}

export default Benefits;