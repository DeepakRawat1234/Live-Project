import React from 'react'
import Gallery from './pages/Gallery'
import Signup from './components/login/Signup'
import Login from './components/login/Login'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Information from './pages/Information'
import Home from './pages/Home'
import HeroSection from './components/home/HeroSection'

import Postpage from './pages/Postpage'
import LoginHome from './components/home/LoginHome'
import UserHome from './pages/UserHome'
import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'
import Navbarlogin from './components/Layout/LoginNavbar'
import Verification from './components/Uploder/Verification'
import Idselect from './components/Uploder/Idselect'
import FileUpload from './components/Uploder/FileUpload'

const App = () => {
  
  return (
    <BrowserRouter>
   
      { <Routes>
   
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/information" element={<Information />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/post" element={<Postpage />} />
        <Route path="/" element={<Home />} />
        <Route path="/postpage" element={<Postpage/>}></Route>
        <Route path='/loginhome' element={<UserHome/>}></Route>
        <Route path='/file-upload' element={<FileUpload/>}></Route>
        <Route path='/idselect' element={<Idselect/>}></Route>
        <Route path='/verification' element={<Verification/>}></Route>
      </Routes>
      }
      
    </BrowserRouter>
  

  )
}

export default App
