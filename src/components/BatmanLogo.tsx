import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const BatmanLogo = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    // Configuration avec phase de descente dans la ville et site vitrine
    const logoMaxScroll = 1500; // Phase logo
    const cityDescentScroll = 500; // Phase descente très réduite
    const siteContentScroll = 8000; // Phase contenu du site
    const totalMaxScroll = logoMaxScroll + cityDescentScroll;
    const startGrowingAt = isMobile ? 300 : 300; // Même timing
    const foregroundAt = isMobile ? 420 : 420; // Même timing
    const initialY = isMobile ? 300 : 200; // Plus bas sur mobile pour être caché
    const initialScale = isMobile ? 0.1 : 0.3; // Plus petit initialement sur mobile
    const initialOpacity = isMobile ? 0 : 0.8; // Complètement invisible sur mobile

    // État initial - logo caché
    gsap.set(logo, {
      scale: initialScale,
      y: initialY,
      opacity: initialOpacity,
      zIndex: 1000, // Toujours au premier plan
      transformOrigin: "center center"
    });

    // Références pour les éléments de la scène
    const skyline = document.querySelector('.skyline') as HTMLElement;
    const sky = document.querySelector('.sky') as HTMLElement;
    const moon = document.querySelector('.moon') as HTMLElement;

    let scrollProgress = 0;

    // Animation fluide combinée
    const updateAnimation = () => {
      const progress = Math.min(scrollProgress / totalMaxScroll, 1);
      
      if (scrollProgress <= logoMaxScroll) {
        // Phase 1-3: Animation du logo (comme avant)
        let yPosition, scale, logoZIndex, opacity;
      
        if (scrollProgress < startGrowingAt) {
          // Phase 1: Apparition progressive
          const earlyProgress = scrollProgress / startGrowingAt;
          yPosition = initialY - (earlyProgress * (isMobile ? 150 : 100));
          scale = initialScale + (earlyProgress * (isMobile ? 0.4 : 0.2));
          logoZIndex = 2;
          opacity = isMobile ? earlyProgress * 0.8 : 0.8;
        } else if (scrollProgress < foregroundAt) {
          // Phase 2: Croissance modérée
          const midProgress = (scrollProgress - startGrowingAt) / (foregroundAt - startGrowingAt);
          const baseY = initialY - (isMobile ? 150 : 100);
          yPosition = baseY - (midProgress * (isMobile ? 100 : 100));
          const baseScale = initialScale + (isMobile ? 0.4 : 0.2);
          scale = baseScale + (midProgress * (isMobile ? 1.5 : 2.5));
          logoZIndex = 2;
          opacity = 0.8 + (midProgress * 0.1);
        } else {
          // Phase 3: Premier plan spectaculaire
          const lateProgress = (scrollProgress - foregroundAt) / (logoMaxScroll - foregroundAt);
          const baseY = initialY - (isMobile ? 250 : 200);
          yPosition = baseY - (lateProgress * (isMobile ? 80 : 100));
          const baseScale = initialScale + (isMobile ? 1.9 : 2.7);
          scale = baseScale + (lateProgress * (isMobile ? 8.0 : 5.0));
          logoZIndex = 1000;
          opacity = 0.9 + (lateProgress * 0.1);
        }
      
        // Appliquer les transformations du logo
        logo.style.zIndex = logoZIndex.toString();
        
        gsap.to(logo, {
          y: yPosition,
          scale: scale,
          opacity: opacity,
          duration: 0.3,
          ease: "power2.out"
        });
        
        // Remettre la scène en position normale
        if (skyline) {
          gsap.to(skyline, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }

      } else if (scrollProgress <= totalMaxScroll) {
        // Phase 4: Descente dans la ville
        const descentProgress = (scrollProgress - logoMaxScroll) / cityDescentScroll;
        const moveDistance = descentProgress * (isMobile ? 200 : 150); // Réduction drastique
        
        // Faire monter la ville et le logo ensemble
        if (skyline) {
          gsap.to(skyline, {
            y: -moveDistance,
            duration: 0.3,
            ease: "power2.out"
          });
        }
        
        // Faire monter le site vitrine avec la ville
        const siteVitrine = document.querySelector('.site-vitrine') as HTMLElement;
        if (siteVitrine) {
          gsap.to(siteVitrine, {
            y: -moveDistance,
            duration: 0.3,
            ease: "power2.out",
            zIndex: 10
          });
        }
        
        // Le logo suit le mouvement de la ville
        const finalY = initialY - (isMobile ? 330 : 300);
        gsap.to(logo, {
          y: finalY - moveDistance,
          scale: initialScale + (isMobile ? 9.0 : 7.7), // Maintenir la taille finale
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });


      }
    };

    // Créer le fond de descente dans la ville
    const createCityBackground = () => {
      let cityBg = document.querySelector('.city-descent-bg') as HTMLElement;
      if (!cityBg) {
        cityBg = document.createElement('div');
        cityBg.className = 'city-descent-bg';
        cityBg.style.cssText = `
          position: fixed;
          top: 100vh;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(to bottom, #0f0323 0%, #09080c 50%, #000 100%);
          z-index: 1;
          pointer-events: none;
        `;
        document.body.appendChild(cityBg);
      }
    };

    createCityBackground();

    // Fonction pour gérer le scroll de la page
    const updatePageScroll = () => {
      if (scrollProgress > logoMaxScroll && scrollProgress <= totalMaxScroll) {
        const descentProgress = (scrollProgress - logoMaxScroll) / cityDescentScroll;
        const moveDistance = descentProgress * (isMobile ? 200 : 150);
        
        const cityBg = document.querySelector('.city-descent-bg') as HTMLElement;
        if (cityBg) {
          gsap.to(cityBg, {
            y: -moveDistance * 0.3, // Réduire encore plus le mouvement du fond
            duration: 0.3,
            ease: "power2.out"
          });
        }
      } else if (scrollProgress > totalMaxScroll) {
        // Le fond reste visible mais se positionne correctement
        const cityBg = document.querySelector('.city-descent-bg') as HTMLElement;
        if (cityBg) {
          gsap.to(cityBg, {
            y: -(isMobile ? 250 : 200),
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      } else {
        // Remettre le fond visible au début
        const cityBg = document.querySelector('.city-descent-bg') as HTMLElement;
        if (cityBg) {
          gsap.to(cityBg, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    };

    const updateAllAnimations = () => {
      updateAnimation();
      updatePageScroll();
    };
      
    // Gestion du scroll de la molette
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      scrollProgress += e.deltaY * 2;
      scrollProgress = Math.max(0, Math.min(scrollProgress, totalMaxScroll));
      
      updateAllAnimations();
    };

    // Gestion du scroll tactile
    let touchStartY = 0;
    let isScrolling = false;
    const touchSensitivity = isMobile ? 6 : 4; // Plus sensible sur mobile
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      isScrolling = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      isScrolling = true;
      const touchY = e.touches[0].clientY;
      const deltaY = (touchStartY - touchY) * touchSensitivity;
      
      scrollProgress += deltaY;
      scrollProgress = Math.max(0, Math.min(scrollProgress, totalMaxScroll));
      
      updateAllAnimations();
      touchStartY = touchY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isScrolling) {
        // Si pas de scroll, on peut traiter comme un tap
        return;
      }
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
      scrollProgress = Math.max(0, Math.min(scrollProgress, totalMaxScroll));
      updateAllAnimations();
    };

    // Ajout des event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobile]);

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