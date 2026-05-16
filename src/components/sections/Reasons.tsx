import { motion } from 'framer-motion';
import { Compass, MapPin, Gem, Calendar } from 'lucide-react';
import { DisplayHeadline } from '../ui/DisplayHeadline';
import { Eyebrow } from '../ui/Eyebrow';

const REASONS = [
  {
    Icon: Compass,
    label: 'Curated Packages',
    sub: 'Each itinerary is hand-built by guides who actually know the country.',
  },
  {
    Icon: MapPin,
    label: 'Ideas For Sharing',
    sub: 'Field journals, photo prompts, and stories you can bring home.',
  },
  {
    Icon: Gem,
    label: 'Exclusive Access',
    sub: 'Private conservancies, dawn drives, and tables you won’t find on Google.',
  },
  {
    Icon: Calendar,
    label: 'Customized Tour',
    sub: 'Slow it down, speed it up, swap the lodge — the route is yours.',
  },
];

export function Reasons() {
  return (
    <section id="reasons" className="section reasons">
      <div className="container">
        <div className="reasons-head">
          <Eyebrow>Why travel with us</Eyebrow>
          <DisplayHeadline align="center" className="reasons-headline">
            {'Reasons To Travel\nWith Us'}
          </DisplayHeadline>
        </div>

        <div className="hairline" />

        <div className="reasons-grid">
          {REASONS.map(({ Icon, label, sub }, i) => (
            <motion.div
              key={label}
              className="reasons-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="reasons-icon">
                <Icon size={22} strokeWidth={1.4} />
              </div>
              <div className="reasons-number">0{i + 1}</div>
              <h3 className="reasons-label">{label}</h3>
              <p className="reasons-sub">{sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="hairline" />
      </div>

      <style>{`
        .reasons {
          background: var(--bg);
        }
        .reasons-head {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          margin-bottom: 72px;
        }
        .reasons-headline {
          font-size: clamp(2.5rem, 8vw, 6.5rem);
          text-align: center;
        }
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding: 64px 0;
        }
        .reasons-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding-right: 24px;
          border-right: 1px solid var(--hair);
        }
        .reasons-col:last-child { border-right: 0; padding-right: 0; }
        .reasons-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--hair);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-burnt);
        }
        .reasons-number {
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--dim);
        }
        .reasons-label {
          font-family: var(--font-display);
          font-size: 1.8rem;
          line-height: 1;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          margin: 4px 0 0;
        }
        .reasons-sub {
          font-size: 14px;
          line-height: 1.6;
          color: var(--dim);
          margin: 0;
          max-width: 28ch;
        }
        @media (max-width: 900px) {
          .reasons-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
          .reasons-col {
            border-right: 0;
            padding: 24px 0;
            border-bottom: 1px solid var(--hair);
          }
          .reasons-col:nth-last-child(-n+2) { border-bottom: 0; }
        }
        @media (max-width: 540px) {
          .reasons-grid {
            grid-template-columns: 1fr;
          }
          .reasons-col:last-child { border-bottom: 0; }
        }
      `}</style>
    </section>
  );
}
