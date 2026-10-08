import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    
    if (!('IntersectionObserver' in window) || revealEls.length === 0) {
      revealEls.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

    revealEls.forEach((el, i) => {
      // If already partially in view on initial render, show immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible');
      } else {
        el.style.transitionDelay = `${(i % 4) * 0.08}s`;
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);
}
