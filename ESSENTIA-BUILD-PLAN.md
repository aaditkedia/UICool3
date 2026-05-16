# BUILD PLAN — "Essentia Safari" editorial travel landing site

> **For:** Claude Code. Work through this **phase by phase, top to bottom.** Each phase has
> an **acceptance gate** — do not start the next phase until the current one passes. Commit
> at the end of every phase.
>
> **Reference file in this repo (read it first):**
> - `essentia-safari-spec.md` — design system, color/type tokens, per-section breakdown, and
>   the code patterns for every effect. **Source of truth for *what it looks like* and
>   *how the effects behave*.**
>
> This plan is the source of truth for **architecture, file layout, and sequencing.**

---

## 0. Goal & scope

Build a clean, editorial, photo-first **single-page landing site** for **Essentia Safari**,
a Tanzanian safari travel company. **7 sections** in vertical scroll: hero → brand intro →
reasons to travel → accommodations → get inspired → community impact → footer.

This is a **content site**, not an experience site. **No WebGL. No 3D.** The brand reads
premium-magazine, not Awwwards-experimental. Heavy 3D would be wrong here.

**Non-goals:** CMS, booking engine, auth, multi-page routing, dashboard, account flows.
One page. Static. Anchor-scroll to sections from the nav.

---

## 1. Stack (locked — do not substitute)

```bash
npm create vite@latest . -- --template react-ts
npm i framer-motion gsap @studio-freight/lenis split-type
npm i lucide-react
```

| Concern | Library |
|---|---|
| Smooth scroll | `@studio-freight/lenis` |
| Scroll triggers + image parallax + count-up | `gsap` + `ScrollTrigger` |
| Component-level animation (hover, viewport reveals) | `framer-motion` |
| Line-by-line headline reveals | `split-type` |
| Line icons | `lucide-react` |

Node 18+. Pin versions in `package.json` after install. **Do not add three.js/@react-three/*.**
If you find yourself reaching for it, stop — re-read the spec.

---

## 2. Final file structure

```
src/
  main.tsx
  App.tsx
  styles/
    global.css                 # tokens, base type, layout primitives, grain overlay
    nav.css
    footer.css
  lib/
    smoothScroll.ts             # Lenis + GSAP ticker wiring
    useNavScrollState.ts        # toggle .frosted on nav after hero
  components/
    nav/Nav.tsx
    sections/Hero.tsx           # §3-1: full-bleed lion + stamped headline
    sections/BrandIntro.tsx     # §3-2: ESSENTIA SAFARI + 3-col editorial intro
    sections/Reasons.tsx        # §3-3: REASONS TO TRAVEL WITH US + 4 icon cols
    sections/Accommodations.tsx # §3-4: OUR FAVORITE ACCOMMODATIONS + 2-up photo grid
    sections/GetInspired.tsx    # §3-5: stacked GET / INSPIRED + 2 editorial cards
    sections/CommunityImpact.tsx# §3-6: 3 big stats with count-up + 2 thumb cards
    sections/Footer.tsx         # §3-7: brand + link columns + newsletter
    ui/
      Pill.tsx                   # primary (filled burnt-orange) + outline variants
      Eyebrow.tsx                # uppercase tracked label with hairline
      DisplayHeadline.tsx        # the giant all-caps headline w/ SplitType reveal
      EditorialCard.tsx          # photo card with bottom-overlay caption + pill
      Stat.tsx                   # one community-impact number with count-up
      GrainOverlay.tsx           # fixed paper-grain layer
public/
  images/
    hero-lion.jpg
    lion-cub.jpg
    accommodation-1.jpg accommodation-2.jpg
    milky-way.jpg maasai.jpg
    impact-1.jpg impact-2.jpg
    favicon.svg
```

---

## 3. Core contracts

**Section component contract** — every `sections/*.tsx` exports a component that:
- Renders an `<section id="...">` with consistent vertical rhythm (`padding-block: 120–160px`)
- Uses the `DisplayHeadline` component for its giant all-caps title (this is the editorial
  signature — don't bypass it with raw `<h1>` styles per section)
- Wraps in-view content in framer-motion `whileInView` reveals where appropriate

**DisplayHeadline** — the most important component on the site. It:
- Takes `children` (string)
- Sets all-caps, font: Anton, `font-weight: 800`, tight letter-spacing, line-height ~`0.95`
- Splits into lines with `SplitType` and wraps each line in a `overflow:hidden` mask
- Animates each line's inner span from `yPercent: 110` → `0`, `duration: 1.1`, `ease: 'expo.out'`,
  `stagger: 0.12`, triggered by ScrollTrigger at `start: 'top 80%'`
- Re-splits and refreshes triggers on resize (debounced) — important, line-counts change

**Pill** — `<Pill variant="primary" | "outline">{children}</Pill>`. Primary = burnt-orange filled,
white text. Outline = transparent with dark thin border. Both have `whileHover={{ y: -2 }}`,
uppercase tracked labels, optional trailing arrow icon.

**Nav state** — `useNavScrollState`: transparent over hero, `frosted` (white blur + thin hairline
border) once the hero leaves the viewport. Pure GSAP `ScrollTrigger.create({ trigger:'.hero',
start:'bottom top', onEnter, onLeaveBack })`.

---

## 4. Phases

### Phase 0 — Scaffold ⛳
- [ ] Vite + React + TS project, deps installed, `npm run dev` works.
- [ ] Folder structure from §2 created.
- [ ] Fonts loaded via Google Fonts: **Anton** (display), **Inter** (body, weights 400/500/600/700).
- [ ] Lenis + GSAP wired in `lib/smoothScroll.ts`, initialized once in `App.tsx`.
- [ ] All 7 section files exist and render a placeholder block.
- [ ] Off-white page background (`--bg: #FBFAF6`) applied via CSS variable.
- **Gate:** site scrolls smoothly; fonts render correctly; placeholders visible.

### Phase 1 — Design system + nav + footer + grain 🎨
- [ ] `global.css`: port every token from `essentia-safari-spec.md` §2 (colors, font sizes,
      spacing, shadow values).
- [ ] `Pill`, `Eyebrow`, `DisplayHeadline`, `GrainOverlay` primitives.
- [ ] `Nav.tsx`: brand wordmark left, center link cluster (Home · Tours · Accommodations ·
      About · Contact), `Inquire` burnt-orange pill right. Transparent over hero, `.frosted`
      after. Mobile: hamburger that opens a full-screen overlay menu.
- [ ] `Footer.tsx`: brand block + 3–4 link columns + newsletter `<input>` + social row +
      copyright strip. Thin top divider.
- [ ] `GrainOverlay` fixed at `z: 90`, opacity 0.04, mix-blend-mode multiply.
- [ ] Test the `DisplayHeadline` reveal in isolation on a stub page — line clip-up should
      feel snappy and clean.
- **Gate:** open the site, see a styled nav, a styled footer with grain overlay, and a
      headline reveal that demonstrably works. Screenshot it.

### Phase 2 — Hero 🦁
- [ ] **§3-1 Hero**: full-bleed `<img>` of a lion walking through grass, with subtle
      `yPercent: 20` parallax on scroll via GSAP.
- [ ] Centered stamped overlay: small eyebrow → giant `ULTIMATE ADVENTURE` (2 lines, use
      `DisplayHeadline`) → 1-line italic subtitle → primary `Book Now` pill.
- [ ] Subtle dark gradient under the text for contrast (`linear-gradient(180deg, transparent,
      rgba(0,0,0,.35))` only at the bottom 40%).
- [ ] Nav transitions from transparent → frosted as hero exits.
- **Gate:** hero hits like a magazine cover. Photo parallax works on real scroll, not just
      animation preview.

### Phase 3 — Editorial sections (most of the site) 📰
Do these in this order — each is self-contained:
- [ ] **§3-2 BrandIntro** — 3-column grid below a centered `ESSENTIA SAFARI` headline. Left
      column: eyebrow + short body. Center column: portrait lion-cub photo. Right column:
      welcome paragraph. Stack to 1 column on mobile.
- [ ] **§3-4 Accommodations** — `OUR FAVORITE ACCOMMODATIONS` headline + 2 portrait-aspect
      photo cards side by side with caption labels beneath. Cards lift on hover via
      framer (`whileHover={{ y: -8 }}`) with a slow image zoom (1.04).
- [ ] **§3-5 GetInspired** — split layout: stacked left-aligned `GET` / `INSPIRED` huge
      headline, right column is 2 stacked `EditorialCard`s (Milky Way "Meet The Moon",
      Maasai portrait). Each card has the gradient overlay + outline pill.
- [ ] **§3-3 Reasons** — `REASONS TO TRAVEL WITH US` headline + 4-column row of icon + label +
      sub-line. Use `lucide-react` icons (Compass, MapPin, Gem, Calendar). Hairline divider
      above and below the strip.
- [ ] **§3-6 CommunityImpact** — small centered section label, then 3 big stats in a row
      (`3+` Countries · `2K+` Wonderful Clients · `20+` Years of Experience). Use the
      `CountUp` pattern from the spec when the section enters view. To the right of the stats,
      stack 2 small thumb photos.
- **Gate:** scroll the full site top to bottom. Every section has real content, hierarchies
      read, reveals fire once, and nothing feels templated.

### Phase 4 — Polish 🪶
- [ ] All photos `loading="lazy"` except hero. Preload hero in `<head>`.
- [ ] Verify line-clip reveals on **every** `DisplayHeadline` (all 6 sections have one).
- [ ] Verify framer-motion `whileInView` reveals on body paras, cards, stats (with `once: true`,
      `margin: '-15%'`).
- [ ] Hairline section dividers where the spec calls for them.
- [ ] Hover states: cards lift, pills nudge, image zooms subtle.
- [ ] **Anchor scroll**: nav links jump via `lenis.scrollTo('#section-id', { duration: 1.2 })`.
- [ ] **Reduced motion**: if `prefers-reduced-motion`, disable Lenis smoothing, disable
      parallax, replace reveal animations with simple `opacity: 0 → 1` fade. Content still
      fully accessible.
- [ ] **Mobile (≤768px)**: stack everything to one column, cap display headlines at
      `clamp(2.2rem, 11vw, 4rem)`, kill hero parallax, GetInspired stacks headline above cards.
- **Gate:** test on a phone or via Chrome's device toolbar. Site reads beautifully at 375px wide.

### Phase 5 — QA / Definition of Done ✅
- [ ] All 7 sections render and look like the spec.
- [ ] Nav frosted state engages exactly when hero exits.
- [ ] All display headlines have working clip-up reveals.
- [ ] Stats count up from 0 when in view.
- [ ] Hero photo parallaxes on scroll.
- [ ] Lighthouse perf ≥ 95 desktop, ≥ 85 mobile.
- [ ] No console errors. No layout shift (CLS ≈ 0).
- [ ] `npm run build` succeeds; deployed (Vercel/Netlify) and live.

---

## 5. Gotchas for the agent

- **No WebGL.** If a request seems to call for three.js, you're misreading the brand.
  The site is editorial photo + type. Keep it that way.
- **Display headline reveal is the signature.** Every section's headline gets clip-up
  treatment via `DisplayHeadline`. Don't substitute a simple fade — it looks generic.
- **Photo sourcing.** Use Unsplash (free, attribution optional) for all photos. Suggested
  search terms are in the spec §8. Don't generate AI images — they'll look uncanny next to
  the real photography aesthetic of the brand.
- **One accent color only.** Burnt orange (`#C0481A`). Don't introduce a second accent.
  Whitespace and photography do the heavy visual lifting.
- **`SplitType` + resize.** SplitType measures lines at mount. If you don't re-split on
  resize, headlines break when the viewport changes. Debounce-resplit + `ScrollTrigger.refresh()`.
- **`document.fonts.ready` before SplitType.** Wait for Anton to load or line breaks will be wrong.
- **Generous vertical rhythm.** `120–160px` between sections is not optional — it's why the
  site reads premium. Don't compress to save scroll length.
- **Don't add a hero video.** TikTok-style sites often expect one; this brand wouldn't have
  one. Keep the hero a still photo with parallax.
- **The TikTok captions in the source video are NOT part of the site.** "Wait for it…",
  "What do you think?", "Did I cook?", "Comment 'Build'" — these are ad framing. Ignore.
- **Brand name** is **Essentia Safari** (one word "Essentia"). Don't typo it as "Essential".
- **No browser storage** anywhere — not needed.

---

## 6. Suggested commit sequence

`chore: scaffold` →
`feat: design system + nav + footer + grain` →
`feat: hero with parallax + display reveal` →
`feat: brand intro section` →
`feat: accommodations section` →
`feat: get inspired section` →
`feat: reasons + community impact sections` →
`polish: reveals + reduced motion + mobile` →
`chore: qa + deploy`.

---

## 7. Stretch goals (after Definition of Done)

- **Tour grid page** (`/tours`) listing safari packages, each linking to a detail page.
  Detail page: full-bleed hero, day-by-day itinerary, pricing card, inquiry form.
- **Booking inquiry modal**: pill in nav opens a framer-motion overlay with a multi-step form
  (party size, dates, interests, contact).
- **Image lightbox** for accommodation cards.
- **CMS plug**: pull tours/photos from a headless CMS (Sanity/Contentful) so the agency can
  update without redeploying.
- **i18n**: English/Swahili toggle in nav.
