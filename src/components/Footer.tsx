import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Crime Scene Tape */}
      <div className="crime-scene-tape"></div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" fill="#FFD600" stroke="#FFD600" strokeWidth="2"/>
                <text x="20" y="25" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontWeight="bold">GS</text>
              </svg>
              <span>GOTHAM STREET</span>
            </div>
            
            <div className="footer-info">
              <div className="footer-section">
                <h4>Adresse</h4>
                <p>42 Wayne Street<br />Gotham City, GC 12345</p>
              </div>
              
              <div className="footer-section">
                <h4>Contact</h4>
                <a href="tel:+33123456789" className="footer-phone">01 23 45 67 89</a>
              </div>
              
              <div className="footer-section">
                <h4>Horaires</h4>
                <p>Lun-Jeu: 18h-23h<br />Ven-Sam: 18h-01h<br />Dim: 18h-22h</p>
              </div>
              
              <div className="footer-section">
                <h4>Suivez-nous</h4>
                <div className="footer-social">
                  <a href="#" className="social-icon">📘</a>
                  <a href="#" className="social-icon">📷</a>
                  <a href="#" className="social-icon">🎵</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Gotham Street. Dans l'ombre, nous cuisinons.</p>
            <div className="footer-links">
              <a href="#mentions">Mentions légales</a>
              <a href="#cgv">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;