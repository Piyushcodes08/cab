import category1 from './assets/taxi.jpg';
import category2 from './assets/taxi.jpg';
import category3 from './assets/taxi.jpg';
import category4 from './assets/taxi.jpg';
import category5 from './assets/taxi.jpg';
import category6 from './assets/taxi.jpg';

import destination1 from './assets/car1.jpg';
import destination2 from './assets/sedan.jpg';
import destination3 from './assets/car2.jpg';
import destination4 from './assets/luxury.jpg';
import destination5 from './assets/kia.jpg';
import destination6 from './assets/car.jpg';

import tour1 from './assets/destination-1.jpg';
import tour2 from './assets/destination-2.jpg';
import tour3 from './assets/destination-3.jpg';
import tour4 from './assets/destination-4.jpg';
import tour5 from './assets/destination-5.jpg';
import tour6 from './assets/destination-6.jpg';

import gallery1 from './assets/gallery-1.png';
import gallery2 from './assets/gallery-2.png';
import gallery3 from './assets/gallery-3.png';
import gallery4 from './assets/gallery-4.png';
import gallery5 from './assets/gallery-5.png';
import gallery6 from './assets/gallery-6.png';

// export const links = ['home', 'about', 'destinations', 'tours'];

export const categories = [
  {
    img: category1,
    title: 'round trip',
  },

  {
    img: category2,
    title: 'one way',
  },

  {
    img: category3,
    title: 'airport',
  },

  {
    img: category4,
    title: 'city to city',
  },

  {
    img: category5,
    title: 'one day booking',
  },

  {
    img: category6,
    title: 'per day booking',
  },
];

export const destination = [
  {
    id: 1,
    img: destination1,
    title: 'Hatchback',
    price: '24 rs',
    rating: 'Per/KM',
  },

  {
    id: 2,
    img: destination2,
    title: 'Sedan',
    price: '24 rs',
    rating: 'Per/KM',
  },

  {
    id: 3,
    img: destination3,
    title: 'SUV',
    price: '24 rs',
    rating: 'Per/KM',
  },

  {
    id: 4,
    img: destination4,
    title: 'Luxury',
    price: '24 rs',
    rating: 'Per/KM',
  },

  {
    id: 5,
    img: destination5,
    title: 'CNG',
    price: '24 rs',
    rating: 'Per/KM',
  },

  {
    id: 6,
    img: destination6,
    title: 'diesel',
    price: '24 rs',
    rating: 'Per/KM',
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    title: 'sedan',
    location: 'Paris, France',
    days: '5 Days',
    price: 268,
    stars: 5,
  },

  {
    id: 2,
    img: tour2,
    title: 'suv',
    location: 'Dubai, UAE',
    days: '6 Days',
    price: 367,
    stars: 4,
  },

  {
    id: 3,
    img: tour3,
    title: 'premium',
    location: 'Arizona',
    days: '8 Days',
    price: 201,
    stars: 3,
  },
  
  {
    id: 5,
    img: tour5,
    title: 'mini bus',
    location: 'Rajasthan, India',
    days: '6 Days',
    price: 367,
    stars: 4,
  },

  {
    id: 4,
    img: tour4,
    title: 'sports car',
    location: 'Nevada, US',
    days: '5 Days',
    price: 201,
    stars: 4,
  },


  {
    id: 6,
    img: tour6,
    title: 'hitach',
    location: 'Paris, France',
    days: '8 Days',
    price: 201,
    stars: 4,
  },
];

export const footerGallery = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];
