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

    // Configuration simplifiée
    const logoMaxScroll = 1500; // Animation du logo
    const startGrowingAt = isMobile ? 300 : 300;
    const foregroundAt = isMobile ? 420 : 420;
    const initialY = isMobile ? 300 : 200;
    const initialScale = isMobile ? 0.1 : 0.3;
    const initialOpacity = isMobile ? 0 : 0.8;

    // État initial - logo caché
    gsap.set(logo, {
      scale: initialScale,
      y: initialY,
      opacity: initialOpacity,
      zIndex: 1000,
      transformOrigin: "center center"
    });

    // Références pour les éléments
    const skyline = document.querySelector('.skyline') as HTMLElement;
    const siteContent = document.querySelector('.site-content') as HTMLElement;
    const siteHeader = document.querySelector('.site-header') as HTMLElement;

    let scrollProgress = 0;

    // Animation simplifiée du logo uniquement
    const updateLogoAnimation = () => {
      if (scrollProgress <= logoMaxScroll) {
        // Animation du logo
        let yPosition, scale, opacity;
      
        if (scrollProgress < startGrowingAt) {
          const earlyProgress = scrollProgress / startGrowingAt;
          yPosition = initialY - (earlyProgress * (isMobile ? 150 : 100));
          scale = initialScale + (earlyProgress * (isMobile ? 0.4 : 0.2));
          opacity = isMobile ? earlyProgress * 0.8 : 0.8;
        } else if (scrollProgress < foregroundAt) {
          const midProgress = (scrollProgress - startGrowingAt) / (foregroundAt - startGrowingAt);
          const baseY = initialY - (isMobile ? 150 : 100);
          yPosition = baseY - (midProgress * (isMobile ? 100 : 100));
          const baseScale = initialScale + (isMobile ? 0.4 : 0.2);
          scale = baseScale + (midProgress * (isMobile ? 1.5 : 2.5));
          opacity = 0.8 + (midProgress * 0.1);
        } else {
          const lateProgress = (scrollProgress - foregroundAt) / (logoMaxScroll - foregroundAt);
          const baseY = initialY - (isMobile ? 250 : 200);
          yPosition = baseY - (lateProgress * (isMobile ? 80 : 100));
          const baseScale = initialScale + (isMobile ? 1.9 : 2.7);
          scale = baseScale + (lateProgress * (isMobile ? 8.0 : 5.0));
          opacity = 0.9 + (lateProgress * 0.1);
        }
      
        // Appliquer les transformations du logo sans transition
        logo.style.transform = `translate(-50%, -50%) translateY(${yPosition}px) scale(${scale})`;
        logo.style.opacity = opacity.toString();
        
        // Cacher le site
        if (siteContent) {
          siteContent.style.transform = 'translateY(100vh)';
          siteContent.style.opacity = '0';
        }

        // Afficher progressivement le header
        if (siteHeader) {
          const headerProgress = Math.max(0, (scrollProgress - foregroundAt) / (logoMaxScroll - foregroundAt));
          siteHeader.style.opacity = headerProgress.toString();
        }
        
      } else {
        // Animation terminée - afficher le site directement sous la ville
        
        // Cacher la ville
        if (skyline) {
          skyline.style.display = 'none';
        }

        // Afficher le site immédiatement
        if (siteContent) {
          siteContent.style.transform = 'translateY(0)';
          siteContent.style.opacity = '1';
        }

        // Header complètement visible
        if (siteHeader) {
          siteHeader.style.opacity = '1';
        }

        // Cacher le logo
        logo.style.opacity = '0';
      }
    };
      
    // Gestion du scroll de la molette
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      scrollProgress += e.deltaY * 2;
      scrollProgress = Math.max(0, Math.min(scrollProgress, logoMaxScroll + 500));
      
      updateLogoAnimation();

      // Si on remonte tout en haut, remettre la ville
      if (scrollProgress === 0) {
        if (skyline) {
          skyline.style.display = 'block';
        }
        if (siteHeader) {
          siteHeader.style.opacity = '0';
        }
      }
    };

    // Gestion du scroll tactile
    let touchStartY = 0;
    let isScrolling = false;
    const touchSensitivity = isMobile ? 6 : 4;
    
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
      scrollProgress = Math.max(0, Math.min(scrollProgress, logoMaxScroll + 500));
      
      updateLogoAnimation();

      // Si on remonte tout en haut, remettre la ville
      if (scrollProgress === 0) {
        if (skyline) {
          skyline.style.display = 'block';
        }
        if (siteHeader) {
          siteHeader.style.opacity = '0';
        }
      }
      
      touchStartY = touchY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isScrolling) {
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
      scrollProgress = Math.max(0, Math.min(scrollProgress, logoMaxScroll + 500));
      updateLogoAnimation();

      // Si on remonte tout en haut, remettre la ville
      if (scrollProgress === 0) {
        if (skyline) {
          skyline.style.display = 'block';
        }
        if (siteHeader) {
          siteHeader.style.opacity = '0';
        }
      }
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