import React from "react";
import "../styles/HeroSection.css";

import bgImg from "../../assets/home/img.png";   

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-content">
        <h1>EXPLORE MORE CULTURES</h1>
        <button className="hero-btn">SIGN UP NOW</button>
      </div>
    </div>
  );
};

export default HeroSection;
