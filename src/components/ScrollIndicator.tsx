import React from 'react';

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      {/* Indicateur souris pour desktop */}
      <div className="mouse-indicator">
        <div className="mouse-wheel"></div>
      </div>
      
      {/* Indicateur doigt pour mobile */}
      <div className="finger-indicator">
        <div className="finger"></div>
      </div>
      
      {/* Flèches animées */}
      <div className="scroll-arrows">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;