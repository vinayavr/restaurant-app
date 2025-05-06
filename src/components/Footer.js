import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Savoria</h3>
          <p>Exceptional dining experiences since 2010.</p>
          <p>123 Gourmet Avenue, Foodie Street, Chennai</p>
          <p>Open: Mon-Sun 11am-11pm</p>
        </div>

        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone:+91 9876543210</p>
          <p>Email: info@savoria.com</p>
          {/* <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="social-icon">FB</i></a>
            <a href="#" aria-label="Instagram"><i className="social-icon">IG</i></a>
            <a href="#" aria-label="Twitter"><i className="social-icon">TW</i></a>
          </div> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Savoria Restaurant. All rights reserved.</p>
        <p>Designed by Vinaya V R - Student Project</p>
      </div>
    </footer>
  );
};

export default Footer;