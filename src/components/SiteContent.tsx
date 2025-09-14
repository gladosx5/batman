import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Star, Zap, Truck, Shield } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  isSpecial?: boolean;
  image?: string;
}

interface MenuCategory {
  title: string;
  emoji: string;
  items: MenuItem[];
}

const SiteContent = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    // Afficher le header immédiatement
    setHeaderVisible(true);
    const siteContent = document.querySelector('.site-content');
    const header = document.querySelector('.site-header');
    
    if (header) {
      header.classList.add('visible');
    }

    // Observer pour détecter quand le site content devient visible
    if (siteContent && header) {
      const observer = new MutationObserver(() => {
        const opacity = parseFloat(getComputedStyle(siteContent).opacity);
        const shouldShowHeader = opacity > 0.1; // Seuil très bas
        
        if (shouldShowHeader !== headerVisible) {
          setHeaderVisible(shouldShowHeader);
          if (shouldShowHeader) {
            header.classList.add('visible');
          } else {
            header.classList.remove('visible');
          }
        }
      });

      observer.observe(siteContent, {
        attributes: true,
        attributeFilter: ['style']
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [headerVisible]);

  // Effet séparé pour l'affichage initial du header
  useEffect(() => {
    const header = document.querySelector('.site-header');
    if (header) {
      // Forcer l'affichage du header dès le chargement
      setTimeout(() => {
        header.classList.add('visible');

  const menuData: MenuCategory[] = [
    {
      title: "Burgers Villains Edition",
      emoji: "🍔",
      items: [
        { name: "Nightwing Chicken", price: "5,90 €", description: "Burger poulet croustillant avec sauce spéciale", isSpecial: true },
        { name: "Penguin Galette", price: "6,90 €", description: "Galette de bœuf avec fromage fondant", isSpecial: true },
        { name: "Selina Veggie", price: "5,90 €", description: "Burger végétarien aux légumes grillés", isSpecial: true },
        { name: "Harley Fries Galette", price: "6,90 €", description: "Galette avec frites intégrées", isSpecial: true },
        { name: "Red Hood Royal Chicken", price: "6,90 €", description: "Poulet royal avec sauce épicée", isSpecial: true }
      ]
    },
    {
      title: "Urban Fusion & Street",
      emoji: "🌮",
      items: [
        { name: "Baguette Bane", price: "6,90 €", description: "Baguette garnie façon street food" },
        { name: "Pain du Demon", price: "5,90 €", description: "Pain spécial aux saveurs intenses" },
        { name: "Assiette du Manoir", price: "7,90 €", description: "Assiette complète style Wayne Manor" },
        { name: "Wayne Street Dog", price: "3,90 €", description: "Hot dog gourmet" },
        { name: "Spicy Arkham Dog", price: "3,90 €", description: "Hot dog épicé" },
        { name: "Panini Gotham", price: "6,90 €", description: "Panini grillé aux saveurs urbaines" },
        { name: "Tacos Arkham", price: "5,90 €", description: "Tacos avec supplément viande +1€" },
        { name: "Bowl Gotham Rise", price: "6,90 €", description: "Bowl healthy aux légumes frais" }
      ]
    },
    {
      title: "Nos Tex-Mex",
      emoji: "🍟",
      items: [
        { name: "Bouchées Camembert", price: "5,00 € (x5) / 6,50 € (x7)", description: "Bouchées de camembert panées" },
        { name: "Oignons Rings", price: "5,00 € (x6) / 7,00 € (x12)", description: "Anneaux d'oignons croustillants" },
        { name: "Nuggets", price: "6,50 € (x8) / 10,50 € (x16)", description: "Nuggets de poulet dorés" },
        { name: "Wings", price: "6,50 € (x6) / 10,50 € (x12)", description: "Ailes de poulet épicées" },
        { name: "Tenders", price: "6,50 € (x5) / 10,50 € (x10)", description: "Tenders de poulet croustillants" }
      ]
    },
    {
      title: "Burgers de l'Ombre",
      emoji: "🌃",
      items: [
        { name: "The Bruce Smash", price: "5,90 €", description: "Le burger signature de Bruce Wayne", isSpecial: true },
        { name: "Double Bat-Smash", price: "6,90 €", description: "Double steak pour double plaisir", isSpecial: true },
        { name: "Triple Bat-Smash", price: "7,90 €", description: "Triple steak pour les plus affamés", isSpecial: true },
        { name: "The Gotham Burger", price: "8,90 €", description: "Le burger ultime de Gotham", isSpecial: true },
        { name: "Poison Ivy", price: "6,90 €", description: "Burger végétarien aux herbes", isSpecial: true },
        { name: "The Black Bacon", price: "6,90 €", description: "Burger au bacon fumé", isSpecial: true }
      ]
    }
  ];

  const specialOffers = [
    {
      title: "Menu Étudiant",
      price: "7,00 €",
      description: "Burger + Frites + Boisson",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Box Robin",
      price: "9,90 €",
      description: "1 burger + frites + 3 tenders ou 5 wings",
      color: "from-red-500 to-red-700"
    },
    {
      title: "Box Dark Knight",
      price: "14,90 €",
      description: "1 burger + 1 hot dog + frites + 3 tenders ou 5 wings",
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <div className="site-content">
      {/* Header */}
      <header className="site-header">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="logo">
              <h1 className="text-3xl font-bold text-yellow-400">
                🦇 Gotham Fresh Food
              </h1>
              <p className="text-gray-300 text-sm">La nuit vous appartient</p>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#menu" className="nav-link">Menu Gotham</a>
              <a href="#offers" className="nav-link">Offres Spéciales</a>
              <a href="#about" className="nav-link">À propos</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">
            Gotham Fresh Food
            <span className="hero-subtitle">La nuit vous appartient</span>
          </h2>
          <p className="hero-description">
            Découvrez nos burgers légendaires et nos spécialités urbaines 
            dans l'univers sombre et savoureux de Gotham City 🌃
          </p>
          <a href="#menu" className="cta-button">
            <Zap className="w-5 h-5 mr-2" />
            Découvrir le menu
          </a>
        </div>
      </section>

      {/* Special Offers */}
      <section id="offers" className="offers-section">
        <div className="container mx-auto px-4 py-16">
          <h2 className="section-title">🎁 Offres Spéciales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {specialOffers.map((offer, index) => (
              <div key={index} className={`offer-card bg-gradient-to-br ${offer.color}`}>
                <div className="offer-content">
                  <h3 className="offer-title">{offer.title}</h3>
                  <div className="offer-price">{offer.price}</div>
                  <p className="offer-description">{offer.description}</p>
                </div>
                <div className="offer-glow"></div>
              </div>
            ))}
          </div>
          <div className="villains-edition">
            <div className="villains-card">
              <h3 className="text-2xl font-bold text-red-400 mb-2">
                🦹‍♂️ Villains Edition
              </h3>
              <p className="text-gray-300">
                Burgers limités en édition spéciale
              </p>
              <div className="text-yellow-400 font-bold text-lg mt-2">
                +2€ le menu
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="container mx-auto px-4 py-16">
          <h2 className="section-title">🍔 Menu Gotham</h2>
          
          {menuData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="menu-category">
              <h3 className="category-title">
                {category.emoji} {category.title}
                {category.title.includes("Edition") && (
                  <span className="special-badge">+2€ le menu</span>
                )}
              </h3>
              
              <div className="menu-grid">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className={`menu-item ${item.isSpecial ? 'special-item' : ''}`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="menu-item-content">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-price">{item.price}</p>
                      {item.description && (
                        <p className="item-description">{item.description}</p>
                      )}
                    </div>
                    {item.isSpecial && <div className="special-glow"></div>}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Menu Enfant */}
          <div className="menu-category">
            <h3 className="category-title">🎁 Menu Spécial</h3>
            <div className="menu-grid">
              <div className="menu-item special-item">
                <div className="menu-item-content">
                  <h4 className="item-name">Menu Enfant - The Sidekick</h4>
                  <p className="item-price">5,00 €</p>
                  <p className="item-description">
                    Mini-burger + frites + Capri-Sun + Kinder surprise
                  </p>
                </div>
                <div className="special-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container mx-auto px-4 py-16">
          <h2 className="section-title">🏢 À propos</h2>
          <div className="about-content">
            <p className="about-text">
              Gotham Fresh Food est un fast-food halal inspiré de l'univers urbain et sombre 
              de Gotham City. Burgers généreux, tacos gourmands, service rapide, ambiance conviviale.
            </p>
            
            <div className="features-grid">
              <div className="feature-item">
                <Shield className="feature-icon text-green-400" />
                <span>100% Halal</span>
              </div>
              <div className="feature-item">
                <Truck className="feature-icon text-blue-400" />
                <span>Livraison possible</span>
              </div>
              <div className="feature-item">
                <MapPin className="feature-icon text-red-400" />
                <span>Gotham Streat, Gaillac</span>
              </div>
              <div className="feature-item">
                <Clock className="feature-icon text-yellow-400" />
                <span>11h30 - 23h00, 7j/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container mx-auto px-4 py-16">
          <h2 className="section-title">📞 Contact & Localisation</h2>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <h3 className="contact-title">Téléphone</h3>
                  <a href="tel:+33123456789" className="contact-link">
                    01 23 45 67 89
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <h3 className="contact-title">Adresse</h3>
                  <p className="contact-text">Gotham Streat, Gaillac</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Clock className="contact-icon" />
                <div>
                  <h3 className="contact-title">Horaires</h3>
                  <p className="contact-text">11h30 - 23h00</p>
                  <p className="contact-text">7 jours sur 7</p>
                </div>
              </div>
            </div>
            
            <div className="map-container">
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.731012892524!2d1.8975255!3d43.9028375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12add3fb3c4d7083%3A0x1c8d3361837cfa86!2sGotham%20Streat!5e0!3m2!1sfr!2sfr!4v1757847912742!5m2!1sfr!2sfr"
                  className="map-iframe"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gotham Streat - Fresh Food"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container mx-auto px-4 py-8">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">🦇 Gotham Fresh Food</h3>
              <p className="footer-text">La nuit vous appartient</p>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-subtitle">Coordonnées</h4>
              <p className="footer-text">Gotham Streat, Gaillac</p>
              <p className="footer-text">01 23 45 67 89</p>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-subtitle">Horaires</h4>
              <p className="footer-text">11h30 - 23h00</p>
              <p className="footer-text">7 jours sur 7</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2024 Gotham Fresh Food. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

      {/* Item Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>
            <h3 className="modal-title">{selectedItem.name}</h3>
            <p className="modal-price">{selectedItem.price}</p>
            {selectedItem.description && (
              <p className="modal-description">{selectedItem.description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteContent;