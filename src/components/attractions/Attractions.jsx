import React from 'react'
import './attractions.css'
import TitleSection from '../titlesection/TitleSection'
import { attractions } from '../../Data.jsx'
import { RiMapPinLine } from "react-icons/ri"

const Attractions = () => {
  return (
    <section className="attractions section container" id="attractions">
      <TitleSection 
        subtitle="Explore Top Places" 
        title="Top Attractions" 
        description="Discover the cultural gems and natural wonders of Gujarat and Rajasthan. From golden deserts to serene lakes, explore the best of India."
      />

      <div className="attractions-container grid">
        {attractions.map(({ id, img, title, description, state }) => (
          <article className="attraction-card" key={id} data-aos="fade-up">
            <div className="attraction-img-box">
              <img src={img} alt={title} className="attraction-img" loading="lazy" decoding="async" />
              <div className="attraction-tag">{state}</div>
            </div>
            
            <div className="attraction-body">
              <h3 className="attraction-title">
                <RiMapPinLine className="attraction-icon" />
                {title}
              </h3>
              <p className="attraction-description">{description}</p>
              <div className="attraction-overlay">
                <button className="button attraction-btn">View Details</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Attractions
