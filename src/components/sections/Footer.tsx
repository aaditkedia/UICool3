import { ArrowRight, Instagram, Twitter, Youtube } from 'lucide-react';

const COLS: { title: string; links: string[] }[] = [
  { title: 'Tours', links: ['Serengeti', 'Ngorongoro', 'Tarangire', 'Zanzibar'] },
  { title: 'Destinations', links: ['Tanzania', 'Kenya', 'Botswana', 'Rwanda'] },
  { title: 'Company', links: ['About', 'Journal', 'Careers', 'Press'] },
];

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-name">Essentia Safari</div>
            <p className="footer-brand-tag">
              Curated, low-impact safari journeys across Tanzania — designed
              with local guides, indigenous communities, and the wild itself.
            </p>
          </div>

          {COLS.map((c) => (
            <div className="footer-col" key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#footer">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-news">
            <h4>Field Notes</h4>
            <form
              className="footer-news-form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input type="email" placeholder="your@email.com" aria-label="Email address" />
              <button type="submit" aria-label="Subscribe">
                <ArrowRight size={14} />
              </button>
            </form>
            <div className="footer-socials">
              <a href="#footer" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#footer" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#footer" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Essentia Safari Company · Arusha, Tanzania</span>
          <div>
            <a href="#footer">Privacy</a>
            <a href="#footer">Terms</a>
            <a href="#footer">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
