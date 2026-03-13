import React from 'react'
import './tours.css'
import { Link as ScrollLink } from 'react-scroll';
import { RiCalendarFill, RiTelegram2Fill } from "react-icons/ri";
import TitleSection from '../titlesection/TitleSection'
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { tours } from '../../Data.jsx'

import 'swiper/css';
import 'swiper/css/navigation';
import Stars from './Stars.jsx';





const Tours = () => {
  return (
    <section className="tours container section" id="tours">
      <div className="categories-header">
        <TitleSection
          subtitle={'Epic Adventures Tour'}
          title={"Select Your Tour"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          } />
        <div className="swiper-btns">
          <button className="swiper-btn ">
            <MdOutlineKeyboardDoubleArrowLeft className='prev-btn' />
          </button>
          <button className="swiper-btn">
            <MdOutlineKeyboardDoubleArrowRight className=' next-btn' />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={12}
        grabCursor={true}
        loop={true}
        navigation={{
          prevEl: '.prev-btn',
          nextEl: '.next-btn'
        }} modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,

          },
          1024: {
            slidesPerView: 3,

          },
          1208: {
            slidesPerView: 3,
         
          },
            1400: {
            slidesPerView: 4,
              spaceBetween: 20,
          },
        }}>
          <div className="tours-containere" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
        {tours.map(({ id, img, title, location, days, price, stars }) => {
          return (
            <SwiperSlide className='categories-slide'  key={id} >
              <img src={img} alt="tours-img" className="tours-img" />
              <div className="tours-details">
                <Stars stars={stars}/>
                <h3 className="tours-title"> {title} </h3>
                <p className="tours-location">{location}</p>
                <hr className='tours-separator' />
                <div className="tours-days"><RiCalendarFill className='tours-icon' />{days}</div>
                <div className="tours-bottom">
                  <p>
                    <span className="tours-price">{price}</span>
                    <span className="tours-person">/person</span>
                  </p>
                  <ScrollLink to='/' className='button'> about us <RiTelegram2Fill className='button-icon' /></ScrollLink>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
</div>
      </Swiper>
    </section>
  )
}

export default Tours
