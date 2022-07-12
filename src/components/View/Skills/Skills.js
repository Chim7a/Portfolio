import React from 'react';
import './Skills.css';
import * as SiIcons from 'react-icons/si';


const Skills = () => {
  return (
    <div className="skills__container flex flex-col content-center  text-rose-600" id="skills">
    <div className="text-3xl font-bold p-10 text-center">
        <h1>SKILLS</h1>
    </div>
    <div className="skill__box">
    <div className="grid lg:grid-cols-9 md:grid-cols-5 sm:grid-cols-4 gap-20 text-neutral-400">
        <SiIcons.SiJavascript className="skill__icons" />
        <SiIcons.SiCss3 className="skill__icons"/>
        <SiIcons.SiHtml5 className="skill__icons"/>
        <SiIcons.SiReact className="skill__icons"/>
        <SiIcons.SiBootstrap className="skill__icons"/>
        <SiIcons.SiTailwindcss className="skill__icons"/>
        <SiIcons.SiFirebase className="skill__icons"/>
        <SiIcons.SiGithub className="skill__icons"/>
    </div>
    </div>
    </div>
  )
}

export default Skills