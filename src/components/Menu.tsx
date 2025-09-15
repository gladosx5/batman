import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

// Données du menu selon le cahier des charges
const menuData = [
  {
    id: "baguette-bane",
    name: "Baguette Bane",
    price: "6.90 €",
    category: "Urban Fusion",
    desc: "Baguette boulangère, sauce au choix, salade, tomate, oignons, cheddar",
    badges: ["poulet", "steak", "tandoori"],
    image: "https://images.pexels.com/photos/4676401/pexels-photo-4676401.jpeg",
    ingredients: ["Baguette boulangère", "Sauce au choix", "Salade", "Tomate", "Oignons", "Cheddar"],
    allergens: ["Gluten", "Lactose"]
  },
  {
    id: "pain-du-demon",
    name: "Pain du Demon",
    price: "5.90 €",
    category: "Urban Fusion",
    desc: "Pain kebab, salade, tomate, oignon, sauce au choix",
    badges: ["kebab", "poulet"],
    image: "https://images.pexels.com/photos/4676401/pexels-photo-4676401.jpeg",
    ingredients: ["Pain kebab", "Salade", "Tomate", "Oignon", "Sauce au choix"],
    allergens: ["Gluten"]
  },
  {
    id: "gotham-burger",
    name: "Gotham Burger",
    price: "8.90 €",
    category: "Burgers",
    desc: "Double steak, cheddar, sauce maison, salade, tomates",
    badges: [],
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    ingredients: ["Double steak", "Cheddar", "Sauce maison", "Salade", "Tomates", "Pain brioche"],
    allergens: ["Gluten", "Lactose"]
  },
  {
    id: "poison-ivy",
    name: "Poison Ivy",
    price: "6.90 €",
    category: "Burgers",
    desc: "Pain brioché, chèvre et miel, salade, oignons caramélisés",
    badges: ["vegetarian"],
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    ingredients: ["Pain brioché", "Chèvre", "Miel", "Salade", "Oignons caramélisés"],
    allergens: ["Gluten", "Lactose"]
  },
  {
    id: "double-bat-smash",
    name: "Double Bat-Smash",
    price: "6.90 €",
    category: "Burgers",
    desc: "2 steaks smash, cheddar fondu, sauce spéciale",
    badges: [],
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    ingredients: ["2 steaks smash", "Cheddar fondu", "Sauce spéciale", "Pain brioche"],
    allergens: ["Gluten", "Lactose"]
  },
  {
    id: "triple-bat-smash",
    name: "Triple Bat-Smash",
    price: "7.90 €",
    category: "Burgers",
    desc: "3 steaks smash, cheddar, cornichons",
    badges: [],
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    ingredients: ["3 steaks smash", "Cheddar", "Cornichons", "Pain brioche"],
    allergens: ["Gluten", "Lactose"]
  },
  {
    id: "tacos-arkham",
    name: "Tacos Arkham",
    price: "5.90 €",
    category: "Tacos",
    desc: "Tacos garni (kebab/poulet/tenders), sauce au choix",
    badges: [],
    image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg",
    ingredients: ["Tortilla", "Kebab/Poulet/Tenders", "Sauce au choix", "Salade", "Tomate"],
    allergens: ["Gluten"]
  },
  {
    id: "bowl-gotham-rise",
    name: "Bowl Gotham Rise",
    price: "6.90 €",
    category: "Bowls",
    desc: "Poulet, fries, salade, sauce fromagère",
    badges: [],
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    ingredients: ["Poulet grillé", "Frites", "Salade", "Sauce fromagère"],
    allergens: ["Lactose"]
  },
  {
    id: "menu-enfant",
    name: "The Sidekick (Menu Enfant)",
    price: "5.00 €",
    category: "Enfant",
    desc: "Mini-burger + frites + Capri-Sun + surprise",
    badges: ["enfant"],
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    ingredients: ["Mini-burger", "Frites", "Capri-Sun", "Surprise"],
    allergens: ["Gluten"]
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

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts = selectedCategory === "Tous" 
    ? menuData 
    : menuData.filter(product => product.category === selectedCategory);

  return (
    <section className="menu-section">
      <div className="container">
        <h2 className="section-title">Notre Menu</h2>
        
        {/* Filtres par catégorie */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille des produits */}
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

      {/* Modal produit */}
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