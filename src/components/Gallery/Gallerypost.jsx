import React from 'react'
import Postbox from './Postbox'

import '../styles/Gallery.css'
const Gallerypost = () => {
  return (
    <div className='post-text'>
        <h6>Cultural Stories</h6>
        <h1>Welcome to LokVani Showcase.</h1>

        <div className="post-box">
            <Postbox imgsrc="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home/img1.jpg?raw=true" desc={"Handcrafted Heritage Masks (Assam)"}/>
            <Postbox imgsrc="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home/img2.jpg?raw=true" desc={"Folk Dance from Rajasthan"}/>
            <Postbox imgsrc="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home/img4.jpg?raw=true" desc={"Paahadi Dhol-Damau Performance during Local Festival"}/>
            <Postbox imgsrc="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home/img3.jpg?raw=true" desc={"Pahadi Mandir Bells at Jageshwar Dham (Almora)"}/>
               <Postbox imgsrc="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home/img1.jpg?raw=true" desc={"Handcrafted Heritage Masks (Assam)"}/>
               <Postbox imgsrc="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home/img5.jpg?raw=true" desc={"Stone and Wood Houses in Munsiyari"}/>
        </div>
    </div>
  )
}

export default Gallerypost