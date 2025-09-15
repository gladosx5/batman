import React from 'react';
import BatmanLogo from './BatmanLogo';
import ScrollIndicator from './ScrollIndicator';

const GothamScene = () => {
  return (
    <div className="gotham-scene" tabIndex={0} id="gotham-scene">
      {/* Sky with stars */}
      <div className="sky">
        <div className="moon"></div>
      </div>

      {/* Gotham City Skyline */}
      <div className="skyline"></div>

      {/* Batman Logo */}
      <BatmanLogo />

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
};

export default GothamScene;