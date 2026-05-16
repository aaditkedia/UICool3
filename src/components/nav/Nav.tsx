import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Pill } from '../ui/Pill';
import { useNavScrollState } from '../../lib/useNavScrollState';
import { scrollToSection } from '../../lib/smoothScroll';

const LINKS: { label: string; id: string }[] = [
  { label: 'Home', id: '#hero' },
  { label: 'Tours', id: '#brand-intro' },
  { label: 'Accommodations', id: '#accommodations' },
  { label: 'About', id: '#reasons' },
  { label: 'Contact', id: '#footer' },
];

export function Nav() {
  const frosted = useNavScrollState();
  const [open, setOpen] = useState(false);

  const handleAnchor = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToSection(id), 50);
  };

  return (
    <>
      <header className={`nav ${frosted ? 'frosted' : ''}`}>
        <a
          href="#hero"
          className="nav-brand"
          onClick={(e) => handleAnchor(e, '#hero')}
          aria-label="Essentia Safari home"
        >
          <span className="nav-brand-mark">E</span>
          <span>Essentia Safari</span>
        </a>

        <nav aria-label="Primary">
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a href={l.id} onClick={(e) => handleAnchor(e, l.id)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <Pill variant="primary" arrow onClick={(e) => handleAnchor(e as React.MouseEvent, '#footer')}>
            Inquire
          </Pill>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {open && (
        <div className="nav-overlay" role="dialog" aria-modal="true">
          <button
            type="button"
            className="nav-overlay-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </button>
          <ul className="nav-overlay-links">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a href={l.id} onClick={(e) => handleAnchor(e, l.id)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 'auto' }}>
            <Pill variant="primary" onClick={(e) => handleAnchor(e as React.MouseEvent, '#footer')}>
              Inquire
            </Pill>
          </div>
        </div>
      )}
    </>
  );
}
