import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DisplayHeadline } from '../ui/DisplayHeadline';
import { Eyebrow } from '../ui/Eyebrow';
import { Pill } from '../ui/Pill';
import { Magnetic } from '../ui/Magnetic';

gsap.registerPlugin(ScrollTrigger);

const HERO_IMG =
  'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=2400&q=80';

export function Hero() {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      gsap.to(wrapRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-media">
        <div ref={wrapRef} className="hero-img-wrap">
          <img
            className="hero-img"
            src={HERO_IMG}
            alt="A male lion walking through Tanzanian savanna grass at sunset"
            // eslint-disable-next-line react/no-unknown-property
            {...({ fetchpriority: 'high' } as Record<string, string>)}
          />
        </div>
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-fade" aria-hidden="true" />
      </div>

      <div className="hero-stamp">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}
        >
          <Eyebrow light>Tanzania · since 2003</Eyebrow>
        </motion.div>

        <DisplayHeadline as="h1" align="center" light trigger="parent">
          {'Ultimate\nAdventure'}
        </DisplayHeadline>

        <motion.p
          className="hero-subtitle italic-quote"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          A safari written by the land — guided by people who call it home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}
        >
          <Magnetic strength={0.32}>
            <Pill variant="primary">Book Now</Pill>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        className="hero-meta"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.6 }}
      >
        <span>(01) — Serengeti, Tanzania</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll ↓
        </motion.span>
      </motion.div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          isolation: isolate;
        }
        .hero-media {
          position: absolute;
          inset: 0;
          z-index: -1;
        }
        .hero-img-wrap {
          position: absolute;
          inset: -10% 0 -10% 0;
          width: 100%;
          height: 120%;
          will-change: transform;
        }
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          animation: ken-burns 24s ease-out forwards;
          will-change: transform;
        }
        @keyframes ken-burns {
          from { transform: scale(1); }
          to { transform: scale(1.07); }
        }
        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 80% at 50% 40%, rgba(0,0,0,0) 40%, rgba(0,0,0,.35) 100%);
          pointer-events: none;
        }
        .hero-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 55%, rgba(0,0,0,.5) 100%);
          pointer-events: none;
        }
        .hero-stamp {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1100px;
          padding: 0 var(--gutter);
          text-align: center;
        }
        .hero-stamp .display-headline {
          font-size: clamp(3.5rem, 13vw, 11rem);
          color: #fff;
          letter-spacing: -0.015em;
        }
        .hero-subtitle {
          margin: 28px auto 0;
          max-width: 520px;
          font-size: clamp(1.05rem, 1.8vw, 1.35rem);
          color: rgba(255,255,255,.92);
          line-height: 1.4;
        }
        .hero-meta {
          position: absolute;
          left: var(--gutter);
          right: var(--gutter);
          bottom: 30px;
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,.85);
          z-index: 2;
        }
        @media (max-width: 768px) {
          .hero { min-height: 92vh; }
          .hero-stamp .display-headline { font-size: clamp(2.6rem, 14vw, 5rem); }
          .hero-meta { display: none; }
          .hero-img { animation: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-img { animation: none; }
        }
      `}</style>
    </section>
  );
}
