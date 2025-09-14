import React, { useState } from 'react';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../context/CartContext';

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Burger Gourmet",
    description: "Steak de bœuf, fromage artisanal, légumes frais, sauce maison",
    price: 16.90,
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    category: "Plats"
  },
  {
    id: 2,
    name: "Salade César",
    description: "Salade romaine, parmesan, croûtons, sauce césar authentique",
    price: 12.50,
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    category: "Salades"
  },
  {
    id: 3,
    name: "Pizza Margherita",
    description: "Tomate, mozzarella di bufala, basilic frais, huile d'olive",
    price: 14.90,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    category: "Pizzas"
  },
  {
    id: 4,
    name: "Saumon Grillé",
    description: "Filet de saumon, légumes de saison, sauce hollandaise",
    price: 22.90,
    image: "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    category: "Poissons"
  },
  {
    id: 5,
    name: "Tiramisu Maison",
    description: "Mascarpone, café, cacao, biscuits à la cuillère",
    price: 7.50,
    image: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    category: "Desserts"
  },
  {
    id: 6,
    name: "Risotto aux Champignons",
    description: "Riz arborio, champignons porcini, parmesan, truffe",
    price: 18.90,
    image: "https://images.pexels.com/photos/8601532/pexels-photo-8601532.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    category: "Plats"
  }
];

const categories = ["Tous", "Plats", "Salades", "Pizzas", "Poissons", "Desserts"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const { dispatch } = useCart();

  const filteredItems = selectedCategory === "Tous" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item: MenuItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-header">
          <h2>Notre Menu</h2>
          <p>Découvrez nos spécialités préparées avec amour</p>
        </div>

        <div className="menu-categories">
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

        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-item">
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
                <div className="menu-item-overlay">
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(item)}
                  >
                    <Plus />
                  </button>
                </div>
              </div>
              
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="star" />
                    ))}
                  </div>
                </div>
                
                <p className="menu-item-description">{item.description}</p>
                
                <div className="menu-item-footer">
                  <span className="price">{item.price.toFixed(2)}€</span>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => addToCart(item)}
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;