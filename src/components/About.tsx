import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="brick-wall-bg"></div>
      <div className="smoke-effect"></div>
      
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">À PROPOS</h2>
          
          <div className="about-text">
            <p>
              Dans les ruelles sombres de Gotham, où les néons percent la nuit et où chaque coin de rue 
              raconte une histoire, une nouvelle légende culinaire est née.
            </p>
            
            <p>
              <strong>Gotham Street</strong> fusionne les saveurs du monde avec l'âme rebelle de la ville qui ne dort jamais. 
              Nos recettes maison, préparées avec des ingrédients frais et locaux, transforment chaque bouchée 
              en une expérience inoubliable.
            </p>
            
            <p>
              De nos burgers légendaires aux créations fusion les plus audacieuses, chaque plat raconte 
              l'histoire des héros et des anti-héros qui arpentent les rues de Gotham.
            </p>
          </div>
          
          <div className="graffiti-text">
            STREET FOOD • GOTHAM STYLE
          </div>
          
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🥩</div>
              <h3>Ingrédients Frais</h3>
              <p>Sélection quotidienne des meilleurs produits</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">👨‍🍳</div>
              <h3>Recettes Maison</h3>
              <p>Sauces et préparations artisanales</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">🏙️</div>
              <h3>Engagement Local</h3>
              <p>Partenaires et fournisseurs de la région</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;