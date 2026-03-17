import { useEffect, lazy, Suspense } from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'

const Categories = lazy(() => import('./components/categories/Categories'))
const About = lazy(() => import('./components/about/About'))
const Destination = lazy(() => import('./components/destination/Destination'))
const Attractions = lazy(() => import('./components/attractions/Attractions'))
const Tours = lazy(() => import('./components/tours/Tours'))
const Contact = lazy(() => import('./components/contact/Contact'))
const Footer = lazy(() => import('./components/footer/Footer'))

const App = () => {

 useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      
    });
    AOS.refresh();
  }, []);

  return (
    <>
    <Header/>
    <Home/>
    <Suspense fallback={<div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>}>
      <Categories/>
      <About/>
      <Destination/>
      <Attractions/>
      <Tours/>
      <Contact/>
      <Footer/>
    </Suspense>
    </>
  )
}

export default App
