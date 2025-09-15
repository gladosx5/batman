import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BatmanLogo = () => {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    // État initial - logo petit et caché derrière les toits
    gsap.set(logo, {
      scale: 0.3,
      y: 200, // Derrière les toits
      opacity: 0.8,
      zIndex: 2, // Derrière la ville au début
      transformOrigin: "center center"
    });

    let scrollProgress = 0;
    const maxScroll = 2000;
    const startGrowingAt = 300; // Commence à grossir après 300 unités de scroll (environ 5 scrolls)
    const foregroundAt = 420; // Passe au premier plan après 420 unités (environ 6-7 scrolls)

    // Animation fluide combinée
    const updateAnimation = () => {
      const progress = Math.min(scrollProgress / maxScroll, 1);
      
      // Phase 1: Montée légère (premiers scrolls) 
      let yPosition, scale, zIndex, opacity;
      
      if (scrollProgress < startGrowingAt) {
        // Juste monter un peu sans grossir
        const earlyProgress = scrollProgress / startGrowingAt;
        yPosition = 200 - (earlyProgress * 100); // Monte un peu
        scale = 0.3; // Reste petit
        zIndex = 2; // Derrière la ville
        opacity = 0.8;
      } else if (scrollProgress < foregroundAt) {
        // Phase 2: Montée + grossissement (toujours derrière)
        const midProgress = (scrollProgress - startGrowingAt) / (foregroundAt - startGrowingAt);
        yPosition = 100 - (midProgress * 100); // Continue à monter
        scale = 0.3 + (midProgress * 1.2); // Grossit modérément (0.3 à 1.5)
        zIndex = 2; // Toujours derrière
        opacity = 0.8 + (midProgress * 0.2);
      } else {
        // Phase 3: Premier plan + grossissement spectaculaire
        const lateProgress = (scrollProgress - foregroundAt) / (maxScroll - foregroundAt);
        yPosition = 0 - (lateProgress * 100); // Monte encore plus
        scale = 1.5 + (lateProgress * 1.5); // Grossit raisonnablement (1.5 à 3.0)
        zIndex = 100; // Au premier plan, bien au-dessus de tout
        opacity = 1.0;
        
        // Si on est dans la phase de montée de la ville (après 2200)
        if (scrollProgress > 2200) {
          const cityLiftProgress = (scrollProgress - 2200) / (4000 - 2200);
          // Le logo monte avec la ville et devient plus petit (animation inverse)
          yPosition = (0 - (lateProgress * 100)) - (cityLiftProgress * window.innerHeight * 1.2);
          scale = 3.0 - (cityLiftProgress * 2.7); // Devient plus petit (3.0 vers 0.3)
          opacity = 1.0 - (cityLiftProgress * 0.7); // Devient plus transparent
        }
      }
      
      gsap.to(logo, {
        y: yPosition,
        scale: scale,
        opacity: opacity,
        zIndex: zIndex,
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