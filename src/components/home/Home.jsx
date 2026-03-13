
import './home.css';
import { PiGlobeHemisphereEastFill } from "react-icons/pi";
import { Link as ScrollLink } from 'react-scroll';
import { RiTelegram2Fill } from "react-icons/ri";
import Booking from './Booking';



const Home = () => {
  return (
    <section className="home section" id="home" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="3000">
      <div className="home-container container grid">
        <div className="home-data" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
          <h3 className='home-subtitle'>
            <PiGlobeHemisphereEastFill />
            Let's Start Your ghoomWay
          </h3>
          <h1 className="home-title">
            Your Journey Begins Here - Find, Book, Travel!
          </h1>
          <p className="home-description">
            Discover, plan, and book unforgettable journeys with our expert recommendations and travel inspiration.
          </p>
           <ScrollLink to='about' name='about us' className='button home-button'> about us <RiTelegram2Fill className='button-icon' /></ScrollLink>
        </div>
    
      </div>
    <Booking icon={<RiTelegram2Fill/>}/>
    </section>
  )
}

export default Home
