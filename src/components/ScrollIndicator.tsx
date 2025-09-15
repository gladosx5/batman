import React from 'react';

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      <div className="mouse-indicator">
        <div className="mouse-wheel"></div>
      </div>
      <div className="finger-indicator">
        <div className="finger"></div>
      </div>
      <div className="scroll-arrows">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;