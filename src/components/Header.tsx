import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo" onClick={() => onNavigate('accueil')}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 5L35 15V35L20 40L5 35V15L20 5Z" fill="#FFD600" stroke="#FFD600" strokeWidth="2"/>
              <text x="20" y="25" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontWeight="bold">GS</text>
            </svg>
            <span className="logo-text">Gotham Street</span>
          </div>

          {/* Navigation */}
          <nav className="nav">
            <button 
              className={`nav-link ${currentSection === 'accueil' ? 'active' : ''}`}
              onClick={() => onNavigate('accueil')}
            >
              Accueil
            </button>
            <button 
              className={`nav-link ${currentSection === 'menu' ? 'active' : ''}`}
              onClick={() => onNavigate('menu')}
            >
              Menu
            </button>
            <button 
              className={`nav-link ${currentSection === 'a-propos' ? 'active' : ''}`}
              onClick={() => onNavigate('a-propos')}
            >
              À propos
            </button>
            <button 
              className={`nav-link ${currentSection === 'infos-pratiques' ? 'active' : ''}`}
              onClick={() => onNavigate('infos-pratiques')}
            >
              Infos pratiques
            </button>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <a href="tel:+33123456789" className="btn-call">
              📞 Appeler
            </a>
            <a 
              href="https://maps.google.com/?q=Gotham+Streat" 
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