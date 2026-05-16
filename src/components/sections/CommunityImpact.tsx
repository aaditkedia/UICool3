import { motion } from 'framer-motion';
import { Eyebrow } from '../ui/Eyebrow';
import { Stat } from '../ui/Stat';

const STATS = [
  { to: 3, suffix: '+', label: 'Countries' },
  { to: 2, suffix: 'K+', label: 'Wonderful Clients' },
  { to: 20, suffix: '+', label: 'Years of Experience' },
];

const THUMBS = [
  {
    src: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=900&q=80',
    alt: 'Maasai elder portrait, red shuka against dusk',
    caption: 'Elder · Loliondo',
  },
  {
    src: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&w=900&q=80',
    alt: 'Desert landscape with dunes and long shadows',
    caption: 'Dunes · Ol Doinyo Lengai',
  },
];

export function CommunityImpact() {
  return (
    <section id="community" className="section community">
      <div className="container">
        <div className="community-head">
          <span className="hairline" />
          <Eyebrow noLine>Community Impact</Eyebrow>
          <span className="hairline" />
        </div>

        <div className="community-grid">
          <div className="community-stats">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-12%' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Stat to={s.to} suffix={s.suffix} label={s.label} />
              </motion.div>
            ))}
          </div>

          <div className="community-thumbs">
            {THUMBS.map((t, i) => (
              <motion.figure
                className="thumb"
                key={t.caption}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-12%' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="thumb-mask"
                  initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                  whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 1.1, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.img
                    src={t.src}
                    alt={t.alt}
                    loading="lazy"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 1.3, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.div>
                <figcaption>{t.caption}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        <p className="community-tagline italic-quote">
          A meaningful share of every booking funds local guide training,
          schools, and conservancy patrols across the Serengeti corridor.
        </p>
      </div>

      <style>{`
        .community { background: var(--bg); }
        .community-head {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 24px;
          margin-bottom: 72px;
        }
        .community-head .eyebrow { white-space: nowrap; }
        .community-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 56px;
          align-items: end;
        }
        .community-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .stat { display: flex; flex-direction: column; gap: 12px; }
        .stat-num {
          font-family: var(--font-display);
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 1;
          color: var(--ink);
          letter-spacing: -0.01em;
          display: flex;
          align-items: baseline;
        }
        .stat-suffix {
          color: var(--accent-burnt);
          margin-left: 2px;
        }
        .stat-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--dim);
        }
        .stat-label .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-burnt);
        }

        .community-thumbs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .community-thumbs .thumb {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .community-thumbs .thumb-mask {
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: var(--shadow-soft);
          will-change: clip-path;
        }
        .community-thumbs .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .community-thumbs figcaption {
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--dim);
        }
        .community-tagline {
          margin-top: 64px;
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: var(--ink);
          max-width: 720px;
        }
        @media (max-width: 900px) {
          .community-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .community-stats { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
