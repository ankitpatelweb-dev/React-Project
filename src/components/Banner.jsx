import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section id="banner" className="banner">
      <div className="banner-content">
        <h1>Welcome to Our Platform</h1>
        <p>Discover amazing services tailored just for you</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default Banner;