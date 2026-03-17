import "swiper/css/autoplay";
import './categories.css'
import TitleSection from '../titlesection/TitleSection'
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
import { categories } from '../../Data.jsx'

import 'swiper/css';
import 'swiper/css/navigation';

import '../categories/categories.css';

const Categories = () => {
  return (
    <>
      <section className="categories container section">
        <div className="categories-header">
          <TitleSection title={"Categories"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          } />
          <div className="swiper-btns">
  <button className="swiper-btn prev-btn">
    <MdOutlineKeyboardDoubleArrowLeft />
  </button>

  <button className="swiper-btn next-btn">
    <MdOutlineKeyboardDoubleArrowRight />
  </button>
</div>
        </div>

<Swiper
  slidesPerView={1}
  spaceBetween={12}
  grabCursor={true}
  loop={true}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  navigation={{
    prevEl: ".prev-btn",
    nextEl: ".next-btn",
  }}
  modules={[Navigation, Autoplay]}
  breakpoints={{
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
    1208: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }}
>
          {categories.map(({ img, title }, index) => {
            return (
              <SwiperSlide className='categories-slide' key={index}>
               <div  className="categories-img" >
                 <img src={img} alt="categories-img" loading="lazy" decoding="async"/>
               </div>
                <h3 className="categories-title">
                  {title}
                </h3>
              </SwiperSlide>
            )
          })}

        </Swiper>
      </section>
    </>
  )
}

export default Categories
