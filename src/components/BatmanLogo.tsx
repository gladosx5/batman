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

    // Initial state
    gsap.set(logo, {
      scale: 0.5,
      y: 0,
      opacity: 0,
      rotationY: -15,
      transformOrigin: "center center",
      filter: "brightness(0.3)"
    });

    gsap.set(glow, {
      scale: 0,
      opacity: 0
    });

    // Main animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gotham-scene",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Dynamic glow intensity based on scroll progress
          const progress = self.progress;
          const glowIntensity = progress * 30;
          gsap.set(glow, {
            boxShadow: `0 0 ${glowIntensity}px ${glowIntensity * 0.5}px rgba(255, 215, 0, ${progress * 0.8}), 
                       0 0 ${glowIntensity * 2}px ${glowIntensity}px rgba(255, 255, 255, ${progress * 0.3})`
          });
        }
      }
    });

    // Logo emergence animation
    tl.to(logo, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    })
    .to(logo, {
      y: -50,
      scale: 1.8,
      rotationY: 0,
      filter: "brightness(1.2)",
      duration: 0.7,
      ease: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    }, 0.1)
    .to(glow, {
      scale: 2,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, 0.2);

    // Cleanup
    return () => {
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