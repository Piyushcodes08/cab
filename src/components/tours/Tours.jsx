import React, { useRef } from 'react'
import './tours.css'
import { Link as ScrollLink } from 'react-scroll';
import { RiCalendarFill, RiTelegram2Fill, RiMapPinLine } from "react-icons/ri";
import TitleSection from '../titlesection/TitleSection'
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { tours } from '../../Data.jsx'
import 'swiper/css';
import 'swiper/css/navigation';
import Stars from './Stars.jsx';

const Tours = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="tours container section" id="tours">

      {/* Header */}
      <div className="tours-top categories-header">
        <TitleSection
          subtitle={'Epic Adventures Tour'}
          title={"Select Your Tour"}
          description={"Discover handpicked journeys crafted for every kind of traveler. From scenic road trips to cultural encounters, your next adventure awaits."}
        />
        <div className="swiper-btns">
          <button ref={prevRef} className="swiper-btn tours-prev-btn">
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
          <button ref={nextRef} className="swiper-btn tours-next-btn">
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          640:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1400: { slidesPerView: 4, spaceBetween: 28 },
        }}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        {tours.map(({ id, img, title, location, days, price, stars }) => (
          <SwiperSlide key={id}>
            <article className="tour-card">

              {/* Image */}
              <div className="tour-img-box">
                <img src={img} alt={title} className="tour-img" />
                <div className="tour-img-overlay" />

                {/* Stars badge floating on image */}
                <div className="tour-stars-float">
                  <Stars stars={stars} />
                </div>

                {/* Price badge */}
                <span className="tour-price-badge">
                  ₹{price}
                  <span className="tour-per">/person</span>
                </span>
              </div>

              {/* Body */}
              <div className="tour-body">
                <h3 className="tour-title">{title}</h3>

                <div className="tour-meta">
                  <span className="tour-meta-item">
                    <RiMapPinLine className="tour-meta-icon" />
                    {location}
                  </span>
                  <span className="tour-meta-item">
                    <RiCalendarFill className="tour-meta-icon" />
                    {days}
                  </span>
                </div>

                <div className="tour-divider" />

                <ScrollLink to='booking' smooth duration={500} className='button tour-book-btn'>
                  Book Now <RiTelegram2Fill />
                </ScrollLink>
              </div>

            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Tours
