import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BatmanLogo = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    const glow = glowRef.current;
    const container = containerRef.current;

    if (!logo || !glow || !container) return;

    // Configuration initiale - logo caché dans la ville
    gsap.set(logo, {
      scale: 0.2,
      y: 300, // Très bas, caché dans la skyline
      opacity: 0,
      rotationY: -20,
      rotationX: 10,
      transformOrigin: "center center",
      filter: "brightness(0.2) blur(2px)",
      z: -200
    });

    gsap.set(glow, {
      scale: 0,
      opacity: 0,
      filter: "blur(20px)"
    });

    // Timeline principale d'animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Animation fluide liée au scroll
        onUpdate: (self) => {
          // Effet de parallaxe dynamique
          const progress = self.progress;
          
          // Animation du logo en plusieurs phases
          if (progress < 0.3) {
            // Phase 1: Émergence de la ville
            gsap.to(logo, {
              y: 300 - (progress * 400),
              scale: 0.2 + (progress * 0.3),
              opacity: progress * 2,
              rotationY: -20 + (progress * 15),
              filter: `brightness(${0.2 + progress * 0.5}) blur(${2 - progress * 2}px)`,
              duration: 0.1
            });
          } else if (progress < 0.7) {
            // Phase 2: Élévation et croissance
            const localProgress = (progress - 0.3) / 0.4;
            gsap.to(logo, {
              y: -100 - (localProgress * 150),
              scale: 0.5 + (localProgress * 0.8),
              opacity: 0.6 + (localProgress * 0.3),
              rotationY: -5 + (localProgress * 5),
              rotationX: 10 - (localProgress * 10),
              filter: `brightness(${0.7 + localProgress * 0.4}) blur(0px)`,
              z: -200 + (localProgress * 300),
              duration: 0.1
            });
            
            // Activation du glow
            gsap.to(glow, {
              scale: localProgress * 1.5,
              opacity: localProgress * 0.6,
              filter: `blur(${20 - localProgress * 15}px)`,
              duration: 0.1
            });
          } else {
            // Phase 3: Approche finale dramatique
            const localProgress = (progress - 0.7) / 0.3;
            gsap.to(logo, {
              y: -250 - (localProgress * 100),
              scale: 1.3 + (localProgress * 0.5),
              opacity: 0.9 + (localProgress * 0.1),
              rotationY: 0,
              rotationX: 0,
              filter: `brightness(${1.1 + localProgress * 0.3}) blur(0px)`,
              z: 100 + (localProgress * 200),
              duration: 0.1
            });
            
            // Intensification du glow
            gsap.to(glow, {
              scale: 1.5 + (localProgress * 1),
              opacity: 0.6 + (localProgress * 0.4),
              filter: `blur(${5 + localProgress * 10}px)`,
              duration: 0.1
            });
          }
        }
      }
    });

    // Animation de pulsation pour le glow
    gsap.to(glow, {
      scale: "+=0.1",
      opacity: "+=0.1",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Nettoyage
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="batman-logo-container">
      <div ref={glowRef} className="batman-logo-glow"></div>
      <img 
        ref={logoRef}
        src="https://i.imgur.com/pXyfwCg.png"
        alt="Batman Logo"
        className="batman-logo"
        draggable={false}
      />
    </div>
  );
};

export default BatmanLogo;