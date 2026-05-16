import { motion } from 'framer-motion';
import { Pill } from './Pill';

type EditorialCardProps = {
  src: string;
  alt: string;
  caption: string;
  title: string;
  cta?: string;
  aspect?: string;
};

export function EditorialCard({
  src,
  alt,
  caption,
  title,
  cta = 'Learn More',
  aspect = '4 / 5',
}: EditorialCardProps) {
  return (
    <motion.article
      className="ed-card"
      style={{ aspectRatio: aspect }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <img src={src} alt={alt} loading="lazy" />
      <div className="ed-card-overlay">
        <div className="ed-card-cap">{caption}</div>
        <h3 className="ed-card-title">{title}</h3>
        <Pill variant="outline" onPhoto>
          {cta}
        </Pill>
      </div>
    </motion.article>
  );
}
