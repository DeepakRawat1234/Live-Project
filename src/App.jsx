import React from 'react'
import Gallery from './pages/Gallery'
import Signup from './components/login/Signup'
import Login from './components/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Information from './pages/Information'
import Home from './pages/Home'
import HeroSection from './components/home/HeroSection'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/information" element={<Information />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
