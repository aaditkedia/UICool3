import { motion } from 'framer-motion';
import { DisplayHeadline } from '../ui/DisplayHeadline';
import { Eyebrow } from '../ui/Eyebrow';
import { Pill } from '../ui/Pill';

const CARDS = [
  {
    src: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=80',
    alt: 'A thatched-roof tented camp pool seen from above at sunrise',
    label: 'Mara Engagi · Tented Camp',
    sub: '6 suites · open-air shower · private plunge',
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Desert canopy lounge at dusk with linen drapes and lanterns',
    label: 'Hadzabe Camp · Lake Eyasi',
    sub: '4 canvas suites · firelight dining · open star bed',
  },
];

export function Accommodations() {
  return (
    <section id="accommodations" className="section accommodations">
      <div className="container">
        <div className="accommodations-head">
          <Eyebrow>Where you sleep</Eyebrow>
          <DisplayHeadline align="center" className="accommodations-headline">
            {'Our Favorite\nAccommodations'}
          </DisplayHeadline>
          <p className="accommodations-sub italic-quote">
            Twelve properties across northern Tanzania — none of them taken lightly.
          </p>
        </div>

        <div className="accommodations-grid">
          {CARDS.map((c, i) => (
            <motion.figure
              className="acc-card"
              key={c.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
            >
              <div className="acc-card-media">
                <img src={c.src} alt={c.alt} loading="lazy" />
              </div>
              <figcaption>
                <div className="acc-card-meta">
                  <span className="acc-card-index">0{i + 1}</span>
                  <span className="acc-card-divider" />
                  <span className="acc-card-region">Tanzania</span>
                </div>
                <h3>{c.label}</h3>
                <p>{c.sub}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="accommodations-cta">
          <Pill variant="outline">View All Properties</Pill>
        </div>
      </div>

      <style>{`
        .accommodations {
          background: var(--bg);
        }
        .accommodations-head {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          margin-bottom: 72px;
        }
        .accommodations-headline {
          font-size: clamp(2.6rem, 9vw, 7.5rem);
          text-align: center;
        }
        .accommodations-sub {
          font-size: 1.1rem;
          color: var(--dim);
          max-width: 540px;
          text-align: center;
          margin: 0;
        }
        .accommodations-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .acc-card { margin: 0; }
        .acc-card-media {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: var(--shadow-card);
        }
        .acc-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s ease;
        }
        .acc-card:hover .acc-card-media img {
          transform: scale(1.04);
        }
        .acc-card figcaption {
          padding: 24px 4px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .acc-card-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--dim);
        }
        .acc-card-divider {
          width: 22px;
          height: 1px;
          background: var(--dim);
        }
        .acc-card h3 {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.4vw, 2rem);
          text-transform: uppercase;
          letter-spacing: 0.01em;
          margin: 0;
          line-height: 1.1;
        }
        .acc-card p {
          font-size: 14px;
          color: var(--dim);
          margin: 0;
        }
        .accommodations-cta {
          display: flex;
          justify-content: center;
          margin-top: 72px;
        }
        @media (max-width: 768px) {
          .accommodations-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
