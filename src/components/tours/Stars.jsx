import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt  } from "react-icons/fa";




const Stars = ({stars}) => {

const getStaricon = (stars, index) => {
const number = index + 0.5;

if (stars >= index + 1) return <FaStar/>;
if (stars >= number) return <FaStarHalfAlt/>;
return <FaRegStar />;
};

const ratingstar = Array.from({length: 5}, (_, index) => (
    <li className="stars" key={index}>
        {getStaricon(stars, index)}
    </li>
))

  return (
  <ul className="stars-wraper">
    {ratingstar}
  </ul>
  )
}

export default Stars
