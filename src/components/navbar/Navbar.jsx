import './Navbar.css';

const Navbar = () => {
    return ( 
      <header className="header">
        <nav className="nav container">
            <a href='index.html' className="nav__logo">
               s.KURO.
            </a>
            <div className='nav__menu'>
              <ul className="nav__list grid">
                <li className="nav__item">
                  <a href="#home" className="nav__link active-link">Home</a>
                </li>
                <li className="nav__item">
                <a href="#about" className="nav__link active-link">About</a>
                </li>
                <li className="nav__item">
                <a href="#skills" className="nav__link active-link">Skills</a>
                </li>
                <li className="nav__item">
                <a href="#project" className="nav__link active-link">Project</a>
                </li>
              </ul>
            </div>
        </nav>
      </header>
     );
}
 
export default Navbar;