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
              <p>Livré en moins de 30 minutes dans tout Gotham</p>
            </div>
            <div className="service-card">
              <h3>Cuisine Fraîche</h3>
              <p>Ingrédients locaux et frais de la région</p>
            </div>
            <div className="service-card">
              <h3>24/7 Disponible</h3>
              <p>Ouvert jour et nuit pour vous servir</p>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-section">
        <div className="container">
          <h2>Notre Menu</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <h3>Batman Burger</h3>
              <p>Le burger légendaire de Gotham avec double steak</p>
              <span className="price">15.99€</span>
            </div>
            <div className="menu-item">
              <h3>Joker Pizza</h3>
              <p>Pizza colorée aux saveurs surprenantes</p>
              <span className="price">18.50€</span>
            </div>
            <div className="menu-item">
              <h3>Robin Salad</h3>
              <p>Salade fraîche et énergisante</p>
              <span className="price">12.99€</span>
            </div>
            <div className="menu-item">
              <h3>Catwoman Pasta</h3>
              <p>Pâtes élégantes aux fruits de mer</p>
              <span className="price">16.75€</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="container">
          <h2>À Propos de Nous</h2>
          <p>
            Depuis 1939, Gotham Fresh Food est le restaurant de référence de Gotham City. 
            Situé au cœur de la ville, nous servons les meilleurs plats avec des ingrédients 
            de qualité supérieure. Notre équipe de chefs expérimentés travaille jour et nuit 
            pour vous offrir une expérience culinaire inoubliable.
          </p>
          <p>
            Que vous soyez un héros en mission ou un citoyen ordinaire, notre cuisine 
            saura satisfaire tous vos besoins. Nous livrons partout dans Gotham, 
            même dans les quartiers les plus sombres de la ville.
          </p>
        </div>
      </div>

      <div className="testimonials-section">
        <div className="container">
          <h2>Témoignages</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>"Le meilleur restaurant de Gotham ! Je commande toujours après mes patrouilles."</p>
              <span>- Un héros anonyme</span>
            </div>
            <div className="testimonial">
              <p>"Service rapide et nourriture délicieuse. Parfait pour les urgences !"</p>
              <span>- Commissioner Gordon</span>
            </div>
            <div className="testimonial">
              <p>"Même les criminels recommandent cet endroit. C'est dire !"</p>
              <span>- Harvey Dent</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact-section">
        <div className="container">
          <h2>Contactez-nous</h2>
          <div className="contact-info">
            <p>📞 +1 (555) GOTHAM-FOOD</p>
            <p>📧 contact@gothamfresh.com</p>
            <p>📍 Wayne Tower, Downtown Gotham City</p>
            <p>🕒 Ouvert 24h/24, 7j/7</p>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="container">
          <p>&copy; 2024 Gotham Fresh Food. Tous droits réservés.</p>
          <p>Protégé par Batman depuis 1939</p>
        </div>
      </div>
    </div>
  );
};

export default SiteContent;