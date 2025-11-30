import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Navbar from '../components/Layout/Navbar'
import GallerySlider from '../components/Gallery/GallerySlider'
import Slider from '../components/home/Slider'
import GallerySection from '../components/home/GallerySection'
import Footer from '../components/Layout/Footer'

const Home = () => {
  return (
    <div>
       
        <HeroSection/>
       
        <GallerySection/> <Slider/>
        
    </div>
  )
}

export default Home