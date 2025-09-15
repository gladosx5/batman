import React, { useState, useEffect } from 'react';

const FoodWebsite = () => {
  const [activeCategory, setActiveCategory] = useState('urban-fusion');
  const [selectedDish, setSelectedDish] = useState(null);
  const [rainMode, setRainMode] = useState(true);

  // Menu data
  const menuCategories = {
    'urban-fusion': {
      name: 'Urban Fusion',
      dishes: [
        {
          id: 1,
          name: 'DARK KNIGHT BURGER',
          price: '16€',
          image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
          description: 'Steak de bœuf, cheddar fumé, oignons caramélisés, sauce mystère',
          icons: ['🥩', '🧀', '🌶️']
        },
        {
          id: 2,
          name: 'JOKER FUSION WRAP',
          price: '14€',
          image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
          description: 'Poulet épicé, avocat, salsa verde, tortilla colorée',
          icons: ['🐔', '🥑', '🌶️']
        },
        {
          id: 3,
          name: 'PENGUIN FISH TACOS',
          price: '15€',
          image: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
          description: 'Poisson grillé, coleslaw, sauce tartare maison',
          icons: ['🐟', '🥗', '🌮']
        }
      ]
    },
    'villains-edition': {
      name: 'Villains Edition',
      dishes: [
        {
          id: 4,
          name: 'RIDDLER MYSTERY BOX',
          price: '18€',
          image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
          description: 'Plat surprise du chef, ingrédients secrets révélés à la dégustation',
          icons: ['❓', '🎭', '🌟']
        },
        {
          id: 5,
          name: 'POISON IVY VEGGIE',
          price: '13€',
          image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg',
          description: 'Bowl végétarien, quinoa, légumes grillés, sauce verte',
          icons: ['🥗', '🌱', '💚']
        }
      ]
    },
    'burgers-ombre': {
      name: 'Burgers de l\'Ombre',
      dishes: [
        {
          id: 6,
          name: 'BATMAN CLASSIC',
          price: '15€',
          image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
          description: 'Le burger emblématique, steak, bacon, fromage, sauce secrète',
          icons: ['🥩', '🥓', '🧀']
        },
        {
          id: 7,
          name: 'CATWOMAN STEALTH',
          price: '17€',
          image: 'https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg',
          description: 'Burger noir au charbon, bœuf wagyu, truffe, roquette',
          icons: ['🥩', '🖤', '⭐']
        }
      ]
    }
  };

  return (
    <div className="gotham-street-website">
      {/* Rain Effect */}
      {rainMode && <div className="rain-effect"></div>}
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="gotham-skyline"></div>
        <div className="hero-content">
          <div className="bat-signal">
            <div className="signal-light"></div>
          </div>
          <h1 className="neon-title">GOTHAM STREET</h1>
          <p className="hero-subtitle">Dans les ruelles sombres de Gotham, une nouvelle street-food est née...</p>
          <div className="hero-buttons">
            <button className="neon-button primary" onClick={() => document.getElementById('menu').scrollIntoView({behavior: 'smooth'})}>
              EXPLORER LA CARTE
            </button>
            <button className="neon-button secondary" onClick={() => document.getElementById('infos').scrollIntoView({behavior: 'smooth'})}>
              INFOS PRATIQUES
            </button>
          </div>
        </div>
        
        {/* Rain Toggle */}
        <button 
          className="rain-toggle"
          onClick={() => setRainMode(!rainMode)}
          title={rainMode ? "Désactiver la pluie" : "Activer la pluie"}
        >
          {rainMode ? '🌧️' : '☀️'}
        </button>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="container">
          <h2 className="section-title neon-glow">LA CARTE</h2>
          
          {/* Category Navigation */}
          <div className="category-nav">
            {Object.entries(menuCategories).map(([key, category]) => (
              <button
                key={key}
                className={`category-btn ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Dishes Grid */}
          <div className="dishes-grid">
            {menuCategories[activeCategory].dishes.map((dish) => (
              <div 
                key={dish.id} 
                className="dish-card holographic"
                onClick={() => setSelectedDish(dish)}
              >
                <div className="dish-image-container">
                  <img src={dish.image} alt={dish.name} className="dish-image" />
                  <div className="dish-halo"></div>
                </div>
                <div className="dish-info">
                  <h3 className="dish-name">{dish.name}</h3>
                  <div className="dish-icons">
                    {dish.icons.map((icon, index) => (
                      <span key={index} className="dish-icon">{icon}</span>
                    ))}
                  </div>
                  <div className="dish-price neon-yellow">{dish.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="brick-wall"></div>
        <div className="smoke-effect"></div>
        <div className="container">
          <div className="about-content">
            <h2 className="section-title neon-glow">À PROPOS</h2>
            <p className="about-text">
              Dans les ruelles sombres de Gotham, où les néons percent la nuit et où chaque coin de rue 
              raconte une histoire, une nouvelle légende culinaire est née. Gotham Street fusionne les 
              saveurs du monde avec l'âme rebelle de la ville qui ne dort jamais.
            </p>
            <div className="graffiti-text">STREET FOOD • GOTHAM STYLE</div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="infos" className="info-section">
        <div className="container">
          <h2 className="section-title neon-glow">INFOS PRATIQUES</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-title">📍 ADRESSE</h3>
              <p>42 Wayne Street<br />Gotham City, GC 12345</p>
            </div>
            <div className="info-card">
              <h3 className="info-title">🕐 HORAIRES</h3>
              <p>
                Lun - Jeu: 18h - 23h<br />
                Ven - Sam: 18h - 01h<br />
                Dim: 18h - 22h
              </p>
            </div>
            <div className="info-card">
              <h3 className="info-title">📞 CONTACT</h3>
              <button className="call-button neon-button">
                01 23 45 67 89
              </button>
            </div>
            <div className="info-card">
              <h3 className="info-title">📱 RÉSEAUX</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">📷</a>
                <a href="#" className="social-icon">🎵</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="crime-scene-tape"></div>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">GOTHAM STREET</div>
            <p>&copy; 2024 Gotham Street. Dans l'ombre, nous cuisinons.</p>
          </div>
        </div>
      </footer>

      {/* Dish Modal */}
      {selectedDish && (
        <div className="modal-overlay" onClick={() => setSelectedDish(null)}>
          <div className="dish-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedDish(null)}>✕</button>
            <div className="modal-content">
              <img src={selectedDish.image} alt={selectedDish.name} className="modal-image" />
              <div className="modal-info">
                <h2 className="modal-title neon-glow">{selectedDish.name}</h2>
                <div className="modal-icons">
                  {selectedDish.icons.map((icon, index) => (
                    <span key={index} className="modal-icon">{icon}</span>
                  ))}
                </div>
                <p className="modal-description">{selectedDish.description}</p>
                <div className="modal-price neon-yellow">{selectedDish.price}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodWebsite;