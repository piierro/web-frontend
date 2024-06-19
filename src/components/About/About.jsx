import React from 'react';
import './About.css';
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__text">ABOUT ME</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src="" alt="about" className='about__img' />
            <div className="about__data">
                <Info />
                <p className="about__description">
                My journey began with user interface design in 2023. 
                There are several projects on <a href="https://www.behance.net/0b8fee5d">Behance</a>, but later I 
                realized that this was not for me and began to study 
                3D modeling (at the moment I have postponed this activity for the near future).<br/>
                
                It didn`t last long, because I learned about Frontend development. 
                In September 2024, I began to intensively study layout and various libraries.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About;