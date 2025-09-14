import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{ marginTop: 0 }}>
      <div className="hero-background">
        <img 
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Délicieux plats" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Bienvenue chez DeliciousFood
          <span className="hero-subtitle">Émergé des ombres de Gotham</span>
        </h1>
        
        <p className="hero-description">
          Après avoir traversé les mystères de la nuit, découvrez notre cuisine 
          exceptionnelle qui illumine vos papilles comme un phare dans l'obscurité.
        </p>
        
        <div className="hero-actions">
          <a href="#menu" className="btn btn-primary">
            Voir le Menu
          </a>
          <a href="#about" className="btn btn-secondary">
            Notre Histoire
          </a>
        </div>
      </div>
      
      <div className="hero-scroll">
        <ArrowDown className="scroll-icon" />
      </div>
    </section>
  );
};

export default Hero;