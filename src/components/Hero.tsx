import React, { useState } from 'react';

const Hero = () => {
  const [rainEnabled, setRainEnabled] = useState(true);

  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      {/* Rain Effect */}
      {rainEnabled && <div className="rain-effect"></div>}
      
      {/* Rain Toggle */}
      <button 
        className="rain-toggle"
        onClick={() => setRainEnabled(!rainEnabled)}
        title={rainEnabled ? "Désactiver la pluie" : "Activer la pluie"}
      >
        {rainEnabled ? '🌧️' : '☀️'}
      </button>

      {/* Bat Signal */}
      <div className="bat-signal">
        <div className="signal-beam"></div>
        <div className="signal-logo">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 10C35 10 40 15 45 20C40 25 35 30 30 35C25 30 20 25 15 20C20 15 25 10 30 10Z" fill="#FFD600"/>
          </svg>
        </div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          GOTHAM STREET
        </h1>
        <p className="hero-subtitle">
          La street-food venue de l'ombre
        </p>
        
        <div className="hero-actions">
          <button onClick={scrollToMenu} className="btn-primary">
            Voir le menu
          </button>
          <a href="tel:+33123456789" className="btn-secondary">
            📞 Appeler
          </a>
        </div>
      </div>

      {/* Background overlay */}
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;