import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const CityAnimation = () => {
  const cityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const city = document.querySelector('.skyline') as HTMLElement;
    const sky = document.querySelector('.sky') as HTMLElement;
    const moon = document.querySelector('.moon') as HTMLElement;
    
    if (!city || !sky || !moon) return;

    let scrollProgress = 0;
    const maxScroll = 4000; // Plus de scroll pour l'animation complète
    const batmanPhaseEnd = 2000; // Fin de l'animation Batman
    const cityLiftStart = 2200; // Début de la montée de la ville
    const cityLiftEnd = 4000; // Fin de la montée de la ville

    // État initial
    gsap.set([city, sky, moon], {
      y: 0,
      transformOrigin: "center bottom"
    });

    const updateCityAnimation = () => {
      if (scrollProgress > cityLiftStart) {
        // Phase de montée de la ville
        const cityProgress = Math.min((scrollProgress - cityLiftStart) / (cityLiftEnd - cityLiftStart), 1);
        const liftAmount = cityProgress * window.innerHeight * 1.2; // Monte plus haut que l'écran
        
        // Animation fluide de montée
        gsap.to(city, {
          y: -liftAmount,
          duration: 0.5,
          ease: "power2.out"
        });
        
        // Le ciel monte aussi mais moins vite pour créer de la profondeur
        gsap.to(sky, {
          y: -liftAmount * 0.7,
          duration: 0.5,
          ease: "power2.out"
        });
        
        // La lune monte encore moins vite
        gsap.to(moon, {
          y: -liftAmount * 0.3,
          duration: 0.5,
          ease: "power2.out"
        });

        // Effet de fondu progressif quand la ville monte
        const fadeProgress = Math.min(cityProgress * 2, 1);
        gsap.to(city, {
          opacity: 1 - (fadeProgress * 0.3),
          duration: 0.5,
          ease: "power2.out"
        });
      }
    };

    // Gestion du scroll de la molette
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      scrollProgress += e.deltaY * 2;
      scrollProgress = Math.max(0, Math.min(scrollProgress, maxScroll));
      
      updateCityAnimation();
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
      
      updateCityAnimation();
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
      updateCityAnimation();
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

  return null; // Ce composant ne rend rien visuellement
};

export default CityAnimation;