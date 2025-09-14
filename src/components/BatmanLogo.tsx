import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BatmanLogo = () => {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    // État initial - logo très petit et caché derrière les toits
    gsap.set(logo, {
      scale: 0.1,
      y: 300, // Bien derrière les toits
      opacity: 0.6,
      transformOrigin: "center center"
    });

    let scrollProgress = 0;
    const maxScroll = 2000;

    // Animation fluide combinée
    const updateAnimation = () => {
      const progress = Math.min(scrollProgress / maxScroll, 1);
      
      // Animation fluide : sort de la ville ET grandit en même temps
      gsap.to(logo, {
        y: 300 - (progress * 400), // Monte de derrière les toits vers le centre et au-dessus
        scale: 0.1 + (progress * 7.9), // Grandit énormément de 0.1 à 8.0
        opacity: 0.6 + (progress * 0.4), // Devient plus visible
        duration: 0.3,
        ease: "power2.out"
      });
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