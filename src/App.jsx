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
import reclaimImage from "./assets/reclaim-branding.jpg";

/* Ration case-study gallery (src/assets) */
import rationCase1 from "./assets/ration-case-1.jpg";
import rationCase2 from "./assets/ration-case-2.jpg";
import rationCase3 from "./assets/ration-case-3.jpg";
import rationCase4 from "./assets/ration-case-4.jpg";
import rationCase5 from "./assets/ration-case-5.jpg";
import rationCase6 from "./assets/ration-case-6.jpg";
import rationProcess from "./assets/ration-design-process.png";

/* ServaMarket case-study gallery (src/assets) */
import servaSearchMap from "./assets/servamarket-search-map.jpg";
import servaItemDetails from "./assets/servamarket-item-details.jpg";
import servaPostListing from "./assets/servamarket-post-listing.jpg";
import servaWallet from "./assets/servamarket-wallet.jpg";
import servaDashboard from "./assets/servamarket-dashboard.jpg";
import servaAnalytics from "./assets/servamarket-analytics.jpg";

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
  "UX/UI Design",
  "Interaction Design",
  "Visual Design",
  "Design Systems",
  "Wireframing & Prototyping",
  "UX Research",
  "Usability Testing",
  "Accessibility",
  "Branding",
  "Illustration",
  "Payment & Checkout Design",
  "Dashboard & Data Viz",
  "Agile/Sprint",
  "Developer Handoff",
  "Mentoring & Coaching",
  "Figma",
  "Adobe Illustrator",
  "HTML & CSS",
  "Notion",
  "AI-Assisted Design",
];

/* ---- Sidebar "Kind words" slider (✏️ add your real quotes here) ----
   The card shows one entry at a time and cycles through the list; the bar
   on its top edge has one segment per entry and fills for the active one.
   Optional: import a photo and a company logo from src/assets and set them
   as `avatar` / `logo` — they render as the overlapping avatar pair. */
const testimonials = [
  {
    quote:
      "Helen was a delight to work with. Her designs are user-focused and her attention to detail is very commendable — she translates product requirements into valuable prototypes. As her product manager, I can absolutely recommend her as an asset to any team she joins.",
    author: "Tayo Adesina",
    role: "Product Manager | Project Delivery | Agile | SaaS & Fintech",
    avatar: "",
    logo: "",
  },
  {
    quote:
      "I had the pleasure of working with Helen on a project and it was a great experience. She's a talented UX designer with a strong eye for detail, a collaborative mindset and a thoughtful approach to problem-solving. Her ability to translate ideas into user-focused solutions made a valuable contribution to the project.",
    author: "Kudirat Nurudeen",
    role: "UX Designer | Product Designer | Framer Developer",
    avatar: "",
    logo: "",
  },
  {
    quote:
      "I had a great learning experience with Tutor Helen at GOMYCODE. She has a unique way of making complex topics simple and practical — always patient, supportive and deeply knowledgeable. She creates a learning environment that builds both skill and confidence, and I highly recommend her to anyone serious about growing in UI/UX and tech.",
    author: "Blessing Amune",
    role: "Graphic Designer, UI/UX Designer",
    avatar: "",
    logo: "",
  },
  {
    quote:
      "Helen was an instructor in a short but highly impactful design cohort I was part of. She has a rare ability to simplify complex ideas, challenge your thinking, and push you toward better design decisions with clarity and intention.",
    author: "'Sunkanmi Oloyede",
    role: "Graphic Designer & Content Creator",
    avatar: "",
    logo: "",
  },
  {
    quote:
      "Helen is an outstanding UI/UX coach who explains design concepts clearly and practically. Her guidance, constructive feedback and focus on user-centred design helped me grow confidently in UI/UX. I highly recommend her to anyone looking to build strong, real-world design skills.",
    author: "Toheeb Tosin",
    role: "Graphic Designer / UIUX | Real Estate Enthusiast",
    avatar: "",
    logo: "",
  },
  {
    quote:
      "I highly recommend my instructor for her support and commitment to her students' growth. She connected me to an internship opportunity that has greatly impacted my career, allowing me to develop real-world skills and thrive in a professional environment. I'm truly grateful for her guidance and the opportunities she provided.",
    author: "Oluwatoyin Tayo",
    role: "Product-Driven Food Scientist transitioning into UI/UX",
    avatar: "",
    logo: "",
  },
];

/* ---- About page (shown when you click "About" in the header) ---- */
const aboutIntro =
  "Product Designer with experience designing web and mobile products end to end, from research and wireframing through high-fidelity delivery and developer handoff. My work spans SaaS dashboards, messaging and collaboration tools, marketplaces and AI-powered products — alongside branding and illustration. I lead design independently, mentor junior designers, and work directly with engineering and product teams in agile environments, using AI-assisted tools like Claude, ChatGPT and Lovable to move faster from idea to prototype.";

/* Each role has a `details` list — it opens in a dropdown when the row is
   clicked. ✏️ Edit these bullets to match what you want to show. */
const experience = [
  {
    company: "Stackchase",
    role: "Lead UI/UX Designer — Ration",
    period: "Oct 2024 — Present",
    details: [
      "Lead end-to-end UI/UX for Ration, a web and mobile collaboration suite (Mail, Contacts, Calendar, Tasks, Chat) — 200+ screens across both platforms.",
      "Design Team Lead, working daily with developers, product managers, QA, marketing and support to deliver user-centred solutions on schedule.",
      "Run sprint planning, reviews and retrospectives — the team ships 90% of planned features on time.",
      "Own the full process from research and ideation to high-fidelity prototypes and developer handoff, cutting rework with clearer handoff documentation.",
      "Present weekly demos to stakeholders, reducing follow-up questions by 40%.",
      "Built and maintain a shared design system that cut component creation time by an estimated 30%.",
    ],
  },
  {
    company: "GOMYCODE",
    role: "Product Design Instructor",
    period: "Sep 2024 — Present",
    details: [
      "Teach hands-on product design to 30+ students, guiding them through real-world projects and portfolio development.",
      "Cover UX research, interaction design, wireframing, prototyping and usability testing — averaging a 4.6/5 student satisfaction score.",
      "Give practical feedback and career mentorship, helping students build confidence and job-ready skills.",
    ],
  },
  {
    company: "Freelance",
    role: "UI/UX Designer — ServaMarket, Clan, Wakapad",
    period: "Dec 2023 — Feb 2026",
    details: [
      "Sole freelance product designer across multiple ventures, owning the process from discovery through developer-ready handoff.",
      "ServaMarket — marketplace web app: 100+ screens covering onboarding, listings and service booking, checkout and payment flows designed to reduce drop-off, plus a dual user and admin dashboard.",
      "Clan — ride-sharing and community app: ride-request flows (post a ride, join a ride, seat availability), interest-group communities, direct messaging and a wallet/points system.",
      "Wakapad — property rental platform: search and filtering (location, price, bedrooms, furnishing), listing pages and booking flows, plus an agent dashboard for managing listings and bookings.",
      "Delivered complete Figma prototypes, user flows and component documentation with every handoff.",
    ],
  },
  {
    company: "HNG Tech",
    role: "Product Designer — TIFI",
    period: "Jun 2024 — Aug 2024",
    details: [
      "Worked with a cross-functional team of 8 designers to ship an AI homework assistant, improving feature delivery speed by 20%.",
      "Designed TIFI, an AI-powered tool for transcription, summarisation and visual content creation, from research through to final prototype.",
      "Ran UX research, ideation, wireframing and usability testing across 3 iteration cycles to improve clarity and task completion rates.",
      "Designed admin dashboards for internal team management: user analytics, content moderation and activity monitoring.",
    ],
  },
  {
    company: "Brain Quest",
    role: "UI/UX Design Intern",
    period: "Jan 2023 — Apr 2024",
    details: [
      "Designed 3+ responsive websites in Wix Studio with consistent, accessible experiences across desktop and mobile breakpoints.",
      "Worked with international stakeholders on iterative, feedback-driven revisions, delivering every project on schedule in a fast-paced remote environment.",
    ],
  },
];

const services = [
  {
    name: "Website Design",
    tagline: "A quick, sharp website for your business",
    price: "$500",
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
    price: "$2000",
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
  { label: "LinkedIn", url: "https://www.linkedin.com/in/helen-agbro" },
  { label: "Behance", url: "https://www.behance.net/helenagbro01" },
];

/* Each project becomes a card — clicking it opens a case-study page at
   #/project/<slug> … unless "external" has a URL (e.g. a Behance case
   study), then the card opens that link in a new tab instead.

   ✏️ Fill in your real case-study content per project:
   - slug       the URL name (lowercase + dashes): #/project/xmint
   - client     the project name — shown large on the card and as the
                case-study title
   - title      a short descriptor, shown under the name on the card and
                as the eyebrow above the case-study title
                (e.g. "AI Investment Mobile App")
   - image      the cover from src/assets — shown on the card and as the
                case-study hero
   - year/role  shown in the case-study header and meta row
   - tools      tools used (e.g. "Figma, FigJam") — case-study meta row
   - focus      focus areas (e.g. "Dashboard UI, Web App") — meta row
   - link       optional outbound URL, shown as "Link" in the meta row
   - overview   2–3 sentences about the project (✏️ placeholders below)
   - highlights optional bullet list shown under "Key Highlights"
   - sections   optional { heading, text, image } blocks (problem,
                solution…) — `image` is optional
   - gallery    optional extra screenshots: [img1, img2, …]
   - external   e.g. "https://www.behance.net/gallery/…" to link out
                (projects with an external URL skip the case-study page) */
const projects = [
  {
    slug: "ration",
    client: "Ration",
    title: "Unified Digital Workspace",
    category: "Product Design",
    from: "#f7c900",
    to: "#dd9f00",
    logoTone: "dark",
    image: rationImage,
    external: "",
    year: "2024", /* ✏️ add the year if you want it in the case-study header */
    role: "Lead Product Designer",
    /* ✏️ add the tools you used (e.g. "Figma, FigJam") to show them here */
    tools: "Figma, FigJam",
    focus: "Design System, Web & Mobile, Multi-module UX",
    overview:
      "Ration is an all-in-one digital workspace that helps organisations manage their communication, collaboration and everyday work from a single platform. As Lead Product Designer at Stackchase, I led the end-to-end redesign and expansion of Ration — evaluating the previous interface, creating a new design system, and taking UX, UI, prototyping and user testing through to developer handoff.",
    highlights: [
      "Redesigned the product around one consistent application structure",
      "Designed nine modules — Mail, Chat, Meetings, Calendar, Contacts, Drive, Forms, Notes and Tasks",
      "Built a reusable design system that keeps every module consistent",
      "Prototyped and user-tested with internal teams and existing users",
      "Desktop experiences shipped, with mobile Mail, Chat and Contacts already live",
    ],
    sections: [
      {
        heading: "The Challenge",
        text: "The central challenge was designing multiple productivity tools that served different purposes while making them feel like parts of the same application. Each module had its own functionality, content structure and user interactions, and users should not feel as though they were moving between entirely different applications. Three considerations guided the work: consistency across modules, simplicity and usability, and scalability — a foundation that could support more modules without compromising the experience.",
      },
      {
        heading: "My Design Process",
        text: "I approached the project in stages, starting with understanding the existing product before moving into the redesign and implementation process.",
        image: rationProcess,
      },
      {
        heading: "Designing the Ration Ecosystem",
        text: "One of the defining aspects of this project was designing multiple productivity tools under a shared application structure. I designed nine major modules, each serving a different organisational need: Ration Mail, Chat, Meetings, Calendar, Contacts, Drive, Forms, Notes and Tasks.",
      },
      {
        heading: "My Role",
        text: "As the Lead Product Designer I was the sole designer on the team when the redesign began, working closely with the Product Manager who provided the product requirements and feature specifications. My responsibility was to translate those into functional, intuitive and visually consistent product experiences — owning the process from evaluating the previous product to preparing designs for implementation.",
      },
      {
        heading: "The Outcome",
        text: "Ration is now a live product, with organisations using the platform to support communication and collaboration among their employees. The redesign delivered a consistent application structure, nine product modules, a reusable design system, interactive prototypes tested with internal team members and existing users, desktop experiences taken through development and released, and mobile applications with Mail, Chat and Contacts already live.",
      },
      {
        heading: "Reflection and Learnings",
        text: "Ration gave me the opportunity to approach product design at an ecosystem level rather than focusing on a single feature or application. The biggest takeaway was the importance of designing for consistency without sacrificing functionality — a shared design foundation makes an entire ecosystem easier to understand and use. I also learned to think beyond the design file: collaborating with developers, testing prototypes with existing users and reviewing implementations were all essential to delivering the intended experience.",
      },
    ],
    gallery: [
      rationCase1,
      rationCase2,
      rationCase3,
      rationCase4,
      rationCase5,
      rationCase6,
    ],
  },
  {
    slug: "xmint",
    client: "Xmint",
    title: "AI Investment Mobile App",
    category: "Product Design",
    from: "#1cb5ae",
    to: "#0e6f8c",
    logoTone: "light",
    image: xmintImage,
    external: "",
    year: "2026",
    tools: "Figma, FigJam",
    link: "https://www.behance.net/gallery/249278977/Xmint-AI-Investment-Mobile-App-UXUI-Case-Study",
    role: "Product Designer",
    overview:
      "Xmint is a modern fintech mobile app designed to help users invest confidently with AI-powered financial guidance — covering US stocks, Nigerian stocks, naira mutual funds and dollar mutual funds. I designed the experience to make complex financial decisions feel intuitive, with beginner-friendly investing flows, a clear fintech dashboard and a modern UI system built in Figma around simplicity, trust and accessibility.",
    sections: [],
    gallery: [],
  },
  {
    slug: "reclaim",
    client: "Reclaim",
    title: "Brand Identity & Illustration",
    category: "Branding & Illustration",
    from: "#e9e2d6",
    to: "#8a6f4e",
    logoTone: "dark",
    image: reclaimImage,
    external: "",
    year: "2026",
    tools: "Figma, Adobe Illustrator",
    link: "https://www.behance.net/gallery/257106149/Reclaim-Brand-Identity-Illustration",
    role: "Brand Designer",
    overview:
      "Reclaim is a brand identity and illustration system for a mental-health recovery journey — a warm visual language, character illustration and social-impact storytelling that make a difficult subject feel human.",
    sections: [],
    gallery: [],
  },
  {
    slug: "breeze",
    client: "Breeze",
    title: "Brand Guidelines",
    category: "Branding & Illustration",
    from: "#f7f5ef",
    to: "#dbe6c9",
    logoTone: "dark",
    image: breezeImage,
    external: "",
    year: "2026",
    tools: "Figma, Adobe Illustrator",
    link: "https://www.behance.net/gallery/256106581/Breeze-Brand-Guidelines",
    role: "Brand Designer",
    overview:
      "Breeze is a playful campus convenience brand built around the everyday needs of university students — from last-minute essentials to late-night cravings. I created the visual system behind it: a bold purple foundation, bright accents, playful patterns and a rounded typographic style that feels youthful and approachable while staying flexible across digital and physical touchpoints.",
    sections: [],
    gallery: [],
  },
  {
    slug: "servamarket",
    client: "Servamarket",
    title: "All-in-One Marketplace",
    category: "Product Design",
    from: "#1e7a45",
    to: "#0b3b24",
    logoTone: "light",
    image: servamarketImage,
    external: "",
    year: "",
    role: "Product Designer",
    tools: "Figma, FigJam",
    focus: "Marketplace, E-commerce, Rentals & Services — Web App",
    overview:
      "Serva Market is a multi-purpose digital marketplace that brings buying, selling, renting and service provision into one platform. Unlike marketplaces that separate buyers, sellers and service providers into different account types, one account can do all of it — and my focus was making that flexibility feel simple instead of complicated.",
    highlights: [
      "One account for buying, selling, renting and offering services",
      "Price offers, so buyers and sellers can negotiate",
      "Rental and service marketplace experiences in the same product",
      "A centralised dashboard for purchases, sales and services offered",
      "One consistent interface instead of role-based dashboards",
    ],
    sections: [
      {
        heading: "The Problem",
        text: "Most marketplace platforms focus on one type of transaction — some are built mainly for buying and selling, while others focus on renting or finding services. Serva Market brings these activities together, and the challenge was making the experience simple enough for users to move between them without feeling like they were using different platforms.",
      },
      {
        heading: "The Design Challenge",
        text: "The platform had to accommodate different user needs and transaction types while keeping one consistent interface. Three considerations guided the work: multiple roles with one account, simplifying an interface with many available activities, and centralised activity management that doesn't feel cluttered.",
      },
      {
        heading: "My Approach",
        text: "Rather than asking users to choose whether they are buyers, sellers or service providers when signing up, everyone gets one account and can take on different roles whenever they need to. I focused on a straightforward experience where every feature is reachable without switching accounts or dashboards.",
      },
      {
        heading: "Key Features & Decisions",
        text: "One account for different activities; browsing, buying and listing items; price offers that give buyers and sellers room to negotiate; renting items and offering or hiring services; and a dashboard that keeps track of everything bought, sold and offered.",
      },
      {
        heading: "The Outcome",
        text: "Serva Market brings multiple marketplace activities into one connected experience — a unified account structure, one interface supporting several marketplace roles, buying and selling, rental and service experiences, price offers and negotiation, and a centralised dashboard for managing activity.",
      },
      {
        heading: "Reflection",
        text: "Working on Serva Market reinforced the importance of designing around people's actual behaviours rather than forcing them into predefined categories — a person is not always just a buyer or a seller. The biggest lesson was that flexibility doesn't have to come at the expense of simplicity: a product can support many needs and still feel like one coherent experience.",
      },
    ],
    gallery: [
      servaSearchMap,
      servaItemDetails,
      servaPostListing,
      servaWallet,
      servaDashboard,
      servaAnalytics,
    ],
  },
  {
    slug: "easy-migrate",
    client: "Easy migrate",
    title: "Simplifying the Visa Journey",
    category: "Product Design",
    from: "#f4f2ea",
    to: "#cfe0cd",
    logoTone: "dark",
    image: easyMigrateImage,
    external: "",
    year: "2025",
    tools: "Figma, FigJam",
    link: "https://www.behance.net/gallery/235652915/Easy-Migrate-Simplifying-the-Visa-Journey-UIUX",
    role: "Product Designer",
    overview:
      "Easy Migrate is a user-centred app that helps students, professionals and travellers navigate relocating abroad — from study visas to work permits and travel visas. I designed personalised guidance, verified information and real-time support in one place, so a complex, high-stakes process feels clear and manageable rather than overwhelming.",
    sections: [],
    gallery: [],
  },
  {
    slug: "tifi",
    client: "Tifi",
    title: "Elevating Content Creation with AI",
    category: "Product Design",
    from: "#b08968",
    to: "#4f3823",
    logoTone: "light",
    image: tifiImage,
    external: "",
    year: "2024",
    tools: "Figma, Adobe Illustrator",
    link: "https://www.behance.net/gallery/207587271/TiFi-Elevating-Content-Creation-with-AI-Case-Study",
    role: "Product Designer",
    overview:
      "TiFi is an AI-powered content creation tool for transcription, summarisation and visual content creation. I took a user-centred approach from research and wireframing through to a final tested prototype, and also designed the admin dashboards used to manage users, content and activity.",
    sections: [],
    gallery: [],
  },
  {
    slug: "homework-ai",
    client: "Homework AI",
    title: "AI Homework Assistant",
    category: "Product Design",
    from: "#2b6cb0",
    to: "#1a365d",
    logoTone: "light",
    image: homeworkAiImage,
    external: "",
    year: "2026",
    tools: "Figma, FigJam",
    link: "https://www.behance.net/gallery/252871641/AIForHomework",
    role: "Product Designer",
    overview:
      "HomeworkAI is an AI-driven homework platform that supports students, teachers and parents with personalised guidance, intelligent tutoring, automated grading and collaboration tools. I worked with a cross-functional team to design the web experience, alongside the admin dashboards used to manage users, content and activity.",
    sections: [],
    gallery: [],
  },
  {
    slug: "storm",
    client: "Storm",
    title: "Campaign Illustration & Character Design",
    category: "Branding & Illustration",
    from: "#5a67d8",
    to: "#2c3e8f",
    logoTone: "light",
    image: stormImage,
    external: "",
    year: "2026",
    tools: "Figma",
    link: "https://www.behance.net/gallery/254110981/STORM-Campaign-Illustration-Character-Design",
    role: "Brand Designer",
    overview:
      "STORM is a campaign illustration and character design project built around a bold, expressive character system. The work explores art direction and illustration that can stretch across campaign assets, product storytelling and brand collateral while keeping one recognisable visual voice.",
    sections: [],
    gallery: [],
  },
  {
    slug: "runway-fashion",
    client: "Runway Fashion",
    title: "Flat Vector Illustration & Art Direction",
    category: "Branding & Illustration",
    from: "#d69e2e",
    to: "#7b341e",
    logoTone: "light",
    image: runwayFashionImage,
    external: "",
    year: "2026",
    tools: "Figma",
    link: "https://www.behance.net/gallery/254880513/Flat-Vector-Fashion-Illustration-Runway-Art-Direction",
    role: "Brand Designer",
    overview:
      "Runway Fashion explores a fictional fashion week runway through simple, expressive flat-vector illustration. The series plays with silhouette, colour and art direction to capture the energy of a show, and extends into editorial illustration and character design.",
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
    external:
      "https://www.behance.net/gallery/254168201/A-Semi-Realistic-Character-Illustration-Visual-Story",
    year: "2026",
    tools: "Figma",
    link: "https://www.behance.net/gallery/254168201/A-Semi-Realistic-Character-Illustration-Visual-Story",
    role: "Brand Designer",
    overview:
      "Unwind is a semi-realistic character illustration and visual story — a self-directed piece centred on character design, environment and mood. It follows the illustration process from concept, composition and lighting through to a finished frame that tells a story.",
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
  /* Start visible when IntersectionObserver is unavailable (SSR / old
     browsers) so nothing is stuck hidden without a setState-in-effect. */
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
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
        <a
          href="/Helen-Agbro-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cv"
          onClick={close}
        >
          CV
          <ArrowIcon />
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

/* ---- "Kind words" slider: one quote at a time. The bar on the top edge has
        a segment per quote — the active segment fills over SLIDE_MS, then the
        next quote blurs in. Click it (or press Enter/Space) to skip ahead. ---- */
const SLIDE_MS = 7000;

function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const heldRef = useRef(false);
  const holdTimer = useRef(null);
  const count = testimonials.length;
  const item = testimonials[index];
  /* The second avatar circle is the author's company logo, so fall back to
     the initial of the company part of the role line. */
  const company = item.role.includes(",")
    ? item.role.split(",").slice(1).join(",").trim()
    : item.role;
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <figure
      className="testimonial-card"
      role="button"
      tabIndex={0}
      aria-label={`Testimonial ${index + 1} of ${count}. Click for the next one, or press and hold to pause.`}
      onPointerDown={() => {
        heldRef.current = false;
        holdTimer.current = window.setTimeout(() => {
          heldRef.current = true;
          setPaused(true);
        }, 180);
      }}
      onPointerUp={() => {
        window.clearTimeout(holdTimer.current);
        setPaused(false);
      }}
      onPointerLeave={() => {
        window.clearTimeout(holdTimer.current);
        setPaused(false);
      }}
      onClick={() => {
        /* A press-and-hold pauses so the quote can be read — don't also
           skip to the next one when the press is released. */
        if (heldRef.current) {
          heldRef.current = false;
          return;
        }
        next();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          next();
        }
      }}
    >
      <span className="t-bar" aria-hidden="true">
        {testimonials.map((entry, i) => (
          <span
            key={`${i}-${entry.author}`}
            className={
              i === index
                ? "t-seg is-active"
                : i < index
                  ? "t-seg is-done"
                  : "t-seg"
            }
          >
            {i === index && (
              <span
                className="t-fill"
                style={{
                  animationDuration: `${SLIDE_MS}ms`,
                  animationPlayState: paused ? "paused" : "running",
                }}
                onAnimationEnd={next}
              />
            )}
          </span>
        ))}
      </span>

      <div className="t-slide" key={index} aria-live="polite">
        <blockquote className="quote">
          <span className="quote-dots" aria-hidden="true">
            ...
          </span>{" "}
          {item.quote}
        </blockquote>
        <figcaption className="quote-author">
          <span className="avatar-stack">
            <span className="t-avatar">
              {item.avatar ? (
                <img src={item.avatar} alt="" />
              ) : (
                item.author.charAt(0)
              )}
            </span>
            <span className="t-avatar">
              {item.logo ? <img src={item.logo} alt="" /> : company.charAt(0)}
            </span>
          </span>
          <span className="author-text">
            <strong>{item.author}</strong>
            <span className="author-role">{item.role}</span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

/* ---- Sticky left column: intro, skills marquee, testimonial slider ---- */
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

      <div className="side-block side-block-dots">
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

      <div className="side-block side-block-plain">
        <TestimonialSlider />
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
            <h3 className="card-title">{project.client}</h3>
            <span className="card-client">{project.title}</span>
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

/* Resolved once at module load so the component stays pure during render */
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {currentYear} {site.name}
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
  /* Only projects without an external URL get a case-study page, so
     "next project" cycles through those — never off to Behance. */
  const caseStudies = projects.filter((p) => !p.external)
  const index = caseStudies.findIndex((p) => p.slug === project.slug)
  const next =
    caseStudies.length > 1
      ? caseStudies[(index + 1) % caseStudies.length]
      : null
  const tone = project.logoTone === 'light' ? 'logo-light' : 'logo-dark'

  return (
    <article
      ref={ref}
      className={visible ? 'case reveal is-visible' : 'case reveal'}
    >
      <a className="case-back" href="#projects">
        ← All projects
      </a>

      <header className="case-head">
        <span className="case-eyebrow">{project.title}</span>
        <h2 className="case-title">{project.client}</h2>
        {project.year && <span className="case-year">{project.year}</span>}
      </header>

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

      <h2 className="case-heading">Overview</h2>
      <p className="case-overview">{project.overview}</p>

      {(project.highlights || []).length > 0 && (
        <section className="case-section">
          <h2>Key Highlights</h2>
          <ul className="case-highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <div className="case-meta">
        {[
          { label: "Role", value: project.role },
          { label: "Tools", value: project.tools },
          { label: "Focus", value: project.focus },
        ]
          .filter((item) => item.value)
          .map((item) => (
            <div key={item.label}>
              <span className="side-label">{item.label}</span>
              <p className="case-meta-value">{item.value}</p>
            </div>
          ))}

        {project.link && (
          <div>
            <span className="side-label">Link</span>
            <p className="case-meta-value">
              <a
                className="case-meta-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.link.replace(/^https?:\/\//, "")}
              </a>
            </p>
          </div>
        )}
      </div>

      {(project.sections || []).map((section) => (
        <section key={section.heading} className="case-section">
          <h2>{section.heading}</h2>
          <p>{section.text}</p>
          {section.image && (
            <img
              className="case-section-img"
              src={section.image}
              alt={`${section.heading} — ${project.client}`}
            />
          )}
        </section>
      ))}

      {(project.gallery || []).length > 0 && (
        <div className="case-gallery">
          {project.gallery.map((src, i) => (
            <img key={src} src={src} alt={`${project.client} screenshot ${i + 1}`} />
          ))}
        </div>
      )}

      {next && (
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
      )}
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
          <li key={job.company} className="xp-item">
            <details>
              <summary className="xp-row">
                <span className="xp-company">{job.company}</span>
                <span className="xp-role">{job.role}</span>
                <span className="xp-period">
                  {job.period}
                  <span className="xp-plus" aria-hidden="true" />
                </span>
              </summary>
              <ul className="xp-details">
                {job.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </details>
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
  /* Projects with an external URL (Behance) have no case-study page, so a
     direct #/project/<slug> link to one falls back to the home view. */
  const project = projectMatch
    ? projects.find((p) => p.slug === projectMatch[1] && !p.external)
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
