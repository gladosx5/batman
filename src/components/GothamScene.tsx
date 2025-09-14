import React from 'react';
import BatmanLogo from './BatmanLogo';

const GothamScene = () => {
  return (
    <div className="gotham-scene">
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
    </div>
  );
};

export default GothamScene;