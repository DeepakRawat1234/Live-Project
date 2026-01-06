import React from 'react'
import img1 from "../../assets/Uploder/img-1.png"
import '../styles/Verification.css'
const Verification = () => {
  return (
    <div className='verification-box'>
        <img src={img1} alt="" />
        <h2 className='verification-h2'>Identity Verification</h2>
        <p className='verification-p'>Complete identity verification to start Uploading</p>
        <button className='get-btn'>Get Started  </button>
    </div>
  )
}

export default Verification