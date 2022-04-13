import React from 'react';
import './About.css';



const About = () => {
  return (
    <div className="about__container flex flex-col justify-center text-white " id="about">
        <div className="text-center p-10">
          <span className="text-3xl text-rose-600 font-bold">ABOUT ME</span>
        </div>
        <div className="about__box">
        <div className="text-2xl text-center p-10">
        <p> A highly motivated, self-driven and passionate frontend web developer. Strong knowledge in creating 
          solutions to complex problems while developing innovative projects with simplicity. 
          Experienced in creating fast and responsive websites with tasks executed before deadline, 
          while maintaining codebase standards and practices. 
          Now seeking a new opportunity to further my career in a Junior development role. </p>
        </div>
        </div>
    </div>
  )
}

export default About;