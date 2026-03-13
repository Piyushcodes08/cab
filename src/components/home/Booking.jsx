import React from 'react'
import { RiTreasureMapFill,  RiCalendarFill, RiTelegram2Fill } from "react-icons/ri";
import '../home/home.css'
const Booking = ({icon}) => {
    return (
        <>
            <div className="booking container" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
                <form action="" className="booking-form grid">
                    <div className="booking-item">
                        <input type="text" placeholder='Destination' className='booking-input' />
                        <RiTreasureMapFill className='booking-icon' />
                    </div>
                    <div className="booking-item">
                        <input type="text" placeholder='Start Date' className='booking-input' />
                        <RiCalendarFill className='booking-icon' />
                    </div>
                    <span className="booking-to">To</span>
                    <div className="booking-item">
                        <input type="text" placeholder='End Date' className='booking-input' />
                        <RiCalendarFill className='booking-icon' />
                    </div>
                    <button className='button booking-button'>book now{icon}</button>
                </form>
            </div>
        </>
    )
}

export default Booking
