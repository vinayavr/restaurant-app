import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Savoria</h1>
        <h2>Where Culinary Art Meets Elegance</h2>
        <p>Experience exquisite flavors crafted with passion and precision</p>
        <div className="hero-buttons">
          <Link to="/menu" className="btn btn-primary">Explore Our Menu</Link>
          {/* <a href="tel:+123456789" className="btn btn-secondary">Reserve A Table</a> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;