import React from 'react';
import Project from '../components/Projects/Project';
import MyProject from '../components/Projects/MyProject';
import { projects } from '../helpers/projectList';
import { myProjects } from '../helpers/myProject';


const Projects = () => {
 
  return (
    <section className="section" id="project">
        <h2 className="section__text">PROJECT</h2>
        <span className="section__subtitle"></span>

        <div className="container">
        <span className="section__subtitle text">Educational projects from Yandex Workshop</span>
            <ul className="projects">
                {projects.map((project, index) => {
                    return <Project 
                      key={index} 
                      title={project.title}
                      img={project.img} 
                      description={project.description}
                      gitHubLink={project.gitHubLink} 
                    />
                })}
            </ul>
        </div>

        <div className="container">
        <span className="section__subtitle text">My project</span>
            <ul className="projects">
                {myProjects.map((project, index) => {
                    return <MyProject 
                    key={index} 
                    title={project.title}
                    img={project.img} 
                    description={project.description}
                    gitHubLink={project.gitHubLink} 
                     />
                })}
            </ul>
        </div>
    </section>
  )
}

export default Projects;