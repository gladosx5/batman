import React from 'react';
import BatmanLogo from './BatmanLogo';
import ScrollIndicator from './ScrollIndicator';
import FoodWebsite from './FoodWebsite';

const GothamScene = () => {
  return (
    <>
      {/* Scène Gotham fixe en arrière-plan */}
      <div className="gotham-scene" tabIndex={0}>
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
      
      {/* Site web qui apparaît en dessous */}
      <div className="website-container">
        <FoodWebsite />
      </div>
    </>
  );
};

export default GothamScene;