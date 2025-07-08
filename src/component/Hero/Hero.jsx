import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from'../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
      {/* Left Section */}
      <div className='hero-left'>
        <h2>NEW ARRIVAL ONLY</h2>
        <div className='hand-hand-icon'>
          <p>Mr.K</p>
          <img src={hand_icon} alt="Hand Icon" />
        </div>
        <p>collections</p>
        <p>FASHION WORLD</p>

        <div className='hero-latest-btn'>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      </div>

      {/* Right Section */}
      <div className='hero-right'>
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
