import React from 'react';
import amazon from './amazon.jpg';
import './Project.css';
import * as MdIcons from 'react-icons/md';
import * as VscIcons from 'react-icons/vsc';

const Project = () => {
  return (
    <div className="project" id='projects'>
      <span className="text-3xl text-center font-bold pb-10 text-rose-600">MY PROJECTS</span>

        {/* Amazon web page project */}
        <div className="project__container">
        <div className="project__left">
        <h2 className="text-3xl text-center font-bold pb-10 text-rose-600">Amazon Clone</h2>
        <img src={amazon} alt="#" />
        <span className="project__icons"> 
          <a><MdIcons.MdOutlineLiveTv className="text-rose-600" /> Live Preview</a>
          <a href="https://github.com/Chim7a/amazon-cloning.git" alt="Amazon-clone-source"><VscIcons.VscSourceControl className="text-rose-600" /> Source code</a>
        </span>
        </div>

        <div className="project__right">
        <h4 className="project-title font-bold">Technologies Used</h4>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Firebase</li>
            <li>Context API</li>
            <li>React</li>
        </ul>
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
        
        {/* Todo-list project  */}

        <div className="project__container">
        <div className="project__left">
        <h2 className="text-3xl text-center font-bold pb-10 text-rose-600">Todo List App</h2>
        <img src="https://w0.peakpx.com/wallpaper/54/502/HD-wallpaper-black-dress-omen-red-black-background-valorant.jpg" alt="#" />
        <span className="project__icons"> 
          <a><MdIcons.MdOutlineLiveTv className="text-rose-600"/> Live Preview</a>
          <a href="https://github.com/Chim7a/todo_list.git" alt="todo__list__github__link"><VscIcons.VscSourceControl className="text-rose-600"/> Source code</a>
        </span>

        </div>

        <div className="project__right">
        <h4 className="project-title font-bold">Technologies Used</h4>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
        </ul>
        <h2 className="project-title text-2xl font-bold">My Role</h2>
        <p>Created functionalities such as add and delete which are useful when developing different types of projects.
        </p>

        <h4 className="project-title font-bold">Project Difficulties </h4>
        <p>On this project, i got stuck a few times and did'nt understand the solutions provided on stack-overflow and 
          slowed down my progress moving forward.
        </p>

        <h4 className="project-title font-bold">Solution</h4>
        <p>Asking questions were really helpful to progress in this project. Found courage in asking questions from mentors
           no matter how little or silly i find them to be.
        </p>
        </div>
        </div>

        {/* Movie app div propject */}

        <div className="project__container">
        <div className="project__left">
        <h2 className="text-3xl text-center font-bold pb-10 text-rose-600">Movie Website</h2>
        <img src="https://www.pixelstalk.net/wp-content/uploads/images5/Black-and-White-4K-HD-Wallpaper.jpg" alt="#" />
        <span className="project__icons"> 
          <a><MdIcons.MdOutlineLiveTv className="text-rose-600" /> Live Preview</a>
          <a href="https://github.com/Chim7a/movie_filter.git" alt="movie__github__link"><VscIcons.VscSourceControl className="text-rose-600"/> Source code</a>
        </span>

        
        </div>

        <div className="project__right">
        <h4 className="project-title font-bold">Technologies Used</h4>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>Javascript</li>
        </ul>
        <h2 className="project-title font-bold">My Role</h2>
        <p> This project involved me developing, designing and providing filter functionality of the website. 
        </p>

        <h4 className="project-title font-bold">Project Difficulties </h4>
        <p>Time management was a hinderance in completing this task on time, as the estimated time set by myself for
         this project was not met. </p>

        <h4 className="project-title font-bold">Solution</h4>
        <p>To solve this issue, i resulted in breaking down tasks to be carried out and broke them into smaller units.
          I found this to be less overwhelming as i progressed through the project. Also made sure to time myself
           appropriately and complete task at each given time frame.
        </p>
        </div>
        </div>
    </div>
  )
}

export default Project;