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
    let sceneProgress = 0; // Nouveau: progression pour faire monter la scène
    let isAnimationComplete = false; // Nouveau: flag pour savoir si l'animation est terminée
    let isInReverseMode = false; // Flag pour savoir si on est en mode retour
    const isMobile = window.innerWidth <= 768;
    const maxLogoScroll = isMobile ? 400 : 800; // Animation du logo
    const maxSceneScroll = isMobile ? 800 : 1200; // Animation de la scène qui monte
    
    // Animation du logo (phase 1)
    const updateAnimation = () => {
      const progress = Math.min(scrollProgress / maxLogoScroll, 1);
      
      // Courbe d'animation avec démarrage retardé pour le zoom
      const moveProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic pour le mouvement
      const zoomProgress = progress > 0.3 ? Math.pow((progress - 0.3) / 0.7, 2) : 0; // Zoom commence après 30% du scroll
      
      // Position Y: monte progressivement
      const yPosition = 250 - (moveProgress * 300); // De 250 à -50
      
      // Scale: commence très petit, puis zoom plus tard et plus fort
      const scale = 0.1 + (zoomProgress * 3.9); // De 0.1 à 4.0 (zoom x4)
      
      // Opacité: devient plus visible
      const opacity = 0.6 + (moveProgress * 0.4); // De 0.6 à 1.0
      
      // Z-index: passe au premier plan progressivement
      const zIndex = progress > 0.4 ? 100 : 2;
      
      // Effet de glow qui s'intensifie
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

      // Calcul de la progression pour faire monter la scène
      const sceneProgressNormalized = Math.min(Math.max(sceneProgress / maxSceneScroll, 0), 1);
      
      // La scène monte progressivement
      const translateY = -sceneProgressNormalized * 100; // Monte de 0 à -100vh
      
      // Marquer l'animation comme terminée quand la scène est complètement montée
      isAnimationComplete = sceneProgressNormalized >= 1;
      
      gsap.to(gothamScene, {
        y: `${translateY}vh`,
        duration: 0.4,
        ease: "power2.out"
      });

      // Cacher complètement la scène Gotham quand elle est montée
      if (isAnimationComplete) {
        gothamScene.classList.add('animation-complete');
        gsap.to(gothamScene, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      } else {
        gothamScene.classList.remove('animation-complete');
        gsap.to(gothamScene, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      }

      // Animation de disparition du logo seulement si on remonte ET que la scène est revenue en place
      if (sceneProgressNormalized <= 0 && scrollProgress < -100) {
        isAnimationComplete = false;
        const disappearProgress = Math.min(Math.abs(scrollProgress + 100) / 100, 1); // Animation de disparition plus courte
        gsap.to(logo, {
          opacity: 1 - disappearProgress,
          scale: 4 - (disappearProgress * 2), // Le logo ne rétrécit pas autant
          duration: 0.4,
          ease: "power2.out"
        });
      }
    };

    // Gestion du scroll de la molette (plus sensible)
    const handleWheel = (e: WheelEvent) => {
      // Détecter si on est en haut de page pour activer le mode retour
      const isAtTop = window.scrollY <= 10;
      
      // Si on scroll vers le haut en étant en haut de page, activer le mode retour
      if (isAtTop && e.deltaY < 0 && isAnimationComplete) {
        isInReverseMode = true;
        isAnimationComplete = false;
        // Réactiver la scène Gotham
        const gothamScene = document.querySelector('.gotham-scene');
        if (gothamScene) {
          gsap.to(gothamScene, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
      
      // Ne pas empêcher le scroll par défaut si l'animation est terminée ET qu'on n'est pas en mode retour
      if (!isAnimationComplete && !isInReverseMode) {
        e.preventDefault();
      } else if (isAnimationComplete && !isInReverseMode) {
        // Laisser le scroll normal fonctionner
        return;
      }
      
      const deltaY = e.deltaY * 1.5;
      
      // Si on est en mode retour, gérer l'animation inverse
      if (isInReverseMode) {
        e.preventDefault();
        
        if (deltaY < 0) {
          // Scroll vers le haut: faire revenir l'animation
          if (sceneProgress > 0) {
            sceneProgress += deltaY;
            sceneProgress = Math.max(sceneProgress, 0);
          } else {
            scrollProgress += deltaY;
            scrollProgress = Math.max(scrollProgress, -500);
          }
        } else {
          // Scroll vers le bas: refaire l'animation
          if (scrollProgress < maxLogoScroll) {
            scrollProgress += deltaY;
            scrollProgress = Math.min(scrollProgress, maxLogoScroll);
          } else {
            sceneProgress += deltaY;
            sceneProgress = Math.min(sceneProgress, maxSceneScroll);
          }
        }
        
        // Sortir du mode retour si on atteint la fin de l'animation
        if (sceneProgress >= maxSceneScroll) {
          isInReverseMode = false;
          isAnimationComplete = true;
        }
      } else {
        // Mode normal: animation initiale
        // Phase 1: Animation du logo
        if (scrollProgress < maxLogoScroll && deltaY > 0) {
          scrollProgress += deltaY;
          scrollProgress = Math.min(scrollProgress, maxLogoScroll);
        }
        // Phase 2: Animation de la scène qui monte
        else if (scrollProgress >= maxLogoScroll && deltaY > 0) {
          sceneProgress += deltaY;
          sceneProgress = Math.min(sceneProgress, maxSceneScroll);
        }
        // Remontée: d'abord la scène redescend, puis le logo
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

    // Gestion du scroll tactile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Détecter si on est en haut de page pour activer le mode retour
      const isAtTop = window.scrollY <= 10;
      const touchY = e.touches[0].clientY;
      const deltaY = (touchStartY - touchY) * 2;
      
      // Si on scroll vers le haut en étant en haut de page, activer le mode retour
      if (isAtTop && deltaY < 0 && isAnimationComplete) {
        isInReverseMode = true;
        isAnimationComplete = false;
        // Réactiver la scène Gotham
        const gothamScene = document.querySelector('.gotham-scene');
        if (gothamScene) {
          gsap.to(gothamScene, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
      
      // Ne pas empêcher le scroll par défaut si l'animation est terminée ET qu'on n'est pas en mode retour
      if (!isAnimationComplete && !isInReverseMode) {
        e.preventDefault();
      } else if (isAnimationComplete && !isInReverseMode) {
        // Laisser le scroll normal fonctionner
        return;
      }
      
      // Si on est en mode retour, gérer l'animation inverse
      if (isInReverseMode) {
        e.preventDefault();
        
        if (deltaY < 0) {
          // Scroll vers le haut: faire revenir l'animation
          if (sceneProgress > 0) {
            sceneProgress += deltaY;
            sceneProgress = Math.max(sceneProgress, 0);
          } else {
            scrollProgress += deltaY;
            scrollProgress = Math.max(scrollProgress, -500);
          }
        } else {
          // Scroll vers le bas: refaire l'animation
          if (scrollProgress < maxLogoScroll) {
            scrollProgress += deltaY;
            scrollProgress = Math.min(scrollProgress, maxLogoScroll);
          } else {
            sceneProgress += deltaY;
            sceneProgress = Math.min(sceneProgress, maxSceneScroll);
          }
        }
        
        // Sortir du mode retour si on atteint la fin de l'animation
        if (sceneProgress >= maxSceneScroll) {
          isInReverseMode = false;
          isAnimationComplete = true;
        }
      } else {
        // Mode normal: même logique que pour la molette
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
      touchStartY = touchY;
    };

    // Gestion des touches clavier
    const handleKeyDown = (e: KeyboardEvent) => {
      // Détecter si on est en haut de page pour activer le mode retour
      const isAtTop = window.scrollY <= 10;
      
      // Si on appuie sur flèche haut en étant en haut de page, activer le mode retour
      if (isAtTop && e.key === 'ArrowUp' && isAnimationComplete) {
        isInReverseMode = true;
        isAnimationComplete = false;
        // Réactiver la scène Gotham
        const gothamScene = document.querySelector('.gotham-scene');
        if (gothamScene) {
          gsap.to(gothamScene, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
      
      // Ne pas intercepter les touches si l'animation est terminée ET qu'on n'est pas en mode retour
      if (isAnimationComplete && !isInReverseMode) {
        return;
      }
      
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
        
        // Si on est en mode retour, gérer l'animation inverse
        if (isInReverseMode) {
          if (deltaY < 0) {
            // Flèche haut: faire revenir l'animation
            if (sceneProgress > 0) {
              sceneProgress += deltaY;
              sceneProgress = Math.max(sceneProgress, 0);
            } else {
              scrollProgress += deltaY;
              scrollProgress = Math.max(scrollProgress, -500);
            }
          } else {
            // Flèche bas: refaire l'animation
            if (scrollProgress < maxLogoScroll) {
              scrollProgress += deltaY;
              scrollProgress = Math.min(scrollProgress, maxLogoScroll);
            } else {
              sceneProgress += deltaY;
              sceneProgress = Math.min(sceneProgress, maxSceneScroll);
            }
          }
          
          // Sortir du mode retour si on atteint la fin de l'animation
          if (sceneProgress >= maxSceneScroll) {
            isInReverseMode = false;
            isAnimationComplete = true;
          }
        } else {
          // Mode normal
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
      }
      
      updateAnimation();
      updateSceneAnimation();
    };

    // Ajout des event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

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