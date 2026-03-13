import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import { Link as ScrollLink } from 'react-scroll';
import { FaInstagram, FaLinkedin,FaGithubSquare, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { footerGallery } from '../../Data.jsx'



const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container grid">
        <div>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="footer-logo"
            style={{ cursor: 'pointer' }}
          >
            <img src={logo} alt="logo-img" className='footer-logo-img' />
          </ScrollLink>
          <p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/piyush.codes08/?hl=en" className="footer-social-link">< FaInstagram/></a>
            <a href="https://www.linkedin.com/in/piyush-gond-55a6a9340/" className="footer-social-link">< FaLinkedin/></a>
            <a href="https://github.com/Piyushcodes08" className="footer-social-link">< FaGithubSquare/></a>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Quick Links</h3>
           <ul className="footer-links grid">
                      <li className="footer-list">
                        <ScrollLink to="home" smooth duration={500} spy offset={-80} className="footer-link" activeClass="active">Home</ScrollLink></li>
                      <li className="nav-list">
                        <ScrollLink to="about" smooth duration={500} spy offset={-80} className="footer-link" activeClass="active">About</ScrollLink></li>
                      <li className="nav-list">
                        <ScrollLink to="destination" smooth duration={500} spy offset={-80} className="footer-link" activeClass="active">Destination</ScrollLink></li>
                      <li className="nav-list">
                        <ScrollLink to="tours" smooth duration={500} spy offset={-80} className="footer-link" activeClass="active">Tours</ScrollLink>
                      </li>
                    </ul>
        </div>
        <div>
          <h3 className="footer-title">Contact</h3>
          <div className="footer-contact grid">
            <div className="footer-item">
              <FaMapMarkerAlt className='footer-icon'/>
              <p className="footer-info">2055 Niagara Falls Blvd, Amherst NY 14228</p>
            </div>
             <div className="footer-item">
              <FaPhoneAlt className='footer-icon'/>
              <p className="footer-info">+91 637-114-9273</p>
            </div>
             <div className="footer-item">
              <FaEnvelope className='footer-icon'/>
              <p className="footer-info">piyushkoirax@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Gallery</h3>
          <div className="footer-gallery grid">
            {footerGallery.map((footerGallery, index) => {
            return(
              <img src={footerGallery} alt="footerGallery" className="footer-img" key={index} />
            )
          })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
