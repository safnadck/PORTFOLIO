import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={profile_img} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in expedita laboriosam voluptas aperiam totam eveniet fugit aspernatur, earum hic.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, natus ut voluptatibus deserunt enim ullam debitis, neque facilis similique commodi delectus.</p>
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