import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BatmanScene = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation initiale du logo Batman émergeant de la ville
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sceneRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
          pin: true,
        }
      });

      tl.fromTo(logoRef.current, 
        {
          scale: 0.1,
          y: 200,
          opacity: 0,
          rotation: -180
        },
        {
          scale: 3,
          y: -100,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: "power2.out"
        }
      )
      .to(logoRef.current, {
        scale: 2,
        y: -150,
        duration: 0.5,
        ease: "power1.inOut"
      })
      .to([".glow-effect", ".bat-glow"], {
        opacity: 1,
        scale: 1.2,
        duration: 0.3
      }, "-=0.3");

      // Animation des étoiles
      gsap.to(".star", {
        opacity: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.1
      });

      // Animation du brouillard
      gsap.to(".fog", {
        x: "100px",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sceneRef} className="batman-scene">
      {/* Ciel étoilé */}
      <div className="night-sky">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Lune */}
      <div className="moon"></div>

      {/* Brouillard */}
      <div className="fog fog-1"></div>
      <div className="fog fog-2"></div>
      <div className="fog fog-3"></div>

      {/* Skyline de Gotham */}
      <div ref={cityRef} className="gotham-skyline">
        <div className="building building-1"></div>
        <div className="building building-2"></div>
        <div className="building building-3"></div>
        <div className="building building-4"></div>
        <div className="building building-5"></div>
        <div className="building building-6"></div>
        <div className="building building-7"></div>
        <div className="building building-8"></div>
        <div className="building building-9"></div>
        <div className="building building-10"></div>
      </div>

      {/* Logo Batman */}
      <div ref={logoRef} className="batman-logo">
        <div className="glow-effect"></div>
        <div className="bat-symbol">
          <div className="bat-wing bat-wing-left"></div>
          <div className="bat-body"></div>
          <div className="bat-wing bat-wing-right"></div>
          <div className="bat-head"></div>
        </div>
        <div className="bat-glow"></div>
      </div>

      {/* Indicateur de scroll */}
      <div className="scroll-indicator">
        <div className="scroll-text">Faites défiler pour découvrir</div>
        <div className="scroll-arrow"></div>
      </div>
    </div>
  );
};

export default BatmanScene;