# Helen — Portfolio

A single-page portfolio built with **React + Vite** and plain CSS (no UI libraries).
Split layout inspired by modern designer portfolio sites: a sticky intro column on
the left, a scrolling two-column project grid on the right.

## Run it

```bash
npm run dev
```

Then open the printed URL (usually http://localhost:5173).

Other scripts:

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Edit your content

Everything personal lives in one block at the top of `src/App.jsx`
(`site`, `skills`, `testimonial`, `projects`) — name, role, headline, email,
skills, testimonial and project entries.

- Clicking a project card opens its **case-study page** at `#/project/<slug>`:
  a `← All projects` link, an eyebrow (the project's `title` descriptor), the
  project name and year, the hero image, an **Overview**, an optional **Key
  Highlights** list, a Role / Tools / Focus / Link meta row, optional
  `sections` and `gallery` blocks, and a "Next project" link.
- If a project's `external` field has a URL (e.g. a Behance case study), the
  card opens that link in a new tab instead — that project gets no case-study
  page, and "Next project" only cycles through projects that have one.
  Eight projects currently link out to Behance (Xmint, Easy migrate, Tifi,
  Homework AI, Breeze, Storm, Runway Fashion, Reclaim); `ration`,
  `servamarket` and `unwind` use their own case-study pages.
- The card shows the project **name** (`client`) large with its **descriptor**
  (`title`) underneath — e.g. "Movement Labs / WEB 3 Explorer".
- Project covers live in `src/assets/` (imported at the top of `src/App.jsx`
  and set as each project's `image` — used as the card cover and the
  case-study hero). Add more screenshots per project via `gallery`.
- `year` / `role` / `tools` / `focus` fill the case-study header and meta row,
  and `highlights` is the bullet list under "Key Highlights" — all optional,
  and empty values are simply left out.
- The sidebar's **Kind words** slider reads the `testimonials` array — one
  entry per quote (`quote`, `author`, `role`, plus optional `avatar` / `logo`
  images imported from `src/assets/`, which render as the overlapping avatar
  pair; until you add them the two circles fall back to initials). The card
  advances on its own every 7s (`SLIDE_MS`), the bar on its top edge shows one
  segment per quote, and clicking the card (or pressing Enter/Space) skips
  ahead. Add or remove entries and the segments update themselves.
- Each project has a `category` (e.g. "Product Design", "Branding &
  Illustration") shown in the filter tabs above the grid. "All" plus one tab
  per unique category is built automatically — add or rename a category and
  the tabs update themselves.
- The **About page** (nav link, or `#/about` in the URL) lives in the same
  ✏️ block: `aboutIntro`, `experience`, `services` (pricing plans) and `faqs`.
- The **Contact page** (nav link, or `#/contact`) shows "Let's collaborate
  today!" with a form that opens a pre-filled email on submit (no backend —
  swap `handleSubmit` in `src/App.jsx` for a real endpoint later), your
  `site.email`, and the links in `socials` (LinkedIn + Behance).
- Both sub-pages use a tiny hash router — no router library. The dot grid,
  CTA particles and the giant CONTACT word are shared across all three
  views, mirroring the inspiration site.
- Colours and shared sizes live in `:root` variables in `src/index.css`
  (see **Themes, glow and the cursor eyes** below).

## Themes, glow and the cursor eyes

Three themes ship with the site, switched from the palette pill in the nav
(next to the clock): **Paper** (the warm cream default), **Blossom** (soft
rose) and **Dusk** (night). The choice is saved to `localStorage`
(`helen-portfolio-theme`) and applied to `<html data-theme="…">` by a tiny
inline script in `index.html` before the first paint, so there is no flash;
first-time visitors get Dusk automatically when their OS is in dark mode.

Every colour the page paints is a token in `src/index.css`:

| Token | Used for |
| --- | --- |
| `--bg`, `--surface`, `--field` | page, cards/menus, form fields |
| `--ink`, `--muted`, `--ghost` | text, dim text, faint text |
| `--line`, `--line-strong`, `--border`, `--dots` | dashed rules, hover borders, dot grid |
| `--chip`, `--track` | skill chips, testimonial progress track |
| `--btn-bg`, `--btn-ink`, `--btn-border` | the ink pills (CTA, CV, plan, submit) |
| `--accent`, `--accent-deep` | bright accent, and the readable version for text |
| `--glow-1/2/3`, `--glow-halo`, `--glow-warm-1/2` | the whimsical glow trio |

The accent trio is periwinkle (`--glow-1`), bubblegum (`--glow-2`) and mint
(`--glow-3`). Add a theme by copying a `[data-theme="…"]` block in
`src/index.css` and listing it in the `themes` array in `src/App.jsx` (the
array also holds the swatch colours the menu previews).

**Button hover** — measured off the inspiration site: its "Discuss a project"
pill is a glossy dark bevel whose background simply lightens from
`rgb(8, 8, 8)` to `rgb(54, 54, 54)` on hover. The pills here do exactly that
(`--btn-bg` → `--btn-hover`, with the layered inset bevel in `--btn-shadow`),
plus a single accent-coloured halo (`--glow-halo`) so it still reads as a
glow and one colourless sweep of light passing through the pill (`.btn-discuss::after`).
No gradient, no second colour, no movement. The `:focus-visible` state matches
for keyboard users, and the light sweep is skipped under
`prefers-reduced-motion: reduce` (the colour/shadow change stays).

**Cursor eyes** — `PointerEyes` in `src/App.jsx` renders a pair of eyes that
**only appear while a project card (`.card`) is hovered**: they trail the
pointer, lean into the direction of travel, look where you're heading (pupils
aim from the eye to the pointer) and blink every few seconds. Visibility is
toggled by delegated `pointerover` / `pointerout` on `.card`, and an
`requestAnimationFrame` loop writes transforms straight to the DOM, so it
never re-renders React. Hidden for coarse pointers (touch) and reduced motion.

**Favicon** — `public/favicon.svg` is the cream `H` monogram on the ink tile
(the nav avatar's mark). Replace that file to use your own icon.

## Fonts

The site uses the same typeface family as the inspiration site
(fubara.framer.website), self-hosted in `public/fonts/` so it works offline:

- **Agrandir Regular** — the display font used everywhere (headline, body,
  buttons, card titles and the giant CONTACT word). Weight 400 only, so
  headings are intentionally not bold.
- **Inter** (400/500/600) — fallback family, loaded while Agrandir loads.
- **Geist Mono** — used for the nav clock.

The `@font-face` rules and font variables (`--font-sans`, `--font-mono`) are
in `src/index.css`. The giant CONTACT word is rendered inside a fit-to-width
SVG (`viewBox` matches the word's natural size at font-size 178.92px), filled
with a gradient that fades toward the baseline, over a blurred warm glow —
mirroring the original site's effect.
