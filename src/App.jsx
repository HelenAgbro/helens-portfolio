import { useEffect, useRef, useState } from "react";
import "./App.css";

/* Project cover images (src/assets) — used on the cards and as the
   case-study heroes */
import xmintImage from "./assets/xmint-product-design.jpg";
import rationImage from "./assets/ration-product-design.jpg";
import servamarketImage from "./assets/servamarket-product-design.jpg";
import easyMigrateImage from "./assets/easy-migrate-product-design.jpg";
import tifiImage from "./assets/tifi-product-design.jpg";
import homeworkAiImage from "./assets/homework-ai-product-design.jpg";
import breezeImage from "./assets/breeze-branding.jpg";
import stormImage from "./assets/storm-branding.jpg";
import runwayFashionImage from "./assets/runway-fashion-branding.jpg";
import unwindImage from "./assets/unwind-branding.jpg";

/* =========================================================================
   ✏️  EDIT YOUR CONTENT HERE
   Your name, role, headline, email, skills, testimonial and projects all
   live in this block — edit it and the whole site updates.
   ========================================================================= */

const site = {
  name: "Helen Agbro",
  role: "Product Designer",
  headline: "I turn complicated products into ones people understand.",
  headlineMuted: "clear, useful products.",
  email: "helenagbro1@gmail.com",
};

const skills = [
  "Web Design",
  "Figma",
  "Copywriting",
  "Graphic Design",
  "Front-end",
  "User Research",
];

const testimonial = {
  quote:
    "Helen consistently delivered top-tier work for us — sharp thinking, fast turnarounds and a real pleasure to collaborate with.",
  author: "Jordan Blake",
  role: "Founder, Northwind Studio",
};

/* ---- About page (shown when you click "About" in the header) ---- */
const aboutIntro =
  "After years of honing my skills through personal projects and collaborations, I've decided to take the leap into freelancing — focusing on design that doesn't just look good, but truly works for the people using it.";

const experience = [
  {
    company: "Ribbon TMS",
    role: "Product Lead & Designer",
    period: "2023 — Now",
  },
  {
    company: "The Consode",
    role: "Senior Product Designer",
    period: "2023 — 2024",
  },
  { company: "Medalla", role: "Product Designer", period: "2022" },
  { company: "CatchUp", role: "Product Designer", period: "2022" },
  { company: "HNG", role: "Product Design Intern", period: "2021" },
];

const services = [
  {
    name: "Website Design",
    tagline: "A quick, sharp website for your business",
    price: "$1000",
    per: "/website",
    featured: false,
    features: [
      "1 custom landing page",
      "Up to 3 revisions included",
      "Full UX audit",
      "Access to free design resources",
    ],
  },
  {
    name: "Product Design",
    tagline: "For a full product design overhaul",
    price: "$3000",
    per: "/project",
    featured: true,
    features: [
      "Full-scale product design",
      "End-to-end product UI design",
      "Dedicated weekly strategy sessions",
      "Personalized design library",
    ],
  },
];

const faqs = [
  {
    q: "What is your typical turnaround time?",
    a: "Most landing pages ship in 2–3 weeks. Larger product work is scoped into weekly sprints after our first call, so you see progress every week.",
  },
  {
    q: "Can you work with my existing brand guidelines?",
    a: "Absolutely — I can design strictly within your existing system, or help evolve it in the places where it falls short.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes. Every package includes revision rounds — the exact number is listed on each plan, and extra rounds can be added anytime.",
  },
  {
    q: "How do you handle communication?",
    a: "A shared channel (Slack or email), a weekly check-in call, and a live preview link you can comment on whenever you like.",
  },
  {
    q: "Can you help with both web and app design?",
    a: "Yes — responsive websites, web apps and native app interfaces are all part of my day-to-day work.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A short brief on your goals, any existing brand assets, and access to the tools your team already uses.",
  },
];

const socials = [
  { label: "X / Twitter", url: "https://x.com/yourhandle" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/yourhandle" },
  { label: "Dribbble", url: "https://dribbble.com/yourhandle" },
];

/* Each project becomes a card — clicking it opens a case-study page at
   #/project/<slug> … unless "external" has a URL (e.g. a Behance case
   study), then the card opens that link in a new tab instead.

   ✏️ Fill in your real case-study content per project:
   - slug       the URL name (lowercase + dashes): #/project/xmint
   - client     the project name shown on the card
   - title      a short one-liner shown under the name (e.g. "Expense-
                tracking app") — currently the category as a placeholder
   - image      the cover from src/assets — shown on the card and as the
                case-study hero
   - year/role  shown in the case-study meta row
   - overview   2–3 sentences about the project (✏️ placeholders below)
   - sections   optional { heading, text } blocks (problem, solution…)
   - gallery    optional extra screenshots: [img1, img2, …]
   - external   e.g. "https://www.behance.net/gallery/…" to link out */
const projects = [
  {
    slug: "xmint",
    client: "Xmint",
    title: "Product design",
    category: "Product Design",
    from: "#1cb5ae",
    to: "#0e6f8c",
    logoTone: "light",
    image: xmintImage,
    external: "",
    year: "",
    role: "Product Designer",
    overview:
      "✏️ Write 2–3 sentences about Xmint — what the project was, your role and the outcome.",
    sections: [],
    gallery: [],
  },
  {
    slug: "ration",
    client: "ration",
    title: "Product design",
    category: "Product Design",
    from: "#f7c900",
    to: "#dd9f00",
    logoTone: "dark",
    image: rationImage,
    external: "",
    year: "",
    role: "Product Designer",
    overview:
      "✏️ Write 2–3 sentences about ration — what the project was, your role and the outcome.",
    sections: [],
    gallery: [],
  },
  {
    slug: "servamarket",
    client: "Servamarket",
    title: "Product design",
    category: "Product Design",
    from: "#1e7a45",
    to: "#0b3b24",
    logoTone: "light",
    image: servamarketImage,
    external: "",
    year: "",
    role: "Product Designer",
    overview:
      "✏️ Write 2–3 sentences about Servamarket — what the project was, your role and the outcome.",
    sections: [],
    gallery: [],
  },
  {
    slug: "easy-migrate",
    client: "Easy migrate",
    title: "Product design",
    category: "Product Design",
    from: "#f4f2ea",
    to: "#cfe0cd",
    logoTone: "dark",
    image: easyMigrateImage,
    external: "",
    year: "",
    role: "Product Designer",
    overview:
      "✏️ Write 2–3 sentences about Easy migrate — what the project was, your role and the outcome.",
    sections: [],
    gallery: [],
  },
  {
    slug: "tifi",
    client: "Tifi",
    title: "Product design",
    category: "Product Design",
    from: "#b08968",
    to: "#4f3823",
    logoTone: "light",
    image: tifiImage,
    external: "",
    year: "",
    role: "Product Designer",
    overview:
      "✏️ Write 2–3 sentences about Tifi — what the project was, your role and the outcome.",
    sections: [],
    gallery: [],
  },
  {
    slug: "homework-ai",
    client: "Homework AI",
    title: "Product design",
    category: "Product Design",
    from: "#2b6cb0",
    to: "#1a365d",
    logoTone: "light",
    image: homeworkAiImage,
    external: "",
    year: "",
    role: "Product Designer",
    overview:
      "✏️ Write 2–3 sentences about Homework AI — what the project was, your role and the outcome.",
    sections: [],
    gallery: [],
  },
  {
    slug: "breeze",
    client: "Breeze",
    title: "Brand identity",
    category: "Branding & Illustration",
    from: "#f7f5ef",
    to: "#dbe6c9",
    logoTone: "dark",
    image: breezeImage,
    external: "",
    year: "",
    role: "Brand Designer",
    overview:
      "✏️ Write 2–3 sentences about Breeze — what the project was, your role and the outcome.",
    sections: [],
    gallery: [],
  },
  {
    slug: "storm",
    client: "Storm",
    title: "Brand identity",
    category: "Branding & Illustration",
    from: "#5a67d8",
    to: "#2c3e8f",
    logoTone: "light",
    image: stormImage,
    external: "",
    year: "",
    role: "Brand Designer",
    overview:
      "✏️ Write 2–3 sentences about Storm — what the project was, your role and the outcome.",
    sections: [],
    gallery: [],
  },
  {
    slug: "runway-fashion",
    client: "Runway Fashion",
    title: "Brand identity",
    category: "Branding & Illustration",
    from: "#d69e2e",
    to: "#7b341e",
    logoTone: "light",
    image: runwayFashionImage,
    external: "",
    year: "",
    role: "Brand Designer",
    overview:
      "✏️ Write 2–3 sentences about Runway Fashion — what the project was, your role and the outcome.",
    sections: [],
    gallery: [],
  },
  {
    slug: "unwind",
    client: "Unwind",
    title: "Brand identity",
    category: "Branding & Illustration",
    from: "#9f7aea",
    to: "#553c9a",
    logoTone: "light",
    image: unwindImage,
    external: "",
    year: "",
    role: "Brand Designer",
    overview:
      "✏️ Write 2–3 sentences about Unwind — what the project was, your role and the outcome.",
    sections: [],
    gallery: [],
  },
];

/* The covers above live in src/assets/ and are imported at the top of this
   file. Add more screens per project by importing them and listing them in
   "gallery". */

/* Tab labels: "All" plus every category used above (built automatically) */
const projectFilters = ["All", ...new Set(projects.map((p) => p.category))];

/* ---- Tiny inline icons (no icon library needed) ---- */

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

/* @@NEXT1@@ */

/* =========================================================================
   Components — you shouldn't need to edit anything below this line.
   ========================================================================= */

/* ---- Reveal-on-scroll: fades content in as it enters the viewport ---- */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ---- Live clock shown at the right of the nav ---- */
function Clock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const label = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  return <span className="clock">{label}</span>;
}

/* ---- Top navigation bar ---- */
function Nav({ current = "home" }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav-left">
        <a href="#top" className="brand" onClick={close}>
          <span className="avatar" aria-hidden="true">
            {site.name.charAt(0)}
          </span>
          {site.name}
        </a>
        <span className="status">
          <span className="status-dot" aria-hidden="true" />
          Currently active
        </span>
      </div>

      <nav className={open ? "nav-links open" : "nav-links"}>
        <a href="#projects" onClick={close}>
          Projects
        </a>
        <a
          href="#/about"
          onClick={close}
          className={current === "about" ? "is-current" : undefined}
        >
          About
        </a>
        <a
          href="#/contact"
          onClick={close}
          className={current === "contact" ? "is-current" : undefined}
        >
          Contact
        </a>
      </nav>

      <div className="nav-right">
        <Clock />
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={open ? "bar open" : "bar"} />
          <span className={open ? "bar open" : "bar"} />
          <span className={open ? "bar open" : "bar"} />
        </button>
      </div>
    </header>
  );
}

/* ---- Sticky left column: intro, skills marquee, testimonial card ---- */
function Sidebar() {
  const half = Math.ceil(skills.length / 2);
  const rowA = skills.slice(0, half);
  const rowB = skills.slice(half).length ? skills.slice(half) : rowA;

  return (
    <aside id="about" className="sidebar">
      <div className="side-block">
        <span className="role-pill">{site.role}</span>
        <h1 className="headline">
          {site.headline} <span className="muted">{site.headlineMuted}</span>
        </h1>
        <span className="open-badge">
          <span className="open-dot" aria-hidden="true" />
          Open to work
        </span>
        <div className="cta-wrap">
          <span className="cta-particles" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <a className="btn-discuss" href={`mailto:${site.email}`}>
            Discuss a project
            <ChatIcon />
          </a>
        </div>
        <div className="dotted" aria-hidden="true" />
      </div>

      <div className="side-block">
        <p className="side-label">Skills</p>
        <div className="skills-marquee">
          <div className="skills-row">
            <div className="skills-track">
              <div className="skills-set">
                {rowA.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
              <div className="skills-set" aria-hidden="true">
                {rowA.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="skills-row">
            <div className="skills-track reverse">
              <div className="skills-set">
                {rowB.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
              <div className="skills-set" aria-hidden="true">
                {rowB.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="side-block">
        <p className="side-label">Kind words</p>
        <figure className="testimonial-card">
          <span className="corner tl" aria-hidden="true" />
          <span className="corner tr" aria-hidden="true" />
          <span className="corner bl" aria-hidden="true" />
          <span className="corner br" aria-hidden="true" />
          <span className="t-num" aria-hidden="true">
            02
          </span>
          <blockquote className="quote">“{testimonial.quote}”</blockquote>
          <figcaption className="quote-author">
            <span className="t-avatar" aria-hidden="true">
              {testimonial.author.charAt(0)}
            </span>
            <span>
              <strong>{testimonial.author}</strong> · {testimonial.role}
            </span>
          </figcaption>
        </figure>
      </div>
    </aside>
  );
}

/* ---- Project cards (right column of the split layout) ---- */
/* ---- Project cards (right column of the split layout). Clicking a card
       opens its case-study page — or the project's external link (e.g.
       Behance) in a new tab when one is set ---- */
function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();
  const tone = project.logoTone === "light" ? "logo-light" : "logo-dark";
  const href = project.external || `#/project/${project.slug}`;

  return (
    <article
      ref={ref}
      className={visible ? "card reveal is-visible" : "card reveal"}
      style={{ transitionDelay: `${(index % 2) * 90}ms` }}
    >
      <a
        className="card-link"
        href={href}
        {...(project.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        <div
          className="card-media"
          style={
            project.image
              ? undefined
              : {
                  background: `linear-gradient(160deg, ${project.from}, ${project.to})`,
                }
          }
        >
          {project.image ? (
            <img
              className="card-media-img"
              src={project.image}
              alt={`${project.client} — ${project.title}`}
            />
          ) : (
            <span className={`card-logo ${tone}`}>{project.client}</span>
          )}
        </div>

        <div className="card-overlay">
          <div className="card-meta">
            <span className="card-client">
              <UsersIcon />
              {project.client}
            </span>
            <h3 className="card-title">{project.title}</h3>
          </div>
          <span className="card-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </div>
      </a>
    </article>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const shown =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div
        className="projects-tabs"
        role="group"
        aria-label="Filter projects by category"
      >
        {projectFilters.map((name) => (
          <button
            key={name}
            type="button"
            className={
              filter === name ? "projects-tab is-active" : "projects-tab"
            }
            aria-pressed={filter === name}
            onClick={() => setFilter(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {shown.map((project, index) => (
          <ProjectCard
            key={`${filter}-${project.slug}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

/* ---- Giant "Contact" word — same treatment as the inspiration site:
   fit-to-width SVG text with a fading gradient fill over a warm glow ---- */
function Contact() {
  const [ref, visible] = useReveal(0.2);

  return (
    <section
      id="contact"
      ref={ref}
      className={visible ? "contact reveal is-visible" : "contact reveal"}
    >
      <p className="contact-kicker">Have an idea in mind?</p>
      <a
        className="contact-link"
        href={`mailto:${site.email}`}
        aria-label={`Email ${site.name} — ${site.email}`}
      >
        <span className="contact-glow" aria-hidden="true" />
        <svg
          className="contact-word-svg"
          viewBox="0 0 751.3138944727713 190"
          aria-hidden="true"
          focusable="false"
        >
          <foreignObject width="100%" height="100%">
            <p className="contact-word">Contact</p>
          </foreignObject>
        </svg>
        <span className="contact-arrow" aria-hidden="true">
          <ArrowIcon />
        </span>
      </a>
      <p className="contact-sub">
        or write to me at <span>{site.email}</span>
      </p>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} {site.name}
      </p>
      <nav className="footer-links">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#top" className="to-top">
        Back to top ↑
      </a>
    </footer>
  );
}

/* ---- Case-study page for a single project ---- */
function ProjectDetail({ project }) {
  const [ref, visible] = useReveal()
  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]
  const tone = project.logoTone === 'light' ? 'logo-light' : 'logo-dark'

  return (
    <article
      ref={ref}
      className={visible ? 'case reveal is-visible' : 'case reveal'}
    >
      <a className="case-back" href="#projects">
        ← All projects
      </a>

      <div
        className="case-hero"
        style={{ background: `linear-gradient(160deg, ${project.from}, ${project.to})` }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.client} — ${project.title}`}
          />
        ) : (
          <span className={`card-logo ${tone}`}>{project.client}</span>
        )}
      </div>

      <div className="case-meta">
        <div>
          <span className="side-label">Client</span>
          <p className="case-meta-value">{project.client}</p>
        </div>
        <div>
          <span className="side-label">Role</span>
          <p className="case-meta-value">{project.role}</p>
        </div>
        <div>
          <span className="side-label">Year</span>
          <p className="case-meta-value">{project.year}</p>
        </div>
        <div>
          <span className="side-label">Type</span>
          <p className="case-meta-value">{project.category}</p>
        </div>
      </div>

      <p className="case-overview">{project.overview}</p>

      {(project.sections || []).map((section) => (
        <section key={section.heading} className="case-section">
          <h2>{section.heading}</h2>
          <p>{section.text}</p>
        </section>
      ))}

      {(project.gallery || []).length > 0 && (
        <div className="case-gallery">
          {project.gallery.map((src, i) => (
            <img key={src} src={src} alt={`${project.client} screenshot ${i + 1}`} />
          ))}
        </div>
      )}

      <a className="case-next" href={`#/project/${next.slug}`}>
        <span>
          <span className="side-label">Next project</span>
          <span className="case-next-title">
            {next.client} — {next.title}
          </span>
        </span>
        <span className="case-next-arrow" aria-hidden="true">
          <ArrowIcon />
        </span>
      </a>
    </article>
  )
}

/* ---- About page: scroll-fill intro, experience, plans, FAQ ---- */

/* Intro statement whose words "fill in" as you scroll (two-tone text
   driven by a --fill CSS variable), like the inspiration site */
function AboutIntro() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--fill", "100%");
      return;
    }
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.9;
      const end = vh * 0.35;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end)),
      );
      el.style.setProperty("--fill", `${Math.round(progress * 100)}%`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <p ref={ref} className="about-intro">
      {aboutIntro}
    </p>
  );
}

function Experience() {
  return (
    <section className="about-block">
      <p className="side-label">Experience</p>
      <ul className="xp-list">
        {experience.map((job) => (
          <li key={job.company} className="xp-row">
            <span className="xp-company">{job.company}</span>
            <span className="xp-role">{job.role}</span>
            <span className="xp-period">{job.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Services() {
  return (
    <section className="about-block">
      <h2 className="about-heading">
        Your vision, my design — plans that work for you.
      </h2>
      <div className="plans-grid">
        {services.map((plan) => (
          <article key={plan.name} className="plan-card">
            {plan.featured && <span className="plan-flag">Most popular</span>}
            <div>
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-tagline">{plan.tagline}</p>
            </div>
            <p className="plan-price">
              {plan.price} <span>{plan.per}</span>
            </p>
            <ul className="plan-features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a
              className="plan-cta"
              href={`mailto:${site.email}?subject=${encodeURIComponent(plan.name)}`}
            >
              Contact me
              <ArrowIcon />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="about-block">
      <h2 className="about-heading">
        Everything you need to know before we start
      </h2>
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>
              {item.q}
              <span className="faq-plus" aria-hidden="true" />
            </summary>
            <p className="faq-answer">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <AboutIntro />
      <Experience />
      <Services />
      <Faq />
    </section>
  );
}

/* ---- Contact page: "Let's collaborate today!" + form, direct
        email and social links (like the inspiration's /contact) ---- */
function ContactPage() {
  /* No backend — submitting opens the visitor's mail app with the
     message pre-filled. Swap for a real endpoint (e.g. Formspree) later. */
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") || "";
    const company = data.get("company") || "";
    const email = data.get("email") || "";
    const message = data.get("message") || "";
    const subject = `Project inquiry from ${name}`;
    const body = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="contact-page">
      <h2 className="contact-page-title">Let&rsquo;s collaborate today!</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="field">
          <span className="field-label">Name</span>
          <input name="name" type="text" required placeholder="Jane Doe" />
        </label>
        <label className="field">
          <span className="field-label">Company</span>
          <input name="company" type="text" placeholder="Company name" />
        </label>
        <label className="field">
          <span className="field-label">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="jane@gmail.com"
          />
        </label>
        <label className="field">
          <span className="field-label">Message</span>
          <textarea
            name="message"
            required
            placeholder="Your message"
            rows="5"
          />
        </label>
        <button type="submit" className="contact-submit">
          Submit
          <ArrowIcon />
        </button>
      </form>

      <div className="contact-direct">
        <p className="side-label">Prefer email?</p>
        <a className="contact-email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>

      <div className="contact-socials">
        <p className="side-label">Elsewhere</p>
        <div className="social-row">
          {socials.map((social) => (
            <a
              key={social.label}
              className="social-link"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
              <ArrowIcon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Layout: sticky sidebar on the left; the right column shows the
        home view (projects), the About page or the Contact page,
        then contact + footer ---- */
function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return hash;
}

export default function App() {
  const hash = useHashRoute();
  const projectMatch = hash.match(/^#\/project\/([^/?#]+)/);
  const project = projectMatch
    ? projects.find((p) => p.slug === projectMatch[1])
    : null;
  const view = hash.startsWith("#/about")
    ? "about"
    : hash.startsWith("#/contact")
      ? "contact"
      : project
        ? "project"
        : "home";

  /* Scroll to top when a sub-page opens, and jump to the requested
     section (#projects / #contact / #top) when returning home. */
  useEffect(() => {
    document.title =
      view === "about"
        ? `About — ${site.name}`
        : view === "contact"
          ? `Contact — ${site.name}`
          : view === "project" && project
            ? `${project.title} — ${site.name}`
            : `${site.name} — Product Designer`;

    if (view !== "home") {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const id = hash.replace("#", "");
    if (["projects", "contact", "top"].includes(id)) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
    }
  }, [hash, view, project]);

  return (
    <div id="top" className="page">
      <Nav current={view} />
      <div className="layout">
        <Sidebar />
        <main className="content">
          {view === "home" && <Projects />}
          {view === "about" && <About />}
          {view === "contact" && <ContactPage />}
          {view === "project" && project && <ProjectDetail project={project} />}
          <Contact />
          <Footer />
          {/* Frosted blur edge — content blurs as it scrolls underneath */}
          <div className="blur-edge" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </main>
      </div>
    </div>
  );
}
