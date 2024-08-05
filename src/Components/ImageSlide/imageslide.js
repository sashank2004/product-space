import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './imageslide.css';
import img from '../../assets/image.png';
import shazam from '../../assets/shazam.png';

const Imageslide = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    initialSlide: 0,
  };

  return (
    <div className="ImageSlide">
    <Slider {...settings}>
      <div style={{position:"relative"}}>
        <img className='imged' src={img}/>
        <div style={{position:"absolute",bottom:"10px",right:"15px",backgroundColor:"transparent"}}>
          <div className='meetourmentor'>
            <div className='meetour'>
            <span style={{fontSize:"14px",}}>Meet our Mentors</span>
            </div>
            <div className='make'></div>
            <span>Chris Barton</span>
            <img className='shazam' src={shazam}/>          
          </div>
          </div>
      </div>      
    </Slider>
  </div>
  )
}

export default Imageslide;