import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BatmanLogo = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    const glow = glowRef.current;

    if (!logo || !glow) return;

    // État initial - logo caché profondément dans la ville
    gsap.set(logo, {
      scale: 0.1,
      y: 300,
      opacity: 0,
      rotationX: 45,
      rotationY: -30,
      z: -500,
      transformOrigin: "center center",
      filter: "brightness(0.2) blur(3px)"
    });

    gsap.set(glow, {
      scale: 0,
      opacity: 0,
      filter: "blur(20px)"
    });

    // Timeline d'animation synchronisée au scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Phase 1: Émergence depuis la ville (0-30%)
          if (progress <= 0.3) {
            const phase1Progress = progress / 0.3;
            gsap.set(logo, {
              y: 300 - (phase1Progress * 200),
              scale: 0.1 + (phase1Progress * 0.4),
              opacity: phase1Progress * 0.6,
              rotationX: 45 - (phase1Progress * 25),
              rotationY: -30 + (phase1Progress * 20),
              z: -500 + (phase1Progress * 300),
              filter: `brightness(${0.2 + phase1Progress * 0.5}) blur(${3 - phase1Progress * 2}px)`
            });
            
            gsap.set(glow, {
              scale: phase1Progress * 0.8,
              opacity: phase1Progress * 0.3,
              filter: `blur(${20 - phase1Progress * 10}px)`
            });
          }
          
          // Phase 2: Élévation au-dessus des toits (30-70%)
          else if (progress <= 0.7) {
            const phase2Progress = (progress - 0.3) / 0.4;
            gsap.set(logo, {
              y: 100 - (phase2Progress * 200),
              scale: 0.5 + (phase2Progress * 0.8),
              opacity: 0.6 + (phase2Progress * 0.3),
              rotationX: 20 - (phase2Progress * 15),
              rotationY: -10 + (phase2Progress * 10),
              z: -200 + (phase2Progress * 150),
              filter: `brightness(${0.7 + phase2Progress * 0.4}) blur(${1 - phase2Progress}px)`
            });
            
            gsap.set(glow, {
              scale: 0.8 + (phase2Progress * 1.2),
              opacity: 0.3 + (phase2Progress * 0.4),
              filter: `blur(${10 - phase2Progress * 5}px)`
            });
          }
          
          // Phase 3: Approche dramatique vers l'utilisateur (70-100%)
          else {
            const phase3Progress = (progress - 0.7) / 0.3;
            gsap.set(logo, {
              y: -100 - (phase3Progress * 100),
              scale: 1.3 + (phase3Progress * 1.2),
              opacity: 0.9 + (phase3Progress * 0.1),
              rotationX: 5 - (phase3Progress * 5),
              rotationY: 0,
              z: -50 + (phase3Progress * 100),
              filter: `brightness(${1.1 + phase3Progress * 0.4}) blur(0px)`
            });
            
            gsap.set(glow, {
              scale: 2 + (phase3Progress * 2),
              opacity: 0.7 + (phase3Progress * 0.3),
              filter: `blur(${5 - phase3Progress * 3}px)`
            });
          }
        }
      }
    });

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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