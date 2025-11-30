import React, { useState } from "react";
import "../styles/Navbar.css";
import Menu from "../../assets/menu.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const openlogin = () => {
    navigate("/login");
  };

 return (
  <>
    <div className="navbar-container">
      <img
        src={Menu}
        alt="menu"
        className="menu-icon"
        onClick={() => setOpen(!open)}
      />

      <div className="Navbar">
        <h3 className="Logo-text">
          <Link to="/" style={{textDecoration:"none"}}>Lockvani</Link>
        </h3>

        <ul className="Nav-link">
          <li className="link-item"><Link to="/Gallery" style={{textDecoration:"none"}}>Gallery</Link></li>
          <li className="link-item"><Link to="/information" style={{textDecoration:"none"}}>About Us</Link></li>
        </ul>

        <button className="startbtn" onClick={openlogin} style={{textDecoration:"none"}}>Start Now</button>
      </div>
    </div>

    {open && (
      <div className="Mobile-menu">
        <h3 className="mobile-Logo-text"><Link to="/" onClick={()=>setOpen(false)} style={{textDecoration:"none"}}>Lockvani</Link></h3>

        <ul className="mobile-Nav-link">
          <li className="mobile-link-item"><Link to="/Gallery" onClick={() => setOpen(false)} style={{textDecoration:"none"}}>Gallery</Link></li>
          <li className="mobile-link-item"><Link to="/information" onClick={() => setOpen(false)} style={{textDecoration:"none"}}>About Us</Link></li>
        </ul>

        <button className="startbtn mobile-startbtn" onClick={() => { setOpen(false); openlogin(); }}>
          Start Now
        </button>
      </div>
    )}
  </>
);

};

export default Navbar;
