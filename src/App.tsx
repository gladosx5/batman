import React from 'react';
import GothamScene from './components/GothamScene';
import FoodWebsite from './components/FoodWebsite';
import Header from './components/Header';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './styles/animations.css';
import './styles/food-website.css';

function App() {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="app">
      {/* Header - Premier élément généré pour être toujours visible */}
      <Header />

      {/* Site web Gotham Streat */}
      <FoodWebsite />
      {/* Scène Gotham avec animation Batman par-dessus */}
      <GothamScene />
    </div>
  );
}

export default App;