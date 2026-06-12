import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We provide world-class web development and digital services to businesses worldwide.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#banner">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
              <a href="#instagram">Instagram</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@mybrand.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Tech Street, City, Country</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} MyBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;