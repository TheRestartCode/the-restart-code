# The Restart Code — Design System

Reference document for future builds. A new session reading this file should be able to produce a product that looks and feels identical to the site without ever seeing it.

---

## 1. CSS Custom Properties

Defined at `:root` in `css/style.css`. Use these everywhere — never hard-code values.

```css
:root {
  --white: #FFFFFF;
  --off-white: #F8FAFC;
  --slate-blue: #3B5F8A;
  --light-blue: #6B9CC4;
  --near-black: #1A1A2E;
  --font-main: 'DM Sans', sans-serif;
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --radius: 8px;
}
```

---

## 2. Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `--white` | `#FFFFFF` | Primary background on all pages. Dominant. Used for hero sections, card backgrounds, nav background, button fill on dark backgrounds. |
| `--off-white` | `#F8FAFC` | Secondary background only. Used for alternating sections to create subtle contrast (problem strip, featured articles, mission strip, what-we-cover alternates, triGLP honest framing, newsletter what's-inside). Never used for text. |
| `--slate-blue` | `#3B5F8A` | Primary brand colour. All headings (h1–h4), nav logo, primary buttons, nav active state, footer background, CTA strip backgrounds, newsletter strip background, primary CTA strip on triGLP, pill button background (active), filter pill active state, FAQ question text, cover item names, pillar names, card links. |
| `--light-blue` | `#6B9CC4` | Secondary accent. Tags and labels, nav logo tagline, filter pill borders (inactive), filter pill text (inactive), study links, hover states on card links, secondary button border and text, footer tagline. |
| `--near-black` | `#1A1A2E` | All body copy. Problem strip statements, card excerpts, pillar descriptors, hero subheadlines, mission lines. Never used as a background. |

**Opacity usage:** Body copy often rendered at reduced opacity (0.7–0.85) for hierarchy — full opacity reserved for headings and key statements. White text on `--slate-blue` backgrounds uses `rgba(255,255,255,0.X)` for footer secondary text rather than a separate colour token.

---

## 3. Typography

### Font

**DM Sans** via Google Fonts. Load with:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

Include this in the `<head>` of every page. No other typeface is used anywhere on the site.

### Weights

| Weight | Value | Used for |
|---|---|---|
| Regular | 400 | All body copy, card excerpts, descriptors, hero subheadlines |
| Medium | 500 | Nav links, tags/labels, footer nav, footer social links, nav logo tagline |
| SemiBold | 600 | All headings (h1–h4), nav logo name, buttons, problem strip statements, mission lines, pillar names, cover item names, filter pills (active), card links, FAQ questions |

### Heading Scale

All headings use `font-weight: 600` and `color: var(--slate-blue)` unless on a dark background (then white). Line height: `1.2` on headings.

| Element | CSS | Output size |
|---|---|---|
| `h1` | `clamp(2rem, 5vw, 3.25rem)` | 32px → 52px fluid |
| `h2` | `clamp(1.4rem, 3vw, 2rem)` | 22.4px → 32px fluid |
| `h3` | `clamp(1rem, 2vw, 1.35rem)` | 16px → 21.6px fluid |
| `h4` | `1rem` | 16px fixed |

### Body / UI Scale

| Use | Size | Weight | Colour |
|---|---|---|---|
| Hero subheadline | `1.1rem` | 400 | `--near-black` at 0.8 opacity |
| Body / card excerpt | `0.875–0.925rem` | 400 | `--near-black` at 0.7–0.8 opacity |
| Nav links | `0.925rem` | 500 | `--near-black` |
| Button text | `0.975–1.05rem` | 600 | Depends on button variant |
| Tags / labels | `0.72rem` | 500 | `--light-blue`, uppercase, `letter-spacing: 0.06em` |
| Section labels | `0.72rem` | 600 | `--light-blue`, uppercase, `letter-spacing: 0.08em` |
| Footer nav | `0.875rem` | 500 | `rgba(255,255,255,0.8)` |
| Footer disclosure | `0.775rem` | 400 | `rgba(255,255,255,0.45)` |
| Small print | `0.775rem` | 400 | `--near-black` at 0.5 opacity |
| Affiliate note | `0.75rem` | 400 | `--near-black` at 0.5 opacity (or white 0.55 on dark bg) |

---

## 4. Spacing System

| Token | Value | Applied to |
|---|---|---|
| `--space-xs` | `0.5rem` (8px) | Tag margin-bottom, gap between small elements, grid-card-links margin, inline gaps |
| `--space-sm` | `1rem` (16px) | Card internal padding, gap between grid items, margin between form elements, pillar info padding, mission line gap, cover item padding-top |
| `--space-md` | `2rem` (32px) | Section content gaps (hero to sub, sub to CTA), grid gaps (covers, inside, triglp cols), footer grid gap |
| `--space-lg` | `4rem` (64px) | Section top/bottom padding (all sections use `padding: var(--space-lg) 0`), about-hero gap, triglp-hero gap |
| `--radius` | `8px` | All cards, buttons, image wrappers, filter pills use `border-radius: 50px` (pills only) |

**Section padding exception:** On mobile (`max-width: 768px`) all sections reduce to `padding: var(--space-md) 0`.

**Container:** `max-width: 1200px`, `margin: 0 auto`, `padding: 0 var(--space-md)` on left and right.

---

## 5. Component Patterns

### 5.1 Navigation

**Structure:**
```html
<nav class="site-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <span class="nav-logo-name">The Restart Code</span>
      <span class="nav-logo-tagline">Health · Science · No Noise</span>
    </a>
    <button class="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">
      <li><a href="index.html" class="active">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="science.html">Science</a></li>
      <li><a href="newsletter.html">Newsletter</a></li>
      <li><a href="triglp.html" class="nav-pill">triGLP</a></li>
    </ul>
  </div>
</nav>
```

**Visual rules:**
- `position: sticky; top: 0; z-index: 100` — always visible on scroll
- Background: `--white` with `border-bottom: 1px solid rgba(59,95,138,0.1)`
- Logo: name in `--slate-blue` 600 1.1rem, tagline in `--light-blue` 500 0.68rem
- Nav links: `--near-black` 500 0.925rem, hover/active → `--slate-blue`
- triGLP link uses `.nav-pill` class: `background: --slate-blue`, white text, `border-radius: 50px`, padding `0.4rem 1rem`
- Active page: add class `active` to current page link (hard-coded per page)
- Mobile: hamburger (3 spans, 24×2px each, `--slate-blue`) toggles `.is-open` on `.nav-links` and `.is-active` on button. Active burger animates to X via CSS transforms.

### 5.2 Footer

**Structure:**
```html
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <span class="footer-logo">The Restart Code</span>
      <span class="footer-tagline">Health · Science · No Noise</span>
    </div>
    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="science.html">Science</a>
      <a href="newsletter.html">Newsletter</a>
      <a href="triglp.html">triGLP</a>
    </nav>
    <div class="footer-social">
      <span>@therestartcode</span>
      <div class="footer-social-links">
        <a href="#">TikTok</a>
        <a href="#">Instagram</a>
        <a href="#">X</a>
        <a href="#">YouTube</a>
      </div>
    </div>
  </div>
  <div class="footer-divider"></div>
  <div class="footer-bottom">
    <a href="mailto:therestartcode@gmail.com">therestartcode@gmail.com</a>
    <p class="footer-disclosure">This site contains affiliate links. We may earn a commission if you purchase through our link, at no extra cost to you.</p>
  </div>
</footer>
```

**Visual rules:**
- Background: `--slate-blue`, all text white or white with reduced opacity
- `.footer-inner`: 3-column grid (`1.2fr 1fr 1.2fr`), left = brand, centre = nav, right = social
- `.footer-divider`: `height: 1px; background: rgba(255,255,255,0.15)`
- `.footer-disclosure`: 0.775rem, `rgba(255,255,255,0.45)` — mandatory on every page, no exceptions
- On mobile: grid collapses to 1 column, social aligns left

### 5.3 Button

**Variants:**

| Class | Background | Text | Border | Use |
|---|---|---|---|---|
| `.btn-primary` | `--slate-blue` | white | none | Primary CTA, hero primary, newsletter join |
| `.btn-secondary` | transparent | `--light-blue` | `2px solid --light-blue` | Secondary hero CTA; hover fills `--light-blue` |
| `.btn-white` | `--white` | `--slate-blue` | none | On dark (slate-blue) backgrounds |

**Base `.btn` rules:** `font-family: --font-main; font-weight: 600; padding: 0.7rem 1.6rem; border-radius: --radius; transition: opacity 0.18s, transform 0.15s`. Hover: `opacity: 0.86; transform: translateY(-1px)`.

**Size modifier:** `.btn-lg` adds `padding: 0.875rem 2rem; font-size: 1.05rem`.

**Structure:**
```html
<a href="url" class="btn btn-primary btn-lg">Label text</a>
```

Buttons are always `<a>` tags (links), never `<button>` except for the hamburger toggle and FAQ accordion questions.

### 5.4 Card (Article Grid Card)

Used on the Science Hub. Represents one article.

**Structure:**
```html
<article class="grid-card" data-pillar="biohacking">
  <img src="images/filename.jpg" alt="Description" class="grid-card-image">
  <div class="grid-card-content">
    <span class="tag">Pillar Name</span>
    <h3>Article headline</h3>
    <p>One-line excerpt.</p>
    <div class="grid-card-links">
      <a href="#" class="card-link">Read the breakdown →</a>
      <a href="#" class="study-link">View study →</a>
    </div>
  </div>
</article>
```

**Visual rules:**
- `border: 1px solid rgba(59,95,138,0.1)`, `border-radius: --radius`, `overflow: hidden`
- Hover: `box-shadow: 0 4px 20px rgba(59,95,138,0.12); transform: translateY(-2px)`
- Image: `aspect-ratio: 16/9; object-fit: cover`
- `.tag`: 0.72rem, 500, `--light-blue`, uppercase
- `.card-link`: 0.825rem, 600, `--slate-blue`; hover → `--light-blue`
- `.study-link`: 0.78rem, 500, `--light-blue`; hover → `--slate-blue`
- Filtering: `data-pillar` attribute on each card. JS adds `.hidden` (display:none) when filter is active and pillar doesn't match.

### 5.5 Featured Card (Homepage)

Large card spanning full container width, image left, content right.

**Structure:**
```html
<a href="science.html" class="featured-card">
  <img src="images/filename.jpg" alt="Description" class="featured-card-image">
  <div class="featured-card-content">
    <span class="tag">Pillar</span>
    <h3>Headline</h3>
    <p>Excerpt</p>
    <span class="card-link">Read the breakdown →</span>
  </div>
</a>
```

**Visual rules:**
- `display: grid; grid-template-columns: 1fr 1fr` — image fills left, content fills right
- The entire card is an `<a>` tag (block link)
- Image: `min-height: 220px; object-fit: cover; height: 100%`
- Content padding: `var(--space-md)`
- Hover: `box-shadow: 0 6px 24px rgba(59,95,138,0.12); transform: translateY(-2px)`
- On mobile: collapses to single column (image on top)

### 5.6 Tag / Pillar Label

```html
<span class="tag">GLP-1 Science</span>
```

- `font-size: 0.72rem; font-weight: 500; color: --light-blue; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.35rem`
- Always appears above a headline, never standalone
- Never use `--slate-blue` for tags — only `--light-blue`

### 5.7 Section Label

```html
<span class="section-label">This Week's Big Read</span>
```

- Same visual as tag but `letter-spacing: 0.08em` and `font-weight: 600`
- Used as a heading above a content group (not above a single card)

### 5.8 Filter Bar (Science Hub)

```html
<div class="filter-bar">
  <div class="container">
    <div class="filter-pills" role="group" aria-label="Filter articles by topic">
      <button class="filter-pill active" data-filter="all">All</button>
      <button class="filter-pill" data-filter="science">GLP-1 Science</button>
      <button class="filter-pill" data-filter="biohacking">Biohacking</button>
      <button class="filter-pill" data-filter="nutrition">Nutrition</button>
      <button class="filter-pill" data-filter="trends">Wellness Trends</button>
    </div>
  </div>
</div>
```

**Visual rules:**
- Inactive pill: `border: 2px solid --light-blue; color: --slate-blue; background: transparent; border-radius: 50px`
- Active pill (`.active`): `background: --slate-blue; border-color: --slate-blue; color: white`
- `data-filter` value must exactly match `data-pillar` values on cards: `all`, `science`, `biohacking`, `nutrition`, `trends`
- JS in `main.js` handles filtering — no page reload

### 5.9 FAQ Accordion

```html
<div class="faq-list">
  <div class="faq-item">
    <button class="faq-question" aria-expanded="false">
      Question text
      <span class="faq-icon" aria-hidden="true">+</span>
    </button>
    <div class="faq-answer">
      <p>Answer text.</p>
    </div>
  </div>
</div>
```

**Visual rules:**
- `.faq-list`: `border-top: 1px solid rgba(59,95,138,0.1)`
- Each `.faq-item`: `border-bottom: 1px solid rgba(59,95,138,0.1)`
- `.faq-question`: full-width `<button>`, flex row, space-between, `--slate-blue` 600 0.975rem
- `.faq-icon`: `+` character, rotates `45deg` when item is open (becomes ×)
- `.faq-answer`: `display: none` by default; `display: block` when `.faq-item` has class `.open`
- JS: clicking a question closes all items first, then opens the clicked one if it was closed (one open at a time)

### 5.10 Email Form / Input Field

```html
<div class="email-form">
  <input type="email" class="email-input" placeholder="Enter your email address">
  <a href="#beehiiv-signup" class="btn btn-white">Join Free</a>
</div>
```

**Visual rules:**
- `.email-form`: `display: flex; gap: --space-xs; justify-content: center; flex-wrap: wrap`
- `.email-input`: `padding: 0.7rem 1.25rem; border: none; border-radius: --radius; width: 290px; font-family: --font-main; font-size: 0.975rem`
- On dark backgrounds (`--slate-blue`), button is `.btn-white`
- On white backgrounds, button is `.btn-primary`
- On mobile: flex-direction → column, input → 100% width (max 320px)
- `href="#beehiiv-signup"` is a placeholder. Replace globally with BeeHiiv embed URL when ready.

### 5.11 CTA Strip

Full-width coloured section used to drive a single action. Two variants:

**Dark (slate-blue background):**
```html
<section class="newsletter-strip">
  <div class="container">
    <h2>Headline</h2>
    <!-- email form OR button -->
  </div>
</section>
```
- `background: --slate-blue`; `h2` in white; button is `.btn-white`

**Light (off-white background):**
```html
<section class="triglp-cta-strip">
  <div class="container">
    <h2>Headline</h2>
    <p>One compliance-safe line.</p>
    <a href="triglp.html" class="btn btn-primary">CTA →</a>
  </div>
</section>
```
- `background: --off-white`; heading and body in standard colours; button is `.btn-primary`

**Rule:** Every CTA strip has exactly one action. No two CTAs on the same strip.

---

## 6. Layout Rules

### Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md); /* 32px each side */
}
```

### Breakpoints

| Name | Value | Notes |
|---|---|---|
| Desktop | > 1024px | Full layouts as designed |
| Tablet | ≤ 1024px | Some grids reduce columns |
| Mobile | ≤ 768px | All layouts stack to single column; nav hamburger shown |

### Grid Columns at Each Breakpoint

| Component | Desktop | Tablet (≤1024px) | Mobile (≤768px) |
|---|---|---|---|
| Pillars grid | 4 columns | 2 columns | 2 columns |
| Article grid (Science) | 3 columns | 2 columns | 1 column |
| Featured card | 2 columns (image + content) | 2 columns | 1 column (image above) |
| Cards row (homepage) | 2 columns | 2 columns | 1 column |
| About hero inner | 2 columns (text + image) | 2 columns | 1 column |
| Covers grid (About) | 2 columns | 2 columns | 1 column |
| Inside grid (Newsletter) | 3 columns | 3 columns | 1 column |
| triGLP hero | 2 columns (text + image) | 2 columns | 1 column |
| triGLP cols | 3 columns | 2 columns (col 1 spans full) | 1 column |
| Footer inner | 3 columns | 3 columns | 1 column |
| Problem strip | 2 columns | 2 columns | 1 column |

---

## 7. Image Rules

### Aspect Ratios

| Context | Ratio | CSS |
|---|---|---|
| Pillar cards (homepage) | 3:2 | `aspect-ratio: 3 / 2` |
| Article cards (homepage small) | 16:9 | `aspect-ratio: 16 / 9` |
| Science hub grid cards | 16:9 | `aspect-ratio: 16 / 9` |
| About hero image | 4:3 | `aspect-ratio: 4 / 3` on wrapper |
| triGLP hero product | 3:4 (portrait) | `aspect-ratio: 3 / 4; max-height: 500px` |
| triGLP salmon | 4:3 | `aspect-ratio: 4 / 3` |
| Featured card image | fills height | `min-height: 220px; height: 100%` |

### Object Fit

All images use `object-fit: cover`. Never use `object-fit: contain`. Never allow stretching or distortion.

### Border Radius

- Images displayed directly: `border-radius: var(--radius)` (8px)
- Images inside card containers: border radius on the container with `overflow: hidden`, not on the img itself
- `about-research.jpg` uses a wrapper div (`.about-hero-image-wrap`) with `border-radius: --radius; overflow: hidden` — img inside is `width: 100%; height: 100%; object-fit: cover`

### Overlay Patterns

None. This site uses no colour overlays, gradients, or filters on images. Images display clean at natural colour. Pillar names appear below images, not overlaid.

### Image Paths

All images use relative paths from root: `images/filename.ext`. No leading slash. No absolute URLs for local assets.

**Actual image files in `/images/`:**

| Filename | Used on | Notes |
|---|---|---|
| `pillar-biohacking.jpg` | Homepage pillars, featured card, Science card 1 | Ice chunks |
| `pillar-science.jpg` | Homepage pillars, Science card 2, homepage article card | Molecule structure |
| `pillar-nutrition.jpg` | Homepage pillars, Science cards 3 & 7 | Food flat lay |
| `pillar-trends.jpg` | Homepage pillars, Science cards 4 & 8 | B&W man by water |
| `article-sauna.jpg` | Homepage article card, Science card 5 | Sauna stones |
| `article-lab.jpg` | Science card 6 | Petri dish |
| `about-research.jpg` | About hero | Overhead desk |
| `triglp-product.png` | triGLP hero | ORYGN bottle/box — note: `.png` not `.jpg` |
| `triglp.salmon.jpg` | triGLP what-is section | Salmon close-up — note: period in filename |

---

## 8. Page Length Rules

### Constrained to approximately one viewport on desktop

- `index.html` — Homepage
- `about.html` — About
- `newsletter.html` — Newsletter
- `triglp.html` — triGLP conversion page

**Why:** These pages have a single primary goal (hook → newsletter CTA, establish brand, sell newsletter signup, convert to affiliate). Tight = confident. Every section must earn its place. Excessive whitespace or repeated CTAs undermine credibility.

**How this is enforced:** Section padding is `var(--space-lg)` (4rem) top and bottom, not more. No decorative spacer sections. No duplicate CTAs on the same page. Remove any section that doesn't directly serve the conversion goal.

### Exempt from one-viewport rule

- `science.html` — Science Hub. This is a growing content library. It will expand as new articles are added. More cards = better for SEO and brand depth. Padding and layout remain consistent but page length is intentionally unbounded.

---

## 9. Conversion Flow

### Internal link hierarchy

```
index.html (Homepage)
  ├── → newsletter.html (hero CTA "Join the Restart Report")
  ├── → triglp.html (hero CTA "See What We Use")
  ├── → science.html (article cards)
  └── → #beehiiv-signup (newsletter strip)

about.html
  ├── → science.html (CTA strip "Browse the science")
  └── → triglp.html (CTA strip "See what we use")

science.html
  ├── → triglp.html (triGLP CTA strip)
  └── → #beehiiv-signup (newsletter strip)

newsletter.html
  ├── → #beehiiv-signup (hero form + closing strip)
  └── → triglp.html (secondary text link "See what we're currently testing")

triglp.html
  └── → https://restart.orygn.co/ (ONLY external exit; target="_blank" rel="noopener noreferrer")
```

### The single affiliate exit

`https://restart.orygn.co/` appears **only** in `triglp.html`, twice:
1. Hero CTA button (`.btn-primary`)
2. Primary CTA section button (`.btn-white` on dark background)

Both use `target="_blank" rel="noopener noreferrer"`. Both are followed immediately by the affiliate disclosure: *"Affiliate link — we may earn a commission at no extra cost to you."*

No other page links directly to the affiliate URL. All other pages point to `triglp.html` instead.

### BeeHiiv signup

`href="#beehiiv-signup"` is a placeholder across all newsletter forms site-wide. Replace globally with the BeeHiiv embed URL when ready. An `id="beehiiv-signup"` anchor exists on the newsletter strip of each page that contains a signup form (index, science, newsletter).

---

## 10. Brand Voice Rules

### Tone

- **Plain English.** If a sentence needs a glossary, rewrite it.
- **Mechanism-first.** Explain *how* something works before saying it works. Credibility comes from specificity, not enthusiasm.
- **Direct.** Short sentences. Active voice. State the point first, qualify second.
- **Credible but not clinical.** Write for someone intelligent who is not a scientist. Use the scientific term once, then the plain English version.
- **Faceless brand.** No personal story. No "I". No "we went through this ourselves". The brand has no face, no founder, no personal journey.

### Compliance language rules (mandatory — no exceptions)

**Permitted verbs and phrases:**
- "supports"
- "may help"
- "activates" / "supports activation of"
- "according to ORYGN's clinical data..."
- "users may experience..."
- "formulated to support..."

**Banned verbs and phrases (never use):**
- "treats"
- "cures"
- "prevents"
- "proven to"
- "clinically proven"
- "guaranteed"
- "will reduce" / "will cause" (any definitive causal claim)
- Any claim presented as independently verified unless it has been

**Stat attribution rule:** Any numerical claim derived from ORYGN's clinical data must be attributed explicitly: *"According to ORYGN's clinical data..."*. Never present these figures as independently verified by The Restart Code. This applies to all stat references: BMI reduction, body fat percentage, fasting blood glucose reduction.

**Applies to:** Every page, every section, every card excerpt, every headline. Not just triglp.html.

### Words banned for tone reasons

- "amazing" / "incredible" / "revolutionary" / "game-changer"
- "hack" (use "strategy" or name the specific intervention)
- "toxic" (without specific scientific context)
- "heal" / "healing" (too clinical/claim-adjacent)
- "journey" (personal wellness cliché)
- "transform" / "transformation" (hype language)
- "guru" / "expert" (authority posturing)
- any reference to the brand having an MLM structure or multi-level selling

### Affiliate disclosure rule

The following line must appear in the footer of every page without exception:

> *"This site contains affiliate links. We may earn a commission if you purchase through our link, at no extra cost to you."*

The following disclosure must appear directly below every affiliate CTA button:

> *"Affiliate link — we may earn a commission at no extra cost to you."*

---

## 11. Technical Constraints

- **No frameworks.** Pure HTML, CSS, JS only. No React, Vue, Tailwind, Bootstrap, or any npm dependency.
- **No build step.** Files are served as-is. No webpack, Vite, or bundler.
- **No external JS.** Only `js/main.js` (local). Only Google Fonts (external CSS).
- **Three JS behaviours only:** mobile nav toggle, science filter, FAQ accordion. All in `main.js`, all inside `DOMContentLoaded`.
- **Deployment:** Static hosting. Currently on Vercel via GitHub (`TheRestartCode/the-restart-code`, branch `main`). Auto-deploys on push to `main`.
- **Google Fonts load pattern:** Two `preconnect` links + one `stylesheet` link. Include on every page's `<head>`.
