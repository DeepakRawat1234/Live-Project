import React from 'react'
import Navbar from '../components/Layout/Navbar'
import GalleryHero from '../components/Gallery/GalleryHero'
import Gallerypost from '../components/Gallery/Gallerypost'
import GallerySlider from '../components/Gallery/GallerySlider'
import Footer from '../components/Layout/Footer'

const Gallery = () => {
  return (
    <div >
        <GalleryHero/>
        <Gallerypost/>
        <GallerySlider/>
    </div>
  )
}

export default Gallery