import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-background"></div>
      <div className="about-smoke"></div>
      
      <div className="container">
        <h2 className="section-title">À propos</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-story">
              <h3>Notre Histoire</h3>
              <p>
                Dans les ruelles sombres de Gotham, une nouvelle street-food est née... 
                Gotham Street fusionne les saveurs urbaines avec l'esprit mystérieux de la ville. 
                Nos recettes uniques transforment chaque repas en une aventure culinaire 
                digne des plus grands héros.
              </p>
            </div>

            <div className="about-concept">
              <h3>Notre Concept</h3>
              <p>
                Street-food premium inspirée de l'univers de Gotham City. 
                Chaque plat raconte une histoire, chaque saveur révèle un secret. 
                De nos burgers légendaires aux tacos mystérieux, découvrez une cuisine 
                qui sort de l'ordinaire.
              </p>
            </div>

            <div className="about-values">
              <h3>Nos Valeurs</h3>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">🥩</div>
                  <h4>Ingrédients Frais</h4>
                  <p>Sélection rigoureuse de produits locaux et de qualité</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">👨‍🍳</div>
                  <h4>Recettes Maison</h4>
                  <p>Sauces et préparations artisanales, recettes secrètes</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🏙️</div>
                  <h4>Engagement Local</h4>
                  <p>Partenaires locaux, circuit court, économie de proximité</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visuals">
            <div className="visual-card">
              <img 
                src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg" 
                alt="Ambiance du restaurant"
                loading="lazy"
              />
              <div className="visual-overlay">
                <h4>L'Ambiance</h4>
              </div>
            </div>
            <div className="visual-card">
              <img 
                src="https://images.pexels.com/photos/3298637/pexels-photo-3298637.jpeg" 
                alt="Préparation en cuisine"
                loading="lazy"
              />
              <div className="visual-overlay">
                <h4>La Préparation</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;