import React, { useState, useEffect } from 'react';
import MenuModal from './MenuModal';
import WebsiteHeader from './WebsiteHeader';

const FoodWebsite = () => {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [selectedDish, setSelectedDish] = useState(null);

  // Fermer la modal avec Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedDish) {
        setSelectedDish(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedDish]);

  // Menu data optimisé
  const menuData = [
    {
      id: "baguette-bane",
      name: "Baguette Bane",
      price: "6.90 €",
      category: "urban-fusion",
      desc: "Baguette boulangère, sauce au choix, salade, tomate, oignons, cheddar",
      image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg",
      badges: ["poulet", "steak", "tandoori"],
      ingredients: "Pain baguette, viande au choix, cheddar, salade, tomate, oignons, sauce maison",
      allergens: ["gluten", "lactose"]
    },
    {
      id: "pain-du-demon",
      name: "Pain du Demon",
      price: "5.90 €",
      category: "urban-fusion",
      desc: "Pain kebab, salade, tomate, oignon, sauce au choix",
      image: "https://images.pexels.com/photos/4958791/pexels-photo-4958791.jpeg",
      badges: ["kebab", "poulet"],
      ingredients: "Pain kebab, viande kebab ou poulet, salade, tomate, oignon, sauce au choix",
      allergens: ["gluten"]
    },
    {
      id: "gotham-burger",
      name: "Gotham Burger",
      price: "8.90 €",
      category: "burgers",
      desc: "Double steak, cheddar, sauce maison, salade, tomates",
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
      badges: [],
      ingredients: "Pain brioche, double steak haché, cheddar, sauce maison, salade, tomates",
      allergens: ["gluten", "lactose"]
    },
    {
      id: "poison-ivy",
      name: "Poison Ivy",
      price: "6.90 €",
      category: "burgers",
      desc: "Pain brioché, chèvre et miel, salade, oignons caramélisés",
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg",
      badges: ["vegetarian"],
      ingredients: "Pain brioche, fromage de chèvre, miel, salade, oignons caramélisés",
      allergens: ["gluten", "lactose"]
    },
    {
      id: "double-bat-smash",
      name: "Double Bat-Smash",
      price: "6.90 €",
      category: "burgers",
      desc: "2 steaks smash, cheddar fondu, sauce spéciale",
      image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
      badges: [],
      ingredients: "Pain brioche, 2 steaks smash, cheddar fondu, sauce spéciale, cornichons",
      allergens: ["gluten", "lactose"]
    },
    {
      id: "triple-bat-smash",
      name: "Triple Bat-Smash",
      price: "7.90 €",
      category: "burgers",
      desc: "3 steaks smash, cheddar, cornichons",
      image: "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg",
      badges: [],
      ingredients: "Pain brioche, 3 steaks smash, cheddar, cornichons, sauce maison",
      allergens: ["gluten", "lactose"]
    },
    {
      id: "tacos-arkham",
      name: "Tacos Arkham",
      price: "5.90 €",
      category: "tacos",
      desc: "Tacos garni (kebab/poulet/tenders), sauce au choix",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg",
      badges: [],
      ingredients: "Galette, viande au choix, frites, salade, tomate, sauce au choix",
      allergens: ["gluten"]
    },
    {
      id: "bowl-gotham-rise",
      name: "Bowl Gotham Rise",
      price: "6.90 €",
      category: "bowls",
      desc: "Poulet, frites, salade, sauce fromagère",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      badges: [],
      ingredients: "Poulet grillé, frites maison, salade verte, sauce fromagère",
      allergens: ["lactose"]
    },
    {
      id: "menu-enfant",
      name: "The Sidekick (Menu Enfant)",
      price: "5.00 €",
      category: "enfant",
      desc: "Mini-burger + frites + Capri-Sun + surprise",
      image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      badges: ["enfant"],
      ingredients: "Mini pain, steak haché, cheddar, frites, boisson, surprise",
      allergens: ["gluten", "lactose"]
    }
  ];

  const categories = [
    { id: 'tous', name: 'Tous', icon: '🍽️' },
    { id: 'burgers', name: 'Burgers', icon: '🍔' },
    { id: 'urban-fusion', name: 'Urban Fusion', icon: '🌯' },
    { id: 'tacos', name: 'Tacos', icon: '🌮' },
    { id: 'bowls', name: 'Bowls', icon: '🥗' },
    { id: 'enfant', name: 'Menu Enfant', icon: '👶' }
  ];

  const filteredMenu = activeCategory === 'tous' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  const openModal = (dish) => {
    setSelectedDish(dish);
  };

  const closeModal = () => {
    setSelectedDish(null);
  };

  const getBadgeIcon = (badge) => {
    const icons = {
      'poulet': '🐔',
      'steak': '🥩',
      'tandoori': '🌶️',
      'kebab': '🥙',
      'vegetarian': '🌱',
      'enfant': '👶',
      'spicy': '🔥'
    };
    return icons[badge] || '🏷️';
  };

  const getAllergenIcon = (allergen) => {
    const icons = {
      'gluten': '🌾',
      'lactose': '🥛',
      'nuts': '🥜',
      'eggs': '🥚'
    };
    return icons[allergen] || '⚠️';
  };

  return (
    <div className="food-website">
      {/* Header fixe */}
      <WebsiteHeader />
      
      {/* Hero Section */}
      <section id="accueil" className="hero">
        <div className="hero-bg">
          <img 
            src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg" 
            alt="Gotham Streat Hero" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="bat-signal">
          <div className="signal-beam"></div>
          <div className="bat-logo">🦇</div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            GOTHAM STREAT
            <span className="hero-subtitle">La street-food venue de l'ombre</span>
          </h1>
          <div className="hero-actions">
            <a href="#menu" className="hero-cta primary">Voir le menu</a>
            <a href="tel:+33123456789" className="hero-cta secondary">📞 Appeler</a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="container">
          <h2 className="section-title">NOTRE MENU</h2>
          
          {/* Category Filters */}
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-name">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="menu-grid">
            {filteredMenu.map(dish => (
              <div 
                key={dish.id}
                className="dish-card"
                onClick={() => openModal(dish)}
              >
                <div className="dish-image-container">
                  <img src={dish.image} alt={dish.name} className="dish-image" />
                  <div className="dish-overlay">
                    <h3 className="dish-name">{dish.name}</h3>
                  </div>
                  <div className="price-badge">{dish.price}</div>
                </div>
                <div className="dish-info">
                  <p className="dish-desc">{dish.desc}</p>
                  {dish.badges.length > 0 && (
                    <div className="dish-badges">
                      {dish.badges.map((badge, index) => (
                        <span key={index} className="badge">
                          {getBadgeIcon(badge)} {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">À PROPOS</h2>
            <div className="about-text">
              <p>
                Dans les ruelles sombres de Gotham, où les néons percent la nuit et où chaque coin de rue 
                raconte une histoire, une nouvelle légende culinaire est née. Gotham Streat fusionne les 
                saveurs du monde avec l'âme rebelle de la ville qui ne dort jamais.
              </p>
              <p>
                Nos recettes sont préparées avec des ingrédients frais et de qualité, dans le respect 
                des traditions culinaires revisitées avec une touche d'originalité. Chaque plat raconte 
                une histoire, chaque bouchée est une aventure.
              </p>
            </div>
            <div className="about-values">
              <div className="value-item">
                <span className="value-icon">🥩</span>
                <h3>Ingrédients frais</h3>
                <p>Sélection quotidienne des meilleurs produits</p>
              </div>
              <div className="value-item">
                <span className="value-icon">👨‍🍳</span>
                <h3>Recettes maison</h3>
                <p>Préparations artisanales et sauces secrètes</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🏪</span>
                <h3>Engagement local</h3>
                <p>Partenaires locaux et circuit court</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infos Section */}
      <section id="infos" className="infos-section">
        <div className="container">
          <h2 className="section-title">INFOS PRATIQUES</h2>
          
          <div className="infos-grid">
            <div className="info-card">
              <h3 className="info-title">📍 ADRESSE</h3>
              <p>Rue de la République<br />81600 Gaillac</p>
            </div>
            
            <div className="info-card">
              <h3 className="info-title">🕐 HORAIRES</h3>
              <div className="hours-table">
                <div className="hours-row">
                  <span>Lun - Jeu</span>
                  <span>18h - 23h</span>
                </div>
                <div className="hours-row">
                  <span>Ven - Sam</span>
                  <span>18h - 01h</span>
                </div>
                <div className="hours-row">
                  <span>Dimanche</span>
                  <span>18h - 22h</span>
                </div>
              </div>
            </div>
            
            <div className="info-card">
              <h3 className="info-title">📞 CONTACT</h3>
              <a href="tel:+33123456789" className="phone-button">
                01 23 45 67 89
              </a>
              <p className="contact-note">
                Réservations uniquement par téléphone
              </p>
            </div>
            
            <div className="info-card">
              <h3 className="info-title">📱 RÉSEAUX</h3>
              <div className="social-links">
                <a href="#" className="social-link">📘 Facebook</a>
                <a href="#" className="social-link">📷 Instagram</a>
                <a href="#" className="social-link">🎵 TikTok</a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map-container">
            <h3 className="map-title">NOUS TROUVER</h3>
            <div className="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.7326163483717!2d1.897578009929065!3d43.90280429378944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12add3fb3c4d7083%3A0x1c8d3361837cfa86!2sGotham%20Streat!5e0!3m2!1sfr!2sfr!4v1757930398861!5m2!1sfr!2sfr" 
                width="100%" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Gotham Streat"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="crime-tape"></div>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">GOTHAM STREAT</div>
            <div className="footer-info">
              <p>Rue de la République, 81600 Gaillac</p>
              <p>📞 01 23 45 67 89</p>
              <p>Lun-Jeu: 18h-23h | Ven-Sam: 18h-01h | Dim: 18h-22h</p>
            </div>
            <div className="footer-links">
              <a href="#mentions" className="footer-link">Mentions légales</a>
              <a href="#cgv" className="footer-link">CGV</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Gotham Streat. Dans l'ombre, nous cuisinons.</p>
          </div>
        </div>
      </footer>

      {/* Modal Component */}
      <MenuModal 
        selectedDish={selectedDish}
        onClose={closeModal}
        getAllergenIcon={getAllergenIcon}
      />
    </div>
  );
};

export default FoodWebsite;