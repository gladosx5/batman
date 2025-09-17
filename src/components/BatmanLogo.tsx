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
    let sceneProgress = 0;
    let isAnimationComplete = false;
    let isInReverseMode = false;
    const isMobile = window.innerWidth <= 768;
    const maxLogoScroll = isMobile ? 400 : 800;
    const maxSceneScroll = isMobile ? 800 : 1200;
    
    // Animation du logo (phase 1)
    const updateAnimation = () => {
      const progress = Math.min(scrollProgress / maxLogoScroll, 1);
      
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
    };

    // Animation de la scène qui monte (phase 2)
    const updateSceneAnimation = () => {
      const gothamScene = document.querySelector('.gotham-scene');
      if (!gothamScene) return;

      const sceneProgressNormalized = Math.min(Math.max(sceneProgress / maxSceneScroll, 0), 1);
      const translateY = -sceneProgressNormalized * 100;
      
      // Marquer l'animation comme terminée et déclencher l'événement
      if (sceneProgressNormalized >= 1 && !isAnimationComplete) {
        isAnimationComplete = true;
        // Déclencher l'événement pour afficher le site web
        window.dispatchEvent(new CustomEvent('gotham-animation-complete'));
      }
      
      gsap.to(gothamScene, {
        y: `${translateY}vh`,
        duration: 0.4,
        ease: "power2.out"
      });

      // Cacher complètement la scène Gotham quand elle est montée
      if (isAnimationComplete) {
        gsap.to(gothamScene, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      } else {
        gsap.to(gothamScene, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      }

      // Animation de disparition du logo pour le retour
      if (sceneProgressNormalized <= 0 && scrollProgress < -100) {
        isAnimationComplete = false;
        const disappearProgress = Math.min(Math.abs(scrollProgress + 100) / 100, 1);
        gsap.to(logo, {
          opacity: 1 - disappearProgress,
          scale: 4 - (disappearProgress * 2),
          duration: 0.4,
          ease: "power2.out"
        });
      }
    };

    // Gestion du scroll - SEULEMENT pour l'animation Gotham
    const handleWheel = (e: WheelEvent) => {
      // Ne pas intercepter le scroll si l'animation est terminée
      if (isAnimationComplete && !isInReverseMode) {
        return;
      }

      e.preventDefault();
      
      const deltaY = e.deltaY * 1.5;
      
      // Mode normal: animation initiale
      if (scrollProgress < maxLogoScroll && deltaY > 0) {
        scrollProgress += deltaY;
        scrollProgress = Math.min(scrollProgress, maxLogoScroll);
      }
      else if (scrollProgress >= maxLogoScroll && deltaY > 0) {
        sceneProgress += deltaY;
        sceneProgress = Math.min(sceneProgress, maxSceneScroll);
      }
      else if (deltaY < 0) {
        if (sceneProgress > 0) {
          sceneProgress += deltaY;
          sceneProgress = Math.max(sceneProgress, 0);
        } else {
          scrollProgress += deltaY;
          scrollProgress = Math.max(scrollProgress, -500);
        }
      }
      
      updateAnimation();
      updateSceneAnimation();
    };

    // Gestion du scroll tactile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (isAnimationComplete && !isInReverseMode) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isAnimationComplete && !isInReverseMode) return;
      
      e.preventDefault();
      
      const touchY = e.touches[0].clientY;
      const deltaY = (touchStartY - touchY) * 2;
      
      if (scrollProgress < maxLogoScroll && deltaY > 0) {
        scrollProgress += deltaY;
        scrollProgress = Math.min(scrollProgress, maxLogoScroll);
      }
      else if (scrollProgress >= maxLogoScroll && deltaY > 0) {
        sceneProgress += deltaY;
        sceneProgress = Math.min(sceneProgress, maxSceneScroll);
      }
      else if (deltaY < 0) {
        if (sceneProgress > 0) {
          sceneProgress += deltaY;
          sceneProgress = Math.max(sceneProgress, 0);
        } else {
          scrollProgress += deltaY;
          scrollProgress = Math.max(scrollProgress, -500);
        }
      }
      
      updateAnimation();
      updateSceneAnimation();
      touchStartY = touchY;
    };

    // Gestion des touches clavier
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimationComplete && !isInReverseMode) return;
      
      let deltaY = 0;
      switch(e.key) {
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          deltaY = 60;
          break;
        case 'ArrowUp':
          e.preventDefault();
          deltaY = -60;
          break;
      }
      
      if (deltaY !== 0) {
        e.preventDefault();
        
        if (scrollProgress < maxLogoScroll && deltaY > 0) {
          scrollProgress += deltaY;
          scrollProgress = Math.min(scrollProgress, maxLogoScroll);
        }
        else if (scrollProgress >= maxLogoScroll && deltaY > 0) {
          sceneProgress += deltaY;
          sceneProgress = Math.min(sceneProgress, maxSceneScroll);
        }
        else if (deltaY < 0) {
          if (sceneProgress > 0) {
            sceneProgress += deltaY;
            sceneProgress = Math.max(sceneProgress, 0);
          } else {
            scrollProgress += deltaY;
            scrollProgress = Math.max(scrollProgress, -500);
          }
        }
      }
      
      updateAnimation();
      updateSceneAnimation();
    };

    // Écouter l'événement de retour depuis le site web
    const handleReturnToGotham = () => {
      isInReverseMode = true;
      isAnimationComplete = false;
      
      // Réinitialiser les valeurs pour l'animation de retour
      sceneProgress = maxSceneScroll;
      scrollProgress = maxLogoScroll;
      
      // Réactiver la scène Gotham
      const gothamScene = document.querySelector('.gotham-scene');
      if (gothamScene) {
        gsap.to(gothamScene, {
          opacity: 1,
          y: '0vh',
          duration: 0.8,
          ease: "power2.out"
        });
      }
      
      // Réanimer le logo
      updateAnimation();
      
      // Sortir du mode retour après l'animation
      setTimeout(() => {
        isInReverseMode = false;
      }, 1000);
    };

    // Ajout des event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('gotham-animation-return', handleReturnToGotham);

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
      window.removeEventListener('gotham-animation-return', handleReturnToGotham);
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