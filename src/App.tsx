import React, { useState, useEffect } from 'react';
import GothamScene from './components/GothamScene';
import FoodWebsite from './components/FoodWebsite';
import './App.css';

const App = () => {
  const [showWebsite, setShowWebsite] = useState(false);
  const [isGothamActive, setIsGothamActive] = useState(true);

  // Écouter les messages de la scène Gotham
  useEffect(() => {
    const handleGothamComplete = () => {
      setShowWebsite(true);
      setIsGothamActive(false);
    };

    const handleGothamReturn = () => {
      setShowWebsite(false);
      setIsGothamActive(true);
    };

    // Écouter les événements personnalisés
    window.addEventListener('gotham-animation-complete', handleGothamComplete);
    window.addEventListener('gotham-animation-return', handleGothamReturn);

    return () => {
      window.removeEventListener('gotham-animation-complete', handleGothamComplete);
      window.removeEventListener('gotham-animation-return', handleGothamReturn);
    };
  }, []);

  return (
    <div className="app">
      {/* Scène Gotham - toujours présente mais cachée quand le site est affiché */}
      <div className={`gotham-container ${showWebsite ? 'hidden' : ''}`}>
        <GothamScene isActive={isGothamActive} />
      </div>

      {/* Site web du restaurant - affiché seulement après l'animation */}
      {showWebsite && (
        <div className="website-container">
          <FoodWebsite />
        </div>
      )}
    </div>
  );
};

export default App;