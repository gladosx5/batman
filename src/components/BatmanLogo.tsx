import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BatmanLogo = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    const glow = glowRef.current;

    if (!logo || !glow) return;

    // Initial state - logo caché dans la ville
    gsap.set(logo, {
      scale: 0.3,
      y: 200, // Plus bas, caché dans la ville
      opacity: 0,
      rotationY: -15,
      transformOrigin: "center center",
      filter: "brightness(0.3)"
    });

    gsap.set(glow, {
      scale: 0,
      opacity: 0
    });

    // Animation au scroll de la molette
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (e.deltaY > 0) {
        // Scroll vers le bas - logo apparaît
        gsap.to(logo, {
          y: -50,
          scale: 1.2,
          opacity: 1,
          rotationY: 0,
          filter: "brightness(1.2)",
          duration: 1.5,
          ease: "power3.out"
        });
        
        gsap.to(glow, {
          scale: 2,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out"
        });
      } else {
        // Scroll vers le haut - logo disparaît dans la ville
        gsap.to(logo, {
          y: 200,
          scale: 0.3,
          opacity: 0,
          rotationY: -15,
          filter: "brightness(0.3)",
          duration: 1.5,
          ease: "power3.out"
        });
        
        gsap.to(glow, {
          scale: 0,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out"
        });
      }
    };

    // Écouter le scroll de la molette
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
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