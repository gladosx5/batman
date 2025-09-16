import React, { useState, useEffect } from 'react';

const WebsiteHeader = () => {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isScrolled, setIsScrolled] = useState(false);

  // Observer pour détecter la section active
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
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

  // Détecter le scroll pour l'effet du header
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`website-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="website-header-container">
        <div className="website-header-content">
          <div className="website-logo">
            <span className="website-logo-text">
              GOTHAM STREAT
            </span>
          </div>
          <nav className="website-nav">
            <a href="#accueil" className={`website-nav-link ${activeSection === 'accueil' ? 'active' : ''}`}>
              Accueil
            </a>
            <a href="#menu" className={`website-nav-link ${activeSection === 'menu' ? 'active' : ''}`}>
              Menu
            </a>
            <a href="#about" className={`website-nav-link ${activeSection === 'about' ? 'active' : ''}`}>
              À propos
            </a>
            <a href="#infos" className={`website-nav-link ${activeSection === 'infos' ? 'active' : ''}`}>
              Infos pratiques
            </a>
          </nav>
          <div className="website-header-actions">
            <a href="tel:+33123456789" className="website-cta-button primary">
              📞 Appeler
            </a>
            <a 
              href="https://www.google.com/maps/dir//Gotham+Streat,+Rue+de+la+République,+Gaillac/@43.9028043,1.8975780,17z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="website-cta-button secondary"
            >
              Itinéraire
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WebsiteHeader;