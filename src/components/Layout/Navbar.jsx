import React, { useState } from 'react';
import "../styles/Navbar.css";
import Menu from "../../assets/menu.png"; // your menu icon

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon (Mobile Only) */}
      <img 
        src={Menu} 
        alt="menu" 
        className="menu-icon" 
        onClick={() => setOpen(!open)}
      />

      {/* Desktop Menu */}
      {!open && (
        <div className='Navbar'>
          <h3 className='Logo-text'>Lockvani</h3>
          <ul className='Nav-link'>
            <li className='link-item'>Gallery</li>
            <li className='link-item'>About Us</li>
          </ul>
          <button className='startbtn'>Start Now</button>
        </div>
      )}

      {/* Mobile Menu */}
      {open && (
        <div className='Mobile-menu'>
          <h3 className='mobile-Logo-text'>Lockvani</h3>
          <ul className='mobile-Nav-link'>
            <li className='mobile-link-item'>Gallery</li>
            <li className='mobile-link-item'>About Us</li>
          </ul>
          <button className='startbtn mobile-startbtn'>Start Now</button>
        </div>
      )}
    </>
  );
};

export default Navbar;
