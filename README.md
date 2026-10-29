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

- Clicking a project card opens its **case-study page** at `#/project/<slug>`
  (hero, client/role/year meta, overview, sections, gallery — all editable
  per project in the `projects` block). If a project's `external` field has a
  URL (e.g. a Behance case study), the card opens that link in a new tab
  instead.
- Project covers live in `src/assets/` (imported at the top of `src/App.jsx`
  and set as each project's `image` — used as the card cover and the
  case-study hero). Add more screenshots per project via `gallery`.
- Each project has a `category` (e.g. "Product Design", "Branding &
  Illustration") shown in the filter tabs above the grid. "All" plus one tab
  per unique category is built automatically — add or rename a category and
  the tabs update themselves.
- The **About page** (nav link, or `#/about` in the URL) lives in the same
  ✏️ block: `aboutIntro`, `experience`, `services` (pricing plans) and `faqs`.
- The **Contact page** (nav link, or `#/contact`) shows "Let's collaborate
  today!" with a form that opens a pre-filled email on submit (no backend —
  swap `handleSubmit` in `src/App.jsx` for a real endpoint later), your
  `site.email`, and the links in `socials` (X / LinkedIn / Dribbble — replace
  the placeholder handles).
- Both sub-pages use a tiny hash router — no router library. The sidebar's
  stripes texture, dot grid, CTA particles and the giant CONTACT word are
  shared across all three views, mirroring the inspiration site.
- Colours and shared sizes live in `:root` variables in `src/index.css`.

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
