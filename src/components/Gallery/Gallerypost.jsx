import React from 'react'
import Postbox from './Postbox'
import post_1 from '../../assets/post-1.png'
import post_2 from '../../assets/post-2.png'
import post_3 from '../../assets/post-3.png'
import post_4 from '../../assets/post-4.png'
import post_5 from '../../assets/post-5.png'
import post_6 from '../../assets/post-6.png'
import '../styles/Gallery.css'
const Gallerypost = () => {
  return (
    <div className='post-text'>
        <h6>Cultural Stories</h6>
        <h1>Welcome to LokVani Showcase.</h1>

        <div className="post-box">
            <Postbox imgsrc={post_1} desc={"Handcrafted Heritage Masks (Assam)"}/>
            <Postbox imgsrc={post_2} desc={"Folk Dance from Rajasthan"}/>
            <Postbox imgsrc={post_3} desc={"Paahadi Dhol-Damau Performance during Local Festival"}/>
            <Postbox imgsrc={post_4} desc={"Pahadi Mandir Bells at Jageshwar Dham (Almora)"}/>
               <Postbox imgsrc={post_5} desc={"Handcrafted Heritage Masks (Assam)"}/>
               <Postbox imgsrc={post_6} desc={"Stone and Wood Houses in Munsiyari"}/>
        </div>
    </div>
  )
}

export default Gallerypost