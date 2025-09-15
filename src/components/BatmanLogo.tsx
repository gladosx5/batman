import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface BatmanLogoProps {
  onAnimationComplete: (isComplete: boolean) => void;
}

const BatmanLogo: React.FC<BatmanLogoProps> = ({ onAnimationComplete }) => {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    // État initial - logo petit et caché derrière les toits
    gsap.set(logo, {
      scale: 0.3,
      y: 200,
      opacity: 0.8,
      zIndex: 2,
      transformOrigin: "center center"
    });

    let scrollProgress = 0;
    const maxScroll = 1000; // Réduit de 2000 à 1000 pour une animation plus courte
    const startGrowingAt = 200; // Commence plus tôt
    const foregroundAt = 350; // Passe au premier plan plus tôt
    const animationCompleteAt = 800; // Animation terminée plus tôt

    let animationComplete = false;

    const updateAnimation = () => {
      const progress = Math.min(scrollProgress / maxScroll, 1);
      
      let yPosition, scale, zIndex;
      
      if (scrollProgress < startGrowingAt) {
        // Phase 1: Montée légère
        const earlyProgress = scrollProgress / startGrowingAt;
        yPosition = 200 - (earlyProgress * 80);
        scale = 0.3;
        zIndex = 2;
      } else if (scrollProgress < foregroundAt) {
        // Phase 2: Montée + grossissement modéré
        const midProgress = (scrollProgress - startGrowingAt) / (foregroundAt - startGrowingAt);
        yPosition = 120 - (midProgress * 80);
        scale = 0.3 + (midProgress * 1.7); // Grossit jusqu'à 2.0
        zIndex = 2;
      } else if (scrollProgress < animationCompleteAt) {
        // Phase 3: Premier plan + grossissement final
        const lateProgress = (scrollProgress - foregroundAt) / (animationCompleteAt - foregroundAt);
        yPosition = 40 - (lateProgress * 40);
        scale = 2.0 + (lateProgress * 1.5); // Grossit jusqu'à 3.5 (plus raisonnable)
        zIndex = 100;
      } else {
        // Phase 4: Logo fixe au-dessus de la ville
        yPosition = 0;
        scale = 3.5;
        zIndex = 100;
        
        if (!animationComplete) {
          animationComplete = true;
          onAnimationComplete(true);
        }
      }
      
      // Animation inverse si on remonte complètement en haut
      if (scrollProgress === 0 && animationComplete) {
        animationComplete = false;
        onAnimationComplete(false);
      }
      
      gsap.to(logo, {
        y: yPosition,
        scale: scale,
        opacity: 0.8 + (progress * 0.2),
        zIndex: zIndex,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    // Gestion optimisée du scroll avec requestAnimationFrame
    let ticking = false;
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateAnimation);
        ticking = true;
        setTimeout(() => { ticking = false; }, 16); // 60fps
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollProgress += e.deltaY * 1.5; // Réduit la sensibilité
      scrollProgress = Math.max(0, Math.min(scrollProgress, maxScroll));
      requestTick();
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const deltaY = (touchStartY - touchY) * 2;
      
      scrollProgress += deltaY;
      scrollProgress = Math.max(0, Math.min(scrollProgress, maxScroll));
      
      requestTick();
      touchStartY = touchY;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          scrollProgress += 80;
          break;
        case 'ArrowUp':
          e.preventDefault();
          scrollProgress -= 80;
          break;
      }
      scrollProgress = Math.max(0, Math.min(scrollProgress, maxScroll));
      requestTick();
    };

    // Event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onAnimationComplete]);

  return (
    <div className="batman-logo-container">
      <img 
        ref={logoRef}
        src="https://i.imgur.com/pXyfwCg.png"
        alt="Batman Logo"
        className="batman-logo"
      />
    </div>
  );
};

export default BatmanLogo;