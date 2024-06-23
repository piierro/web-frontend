import React from 'react';
import icon from '../../assets/telegramm.svg';

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">kIMUR.z</h1>
      <p className="home__description">
        I'm Kira, a 20-year-old russian (Freelance)<br />
        <span className="highlight">Front-end developer.</span>
      </p>
      <a href="https://t.me/dombson" 
        target="_blank" 
        className="button button__flex"
        title="Написать в Telegram"
        rel="noopener noreferrer">
        Say something 
        <img src={icon} alt="Telegram" className="button_icon" />
      </a>
    </div>
  )
}

export default Data