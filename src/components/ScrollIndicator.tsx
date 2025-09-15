import React from 'react';

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      <div className="mouse">
        <div className="mouse-wheel"></div>
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