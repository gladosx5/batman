import React, { useState, useEffect } from 'react';
import GothamScene from './components/GothamScene';
import FoodWebsite from './components/FoodWebsite';
import './App.css';

const App = () => {
  const [showWebsite, setShowWebsite] = useState(false);

  // Écouter les messages de la scène Gotham
  useEffect(() => {
    const handleGothamComplete = () => {
      setShowWebsite(true);
    };

    const handleGothamReturn = () => {
      setShowWebsite(false);
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
        <GothamScene />
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