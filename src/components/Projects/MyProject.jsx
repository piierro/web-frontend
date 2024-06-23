import React from 'react';
import './project.css';

 const MyProject = ({title, img}) => {
   return (
    <li className="project">
        <img 
          src={img}
          alt={title}
          className="project-img" 
        />
        <h3 className="project-title">{title}</h3>
    </li>
   )
}

export default MyProject;
