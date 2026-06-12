import React from 'react';
import './ContentBox.css';

const ContentBox = () => {
  return (
    <section className="content-box">
      <div className="container">
        <h2>Why Choose Us?</h2>
        <div className="content-grid">
          <div className="content-card">
            <div className="icon">⚡</div>
            <h3>Fast</h3>
            <p>Lightning-fast performance and quick response times</p>
          </div>
          <div className="content-card">
            <div className="icon">🔒</div>
            <h3>Secure</h3>
            <p>Enterprise-grade security to protect your data</p>
          </div>
          <div className="content-card">
            <div className="icon">🎯</div>
            <h3>Reliable</h3>
            <p>99.9% uptime guarantee for your peace of mind</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBox;
