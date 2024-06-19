import React from 'react';
import './skills.css';
import Frontend from './Frontend';

const Skills = () => {
  return (
    <section className="section skills" id="skills">
       <h2 className="section__text">Skills</h2>
       <span className="section__subtitle">My technical level</span>

       <div className="skills__container container grid">
         <Frontend />
       </div>
    </section>
  )
}

export default Skills;