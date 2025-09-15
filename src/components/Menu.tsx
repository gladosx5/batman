import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const menuData = [
  {
    id: "baguette-bane",
    name: "Baguette Bane",
    price: "6.90 €",
    category: "Urban Fusion",
    desc: "Baguette boulangère, sauce au choix, salade, tomate, oignons, cheddar",
    badges: ["poulet", "steak", "tandoori"],
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg"
  },
  {
    id: "pain-du-demon",
    name: "Pain du Demon",
    price: "5.90 €",
    category: "Urban Fusion",
    desc: "Pain kebab, salade, tomate, oignon, sauce au choix",
    badges: ["kebab", "poulet"],
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  },
  {
    id: "gotham-burger",
    name: "Gotham Burger",
    price: "8.90 €",
    category: "Burgers",
    desc: "Double steak, cheddar, sauce maison, salade, tomates",
    badges: [],
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
  },
  {
    id: "poison-ivy",
    name: "Poison Ivy",
    price: "6.90 €",
    category: "Burgers",
    desc: "Pain brioché, chèvre et miel, salade, oignons caramélisés",
    badges: ["vegetarian"],
    image: "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg"
  },
  {
    id: "double-bat-smash",
    name: "Double Bat-Smash",
    price: "6.90 €",
    category: "Burgers",
    desc: "2 steaks smash, cheddar fondu, sauce spéciale",
    badges: [],
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  },
  {
    id: "triple-bat-smash",
    name: "Triple Bat-Smash",
    price: "7.90 €",
    category: "Burgers",
    desc: "3 steaks smash, cheddar, cornichons",
    badges: [],
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
  },
  {
    id: "tacos-arkham",
    name: "Tacos Arkham",
    price: "5.90 €",
    category: "Tacos",
    desc: "Tacos garni (kebab/poulet/tenders), sauce au choix",
    badges: [],
    image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg"
  },
  {
    id: "bowl-gotham-rise",
    name: "Bowl Gotham Rise",
    price: "6.90 €",
    category: "Bowls",
    desc: "Poulet, fries, salade, sauce fromagère",
    badges: [],
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  },
  {
    id: "menu-enfant",
    name: "The Sidekick (Menu Enfant)",
    price: "5.00 €",
    category: "Enfant",
    desc: "Mini-burger + frites + Capri-Sun + surprise",
    badges: ["enfant"],
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  }
];

const categories = [
  "Tous",
  "Burgers",
  "Urban Fusion",
  "Tacos",
  "Bowls",
  "Enfant"
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === "Tous" 
    ? menuData 
    : menuData.filter(product => product.category === activeCategory);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="section-title">LA CARTE</h2>
        
        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default Menu;