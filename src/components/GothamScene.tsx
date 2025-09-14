import React from 'react';
import BatmanLogo from './BatmanLogo';

const GothamScene = () => {
  return (
    <div className="gotham-scene">
      {/* Sky with stars */}
      <div className="sky">
        <div className="stars"></div>
        <div className="moon"></div>
      </div>

      {/* Gotham City Skyline */}
      <div className="skyline">
        <div className="buildings-layer-1"></div>
        <div className="buildings-layer-2"></div>
        <div className="buildings-layer-3"></div>
      </div>

      {/* Batman Logo */}
      <BatmanLogo />

      {/* Atmospheric Effects */}
      <div className="fog"></div>
      <div className="atmospheric-glow"></div>
    </div>
  );
};

export default GothamScene;