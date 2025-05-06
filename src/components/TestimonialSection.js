import React, { useState, useEffect } from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Savoria exceeded all my expectations. The flavors were extraordinary and the service impeccable.",
      author: "Vinaya",
      role: "Food Critic"
    },
    {
      id: 2,
      text: "Our anniversary dinner couldn't have been more perfect. The attention to detail in every dish was remarkable.",
      author: "Viji & Raj",
      role: "Customers"
    },
    {
      id: 3,
      text: "As a chef myself, I'm impressed by the creativity and technique displayed in Savoria's menu. Truly inspirational.",
      author: "Saathvic",
      role: "Executive Chef"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonial-section">
      <h2>What Our Guests Say</h2>
      
      <div className="testimonial-slider">
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial ${index === currentIndex ? 'active' : ''}`}
            >
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.author}</p>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;