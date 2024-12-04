import { useState, useEffect } from 'react';

export const useScrollAnimation = () => {
  const [animate, setAnimate] = useState({
    opacity: 0,
    y: 20
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimate({
              opacity: 1,
              y: 0
            });
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return animate;
};