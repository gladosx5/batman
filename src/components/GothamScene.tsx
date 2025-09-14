import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BatmanLogo from './BatmanLogo';

gsap.registerPlugin(ScrollTrigger);

const GothamScene = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const skylineRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const skyline = skylineRef.current;
    const sky = skyRef.current;
    const fog = fogRef.current;

    if (!scene || !skyline || !sky || !fog) return;

    // Parallaxe pour la skyline
    gsap.to(skyline, {
      y: -100,
      scale: 1.1,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 2
      }
    });

    // Parallaxe pour le ciel
    gsap.to(sky, {
      y: -50,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 3
      }
    });

    // Animation du brouillard
    gsap.to(fog, {
      opacity: 0.8,
      y: -50,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sceneRef} className="gotham-scene">
      {/* Ciel avec étoiles et lune */}
      <div ref={skyRef} className="sky">
        <div className="moon"></div>
        <div className="stars-layer"></div>
      </div>

      {/* Skyline de Gotham City */}
      <div ref={skylineRef} className="skyline">
        <img 
          src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg"
          alt="Gotham Skyline"
          className="skyline-image"
        />
      </div>

      {/* Logo Batman */}
      <BatmanLogo />

      {/* Effets atmosphériques */}
      <div ref={fogRef} className="fog"></div>
      <div className="atmospheric-glow"></div>
      
      {/* Overlay pour l'effet dramatique */}
      <div className="dramatic-overlay"></div>
    </div>
  );
};

export default GothamScene;