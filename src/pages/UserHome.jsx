import React from 'react'
import LoginHome from '../components/home/LoginHome'
import Navbarlogin from '../components/Layout/LoginNavbar'
import Footer from '../components/Layout/Footer'
import LoginNavbar from '../components/Layout/LoginNavbar'

const UserHome = () => {
  return (
    <div>
     <LoginNavbar/>
      <LoginHome/>
     <Footer/>
    </div>
  )
}

export default UserHome