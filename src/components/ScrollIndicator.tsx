import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollIndicator = () => {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const indicator = indicatorRef.current;
    const progress = progressRef.current;

    if (!indicator || !progress) return;

    // Animate scroll indicator
    gsap.to(indicator, {
      opacity: 0,
      y: -20,
      scrollTrigger: {
        trigger: ".gotham-scene",
        start: "top top",
        end: "20% top",
        scrub: true
      }
    });

    // Progress bar animation
    gsap.to(progress, {
      scaleX: 1,
      scrollTrigger: {
        trigger: ".gotham-scene",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={indicatorRef} className="scroll-indicator">
      <div className="scroll-text">Scroll to reveal</div>
      <div className="scroll-arrow">↓</div>
      <div className="progress-bar">
        <div ref={progressRef} className="progress-fill"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;