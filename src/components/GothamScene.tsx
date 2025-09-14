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
        <p>Utilisez la molette pour faire sortir Batman des toits</p>
      </div>
    </div>
  );
};

export default GothamScene;