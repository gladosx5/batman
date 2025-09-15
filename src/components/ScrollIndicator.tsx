import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface ScrollIndicatorProps {
  visible: boolean;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ visible }) => {
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  useEffect(() => {
    const indicator = document.querySelector('.scroll-indicator');
    if (!indicator) return;

    if (isVisible) {
      // Animation de bounce répétitive
      gsap.to(indicator, {
        y: 10,
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

      // Animation de fade
      gsap.to(indicator, {
        opacity: 0.3,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });
    } else {
      gsap.killTweensOf(indicator);
      gsap.to(indicator, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [isVisible]);

  if (!visible) return null;

  return (
    <div className="scroll-indicator">
      <div className="mouse-icon">
        <div className="mouse-body">
          <div className="mouse-wheel"></div>
        </div>
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