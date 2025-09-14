import React from 'react';
import GothamScene from './components/GothamScene';
import './styles/animations.css';

function App() {
  return (
    <div className="app">
      <GothamScene />
      
      {/* Contenu pour permettre le scroll */}
      <div className="scroll-content">
        <div className="scroll-section">
          <h1 className="title">GOTHAM CITY</h1>
          <p className="subtitle">Scroll pour voir Batman émerger des ombres</p>
        </div>
        
        <div className="scroll-section">
          <h2 className="section-title">L'OMBRE S'ÉLÈVE</h2>
          <p className="section-text">
            Dans les profondeurs de Gotham, une légende prend forme...
          </p>
        </div>
        
        <div className="scroll-section">
          <h2 className="section-title">LE CHEVALIER NOIR</h2>
          <p className="section-text">
            Batman veille sur la ville, protégeant les innocents dans l'ombre.
          </p>
        </div>
        
        <div className="scroll-section final">
          <h2 className="section-title">GOTHAM EST PROTÉGÉE</h2>
          <p className="section-text">
            La justice règne dans les rues sombres de la ville.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;