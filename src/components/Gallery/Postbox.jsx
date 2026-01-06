import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Postbox = ({imgsrc,desc}) => {
  const Navigate=useNavigate();
  return (
    <div className="post-card"
    onClick={()=>{
      Navigate("/login")
    }}>
  <img src={imgsrc} alt="" />
  <p>{desc}</p>
</div>

  )
}

export default Postbox