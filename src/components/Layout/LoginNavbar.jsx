import React, { useState } from "react";
import "../styles/LoginNav.css";
import user from "../../assets/User.png";

const LoginNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">

      <div className="user-box">
        <img src={user} className="user-icon" alt="user" />
        <h4 className="name">Deepak</h4>
      </div>

      <div className="logo">
        <h1>LOKVANI</h1>
      </div>

      {/* HAMBURGER (mobile only) */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MENU */}
      <div className={`button-box ${menuOpen ? "open" : ""}`}>
        <button className="state">UTTARAKHAND</button>
        <button>BECOME AN UPLODER</button>
      </div>

    </div>
  );
};

export default LoginNavbar;
