import React from 'react'
import './Hero.css'
import profile_img from '../../assets/my-photo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='my-photos'/>
      <h1><span>I'm Muhammed Safnad ck,</span> frontend developer based in india</h1>
      <p>A passionate Frontend Developer with a knack for crafting visually appealing and user-friendly web applications.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect with me </AnchorLink>
        </div>
        <div className="hero-resume">
          My Resume
        </div>
      </div>
    </div>
  )
}

export default Hero