import { useEffect, useCallback } from 'react';
import { gsap } from 'gsap';

export const useScrollAnimation = () => {
  const initializeAnimations = useCallback(() => {
    // Performance optimization
    gsap.config({
      force3D: true,
      nullTargetWarn: false
    });
  }, []);

  useEffect(() => {
    initializeAnimations();
  }, [initializeAnimations]);

  return {};
};