import React from 'react';
import GothamScene from './components/GothamScene';
import './styles/animations.css';

function App() {
  return (
    <div className="app" style={{ height: '500vh' }}>
      <GothamScene />
      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '14px',
        textAlign: 'center',
        zIndex: 20,
        fontFamily: 'Arial, sans-serif'
      }}>
        Scrollez pour voir Batman émerger de Gotham City
      </div>
    </div>
  );
}

export default App;