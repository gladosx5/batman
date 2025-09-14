import React from 'react';
import { Facebook, Instagram, Twitter, Utensils } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Utensils className="logo-icon" />
              <span>DeliciousFood</span>
            </div>
            <p>
              Votre destination pour une cuisine authentique et savoureuse. 
              Nous nous engageons à vous offrir la meilleure expérience culinaire.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/cart">Panier</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Informations</h4>
            <ul>
              <li><a href="#">Conditions d'utilisation</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Livraison</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>123 Rue de la Gastronomie</li>
              <li>75001 Paris, France</li>
              <li>+33 1 23 45 67 89</li>
              <li>contact@deliciousfood.fr</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 DeliciousFood. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;