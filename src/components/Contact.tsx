import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">INFOS PRATIQUES</h2>
        
        <div className="contact-grid">
          {/* Map */}
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.7326163483717!2d1.897578009929065!3d43.90280429378944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12add3fb3c4d7083%3A0x1c8d3361837cfa86!2sGotham%20Streat!5e0!3m2!1sfr!2sfr!4v1757930398861!5m2!1sfr!2sfr" 
              width="100%" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Gotham Street"
            ></iframe>
          </div>
          
          {/* Info Cards */}
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Adresse</h3>
              <p>
                42 Wayne Street<br />
                Gotham City, GC 12345
              </p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Horaires</h3>
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
              <div className="info-icon">📞</div>
              <h3>Contact</h3>
              <a href="tel:+33123456789" className="phone-number">
                01 23 45 67 89
              </a>
              <p className="contact-note">
                Pas de réservation en ligne.<br />
                Appelez-nous directement !
              </p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Réseaux Sociaux</h3>
              <div className="social-links">
                <a href="#" className="social-link facebook">📘 Facebook</a>
                <a href="#" className="social-link instagram">📷 Instagram</a>
                <a href="#" className="social-link tiktok">🎵 TikTok</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-cta">
          <h3>Prêt à goûter Gotham ?</h3>
          <div className="cta-buttons">
            <a href="tel:+33123456789" className="btn-primary">
              📞 Appeler maintenant
            </a>
            <a 
              href="https://www.google.com/maps/dir//Gotham+Streat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              🗺️ Itinéraire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;