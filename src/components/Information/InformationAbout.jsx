import React from "react";
import "../styles/Information.css";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

export default function InformationAbout() {
  return (
    <> 
    
    <div className="info-about">
     
      {/* BOX 1 — WHAT + WHY */}
      <div className="info-box scroll-fade">
        <div className="info-row">
          <h2 className="info-title">What is LokVani?</h2>
          <p className="info-text">
            LokVani is a digital platform designed to collect, verify, and share
            authentic cultural content from across India.
          </p>
        </div>

        <div className="info-row">
          <h2 className="info-title">Why?</h2>
          <p className="info-text">
            Because much of our culture is stored in homes, villages, local
            artists, and personal memories — not on big platforms.
          </p>
        </div>
      </div>

      {/* BOX 2 — OUR WORK */}
      <div className="info-box scroll-fade">
        <div className="info-row">
          <h2 className="info-title">Our Work</h2>
          <p className="info-text">
            ✔ Local people, artists, and storytellers upload cultural content{" "}
            <br />
            ✔ Users learn about festivals, folk art, traditions, rituals <br />
            ✔ Content is verified for authenticity <br />
            ✔ Creators earn points & rewards <br />
            🧠 This motivates communities to preserve culture.
          </p>
        </div>
      </div>

      {/* BOX 3 — WHY VERIFY */}
      <div className="info-box scroll-fade">
        <div className="info-row">
          <h2 className="info-title">Why Do We Verify Culture?</h2>
          <p className="info-text">
            Culture can be misrepresented or copied without credit. <br />
            <br />
            LokVani ensures: <br />
            <br />
            🪔 Traditions stay pure <br />
            🎨 Art stays original <br />
            🧑‍🎨 Local creators get recognition <br />
            🇮🇳 India's identity stays real and diverse
          </p>
        </div>
      </div>

      {/* BOX 4 — IMAGE SECTION */}
      <div className="info-box scroll-fade">
        <div className="info-image-container">
          <img
            src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Informationimg/risikesh.jpg?raw=true"
            alt="Rishikesh Culture"
            className="info-image"
          />
        </div>
      </div>
    </div>
    </>
  );
}
