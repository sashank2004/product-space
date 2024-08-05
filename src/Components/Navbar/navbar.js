import React, { useState } from 'react'
import './navbar.css';
import menu from '../../assets/menuicon.jpg'

const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <div className='navbar'>
        <div className='navbar-heading'>
        <span className='navbar-date'>NEXT COHORT STARTS: 22ND JUNE</span>
        <div className='navbar-deadline'>
        <span className='days'>25 DAYS TO GO</span>
         </div>
        </div> 
      <div className='navbar-main'>
      <span className='productspace'>Product <span className='space'>Space</span></span>
        <div className='headers'>
        <div>PM Fellowship Course</div>
        <div>Scholarship</div>
        <div>Masterclass</div>
        <div>Resources</div>
        <div>Contact</div>
        </div>
        <div className='mobMenu'>
          <span className='menuword'>Menu</span>
        <img src={menu} alt="Menu" onClick={
        ()=>{
          setShowMenu(!showMenu)
        }
       }/>
        </div>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
        <div className='listItem' onClick={
        ()=>{
          setShowMenu(false)
        }
       }>PM Fellowship Course</div>
        <div className='listItem' onClick={
        ()=>{
          setShowMenu(false)
        }
       }>Scholarship</div>
        <div className='listItem' onClick={
        ()=>{
          setShowMenu(false)
        }
       }>Masterclass</div>
        <div className='listItem' onClick={
        ()=>{
          setShowMenu(false)
        }
       }>Resources</div>
        <div className='listItem' onClick={
        ()=>{
          setShowMenu(false)
        }
       }>Contact</div>
        </div>
      </div>

      </div>
  )
}

export default Navbar;