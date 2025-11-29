import React, { useState } from 'react'
import img1 from "../../assets/sliderlogo-1.png"
import img2 from "../../assets/sliderlogo-2.png"
import img3 from "../../assets/sliderlogo-3.png"
import img4 from "../../assets/sliderlogo-4.png"
import sliderimg1 from '../../assets/sliderimg-1.jpg'
import sliderimg2 from '../../assets/sliderimg-2.jpg'
import sliderimg3 from '../../assets/sliderimg-3.jpg'
import sliderimg4 from '../../assets/sliderimg-4.jpg'
const GallerySlider = () => {
    const images = [sliderimg1,sliderimg2,sliderimg3,sliderimg4];
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className='slider-box'>
<h6>Cultural Glimpses</h6>
<h1>Uncover India’s cultural charm and identity.</h1>
<div className='imgdiv'>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <img src={img3} alt="" />
    <img src={img4} alt="" />
</div>
<div className="imgdiv slider-imgdiv">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>

        {images.map((img, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img src={img} alt={`slide-${index}`} />}
          </div>
        ))}
      </div>

      <div className="himalya-box">
         <h6 className='hero-text'>Discover timeless traditions passed through generations.</h6>
         <h1>Experience the soul of Indian culture.
</h1>
<button className='registerbtn'>Register Now!</button>
      </div>
    </div>
  )
}

export default GallerySlider