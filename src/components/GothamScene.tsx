import React from 'react';
import BatmanLogo from './BatmanLogo';
import SiteContent from './SiteContent';

const GothamScene = () => {
  return (
    <>
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
            Scrollez pour plonger dans Gotham Fresh Food
          </p>
          <p className="mobile-instructions">
            Glissez vers le haut pour plonger dans Gotham Fresh Food
          </p>
        </div>
      </div>
      
      {/* Site Content */}
      <SiteContent />
    </>
  );
};

export default GothamScene;