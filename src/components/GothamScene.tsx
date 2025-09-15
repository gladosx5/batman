import React from 'react';
import BatmanLogo from './BatmanLogo';
import CityAnimation from './CityAnimation';

const GothamScene = () => {
  return (
    <div className="gotham-scene" tabIndex={0}>
      {/* Sky with stars */}
      <div className="sky">
        <div className="moon"></div>
      </div>

      {/* Gotham City Skyline */}
      <div className="skyline"></div>

      {/* City Animation Controller */}
      <CityAnimation />

      {/* Batman Logo */}
      <BatmanLogo />

      {/* Instructions overlay */}
      <div className="instructions">
        <p>Scrollez pour voir Batman sortir de Gotham, puis continuez pour aller sous la ville</p>
      </div>
    </div>
  );
};

export default GothamScene;