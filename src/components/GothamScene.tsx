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

      {/* Atmospheric Effects */}
      <div className="fog"></div>
      <div className="atmospheric-glow"></div>
      
      {/* Instructions overlay */}
      <div className="instructions">
        <p>Utilisez la molette de la souris ou les flèches pour faire émerger Batman</p>
      </div>
    </div>
  );
};

export default GothamScene;