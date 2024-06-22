import React, { useState } from 'react';
import Project from '../components/Projects/Project';
import MyProject from '../components/Projects/MyProject';
import { projects } from '../helpers/projectList';
import { myProjects } from '../helpers/myProject';
import Modal from '../components/Modal/Modal';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    document.body.classList.add('modal-open');
    setSelectedProject(project);
    setIsOpen(true);
  }

  const closeModal = () => {
    document.body.classList.remove('modal-open');
    setIsOpen(false);
    setSelectedProject(null);
  }

  return (
    <section className="section" id="project">
        <h2 className="section__text">PROJECT</h2>
        <span className="section__subtitle"></span>

        <div className="container">
        <span className="section__subtitle text">Educational projects from Yandex Workshop</span>
            <ul className="projects">
                {projects.map((project, index) => {
                    return <Project key={index} title={project.title} img={project.img} onClick={() => openModal(project)}/>
                })}
            </ul>
        </div>

        <div className="container">
        <span className="section__subtitle text">My project</span>
            <ul className="projects">
                {myProjects.map((project, index) => {
                    return <MyProject key={index} title={project.title} img={project.img}  onClick={() => openModal(project)}/>
                })}
            </ul>
        </div>

        <Modal isOpen={isOpen} onClose={closeModal} project={selectedProject} />
    </section>
  )
}

export default Projects;