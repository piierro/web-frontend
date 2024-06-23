import React from 'react';
import './project.css';

const Project = ({title, img, description, gitHubLink}) => {
   return (
    <li className="project">
    <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="project-link">
      <div className="project-content">
        <img src={img} alt={title} className="project-img" />
        <div className="project-text">
          <h3 className="project-title">
            {title}
          <i className='fa-icon fa-solid fa-arrow-up-right-from-square'></i>
          </h3>
          <p className="project-description">{description}</p>
        </div>
      </div>
    </a>
  </li>
  )
}

export default Project;
