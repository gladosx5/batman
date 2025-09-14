import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BatmanLogo = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    const glow = glowRef.current;
    const container = containerRef.current;

    if (!logo || !glow || !container) return;

    // Create timeline for cinematic sequence
    const tl = gsap.timeline({ delay: 1 });

    // Initial state - logo hidden in the city depths
    gsap.set(logo, {
      scale: 0.05,
      y: 300,
      z: -2000,
      opacity: 0.3,
      rotationX: 45,
      rotationY: -15,
      filter: "brightness(0.2) blur(8px)",
      transformOrigin: "center center"
    });

    gsap.set(glow, {
      scale: 0,
      opacity: 0
    });

    gsap.set(container, {
      perspective: 2000,
      transformStyle: "preserve-3d"
    });

    // Phase 1: Emergence from the city (0-3s)
    tl.to(logo, {
      scale: 0.2,
      y: 150,
      z: -1500,
      opacity: 0.6,
      rotationX: 30,
      rotationY: -10,
      filter: "brightness(0.4) blur(4px)",
      duration: 3,
      ease: "power2.out"
    })
    .to(glow, {
      scale: 0.3,
      opacity: 0.2,
      duration: 3,
      ease: "power2.out"
    }, 0);

    // Phase 2: Rising above rooftops (3-6s)
    tl.to(logo, {
      scale: 0.6,
      y: -50,
      z: -800,
      opacity: 0.8,
      rotationX: 15,
      rotationY: -5,
      filter: "brightness(0.7) blur(2px)",
      duration: 3,
      ease: "power2.inOut"
    })
    .to(glow, {
      scale: 0.8,
      opacity: 0.4,
      duration: 3,
      ease: "power2.inOut"
    }, 3);

    // Phase 3: Approaching the viewer (6-9s)
    tl.to(logo, {
      scale: 1.5,
      y: -100,
      z: -200,
      opacity: 1,
      rotationX: 5,
      rotationY: 0,
      filter: "brightness(1) blur(0px)",
      duration: 3,
      ease: "power2.in"
    })
    .to(glow, {
      scale: 1.5,
      opacity: 0.6,
      duration: 3,
      ease: "power2.in"
    }, 6);

    // Phase 4: Dramatic flyby (9-12s)
    tl.to(logo, {
      scale: 4,
      y: -200,
      z: 500,
      opacity: 0.9,
      rotationX: -10,
      rotationY: 5,
      filter: "brightness(1.3) blur(1px)",
      duration: 2,
      ease: "power3.in"
    })
    .to(glow, {
      scale: 4,
      opacity: 0.8,
      duration: 2,
      ease: "power3.in"
    }, 9);

    // Phase 5: Passing through screen (12-14s)
    tl.to(logo, {
      scale: 8,
      y: -400,
      z: 2000,
      opacity: 0,
      rotationX: -20,
      rotationY: 10,
      filter: "brightness(2) blur(4px)",
      duration: 2,
      ease: "power4.in"
    })
    .to(glow, {
      scale: 8,
      opacity: 0,
      duration: 2,
      ease: "power4.in"
    }, 12);

    // Optional: Loop the animation
    tl.set(logo, {
      scale: 0.05,
      y: 300,
      z: -2000,
      opacity: 0.3,
      rotationX: 45,
      rotationY: -15,
      filter: "brightness(0.2) blur(8px)",
      delay: 2
    })
    .set(glow, {
      scale: 0,
      opacity: 0
    }, 16);

    // Repeat the animation
    tl.repeat(-1);

    return () => {
      tl.kill();
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
      />
    </div>
  );
};

export default BatmanLogo;