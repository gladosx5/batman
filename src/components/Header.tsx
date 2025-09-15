import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" fill="#FFD600" stroke="#FFD600" strokeWidth="2"/>
              <text x="20" y="25" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontWeight="bold">GS</text>
            </svg>
            <span className="logo-text">GOTHAM STREET</span>
          </div>

          {/* Navigation */}
          <nav className="nav">
            <button onClick={() => scrollToSection('hero')} className="nav-link">Accueil</button>
            <button onClick={() => scrollToSection('menu')} className="nav-link">Menu</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">À propos</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Infos pratiques</button>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <a href="tel:+33123456789" className="btn-call">
              📞 Appeler
            </a>
            <a 
              href="https://www.google.com/maps/dir//Gotham+Streat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-directions"
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