import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BatmanLogo = () => {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    // État initial - logo petit et caché derrière les toits
    gsap.set(logo, {
      scale: 0.2,
      y: 250,
      opacity: 0.6,
      zIndex: 2,
      transformOrigin: "center center"
    });

    let scrollProgress = 0;
    const maxScroll = 800; // Réduit pour une animation plus courte
    
    // Animation fluide et progressive
    const updateAnimation = () => {
      const progress = Math.min(scrollProgress / maxScroll, 1);
      
      // Courbe d'animation plus douce
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      
      // Position Y: monte progressivement
      const yPosition = 250 - (easeProgress * 300); // De 250 à -50
      
      // Scale: grossit modérément
      const scale = 0.2 + (easeProgress * 1.3); // De 0.2 à 1.5 (beaucoup moins qu'avant)
      
      // Opacité: devient plus visible
      const opacity = 0.6 + (easeProgress * 0.4); // De 0.6 à 1.0
      
      // Z-index: passe au premier plan progressivement
      const zIndex = progress > 0.4 ? 100 : 2;
      
      // Effet de glow qui s'intensifie
      const glowIntensity = easeProgress * 30;
      const filter = `drop-shadow(0 0 ${glowIntensity}px rgba(255, 255, 255, ${easeProgress * 0.8}))`;
      
      gsap.to(logo, {
        y: yPosition,
        scale: scale,
        opacity: opacity,
        zIndex: zIndex,
        filter: filter,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    // Gestion du scroll de la molette (plus sensible)
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      scrollProgress += e.deltaY * 1.5; // Réduit la sensibilité
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
      const deltaY = (touchStartY - touchY) * 2; // Réduit la sensibilité tactile
      
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
          scrollProgress += 60; // Réduit l'incrémentation
          break;
        case 'ArrowUp':
          e.preventDefault();
          scrollProgress -= 60;
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

    // Animation d'entrée subtile
    gsap.to(logo, {
      opacity: 0.8,
      duration: 1,
      ease: "power2.out",
      delay: 0.5
    });

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