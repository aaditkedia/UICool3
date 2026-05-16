import { motion } from 'framer-motion';
import { DisplayHeadline } from '../ui/DisplayHeadline';
import { Eyebrow } from '../ui/Eyebrow';
import { EditorialCard } from '../ui/EditorialCard';

export function GetInspired() {
  return (
    <section id="get-inspired" className="section get-inspired">
      <div className="container">
        <div className="gi-grid">
          <div className="gi-headline-col">
            <Eyebrow>Field stories</Eyebrow>
            <DisplayHeadline align="left" className="gi-headline">
              {'Get\nInspired'}
            </DisplayHeadline>
            <p className="body-para gi-blurb">
              Quiet dispatches from camp — the moon on a salt pan, an elder's
              song before dinner, a leopard at 03:40. Read before you go, or
              long after you're home.
            </p>
          </div>

          <div className="gi-cards-col">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <EditorialCard
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1200&q=80"
                alt="Milky Way arching over silhouetted desert plants"
                caption="Astro · Tanzania"
                title="Meet The Moon"
                aspect="3 / 2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <EditorialCard
                src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=80"
                alt="Maasai woman holding a child, both wrapped in red shukas"
                caption="Maasai · Loita Plains"
                title="The Long Walk Home"
                aspect="3 / 2"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .get-inspired { background: var(--bg); }
        .gi-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 72px;
          align-items: start;
        }
        .gi-headline-col {
          position: sticky;
          top: 96px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .gi-headline {
          font-size: clamp(4rem, 14vw, 12rem);
          line-height: 0.88;
        }
        .gi-blurb {
          margin-top: 12px;
          max-width: 34ch;
        }
        .gi-cards-col {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        @media (max-width: 900px) {
          .gi-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .gi-headline-col {
            position: static;
          }
          .gi-headline {
            font-size: clamp(3rem, 16vw, 6rem);
          }
        }
      `}</style>
    </section>
  );
}
