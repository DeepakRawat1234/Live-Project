import React from "react";
import "../styles/GallerySection.css";

import img1 from "../../assets/Home/img1.jpg";
import img2 from "../../assets/Home/img2.jpg";
import img3 from "../../assets/Home/img3.jpg";
import img4 from "../../assets/Home/img4.jpg";
import img5 from "../../assets/Home/img5.jpg";
import { Link } from "react-router-dom";


export default function GallerySection() {
  const items = [
    { img: img1, title: "Bikaner Camel Festival" },
    { img: img2, title: "Hemis Festival" },
    { img: img3, title: "Kerala Village Fair (Gramam)" },
    { img: img4, title: "Goa Carnival" },
  ];

  return (
    <div className="main">
      
      <h1 className="about-title">Experience Different Culture</h1>

      <a href="" className="gallery-link"><Link to="/gallery" style={{color:"white",textDecoration:"none"}}>View Full Gallery</Link></a>

      <div className="gallery">
        <div className="card">
          <img src={img4} alt="Bikaner Camel Festival" />
          <h3>Bikaner Camel</h3>
          <a href="" className="btn"><Link to="/gallery" style={{color:"white",textDecoration:"none"}}>Visit</Link></a>
        </div>

        <div className="card">
          <img src={img1} alt="Bikaner Camel Festival" />
          <h3>Bikaner Camel</h3>
          <a href="" className="btn"><Link to="/gallery" style={{color:"white",textDecoration:"none"}}>Visit</Link></a>
        </div>

        <div className="card">
          <img src={img2} alt="Bikaner Camel Festival" />
          <h3>Bikaner Camel</h3>
          <a href="#" className="btn"><Link to="/gallery" style={{color:"white",textDecoration:"none"}}>Visit</Link></a>
        </div>

        <div className="card">
          <img src={img3} alt="Bikaner Camel Festival" />
          <h3>Bikaner Camel</h3>
          <a href="#" className="btn"><Link to="/gallery" style={{color:"white",textDecoration:"none"}}>Visit</Link></a>
        </div>
      </div>
      <div className="about">
        <h2 className="about-title">About LokVani</h2>

        <p>
          Tucked into the diverse cultural roots of INDIA, LokVani is a community
          platform that celebrates real traditions, art, festivals and stories
          shared by the people themselves. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deserunt sequi eius temporibus error quisquam
          consectetur ad blanditiis dignissimos. Perspiciatis alias deleniti
          dolore rem laborum tempore corrupti quas praesentium ut magnam!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure similique
          delectus possimus error aspernatur sapiente earum labore enim quam
          blanditiis odio modi sequi, aliquam atque rerum quis eum minima nemo.
        </p>

        <p>

          <a href="#">Read Our Story</a> To discover how LokVani brings culture closer to you through photo
          stories, videos, blogs, folk art and classic traditions — preserved and
          shared by real creators and verified to maintain authenticity Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quam at tenetur suscipit quod totam laudantium eveniet harum dignissimos commodi labore sequi molestias sint necessitatibus, id assumenda, reiciendis accusantium consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed inventore omnis accusamus eveniet quae atque iste possimus enim, illo magni odit dignissimos soluta culpa. Vel quam ipsa dolore! Pariatur!
        </p>
      </div>

    </div>


  );
}
