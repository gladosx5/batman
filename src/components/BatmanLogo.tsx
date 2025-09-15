import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BatmanLogo = () => {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    // État initial - logo petit et caché derrière les toits
    gsap.set(logo, {
      scale: 0.1,
      y: 250,
      opacity: 0.6,
      zIndex: 2,
      transformOrigin: "center center"
    });

    let scrollProgress = 0;
    const isMobile = window.innerWidth <= 768;
    const maxScroll = isMobile ? 400 : 800;
    const websiteStartScroll = maxScroll + 200;
    const totalScroll = websiteStartScroll + 1000;
    
    // Animation fluide et progressive
    const updateAnimation = () => {
      if (scrollProgress <= maxScroll) {
        // Phase 1: Animation du logo Batman
        const progress = Math.min(scrollProgress / maxScroll, 1);
        
        const moveProgress = 1 - Math.pow(1 - progress, 3);
        const zoomProgress = progress > 0.3 ? Math.pow((progress - 0.3) / 0.7, 2) : 0;
        
        const yPosition = 250 - (moveProgress * 300);
        const scale = 0.1 + (zoomProgress * 3.9);
        const opacity = 0.6 + (moveProgress * 0.4);
        const zIndex = progress > 0.4 ? 100 : 2;
        
        const glowIntensity = zoomProgress * 40;
        const filter = `drop-shadow(0 0 ${glowIntensity}px rgba(255, 255, 255, ${zoomProgress * 0.9}))`;
        
        gsap.to(logo, {
          y: yPosition,
          scale: scale,
          opacity: opacity,
          zIndex: zIndex,
          filter: filter,
          duration: 0.4,
          ease: "power2.out"
        });
        
        // Pas de scroll du site pendant l'animation du logo
        window.scrollTo(0, 0);
        
      } else if (scrollProgress <= websiteStartScroll) {
        // Phase 2: Logo reste en place, site commence à apparaître
        const websiteProgress = (scrollProgress - maxScroll) / 200;
        const scrollAmount = websiteProgress * (window.innerHeight * 0.5);
        
        window.scrollTo(0, scrollAmount);
        
        // Logo reste à sa position finale
        gsap.to(logo, {
          y: -50,
          scale: 4.0,
          opacity: 1,
          zIndex: 100,
          filter: `drop-shadow(0 0 40px rgba(255, 255, 255, 0.9))`,
          duration: 0.4,
          ease: "power2.out"
        });
        
      } else {
        // Phase 3: Site continue de scroller, logo commence à disparaître
        const finalProgress = (scrollProgress - websiteStartScroll) / 1000;
        const scrollAmount = window.innerHeight * 0.5 + (finalProgress * window.innerHeight * 3);
        
        window.scrollTo(0, scrollAmount);
        
        // Logo disparaît progressivement
        const logoOpacity = Math.max(0, 1 - finalProgress * 2);
        const logoScale = Math.max(0.5, 4.0 - finalProgress * 3);
        
        gsap.to(logo, {
          y: -50 - (finalProgress * 100),
          scale: logoScale,
          opacity: logoOpacity,
          zIndex: logoOpacity > 0 ? 100 : 2,
          filter: `drop-shadow(0 0 ${40 * logoOpacity}px rgba(255, 255, 255, ${0.9 * logoOpacity}))`,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    };

    // Gestion du scroll inverse (remontée)
    const handleScrollUp = () => {
      if (scrollProgress > websiteStartScroll) {
        // Si on remonte depuis le site, le logo réapparaît
        const finalProgress = (scrollProgress - websiteStartScroll) / 1000;
        const logoOpacity = Math.max(0, 1 - finalProgress * 2);
        
        if (logoOpacity > 0) {
          gsap.to(logo, {
            opacity: logoOpacity,
            zIndex: 100,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    };
      

    // Gestion du scroll de la molette
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const previousScroll = scrollProgress;
      scrollProgress += e.deltaY * 1.5;
      scrollProgress = Math.max(0, Math.min(scrollProgress, totalScroll));
      
      // Détection du scroll vers le haut
      if (scrollProgress < previousScroll) {
        handleScrollUp();
      }
      
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
      const deltaY = (touchStartY - touchY) * 2;
      
      const previousScroll = scrollProgress;
      scrollProgress += deltaY;
      scrollProgress = Math.max(0, Math.min(scrollProgress, totalScroll));
      
      if (scrollProgress < previousScroll) {
        handleScrollUp();
      }
      
      updateAnimation();
      touchStartY = touchY;
    };

    // Gestion des touches clavier
    const handleKeyDown = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          scrollProgress += 60;
          break;
        case 'ArrowUp':
          e.preventDefault();
          const previousScroll = scrollProgress;
          scrollProgress -= 60;
          if (scrollProgress < previousScroll) {
            handleScrollUp();
          }
          break;
      }
      scrollProgress = Math.max(0, Math.min(scrollProgress, totalScroll));
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