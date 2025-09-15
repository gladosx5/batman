import React from 'react';

const FoodWebsite = () => {
  return (
    <div className="food-website">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Gotham Gourmet</h1>
          <p className="hero-subtitle">Les saveurs de la nuit</p>
          <button className="cta-button">Commander maintenant</button>
        </div>
        <div className="hero-image">
          <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="Plat gastronomique" />
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <div className="container">
          <h2 className="section-title">Notre Menu</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" alt="Burger" />
              <h3>Dark Knight Burger</h3>
              <p>Un burger légendaire avec des ingrédients secrets</p>
              <span className="price">15€</span>
            </div>
            <div className="menu-item">
              <img src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg" alt="Pizza" />
              <h3>Gotham Pizza</h3>
              <p>Pizza artisanale aux saveurs mystérieuses</p>
              <span className="price">18€</span>
            </div>
            <div className="menu-item">
              <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" alt="Pasta" />
              <h3>Wayne Manor Pasta</h3>
              <p>Pâtes fraîches dans une sauce secrète</p>
              <span className="price">14€</span>
            </div>
            <div className="menu-item">
              <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" alt="Dessert" />
              <h3>Bat Cave Dessert</h3>
              <p>Un dessert aussi sombre que délicieux</p>
              <span className="price">8€</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Pourquoi nous choisir ?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🚀</div>
              <h3>Livraison rapide</h3>
              <p>Plus rapide que la Batmobile</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌟</div>
              <h3>Qualité premium</h3>
              <p>Ingrédients sélectionnés avec soin</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Recettes secrètes</h3>
              <p>Des saveurs uniques et mystérieuses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Gotham Gourmet. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default FoodWebsite;