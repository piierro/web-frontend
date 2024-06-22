import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveLink(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]);

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    setIsScrolling(true);

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href='#home' className="nav__logo">
          kIMUR.z
        </a>
        <div className='nav__menu'>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home"
                onClick={() => handleLinkClick('#home')}
                className={activeLink === "#home" ? "nav__link active-link" : "nav__link"}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about"
                onClick={() => handleLinkClick('#about')}
                className={activeLink === "#about" ? "nav__link active-link" : "nav__link"}
              >
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills"
                onClick={() => handleLinkClick('#skills')}
                className={activeLink === "#skills" ? "nav__link active-link" : "nav__link"}
              >
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#project"
                onClick={() => handleLinkClick('#project')}
                className={activeLink === "#project" ? "nav__link active-link" : "nav__link"}
              >
                Project
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
 
export default Navbar;