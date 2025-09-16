import React from 'react';
import GothamPortal from './components/GothamPortal';
import FoodWebsite from './components/FoodWebsite';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './styles/animations.css';
import './styles/food-website.css';

function App() {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="app">
      {/* Site web principal */}
      <FoodWebsite />
      {/* Scène Gotham dans un portail séparé */}
      <GothamPortal />
    </div>
  );
}

export default App;