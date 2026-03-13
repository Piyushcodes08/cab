import { useEffect } from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Categories from './components/categories/Categories'
import About from './components/about/About'
import Destination from './components/destination/Destination'
import Tours from './components/tours/Tours'
import Footer from './components/footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'


const App = () => {

 useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      
    });
    AOS.refresh();
  }, []);

  return (
   <>
   <Header/>
   <Home/>
   <Categories/>
   <About/>
   <Destination/>
   <Tours/>
   <Footer/>
   </>
  )
}

export default App
