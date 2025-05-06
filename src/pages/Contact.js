import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-detail">
            <h3>Visit Us</h3>
            <p>123 Gourmet Avenue</p>
            <p>Foodie Street,Chennai</p>
            <p>Open Daily: 11am - 11pm</p>
          </div>
          
          <div className="contact-detail">
            <h3>Contact</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@savoria.com</p>
          </div>
          
          {/* <div className="contact-map">
            <div className="map-placeholder">
              <p>Map Location</p>
              <p>Interactive map would be here</p>
            </div>
          </div> */}
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;