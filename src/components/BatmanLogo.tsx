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
      scale: 0.2,
      y: 300,
      opacity: 0.6,
      zIndex: 2,
      transformOrigin: "center center"
    });

    let scrollProgress = 0;
    const maxScroll = 800; // Animation plus courte
    const animationCompleteAt = 700; // Animation terminée à 700

    let animationComplete = false;

    const updateAnimation = () => {
      const progress = Math.min(scrollProgress / maxScroll, 1);
      
      if (scrollProgress < animationCompleteAt) {
        // Animation progressive du logo
        const animProgress = scrollProgress / animationCompleteAt;
        
        // Position Y : monte progressivement
        const yPosition = 300 - (animProgress * 300); // De 300 à 0
        
        // Scale : grossit progressivement et beaucoup plus
        const scale = 0.2 + (animProgress * 4.8); // De 0.2 à 5.0 (très gros)
        
        // Opacité
        const opacity = 0.6 + (animProgress * 0.4); // De 0.6 à 1.0
        
        // Z-index change à mi-parcours
        const zIndex = animProgress > 0.5 ? 100 : 2;
        
        gsap.set(logo, {
          y: yPosition,
          scale: scale,
          opacity: opacity,
          zIndex: zIndex
        });
        
        // Marquer l'animation comme incomplète si on redescend
        if (animationComplete) {
          animationComplete = false;
          onAnimationComplete(false);
        }
      } else {
        // Animation terminée - logo fixe et très gros
        gsap.set(logo, {
          y: 0,
          scale: 5.0,
          opacity: 1,
          zIndex: 100
        });
        
        if (!animationComplete) {
          animationComplete = true;
          onAnimationComplete(true);
        }
      }
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
      scrollProgress += e.deltaY * 1.2;
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
          scrollProgress += 60;
          break;
        case 'ArrowUp':
          e.preventDefault();
          scrollProgress -= 60;
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