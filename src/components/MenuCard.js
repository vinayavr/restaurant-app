import React from 'react';
import './MenuCard.css';

const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <div className="menu-card-image-container">
        <div className="menu-card-image-placeholder">
          {/* Placeholder for actual image */}
          <div className="placeholder-text">{item.name.charAt(0)}</div>
        </div>
      </div>
      <div className="menu-card-content">
        <div className="menu-card-header">
          <h3>{item.name}</h3>
          <span className="menu-card-price">${item.price.toFixed(2)}</span>
        </div>
        <p className="menu-card-description">{item.description}</p>
        {item.dietary && (
          <div className="menu-card-tags">
            {item.dietary.map((tag, index) => (
              <span key={index} className="menu-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCard;