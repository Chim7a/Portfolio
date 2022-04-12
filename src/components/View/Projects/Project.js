import React from 'react';
import './amazon.jpg';
import './Project.css';
import * as MdIcons from 'react-icons/md';
import * as VscIcons from 'react-icons/vsc';

const Project = () => {
  return (
    <div className="project">
      <span className="text-3xl text-center font-bold pb-5">My Projects</span>
        <div className="project__container">

        {/* Amazon web page project */}

        <div className="project__left">
        <h2 className="text-2xl font-bold pb-5">Amazon Clone</h2>
        <img src="https://camo.githubusercontent.com/1284941bfa255ed0105d5a77149267ee3e34809028f7d7130febedb3290507c9/68747470733a2f2f692e696d6775722e636f6d2f457472524f63322e706e67" alt="#" />
        <span className="project__icons"> 
          <a href="https://github.com/Chim7a/amazon-cloning.git" alt="Amazon-clone-live-link"><MdIcons.MdOutlineLiveTv /> Live Preview</a>
          <a href="https://github.com/Chim7a/amazon-cloning.git" alt="Amazon-clone-image"><VscIcons.VscSourceControl /> Source code</a>
        </span>


        <h4 className="project-title font-bold">Technologies Used</h4>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
        </ul>
        </div>

        <div className="project__right">
        <h2 className="project-title font-bold">My Role</h2>
        <p>This was a fun project that was meant to show off more of
          my technical skills. It displays my ability to work through a
          complex problem and find a solution using appropriate
          data structures while doing so. This also tested my ability
          to find a solution to a Graph / Matrix problem while keeping
          run time effeciencies as close to O(1) as possible.</p>

        <h4 className="project-title font-bold">Project Difficulties </h4>
        <p>This project tested my abilites in dveloping a
            workable solution to problems. At the start of development process,
            there was no laid out plan or structure to follow, which resulted to wasting two weeks worth of work before i
            was forced to start over.</p>

        <h4 className="project-title font-bold">Solution</h4>
        <p>To solve this problem, adoption of a planning structure was key in 
          improving work effieciency and accelerating task.
        </p>
        </div>
        </div>
        
        {/* Car Webpage project  */}

        <div className="project__container">
        <div className="project__left">
        <h2 className="text-2xl font-bold pb-5">Car Store Webpage</h2>
        <img src="http://www.ddesignerr.com/wp-content/uploads/2013/06/Citycare.png" alt="#" />
        <span className="project__icons"> 
          <a><MdIcons.MdOutlineLiveTv /> Live Preview</a>
          <a><VscIcons.VscSourceControl /> Source code</a>
        </span>

        <h4 className="project-title font-bold">Technologies Used</h4>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>Styled Components</li>
            <li>HTML</li>
            <li>HTML</li>
        </ul>
        </div>

        <div className="project__right">
        <h2 className="project-title text-2xl font-bold">My Role</h2>
        <p>Lorem hshcbsdbhjbcdhj dsjfvnkn jndkjndskjc jdjknc nkdcjskjcjs jnksjdckj kjsndkjcnkdjn ndkjnckdnck kjnkjdcnknc k
        </p>

        <h4 className="project-title font-bold">Project Difficulties </h4>
        <p>This section talks about the app and whatever shortcomings.</p>

        <h4 className="project-title font-bold">Solution</h4>
        <p>This section talks about the app and whatever shortcomings.</p>
        </div>
        </div>

        {/* Robot app div propject */}

        <div className="project__container">
        <div className="project__left">
        <h2 className="text-2xl font-bold pb-5">Robo App</h2>
        <img src="./amazon.jpg" alt="#" />
                <span className="project__icons"> 
          <a><MdIcons.MdOutlineLiveTv /> Live Preview</a>
          <a><VscIcons.VscSourceControl /> Source code</a>
        </span>

        <h4 className="project-title font-bold">Technologies Used</h4>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>Tychoon</li>
            <li>HTML</li>
            <li>HTML</li>
        </ul>
        </div>

        <div className="project__right">
        <h2 className="project-title font-bold">My Role</h2>
        <p>Lorem hshcbsdbhjbcdhj dsjfvnkn jndkjndskjc jdjknc nkdcjskjcjs jnksjdckj kjsndkjcnkdjn ndkjnckdnck kjnkjdcnknc k
        </p>

        <h4 className="project-title font-bold">Project Difficulties </h4>
        <p>This section talks about the app and whatever shortcomings.</p>

        <h4 className="project-title font-bold">Solution</h4>
        <p>This section talks about the app and whatever shortcomings.</p>
        </div>
        </div>
    </div>
  )
}

export default Project;