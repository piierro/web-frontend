import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');

  return ( 
    <header className="header">
      <nav className="nav container">
          <a href='index.html' className="nav__logo">
            kIMUR.z
          </a>
            <div className='nav__menu'>
              <ul className="nav__list grid">
                <li className="nav__item">
                  <a href="#home" 
                     onClick={() => setActiveLink('#home')}
                     className={activeLink === "#home" ? "nav__link active-link"
                    : "nav__link"}
                  >
                    Home
                  </a>
                </li>
                <li className="nav__item">
                <a href="#about" 
                     onClick={() => setActiveLink('#about')}
                     className={activeLink === "#about" ? "nav__link active-link"
                    : "nav__link"}
                  >
                    About
                </a>
                </li>
                <li className="nav__item">
                <a href="#skills" 
                     onClick={() => setActiveLink('#skills')}
                     className={activeLink === "#skills" ? "nav__link active-link"
                    : "nav__link"}
                  >
                    Skills
                  </a>
                </li>
                <li className="nav__item">
                <a href="#project" 
                     onClick={() => setActiveLink('#project')}
                     className={activeLink === "#project" ? "nav__link active-link"
                    : "nav__link"}
                  >
                    Project
                </a>
                </li>
              </ul>
        </div>
    </nav>
  </header>
  );
}
 
export default Navbar;