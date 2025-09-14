import React from 'react';
import BatmanLogo from './BatmanLogo';

const GothamScene = () => {
  return (
    <div className="gotham-scene" tabIndex={0}>
      {/* Sky with stars */}
      <div className="sky">
        <div className="moon"></div>
      </div>

      {/* Gotham City Skyline */}
      <div className="skyline"></div>

      {/* Batman Logo */}
      <BatmanLogo />

      {/* Instructions overlay */}
      <div className="instructions">
        <div className="scroll-mouse"></div>
        <div className="scroll-arrow"></div>
        <p className="desktop-instructions">
          Scrollez pour voir Batman sortir de Gotham
        </p>
        <p className="mobile-instructions">
          Glissez vers le haut pour voir Batman sortir de Gotham
        </p>
      </div>
    </div>
  );
};

export default GothamScene;