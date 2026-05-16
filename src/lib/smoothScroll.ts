import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function initSmoothScroll(): () => void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    return () => {};
  }

  const lenis = new Lenis({
    lerp: 0.09,
    smoothWheel: true,
    wheelMultiplier: 1,
  });

  lenisInstance = lenis;

  lenis.on('scroll', ScrollTrigger.update);

  const tickerFn = (t: number) => lenis.raf(t * 1000);
  gsap.ticker.add(tickerFn);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tickerFn);
    lenis.destroy();
    lenisInstance = null;
  };
}

export function scrollToSection(selector: string) {
  if (lenisInstance) {
    lenisInstance.scrollTo(selector, { duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) });
  } else {
    const el = document.querySelector(selector) as HTMLElement | null;
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
