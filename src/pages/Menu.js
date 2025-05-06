import React, { useState } from 'react';
import MenuCard from '../components/MenuCard';
import { menuData } from '../data/menuData';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'appetizers', 'main courses', 'desserts', 'drinks'];

  const filteredItems = activeCategory === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <h1>Our Menu</h1>
        <p>Experience culinary excellence with our carefully crafted dishes</p>
      </div>
      
      <div className="menu-filter">
        {categories.map(category => (
          <button 
            key={category} 
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
