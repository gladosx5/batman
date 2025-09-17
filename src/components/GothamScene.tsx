import React from 'react';
import BatmanLogo from './BatmanLogo';
import ScrollIndicator from './ScrollIndicator';

interface GothamSceneProps {
  isActive: boolean;
}

const GothamScene: React.FC<GothamSceneProps> = ({ isActive }) => {
  return (
    <div className="gotham-scene" tabIndex={0} id="gotham-scene">
      {/* Sky with stars */}
      <div className="sky">
        <div className="moon"></div>
      </div>

      {/* Gotham City Skyline */}
      <div className="skyline"></div>

      {/* Batman Logo */}
      <BatmanLogo isActive={isActive} />

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
};

export default GothamScene;