import React from 'react';
import './project.css';

 const Project = ({title, img, onClick}) => {
   return (
    <li className="project" onClick={onClick}>
        <img 
          src={img}
          alt={title}
          className="project-img" 
        />
        <h3 className="project-title">{title}</h3>
    </li>
   )
}

export default Project;
