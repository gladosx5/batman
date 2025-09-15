import React from 'react';

const FoodWebsite = () => {
  return (
    <div className="food-website">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Gotham Gourmet</h1>
          <p className="hero-subtitle">Les saveurs de la nuit, livrées chez vous</p>
          <button className="cta-button">Commander maintenant</button>
        </div>
        <div className="hero-image">
          <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Plat gourmet" />
        </div>
      </section>

      {/* Menu Categories */}
      <section className="menu-section">
        <div className="container">
          <h2 className="section-title">Notre Menu</h2>
          <div className="menu-grid">
            <div className="menu-card">
              <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Burgers" />
              <h3>Burgers Premium</h3>
              <p>Des burgers artisanaux avec des ingrédients de qualité</p>
              <span className="price">À partir de 12€</span>
            </div>
            <div className="menu-card">
              <img src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Pizza" />
              <h3>Pizzas Italiennes</h3>
              <p>Pâte fraîche et ingrédients importés d'Italie</p>
              <span className="price">À partir de 15€</span>
            </div>
            <div className="menu-card">
              <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Sushi" />
              <h3>Sushi Fresh</h3>
              <p>Poisson frais du jour, préparé par nos chefs</p>
              <span className="price">À partir de 18€</span>
            </div>
            <div className="menu-card">
              <img src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Desserts" />
              <h3>Desserts Maison</h3>
              <p>Créations sucrées de nos pâtissiers</p>
              <span className="price">À partir de 8€</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Pourquoi nous choisir ?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Livraison Rapide</h3>
              <p>Livraison en moins de 30 minutes dans tout Gotham</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Qualité Premium</h3>
              <p>Ingrédients sélectionnés et préparation artisanale</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌙</div>
              <h3>Ouvert 24h/24</h3>
              <p>Service continu pour les héros de la nuit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Gotham Gourmet</h4>
              <p>La meilleure cuisine de Gotham City</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📞 01 23 45 67 89</p>
              <p>📧 contact@gothamgourmet.com</p>
            </div>
            <div className="footer-section">
              <h4>Horaires</h4>
              <p>Ouvert 24h/24, 7j/7</p>
              <p>Livraison dans tout Gotham</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FoodWebsite;