import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">MyBrand</div>
          <button 
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <a href="#banner">Home</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
            <a href="#footer">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
