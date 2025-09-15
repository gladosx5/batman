import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import BatmanLogo from './BatmanLogo';
import ScrollIndicator from './ScrollIndicator';
import WebsiteContent from './WebsiteContent';

const GothamScene = () => {
  const [showWebsite, setShowWebsite] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const skylineRef = useRef<HTMLDivElement>(null);
  const websiteRef = useRef<HTMLDivElement>(null);

  const handleAnimationComplete = (isComplete: boolean) => {
    if (isComplete && !showWebsite) {
      setShowScrollIndicator(false);
      
      // Transition vers le site-vitrine SEULEMENT après la fin de l'animation du logo
      setTimeout(() => {
        setShowWebsite(true);
        animateWebsiteEntry();
      }, 500);
    } else if (!isComplete && showWebsite) {
      // Animation inverse SEULEMENT si on remonte complètement
      animateWebsiteExit();
      setTimeout(() => {
        setShowWebsite(false);
        setShowScrollIndicator(true);
      }, 800);
    }
  };

  const animateWebsiteEntry = () => {
    const skyline = skylineRef.current;
    const website = websiteRef.current;
    
    if (skyline && website) {
      // La ville se soulève SEULEMENT maintenant
      gsap.to(skyline, {
        y: -window.innerHeight,
        duration: 1.5,
        ease: "power2.inOut"
      });

      // Le site apparaît collé à la ville
      gsap.fromTo(website, 
        { 
          y: 0,
          opacity: 0 
        },
        { 
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
          delay: 0.3
        }
      );
    }
  };

  const animateWebsiteExit = () => {
    const skyline = skylineRef.current;
    const website = websiteRef.current;
    
    if (skyline && website) {
      // Le site disparaît
      gsap.to(website, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      });

      // La ville redescend
      gsap.to(skyline, {
        y: 0,
        duration: 1.2,
        ease: "power2.inOut",
        delay: 0.2
      });
    }
  };

  // SUPPRIMER l'effet parallaxe sur la ville pendant l'animation du logo
  // La ville ne bouge plus du tout tant que l'animation n'est pas terminée

  return (
    <div className="gotham-scene" tabIndex={0}>
      {/* Sky with stars */}
      <div className="sky">
        <div className="moon"></div>
      </div>

      {/* Gotham City Skyline - NE BOUGE PAS pendant l'animation du logo */}
      <div ref={skylineRef} className="skyline"></div>

      {/* Batman Logo */}
      <BatmanLogo onAnimationComplete={handleAnimationComplete} />

      {/* Scroll Indicator */}
      <ScrollIndicator visible={showScrollIndicator} />

      {/* Website Content */}
      {showWebsite && (
        <div ref={websiteRef} className="website-wrapper">
          <WebsiteContent />
        </div>
      )}
    </div>
  );
};

export default GothamScene;