# Website Recreation Spec — "Essentia Safari" (editorial safari travel landing page)

> Reverse-engineered from a ~20s TikTok-style screen-recording. Format: an agency/freelance
> dev's "comment what I should build next" reel — intercut shots of a young developer in a
> meeting room with an ultrawide monitor + close-ups of the live site. The TikTok overlay
> captions ("Wait for it…", "What do you think?", "Did I cook?", "Comment 'Build' for premium
> Website") are NOT part of the site; they're ad framing. Excluded from rebuild.
>
> The capture is filmed off a curved monitor at a slight angle, so exact colors, fonts, and
> body copy can't be pixel-confirmed. Treat values below as best-reads; the structure is solid.

---

## 1. What this site actually is

A **single-page editorial landing site** for a **Tanzanian safari travel company called
"Essentia Safari" (sometimes "Essentia Safari Company")**. It's the visual opposite of a
SaaS site: **photography-first, generous whitespace, large condensed sans-serif display type,
warm earth-tone palette, simple grid sections.** Think Awwwards "Honorable Mention" travel
site or Squarespace's Brine template upgraded.

Sections cycle through: a full-bleed lion hero with overlay headline → an "Essentia Safari"
brand intro with body copy and a portrait of a lion cub → "Reasons to Travel With Us" 4-icon
strip → "Our Favorite Accommodations" 2-up image grid → "Get Inspired" editorial cards (Milky
Way / Maasai people / dunes) → "Community Impact" 3-stat row (3+, 2k+, 20+) → footer.

It looks **handmade and crafted** rather than templated — image crops are confident, the
display type is heavily condensed and bold, and there's a strong sense of editorial layout.

---

## 2. Design system

### Color
| Token | Approx value | Use |
|---|---|---|
| `--bg` | `#FBFAF6` (off-white) | every section background |
| `--ink` | `#1A1714` | headlines, body text |
| `--dim` | `rgba(26,23,20,.6)` | secondary copy |
| `--accent-burnt` | `#C0481A` (burnt orange / safari pill) | primary CTA pill, accents |
| `--accent-burnt-dark` | `#8C3010` | hover state |
| `--earth-tan` | `#E8DAC4` | section dividers, soft tints |
| `--card-warm` | `#F1ECE0` | warm card background |
| `--shadow` | `rgba(40,28,18,.10)` | soft drop shadows on cards |

Strong stylistic note: the site is **predominantly very bright (off-white) with full-bleed
photography for hero impact, not dark mode.** This is the opposite of the previous two sites.

### Type
- **Display headline:** a **bold condensed sans-serif** ("ESSENTIA SAFARI", "ULTIMATE
  ADVENTURE", "REASONS TO TRAVEL WITH US", "OUR FAVORITE ACCOMMODATIONS", "GET INSPIRED"),
  all-caps, very tight letter-spacing (~`-0.01em`), `font-weight: 800–900`, heavy condensed
  cut. Looks like **Anton**, **Bebas Neue**, **Druk Wide Bold**, or **Boldonse** (a
  recent Google Fonts addition). **Free choice for rebuild: Anton or Bebas Neue.**
- **Body text:** a clean humanist sans, ~`15–16px`, `font-weight: 400`, comfortable
  line-height `1.6`. Looks like **Inter**, **DM Sans**, or **Manrope**. Free fallback: **Inter**.
- **Small label / eyebrow:** `11–12px`, uppercase, tracked +0.18em, dimmed.
- Optionally an **italic serif** for poetic quotes / one-off accent (the hero subtitle reads
  italicized in some shots) — **Cormorant Garamond Italic** or **Instrument Serif Italic**.

### Layout language
- Editorial grid: container max-width ~`1280–1360px`, generous horizontal padding (`6vw`).
- Headlines are **all-caps, huge, centered or left-aligned**, sit on plenty of whitespace.
- Sections separated by generous vertical rhythm (`120–160px` between blocks).
- Hero is **full-bleed photo with centered overlay text** ("ULTIMATE ADVENTURE" stamped over
  a lion image).
- 4-icon reasons strip with tiny line icons + label + sub-line below.
- 2-up accommodation grid with **portrait-aspect** photo cards, label below.
- "Get Inspired" is a **horizontal 2-card editorial layout** (Milky Way over desert plants;
  Maasai woman + child) with "GET INSPIRED" as a giant left-aligned hero word over the cards
  ("Learn More" pill on each card).
- Community Impact: 3 big numbers in a row with small dotted labels underneath, two
  trailing thumbnails on the right.

### Atmosphere / mood
- **Documentary photo-led**, premium-travel-magazine feel. Like Condé Nast Traveler crossed
  with a portfolio site.
- Subtle drop shadows under cards (`0 30px 60px rgba(40,28,18,.08)`).
- Optional gentle **paper grain** overlay for the warm editorial feel.
- Light **parallax** on hero photo on scroll (image moves slower than the page).

### Buttons & pills
- **Primary pill:** burnt-orange filled, white text, ~`44px` height, ~`100px` border-radius,
  uppercase tracked label, small chevron / right-arrow icon.
- **Outline pill:** transparent with thin dark border, dark text — used as "Learn More" on cards.
- Top-right nav: a small floating dark capsule shape with a **"Inquire" / "Book"** pill button
  in burnt orange — visible across all sections.

### Nav
- Fixed top, very minimal: brand wordmark left (small `Essentia Safari` text or a single
  letter mark), small link cluster center (Home · Tours · Accommodations · About · Contact),
  burnt-orange pill button right (`Inquire` / `Book Now`).
- Top bar is mostly transparent over the hero photo; gains a soft white background blur as
  you scroll past hero.

---

## 3. Section-by-section breakdown

Order reconstructed from the recording (a vertical scroll, no narrative gimmicks):

| # | Section | Key visual | Copy | Notes |
|---|---|---|---|---|
| 1 | **Hero** | Full-bleed photograph: a male lion walking straight at camera through dry savanna grass | Stamped center: small eyebrow ("Tanzania · since 20XX"), then huge condensed **`ULTIMATE`** / **`ADVENTURE`** all-caps; one-line subtitle; small "Book Now" pill | Hero photo has subtle vertical parallax; eyebrow + headline fade in line-by-line |
| 2 | **Brand intro** | Two-column: left = small label "Cultural Heritage" + a short paragraph; center = portrait photo of a **lion cub** holding a leaf; right = welcome paragraph | Massive **`ESSENTIA SAFARI`** display headline above, centered, sits ~`6.5rem`. Tiny eyebrow above headline: "Tanzania's wildlife and trade-class company" (best-read). Body paras lean editorial-magazine | This is the brand statement scene |
| 3 | **Reasons to Travel With Us** | Big centered display headline `REASONS TO TRAVEL WITH US` over a strip of 4 simple line-icon + label columns: (i) Curated Packages (ii) Ideas For Sharing (iii) Exclusive Access (iv) Customized Tour (labels best-read) | Hairline between rows; icons are tiny outlined glyphs (~24×24) | Pure editorial section |
| 4 | **Our Favorite Accommodations** | Bold display headline `OUR FAVORITE ACCOMMODATIONS` centered. Below: 2 large portrait photo cards side by side (a thatched-roof tented camp pool from above; a desert-canopy lounge area) with small captions beneath | Cards lift slightly on hover | Photography is the star |
| 5 | **Get Inspired** | Left column: enormous **`GET`** / **`INSPIRED`** display headline stacked. Right column: 2 horizontal editorial cards — top one a Milky Way over silhouetted desert plants with "Meet The Moon" / "Learn More" pill; bottom one Maasai woman and child in red shukas with "Learn More" pill | Each card has a small caption + outlined pill | Editorial moment |
| 6 | **Community Impact** | Hairline at top with the section label centered. Below: 3 huge numbers in a row — **`3+`** Countries · **`2K+`** Wonderful Clients · **`20+`** Years of Experience. Below that on right side: 2 thumbnail editorial cards (Maasai elder portrait, desert landscape) | Each stat has a tiny dot indicator + small label underneath | Trust-building section |
| 7 | **Footer** | Off-white with thin top divider. Multi-column: brand mark + tagline, columns of links (Tours, Destinations, Company, Legal), small newsletter input, social row, copyright line | — | Calm editorial close |

There is also a **persistent floating "Inquire" pill** in the top-right corner across all
sections (visible in nearly every frame).

---

## 4. Tech stack

```bash
npm create vite@latest essentia-safari -- --template react-ts
cd essentia-safari
npm i framer-motion gsap @studio-freight/lenis split-type
npm i lucide-react             # for the line icons in "Reasons to Travel"
```

No WebGL/three.js needed. This is a **content site, not an experience site.** Heavy 3D would
be wrong for the brand.

| Job | Library |
|---|---|
| Smooth scroll | `@studio-freight/lenis` |
| Scroll-triggered reveals + image parallax | `gsap` + `ScrollTrigger` |
| Component-level animations (hover lift, pill press) | `framer-motion` |
| Line-by-line headline reveals | `split-type` |
| Line icons for the "Reasons" strip | `lucide-react` (or hand-drawn SVGs) |

Plus assets:
- A handful of **high-quality stock safari photos** under permissive licenses (Unsplash works
  perfectly here — Tanzania, Maasai, lions, accommodations, Milky Way).
- 4 simple line icons (compass, map, gem, calendar — or use lucide).
- Display font (**Anton** or **Bebas Neue** from Google Fonts).
- Body font (**Inter** or **DM Sans** from Google Fonts).
- (Optional) a paper-grain PNG overlay for editorial texture.

---

## 5. Core effects — code patterns

### 5.1 Lenis smooth scroll (same pattern as before)
```js
const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(t => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
```

### 5.2 Hero parallax (the lion photo moves slower than the page)
```js
gsap.to('.hero-img', {
  yPercent: 20,
  ease: 'none',
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
});
```

### 5.3 Display headline reveal — line-by-line clip-up
This is the signature reveal for editorial sites: each line of a giant headline rises from
behind a mask. Pair with SplitType.
```js
const split = new SplitType('.display', { types: 'lines' });
split.lines.forEach(line => {
  const inner = document.createElement('span');
  inner.style.display = 'inline-block';
  inner.innerHTML = line.innerHTML;
  line.innerHTML = '';
  line.appendChild(inner);
  line.style.overflow = 'hidden';
});
gsap.from('.display .line > span', {
  yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.12,
  scrollTrigger: { trigger: '.display', start: 'top 80%' }
});
```

### 5.4 Image card hover lift
```jsx
<motion.div
  className="card"
  whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16,1,0.3,1] } }}
>
  <img src={...} />
</motion.div>
```

### 5.5 Numbers count-up for Community Impact
```jsx
function CountUp({ to, suffix = '+' }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        gsap.fromTo({ v: 0 }, { v: to, duration: 1.6, ease: 'power3.out',
          onUpdate() { setN(Math.round(this.targets()[0].v)); }
        });
      }
    });
    ref.current && io.observe(ref.current);
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}
```

### 5.6 Nav scroll state (transparent → frosted)
```js
ScrollTrigger.create({
  trigger: '.hero', start: 'bottom top',
  onEnter: () => nav.classList.add('frosted'),
  onLeaveBack: () => nav.classList.remove('frosted'),
});
```
```css
.nav.frosted { background: rgba(251,250,246,.8); backdrop-filter: blur(14px); border-bottom: 1px solid rgba(0,0,0,.06); }
```

### 5.7 Editorial card with overlay text on photo (Get Inspired)
```jsx
<article className="ed-card">
  <img src="..." />
  <div className="overlay">
    <div className="cap">Astro · Tanzania</div>
    <h3>Meet The Moon</h3>
    <button className="pill outline">Learn More →</button>
  </div>
</article>
```
```css
.ed-card{ position:relative; border-radius:14px; overflow:hidden; aspect-ratio: 4/5; }
.ed-card img{ width:100%; height:100%; object-fit:cover; transition: transform .8s ease; }
.ed-card:hover img{ transform:scale(1.04); }
.ed-card .overlay{
  position:absolute; left:0; right:0; bottom:0; padding:24px;
  background: linear-gradient(180deg, transparent, rgba(0,0,0,.55));
  color:#fff;
}
```

### 5.8 Paper grain (editorial texture)
```css
.grain{
  position: fixed; inset: 0; pointer-events: none; z-index: 90;
  opacity: 0.04; mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='.9' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}
```

---

## 6. Build order

1. **Scaffold + design system + nav + footer.** Tokens, Anton + Inter fonts, off-white bg,
   nav with frosted state, footer columns. Site looks intentional with empty sections.
2. **Section 1 — Hero.** Full-bleed lion photo, centered all-caps display headline reveal,
   subtitle, primary pill. Add parallax on the photo. This sells the brand immediately.
3. **Section 2 — Brand intro (`ESSENTIA SAFARI`).** 3-column editorial layout with display
   headline and lion-cub portrait.
4. **Section 4 — Accommodations.** Display headline + 2-up portrait photo grid.
5. **Section 5 — Get Inspired.** Big stacked left headline + 2 editorial cards with overlays.
6. **Section 3 — Reasons to Travel** + **Section 6 — Community Impact** (stats with count-up).
7. **Reveals + parallax + grain overlay polish.** Wire SplitType reveals on every display
   headline. Hairline dividers. Hover states.
8. **Reduced motion + mobile + performance.**

---

## 7. Mobile

- Stack everything to single column.
- Display headlines remain large but cap at `clamp(2.2rem, 11vw, 4rem)` so they don't overflow.
- Get Inspired's stacked headline becomes a horizontal headline above the cards.
- Disable hero parallax.

---

## 8. Asset checklist
- [ ] Hero lion photo (landscape, lion centered, golden grass)
- [ ] Lion-cub portrait (vertical, eating leaves)
- [ ] 4 line icons (compass / map-pin / gem / calendar) — or use lucide-react
- [ ] 2 accommodation photos (vertical portrait crop, premium tented camps)
- [ ] Milky Way over desert plants photo
- [ ] Maasai portrait photo (with child)
- [ ] 2 small thumb photos for Community Impact (Maasai elder, desert landscape)
- [ ] Fonts: **Anton** + **Inter** (Google Fonts, no install needed)
- [ ] (Optional) paper-grain SVG/PNG

All photos can be sourced from Unsplash with appropriate credit. Search terms: "Tanzania
safari", "Maasai", "lion", "tented camp", "Milky Way desert", "Maasai woman".

---

## 9. Performance notes
- All hero / large photos: use `loading="lazy"` everywhere except the very first hero image.
- Serve images as compressed AVIF/WebP via Vite's image plugin or hand-export.
- This site has no WebGL — should hit Lighthouse perf ≥ 95 on desktop easily.

---

## 10. The five things that make this look

1. **Heavily condensed bold all-caps display headlines** (`ULTIMATE ADVENTURE`,
   `ESSENTIA SAFARI`, `GET INSPIRED`) sitting on plenty of off-white whitespace.
2. **Full-bleed documentary photography** as the structural element of every section.
3. **Burnt-orange "Inquire" pill** as the single accent color in a near-monochrome palette.
4. **Line-by-line headline clip-up reveals** on scroll — the editorial signature.
5. **Generous vertical rhythm** between sections (`120–160px`) so the layout breathes.
