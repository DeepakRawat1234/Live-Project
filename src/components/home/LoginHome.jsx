import React from "react";
import "../styles/loginhome.css";

import hero from "../../assets/home2/hero.jpg";

import { useNavigate } from "react-router-dom";

export default function LoginHome() {
    const navigate=useNavigate();
    const handleclick=()=>{
        navigate("/postpage")
    }
  return (
    <div className="loginhome">

      {/* HERO */}
      <section
        className="lh-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h1>UTTARAKHAND</h1>
      </section>

      {/* LATEST FESTIVALS */}
      <section className="lh-festivals">
        <h2>Latest Festivals</h2>

        <div className="festival-grid">
          <div className="festival-card" onClick={handleclick}>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/harla.jpg?raw=true" alt="Harla Festival" />
            <p>Harla Festival</p>
          </div>
          <div className="festival-card" onClick={handleclick}>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/phooldei.jpg?raw=true" alt="Phool Dei" />
            <p>Phool Dei</p>
          </div>
          <div className="festival-card" onClick={handleclick}>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/ghee.jpg?raw=true" alt="Ghee Sankranti" />
            <p>Ghee Sankranti</p>
          </div>
          <div className="festival-card" onClick={handleclick}>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/nanda.jpg?raw=true" alt="Nanda Devi Raj Jat" />
            <p>Nanda Devi Raj Jat Yatra</p>
          </div>
          <div className="festival-card" onClick={handleclick}>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/ganga.jpg?raw=true" alt="Ganga Aarti" />
            <p>Ganga Aarti</p>
          </div>
           <div className="festival-card" onClick={handleclick}>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/jhumelo.jpg?raw=true" alt="jhumaleo" />
            <p>jhumaleo - Dance</p>
          </div>
          <div className="festival-card" onClick={handleclick}>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/pandav-2.jpg?raw=true" alt="pandav" />
            <p>Pandav - Dance</p>
          </div>
          <div className="festival-card" onClick={handleclick}>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/choliya.jpg?raw=true" alt="choliya" />
            <p>Choliya - Dance </p>
          </div>
          <div className="festival-card" onClick={handleclick}>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/phooldei.jpg?raw=true" alt="choliya" />
            <p>Bashant Punchmi Festival </p>
          </div>
           <div className="festival-card" onClick={handleclick}>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/harla.jpg?raw=true" alt="Harla Festival" />
            <p>Harla Festival</p>
          </div>
          <div className="festival-card">
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/phooldei.jpg?raw=true" alt="Phool Dei" />
            <p>Phool Dei</p>
          </div>
          <div className="festival-card">
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/ghee.jpg?raw=true" alt="Ghee Sankranti" />
            <p>Ghee Sankranti</p>
          </div>
          <div className="festival-card">
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/ghee.jpg?raw=true" alt="Ghee Sankranti" />
            <p>Ghee Sankranti</p>
          </div>
          <div className="festival-card">
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/nanda.jpg?raw=true" alt="Nanda Devi Raj Jat" />
            <p>Nanda Devi Raj Jat Yatra</p>
          </div>
          <div className="festival-card">
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/ghee.jpg?raw=true" alt="Ghee Sankranti" />
            <p>Ghee Sankranti</p>
          </div>
        </div>
      </section>

      {/* DISCOVER MORE */}
      <section className="lh-discover">
        <h2>
          DISCOVER MORE <br /> CULTURES
        </h2>

        <div className="discover-list">
          <div className="discover-item">
            <span>01</span>
            <div>
              <h4>Jagar – Spirit Calling Ritual</h4>
              <p>Ancient ritual invoking local deities through music.</p>
            </div>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/jagar.jpg?raw=true" alt="Jagar Ritual" />
          </div>

          <div className="discover-item">
            <span>02</span>
            <div>
              <h4>Pandav Nritya</h4>
              <p>Dance tradition inspired by Mahabharata legends.</p>
            </div>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/pandav.jpg?raw=true" alt="Pandav Nritya" />
          </div>

          <div className="discover-item">
            <span>03</span>
            <div>
              <h4>Choliya (Sword Dance)</h4>
              <p>War dance symbolising bravery and heritage.</p>
            </div>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/choliya.jpg?raw=true" alt="Choliya Dance" />
          </div>

          <div className="discover-item">
            <span>04</span>
            <div>
              <h4>Nanda Devi Worship</h4>
              <p>Sacred rituals dedicated to Goddess Nanda.</p>
            </div>
            <img src="https://github.com/DeepakRawat1234/Live-Project/blob/main/src/assets/Home2/naula.jpg?raw=true" alt="Naula" />
          </div>

        </div>

        <button className="view-btn">VIEW ALL POSTS</button>
      </section>

    </div>
  );
}
