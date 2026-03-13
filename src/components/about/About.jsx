import React from 'react'
import './about.css'
import aboutimg from '../../assets/bg-taxi.jpg'
import TitleSection from '../titlesection/TitleSection'
import { Link as ScrollLink } from 'react-scroll';
import { RiTelegram2Fill } from "react-icons/ri";


const About = () => {
  return (
    <>
      <section className="about section " id="about">
        <div className="about-container container grid" >
          <img src={aboutimg} alt="" className="about-img" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1500" />
          <div className="about-content" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1500">
            <TitleSection
              subtitle={'We Are Trawind'}
              title={"Exploring the World, One Destination at a Time with Us"}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              } />
            <div className="about-data">
              <div className="about-item">
                <p className="about-no">25+</p>
                <h3 className="about-title">Years of Experience</h3>
              </div>
              <div className="about-item">
                <p className="about-no">10K</p>
                <h3 className="about-title">Success Journey</h3>
              </div>
              <div className="about-item">
                <p className="about-no">12+</p>
                <h3 className="about-title">Awards Winning</h3>
              </div>
            </div>
             <ScrollLink to='/' className='button'> About More <RiTelegram2Fill className='button-icon' /></ScrollLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
