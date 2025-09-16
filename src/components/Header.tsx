import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('accueil');

  // Observer pour détecter la section active
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -90% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observer toutes les sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">
              GOTHAM STREAT
            </span>
          </div>
          <nav className="nav">
            <a href="#accueil" className={`nav-link ${activeSection === 'accueil' ? 'active' : ''}`}>
              Accueil
            </a>
            <a href="#menu" className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}>
              Menu
            </a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
              À propos
            </a>
            <a href="#infos" className={`nav-link ${activeSection === 'infos' ? 'active' : ''}`}>
              Infos pratiques
            </a>
          </nav>
          <div className="header-actions">
            <a href="tel:+33123456789" className="cta-button primary">
              📞 Appeler
            </a>
            <a 
              href="https://www.google.com/maps/dir//Gotham+Streat,+Rue+de+la+République,+Gaillac/@43.9028043,1.8975780,17z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button secondary"
            >
              Itinéraire
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;