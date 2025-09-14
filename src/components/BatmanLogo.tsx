import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BatmanLogo = () => {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    // État initial - logo caché derrière les toits
    gsap.set(logo, {
      scale: 0.3,
      y: 200, // Positionné derrière les toits
      opacity: 0.8,
      transformOrigin: "center center"
    });

    let scrollProgress = 0;
    const maxScroll = 2000; // Augmenté pour avoir plus de phases

    // Animation avec deux phases
    const updateAnimation = () => {
      const progress = Math.min(scrollProgress / maxScroll, 1);
      
      if (progress <= 0.5) {
        // Phase 1: Le logo monte des toits (0% à 50% du scroll)
        const phaseProgress = progress * 2; // 0 à 1
        
        gsap.to(logo, {
          y: 200 - (phaseProgress * 300), // Monte de derrière les toits vers le centre
          scale: 0.3 + (phaseProgress * 0.7), // Grandit légèrement (0.3 à 1.0)
          opacity: 0.8 + (phaseProgress * 0.2),
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        // Phase 2: Le logo grossit énormément (50% à 100% du scroll)
        const phaseProgress = (progress - 0.5) * 2; // 0 à 1
        
        gsap.to(logo, {
          y: -100, // Position finale au centre
          scale: 1.0 + (phaseProgress * 4), // Grossit énormément (1.0 à 5.0)
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    // Gestion du scroll de la molette
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      scrollProgress += e.deltaY * 2;
      scrollProgress = Math.max(0, Math.min(scrollProgress, maxScroll));
      
      updateAnimation();
    };

    // Gestion du scroll tactile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const deltaY = (touchStartY - touchY) * 3;
      
      scrollProgress += deltaY;
      scrollProgress = Math.max(0, Math.min(scrollProgress, maxScroll));
      
      updateAnimation();
      touchStartY = touchY;
    };

    // Gestion des touches clavier
    const handleKeyDown = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          scrollProgress += 100;
          break;
        case 'ArrowUp':
          e.preventDefault();
          scrollProgress -= 100;
          break;
      }
      scrollProgress = Math.max(0, Math.min(scrollProgress, maxScroll));
      updateAnimation();
    };

    // Ajout des event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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