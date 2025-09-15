import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Star, Flame, Leaf, Gift } from 'lucide-react';

const FoodWebsite = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loader avec bat-signal
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const menuCategories = [
    {
      id: 'urban-fusion',
      name: 'Urban Fusion',
      color: '#FFD600',
      items: [
        {
          id: 1,
          name: 'Gotham Rise',
          price: '12.90€',
          description: 'Bowl signature aux saveurs urbaines',
          image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
          ingredients: ['Riz basmati', 'Poulet grillé', 'Légumes croquants', 'Sauce teriyaki'],
          icons: ['🍗']
        },
        {
          id: 2,
          name: 'Shadow Bowl',
          price: '11.90€',
          description: 'Bowl végétarien mystérieux',
          image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
          ingredients: ['Quinoa', 'Légumes grillés', 'Avocat', 'Sauce tahini'],
          icons: ['🥦']
        }
      ]
    },
    {
      id: 'villains-edition',
      name: 'Burgers Zone - Villains Edition',
      color: '#B22222',
      items: [
        {
          id: 3,
          name: 'The Joker Smash',
          price: '14.90€',
          description: 'Burger démentiel aux saveurs explosives',
          image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
          ingredients: ['Pain brioche', 'Steak 180g', 'Cheddar fondu', 'Sauce spéciale Joker', 'Oignons caramélisés'],
          icons: ['🌶️', '🔥']
        },
        {
          id: 4,
          name: 'The Penguin Classic',
          price: '13.90€',
          description: 'Burger élégant et raffiné',
          image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
          ingredients: ['Pain artisanal', 'Steak 150g', 'Emmental', 'Sauce champignons', 'Roquette'],
          icons: ['⭐']
        }
      ]
    },
    {
      id: 'burgers-ombre',
      name: 'Burgers de l\'Ombre',
      color: '#1C1C1C',
      items: [
        {
          id: 5,
          name: 'The Bruce Smash',
          price: '15.90€',
          description: 'Le burger légendaire de Gotham',
          image: 'https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg',
          ingredients: ['Pain noir', 'Double steak 200g', 'Cheddar vieilli', 'Sauce Batman', 'Bacon croustillant'],
          icons: ['🔥', '⭐']
        },
        {
          id: 6,
          name: 'Pain du Démon',
          price: '13.90€',
          description: 'Burger épicé des profondeurs',
          image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
          ingredients: ['Pain épicé', 'Steak 180g', 'Pepper jack', 'Sauce diabolique', 'Jalapeños'],
          icons: ['🌶️', '🔥']
        }
      ]
    },
    {
      id: 'tex-mex',
      name: 'Tex-Mex',
      color: '#FF8C00',
      items: [
        {
          id: 7,
          name: 'Gotham Tacos',
          price: '9.90€',
          description: 'Trio de tacos urbains',
          image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg',
          ingredients: ['Tortillas maison', 'Bœuf épicé', 'Guacamole', 'Salsa piquante', 'Coriandre'],
          icons: ['🌶️']
        },
        {
          id: 8,
          name: 'Wayne Quesadilla',
          price: '11.90€',
          description: 'Quesadilla premium aux trois fromages',
          image: 'https://images.pexels.com/photos/5737241/pexels-photo-5737241.jpeg',
          ingredients: ['Tortilla géante', 'Trois fromages', 'Poulet grillé', 'Poivrons', 'Crème aigre'],
          icons: ['🧀']
        }
      ]
    },
    {
      id: 'menu-enfant',
      name: 'Menu Enfant',
      color: '#32CD32',
      items: [
        {
          id: 9,
          name: 'Mini Batman',
          price: '8.90€',
          description: 'Menu enfant avec jouet Batman',
          image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg',
          ingredients: ['Mini burger', 'Frites', 'Compote', 'Boisson', 'Jouet Batman'],
          icons: ['🎁']
        }
      ]
    }
  ];

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  if (isLoading) {
    return (
      <div className="gotham-loader">
        <div className="bat-signal">
          <div className="bat-logo">🦇</div>
          <div className="signal-beam"></div>
        </div>
        <p>Chargement de Gotham Streat...</p>
      </div>
    );
  }

  return (
    <div className="gotham-streat">
      {/* Navigation */}
      <nav className="gotham-nav">
        <div className="nav-container">
          <div className="nav-logo">GOTHAM STREAT</div>
          <div className="nav-links">
            <a href="#accueil">Accueil</a>
            <a href="#carte">Carte</a>
            <a href="#apropos">À propos</a>
            <a href="#infos">Infos pratiques</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="hero-gotham">
        <div className="hero-bg">
          <div className="gotham-skyline-bg"></div>
          <div className="neon-glow"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-logo">
            <span className="gotham-text">GOTHAM</span>
            <span className="streat-text">STREAT</span>
          </h1>
          <p className="hero-slogan">La street-food venue de l'ombre</p>
          <div className="hero-buttons">
            <a href="#carte" className="cta-button primary">
              <span>Voir la carte</span>
              <div className="button-glow"></div>
            </a>
            <a href="#infos" className="cta-button secondary">
              <span>Infos pratiques</span>
              <div className="button-glow"></div>
            </a>
          </div>
        </div>
        <div className="hero-effects">
          <div className="spotlight"></div>
          <div className="floating-particles"></div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="carte" className="menu-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-text">Notre Carte</span>
            <div className="title-glow"></div>
          </h2>
          
          {menuCategories.map((category) => (
            <div key={category.id} className="menu-category" style={{'--category-color': category.color}}>
              <h3 className="category-title">{category.name}</h3>
              <div className="menu-grid">
                {category.items.map((item) => (
                  <div 
                    key={item.id} 
                    className="menu-card"
                    onClick={() => openModal(item)}
                  >
                    <div className="card-image">
                      <img src={item.image} alt={item.name} />
                      <div className="card-overlay"></div>
                    </div>
                    <div className="card-content">
                      <div className="card-header">
                        <h4 className="item-name">{item.name}</h4>
                        <div className="item-icons">
                          {item.icons.map((icon, index) => (
                            <span key={index} className="item-icon">{icon}</span>
                          ))}
                        </div>
                      </div>
                      <p className="item-description">{item.description}</p>
                      <div className="item-price">{item.price}</div>
                    </div>
                    <div className="card-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">
              <span className="title-text">L'Histoire de Gotham Streat</span>
              <div className="title-glow"></div>
            </h2>
            <div className="about-text">
              <p>Dans l'ombre de la ville, une nouvelle street-food renaît...</p>
              <p>Gotham Streat puise son inspiration dans les ruelles sombres et mystérieuses de la cité. Chaque burger, chaque plat raconte une histoire, celle des héros et des vilains qui façonnent notre univers culinaire.</p>
              <p>Notre mission : vous offrir une expérience gastronomique unique, où les saveurs se mélangent dans une symphonie urbaine inoubliable.</p>
            </div>
            <div className="about-timeline">
              <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <div className="timeline-content">Naissance de l'idée dans les rues de Gotham</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">Ouverture du premier restaurant</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-content">Expansion de l'univers Gotham Streat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infos pratiques Section */}
      <section id="infos" className="info-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-text">Infos Pratiques</span>
            <div className="title-glow"></div>
          </h2>
          
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={32} />
              </div>
              <h3>Localisation</h3>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.7326163483717!2d1.897578009929065!3d43.90280429378944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12add3fb3c4d7083%3A0x1c8d3361837cfa86!2sGotham%20Streat!5e0!3m2!1sfr!2sfr!4v1757930398861!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Clock size={32} />
              </div>
              <h3>Horaires</h3>
              <div className="schedule">
                <div className="schedule-item">
                  <span className="day">Lundi - Jeudi</span>
                  <span className="hours">11h30 - 14h30 • 18h30 - 22h30</span>
                </div>
                <div className="schedule-item">
                  <span className="day">Vendredi - Samedi</span>
                  <span className="hours">11h30 - 14h30 • 18h30 - 23h00</span>
                </div>
                <div className="schedule-item">
                  <span className="day">Dimanche</span>
                  <span className="hours">18h30 - 22h30</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Phone size={32} />
              </div>
              <h3>Contact</h3>
              <a href="tel:+33123456789" className="phone-button">
                <Phone size={20} />
                <span>📞 Appeler maintenant</span>
                <div className="button-glow"></div>
              </a>
              <div className="social-links">
                <a href="#" className="social-link">📘 Facebook</a>
                <a href="#" className="social-link">📷 Instagram</a>
                <a href="#" className="social-link">🐦 Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gotham-footer">
        <div className="footer-line"></div>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">GOTHAM STREAT</div>
            <div className="footer-info">
              <p>📍 123 Wayne Street, Gotham City</p>
              <p>📞 +33 1 23 45 67 89</p>
            </div>
            <div className="footer-links">
              <a href="#carte">Carte</a>
              <a href="#apropos">À propos</a>
              <a href="#infos">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <div className="modal-image">
              <img src={selectedItem.image} alt={selectedItem.name} />
            </div>
            <div className="modal-info">
              <div className="modal-header">
                <h3>{selectedItem.name}</h3>
                <div className="modal-icons">
                  {selectedItem.icons.map((icon, index) => (
                    <span key={index} className="modal-icon">{icon}</span>
                  ))}
                </div>
              </div>
              <div className="modal-price">{selectedItem.price}</div>
              <div className="modal-ingredients">
                <h4>Composition :</h4>
                <ul>
                  {selectedItem.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodWebsite;