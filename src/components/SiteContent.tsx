import React from 'react';

const SiteContent: React.FC = () => {
  return (
    <div className="site-vitrine">
      <div className="hero-section">
        <div className="container">
          <h1>Gotham Fresh Food</h1>
          <p>La meilleure cuisine de Gotham City</p>
          <button className="cta-button">Commander maintenant</button>
        </div>
      </div>
      
      <div className="services-section">
        <div className="container">
          <h2>Nos Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Livraison Rapide</h3>
              <p>Livré en moins de 30 minutes</p>
            </div>
            <div className="service-card">
              <h3>Cuisine Fraîche</h3>
              <p>Ingrédients locaux et frais</p>
            </div>
            <div className="service-card">
              <h3>24/7 Disponible</h3>
              <p>Ouvert jour et nuit</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact-section">
        <div className="container">
          <h2>Contactez-nous</h2>
          <p>📞 +1 (555) GOTHAM</p>
          <p>📧 contact@gothamfresh.com</p>
          <p>📍 Wayne Tower, Gotham City</p>
        </div>
      </div>
    </div>
  );
};

export default SiteContent;