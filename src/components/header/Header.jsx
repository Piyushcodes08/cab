import React, { useState } from 'react';
import '../header/header.css';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { RiCloseLine, RiTelegram2Fill, RiMenu2Fill } from "react-icons/ri";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">
      <nav className="nav container">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="logo-link"
          style={{ cursor: 'pointer' }}
        >
          <img src={logo} alt="logo-img" height={48}/>
        </ScrollLink>
        <div className={`nav-menu ${menuOpen ? 'show-menu' : ''}`}>
          <ul className="nav-item">
            <li className="nav-list">
              <ScrollLink to="home" smooth duration={500} spy offset={-80} className="nav-link" activeClass="active" onClick={() => setMenuOpen(false)}>Home</ScrollLink>
            </li>
            <li className="nav-list">
              <ScrollLink to="about" smooth duration={500} spy offset={-80} className="nav-link" activeClass="active" onClick={() => setMenuOpen(false)}>About</ScrollLink>
            </li>
            <li className="nav-list">
              <ScrollLink to="destination" smooth duration={500} spy offset={-80} className="nav-link" activeClass="active" onClick={() => setMenuOpen(false)}>Destination</ScrollLink>
            </li>
            <li className="nav-list">
              <ScrollLink to="tours" smooth duration={500} spy offset={-80} className="nav-link" activeClass="active" onClick={() => setMenuOpen(false)}>Tours</ScrollLink>
            </li>
             <li className="nav-list">
             <ScrollLink
            to="booking"
            smooth
            duration={500}
            spy
            offset={-80}
            className="button nav-button"
            onClick={() => setMenuOpen(false)}
          >
            book now <RiTelegram2Fill className='button-icon' />
          </ScrollLink>
          <RiCloseLine className='nav-close' onClick={() => setMenuOpen(false)} />
            </li>
          </ul>
          
        </div>
        <RiMenu2Fill className='nav-toggle' onClick={() => setMenuOpen(true)} />
      </nav>
    </header>
  );
};

export default Header;
