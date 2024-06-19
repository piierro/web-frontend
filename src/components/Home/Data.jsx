import React from 'react';
import icon from '../../assets/telegramm.svg';

function Data() {
  return (
    <div className="home__data">
        <h1 className="home__title">KURO</h1>
        <h3 className="home__subtitle">Frontend Developer</h3>
        <p className="home__description">
           I'm Kira, a 20-year-old russian (Freelance)<br />
           <span className="highlight">Front-end developer.</span>
        </p>
        <a href="#contact" className="button button__flex">
            Say something 
          <img src={icon} alt="Telegram" className="button_icon" />
        </a>
    </div>
  )
}

export default Data