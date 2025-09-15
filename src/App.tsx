import React from 'react';
import GothamScene from './components/GothamScene';
import FoodWebsite from './components/FoodWebsite';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './styles/animations.css';
import './styles/food-website.css';

function App() {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="app">
      {/* Site web maintenant dans App pour qu'il soit scrollable */}
      <FoodWebsite />
      {/* Scène Gotham par-dessus */}
      <GothamScene />
    </div>
  );
}

export default App;