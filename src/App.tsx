import React from 'react';
import GothamScene from './components/GothamScene';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './styles/animations.css';

function App() {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="app">
      {/* Main Gotham Scene */}
      <GothamScene />
      
      {/* Espace pour permettre le scroll */}
      <div style={{ height: '200vh' }}></div>
    </div>
  );
}

export default App;