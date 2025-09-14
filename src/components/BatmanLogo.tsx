import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BatmanLogo = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    const glow = glowRef.current;

    if (!logo || !glow) return;

    // État initial - logo très petit et caché dans l'horizon
    gsap.set(logo, {
      scale: 0.1,
      y: 150, // Positionné dans l'horizon de la ville
      opacity: 0.3,
      rotationX: 45, // Perspective 3D
      rotationY: 0,
      rotationZ: 0,
      transformOrigin: "center bottom",
      filter: "brightness(0.2) blur(2px)",
      z: -500 // Profondeur initiale
    });

    gsap.set(glow, {
      scale: 0,
      opacity: 0,
      filter: "blur(20px)"
    });

    let scrollProgress = 0;
    const maxScroll = 1000; // Distance virtuelle de scroll

    // Animation basée sur le scroll virtuel
    const updateAnimation = () => {
      const progress = Math.min(scrollProgress / maxScroll, 1);
      
      // Animation du logo - émergence 3D de l'horizon
      gsap.to(logo, {
        scale: 0.1 + (progress * 2.5), // De très petit à très grand
        y: 150 - (progress * 200), // Monte de l'horizon vers le centre
        opacity: 0.3 + (progress * 0.7),
        rotationX: 45 - (progress * 45), // Redresse progressivement
        rotationY: progress * 360 * 2, // Rotation complète pendant la montée
        rotationZ: Math.sin(progress * Math.PI * 4) * 10, // Oscillation légère
        filter: `brightness(${0.2 + progress * 1.3}) blur(${2 - progress * 2}px)`,
        z: -500 + (progress * 600), // Vient vers nous
        duration: 0.8,
        ease: "power2.out"
      });
      
      // Animation du glow - expansion progressive
      gsap.to(glow, {
        scale: progress * 4,
        opacity: progress * 0.8,
        filter: `blur(${20 - progress * 15}px)`,
        duration: 0.8,
        ease: "power2.out"
      });

      // Effet de pulsation quand le logo est proche
      if (progress > 0.7) {
        const pulseIntensity = (progress - 0.7) / 0.3;
        gsap.to(logo, {
          scale: (0.1 + (progress * 2.5)) * (1 + Math.sin(Date.now() * 0.01) * 0.1 * pulseIntensity),
          duration: 0.1,
          ease: "none"
        });
      }
    };

    // Gestion du scroll de la molette
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Mise à jour du progrès virtuel
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
          scrollProgress += 50;
          break;
        case 'ArrowUp':
          e.preventDefault();
          scrollProgress -= 50;
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

    // Animation d'introduction
    gsap.fromTo(logo, 
      { opacity: 0 },
      { opacity: 0.3, duration: 2, ease: "power2.out" }
    );

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
      <div ref={glowRef} className="batman-logo-glow"></div>
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