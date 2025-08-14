import React from 'react';

// Array de categorias 100% limpo
const categories = [
    { name: 'Restaurante', img: '/images/categories/restaurant.png' },
    { name: 'Sobremesas',  img: '/images/categories/dessert.png' },
    { name: 'Mercado',     img: '/images/categories/market.png' },
    { name: 'Farmácia',    img: '/images/categories/pharmacy.png' },
    { name: 'Pet',         img: '/images/categories/petshop.png' },
    { name: 'Bebidas',     img: '/images/categories/beverage.png' }
];

// O resto do seu componente continua igual
const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-container">
      <h2>Conheça as categorias</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div 
            key={category.name} 
            className={`category-item ${selectedCategory === category.name ? 'selected' : ''}`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <img src={category.img} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;