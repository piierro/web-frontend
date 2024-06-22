import React from 'react';
import './About.css';
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__text">ABOUT ME</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <div className='about__img'></div>
            <div className="about__data">
                <Info />
                <p className="about__description">
                My journey started with user interface design in 2022-2023. 
                There are several projects on&nbsp;
                <a href="https://www.behance.net/0b8fee5d" className="link-about">Behance</a>, but later I realized that 
                this was not for me and began to study 3D modeling 
                (for now I have put this activity on hold for the near future).
                It didn't last long because I learned about Frontend Development.
                </p>
                <p className="about__description">
                In September 2023, I began to intensively study layout, animation 
                and adaptation. It was a fun activity. Later I switched to Javascript,
                I have basic knowledge (I still plan to understand algorithms).
                At the beginning of 2024, I learned about TopScript, and a little
                later about React and various libraries. At the moment I know a lot, 
                but at the same time little. This is not enough, I plan to continue my 
                journey and find out what awaits me in the future
                </p>
                <p className="about__description">
                 This is just the beginning of my journey, 
                 and I definitely like what I do and have no plans to quit :)
                </p>
            </div>
        </div>
    </section>
  )
}

export default About;