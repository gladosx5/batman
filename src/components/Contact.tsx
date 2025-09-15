import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Infos Pratiques</h2>
        
        <div className="contact-grid">
          {/* Carte */}
          <div className="map-container">
            <h3>Nous Trouver</h3>
            <div className="map-wrapper">
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
          </div>

          {/* Informations */}
          <div className="contact-info">
            <div className="info-card">
              <h3>Horaires</h3>
              <div className="hours-table">
                <div className="hours-row">
                  <span className="day">Lundi - Jeudi</span>
                  <span className="time">11h30 - 14h30 • 18h00 - 22h30</span>
                </div>
                <div className="hours-row">
                  <span className="day">Vendredi - Samedi</span>
                  <span className="time">11h30 - 14h30 • 18h00 - 23h30</span>
                </div>
                <div className="hours-row">
                  <span className="day">Dimanche</span>
                  <span className="time">18h00 - 22h30</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3>Contact</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Adresse</strong>
                    <p>123 Rue de Gotham<br />31000 Toulouse</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Téléphone</strong>
                    <a href="tel:+33123456789" className="phone-link">
                      01 23 45 67 89
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3>Règles Importantes</h3>
              <ul className="rules-list">
                <li>🚫 Pas de réservation en ligne</li>
                <li>📞 Réservations uniquement par téléphone</li>
                <li>🕐 Service continu selon les horaires</li>
                <li>💳 Paiement CB accepté à partir de 10€</li>
              </ul>
            </div>

            <div className="contact-actions">
              <a href="tel:+33123456789" className="btn-call-large">
                📞 Appeler Maintenant
              </a>
              <a 
                href="https://maps.google.com/?q=Gotham+Streat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-directions-large"
              >
                🗺️ Itinéraire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;