import React from 'react';
import './Project.css';
import ProjectData from "./ProjectData.json";
import * as MdIcons from 'react-icons/md';
import * as VscIcons from 'react-icons/vsc';

const Project = () => {
  return (
    <div className="project" id='projects'>

      <span className="text-3xl text-center font-bold pb-10 text-rose-600">MY PROJECTS</span>

      {ProjectData.projects.map((project, i) => (
        <div key={i} className="project__container">

          <div className="project__left">

            <h2 className="text-3xl text-center font-bold pb-10 text-rose-600">{project.title}</h2>
            <img src={`${project.url}`} alt={project.imageDescripton} />

            <div className="project__icons"> 
              <a href={project.previewLink} alt={project.previewDescripton} target="_blank" rel="noreferrer"><MdIcons.MdOutlineLiveTv className="text-rose-600" /> {project.preview}</a>
              <a href={project.sourceLink} alt={project.sourceDescripton} target="_blank" rel="noreferrer"><VscIcons.VscSourceControl className="text-rose-600" />{project.source}</a>
            </div>

          </div>
          
          <div className="project__right">

            <h4 className="project-title font-bold">Technologies Used</h4>
            <p>{project.technologies}</p>

            <h2 className="project-title font-bold">My Role</h2>
            <p>{project.role}</p>
          
            <h4 className="project-title font-bold">Project Difficulties</h4>
            <p>{project.difficulties}</p>
          
            <h4 className="project-title font-bold">Solution</h4>
            <p>{project.solutions}</p>

          </div>     
        </div>
      ))}
    </div>
  )
}

export default Project;