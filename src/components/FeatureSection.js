import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "Seasonal Ingredients",
      description: "We source only the freshest seasonal ingredients from local farmers and producers.",
      icon: "🌿"
    },
    {
      id: 2,
      title: "Award-Winning Chef",
      description: "Our executive chef brings 15 years of culinary excellence to every dish.",
      icon: "👨‍🍳"
    },
    {
      id: 3,
      title: "Perfect Atmosphere",
      description: "Elegant, comfortable ambiance perfect for romantic dinners or special celebrations.",
      icon: "✨"
    }
  ];

  return (
    <section className="feature-section">
      <h2>Why Choose Savoria</h2>
      <div className="features-container">
        {features.map(feature => (
          <div key={feature.id} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;