import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/my-photo.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={profile_img} alt="" className='my-photo'/>
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>Skilled in responsive design and performance optimization to ensure seamless user experiences.</p>
              <p>With a strong foundation in HTML, CSS, and JavaScript, I bring ideas to life and ensure they perform optimally across all devices..</p>
            </div>
            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p>
               <hr style={{width: "50%"}} /></div>
               <div className="about-skill"><p>React JS</p>
               <hr style={{width: "70%"}} /></div>
               <div className="about-skill"><p>Javascript</p>
               <hr style={{width: "60%"}} /></div>
               <div className="about-skill"><p>next JS</p>
               <hr style={{width: "50%"}} /></div>
            </div>
          </div>
        </div>
        <div className="about-achievments">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF  EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
    </div>
  )
}

export default About