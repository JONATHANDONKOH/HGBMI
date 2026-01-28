import { useEffect, useRef } from 'react';

type AnimationType = 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';

export function useScrollAnimation(animationType: AnimationType = 'fadeInUp', threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animationClass = `animate-${animationType.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationType, threshold]);

  return ref;
}
