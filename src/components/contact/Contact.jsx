import React from 'react'
import './contact.css'
import TitleSection from '../titlesection/TitleSection'
import { RiSendPlaneLine, RiPhoneLine, RiMailLine, RiMapPin2Line } from "react-icons/ri"

const Contact = () => {
  return (
    <section className="contact section container" id="contact">
      <TitleSection 
        subtitle="Work With Us" 
        title="Become Our Partner" 
        description="Join our growing network of travel enthusiasts and professionals. Let's create unforgettable experiences together."
      />

      <div className="contact-container grid">
        <div className="contact-content" data-aos="fade-right">
          <h3 className="contact-title">Let's Talk Business</h3>
          
          <div className="contact-info">
            <div className="contact-card">
              <RiPhoneLine className="contact-card-icon" />
              <div className="contact-card-data">
                <h4 className="contact-card-title">Call Us</h4>
                <p className="contact-card-content">+91 637-114-9273</p>
              </div>
            </div>

            <div className="contact-card">
              <RiMailLine className="contact-card-icon" />
              <div className="contact-card-data">
                <h4 className="contact-card-title">Email Us</h4>
                <p className="contact-card-content">partner@ghoom.com</p>
              </div>
            </div>

            <div className="contact-card">
              <RiMapPin2Line className="contact-card-icon" />
              <div className="contact-card-data">
                <h4 className="contact-card-title">Visit Us</h4>
                <p className="contact-card-content">2055 Niagara Falls Blvd, Amherst NY 14228</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-box" data-aos="fade-left">
          <form className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input type="text" placeholder="Insert your name" className="contact-form-input" />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Mail</label>
              <input type="email" placeholder="Insert your email" className="contact-form-input" />
            </div>

            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Message</label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Write your proposal" className="contact-form-input"></textarea>
            </div>

            <button type="submit" className="button contact-button">
              Send Message <RiSendPlaneLine />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
