import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DisplayHeadline } from '../ui/DisplayHeadline';
import { Eyebrow } from '../ui/Eyebrow';

gsap.registerPlugin(ScrollTrigger);

const LION_CUB =
  'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80';

const LION_CUB_ALT =
  'https://images.unsplash.com/photo-1574870111867-089730e5a72b?auto=format&fit=crop&w=900&q=80';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function BrandIntro() {
  const portraitRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 900) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        portraitRef.current,
        { yPercent: 8 },
        {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: '.brand-intro',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="brand-intro" className="section brand-intro">
      <div className="container">
        <div className="brand-intro-eyebrow-row">
          <Eyebrow>Tanzania's wildlife and trade-class company</Eyebrow>
        </div>

        <DisplayHeadline align="center" className="brand-intro-headline">
          Essentia Safari
        </DisplayHeadline>

        <div className="brand-intro-grid">
          <motion.div
            className="brand-intro-col left"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow>Cultural Heritage</Eyebrow>
            <p className="body-para">
              For two decades we've built journeys hand-in-hand with the Maasai
              and Hadza — small parties, slow days, real conversations. No
              circuits. No hurry. Only the country, as it is.
            </p>
          </motion.div>

          <motion.figure
            className="brand-intro-col center"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="brand-intro-mask"
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                ref={portraitRef}
                src={LION_CUB_ALT}
                alt="A lion cub resting beneath dry grass"
                loading="lazy"
              />
            </motion.div>
            <figcaption>Cub at first light · Ngorongoro</figcaption>
          </motion.figure>

          <motion.div
            className="brand-intro-col right"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow>Welcome</Eyebrow>
            <p className="body-para">
              A safari is not a list of animals to be ticked off. It is a way of
              listening to a place. We design every itinerary around the
              quietest hours — the bookends of the day, when the country
              actually speaks.
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        .brand-intro {
          background: var(--bg);
        }
        .brand-intro-eyebrow-row {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }
        .brand-intro-headline {
          font-size: clamp(3.5rem, 13vw, 10rem);
          text-align: center;
        }
        .brand-intro-grid {
          margin-top: 84px;
          display: grid;
          grid-template-columns: 1fr 1.1fr 1fr;
          gap: 56px;
          align-items: stretch;
        }
        .brand-intro-col {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .brand-intro-col.left { align-items: flex-start; padding-top: 16px; }
        .brand-intro-col.right { align-items: flex-start; padding-top: 16px; align-self: end; }
        .brand-intro-col.center {
          margin: 0;
          position: relative;
        }
        .brand-intro-mask {
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
          will-change: clip-path;
        }
        .brand-intro-col.center img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          will-change: transform;
        }
        .brand-intro-col.center figcaption {
          margin-top: 16px;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--dim);
          text-align: center;
        }
        @media (max-width: 900px) {
          .brand-intro-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .brand-intro-col.right { align-self: stretch; }
        }
      `}</style>
    </section>
  );
}
