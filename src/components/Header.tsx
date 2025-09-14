import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon, X, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <Utensils className="logo-icon" />
          <span>DeliciousFood</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>À propos</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>

        <div className="header-actions">
          <Link to="/cart" className="cart-button">
            <ShoppingCart />
            {state.items.length > 0 && (
              <span className="cart-count">{state.items.length}</span>
            )}
          </Link>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;