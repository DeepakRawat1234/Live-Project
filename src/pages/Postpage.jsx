import React from 'react'
import Navbar from '../components/Layout/Navbar'
import { Post } from '../components/Postdata/Post'
import Navbarlogin from '../components/Layout/LoginNavbar'
import Footer from '../components/Layout/Footer'
import LoginNavbar from '../components/Layout/LoginNavbar'

const Postpage = () => {
  return (
    <div>
      <LoginNavbar/>
        <Post/>
        <Footer/>
    </div>
  )
}

export default Postpage