import React, { useState } from 'react'
import './faqs.css'
import lower from '../../assets/lower.png'

const Faqs = () => {
  const [show1,setshow1]=useState(false);
  const [show2,setshow2]=useState(false);
  const [show3,setshow3]=useState(false);
  const [show4,setshow4]=useState(false);
  const [show5,setshow5]=useState(false);
  return (
    <div className='
    faqss'>
      <div className='faqs'>
      <span className='faq'>Frequently Asked Questions(FAQs)</span>
      </div>
      <div className='all'>
      <div className='cont'>
       <span onClick={()=>{
        setshow1(!show1);
       }}>Who is eligible to apply for the product fellowship cohort?</span>
       <img onClick={()=>{
        setshow1(!show1);
       }} className='lower' src={lower}/>
      </div>
      <span className='random' style={{display:show1? 'flex':"none"}}>Anyone having enthusiasm of learning can participate</span>
      <div className='cont'>
       <span onClick={()=>{
        setshow2(!show2);
       }}>What is the price for the product fellowship cohort?</span>
       <img onClick={()=>{
        setshow2(!show2);
       }} className='lower' src={lower}/>
      </div>
      <span className='random' style={{display:show2? 'flex':"none"}}>Reasonable (in your budget only)</span>
      
      <div className='cont'>
       <span onClick={()=>{
        setshow3(!show3);
       }}>When does the next cohort begin?</span>
       <img onClick={()=>{
        setshow3(!show3);
       }} className='lower' src={lower}/>
      </div>
      <span className='random' style={{display:show3? 'flex':"none"}}>within next 25 days</span>

      <div className='cont'>
       <span onClick={()=>{
        setshow4(!show4);
       }}>Do i get a certificate post the completion of the cohort?</span>
       <img onClick={()=>{
        setshow4(!show4);
       }} className='lower' src={lower}/>
      </div>
      <span className='random' style={{display:show4? 'flex':"none"}}>Yes you will get a Certificate</span>

      <div className='cont'>
       <span onClick={()=>{
        setshow5(!show5);
       }}>Can i connect with the past alumni?</span>
       <img onClick={()=>{
        setshow5(!show5);
       }} className='lower' src={lower}/>
      </div>
      <span className='random' style={{display:show5? 'flex':"none"}}>Don't worry we will help you connect</span>
      </div>
    </div>
  )
}

export default Faqs;