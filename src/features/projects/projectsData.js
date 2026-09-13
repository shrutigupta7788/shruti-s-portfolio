export default [
  {
    id: "leads-portal",
    title: "Leads Portal — Markdown Import, AI Verification & CSV Export",
    tagline: "Full-stack lead enrichment and data processing platform",
    description:
      "Full-stack lead management platform where users import raw Markdown lead tables (from Obsidian or text), run AI Auto-Verification to enrich and validate lead profiles, and export verified results in CSV format.",
    image: "/leads-platform.png",
    category: "fullstack",
    domain: "leads-platform.app",
    techStack: ["React", "Node.js", "Express", "MongoDB", "AI Verification", "Markdown", "Tailwind CSS"],
    liveLink: "https://leads-platform-web-phi.vercel.app/",
    githubLink: "https://github.com/shrutigupta7788/leads-platform-web",
    featured: true,
    challenges: "Handling messy unstructured markdown tables, parsing varied table delimiters reliably, and integrating AI validation without blocking UI responsiveness.",
    solutions: "Implemented custom stream parsers, asynchronous verification pipelines, and instant CSV generation for seamless data export.",
    features: [
      "Markdown parser supporting Obsidian and GitHub flavored markdown tables",
      "Automated profile validation and metadata enrichment pipeline",
      "Instant client-side CSV compilation and download",
      "Persistent lead storage with MongoDB and Express REST endpoints",
      "Dark-mode developer-focused data table with real-time filtering"
    ]
  },
  {
    id: "dialphone",
    title: "DialPhone — Premium Smartphone Store",
    tagline: "High-performance e-commerce experience for mobile tech",
    description:
      "Full-stack e-commerce web platform for premium smartphones featuring modern dark UI, product catalog, cart management, filtering, and responsive mobile-first architecture.",
    image: "/dialphone.png",
    category: "fullstack",
    domain: "dialphone.store",
    techStack: ["React", "Node.js", "Express", "TailwindCSS", "Framer Motion", "Context API"],
    liveLink: "https://dialphone-website.vercel.app/",
    githubLink: "https://github.com/shrutigupta7788/Dialphone_website",
    featured: true,
    challenges: "Building an intuitive product filtering system with multi-attribute queries, persistent shopping cart across sessions, and smooth layout animations.",
    solutions: "Engineered client-side state with React Context, debounced filtering, and fluid page transitions powered by Framer Motion.",
    features: [
      "Dynamic product catalog with brand, specs, and price-range filters",
      "Persistent cart state with quantity adjustments and checkout calculation",
      "Smooth micro-interactions and layout transitions",
      "Fully responsive mobile drawer navigation and touch gestures"
    ]
  },
  {
    id: "smart-file",
    title: "Smart File Solutions & Tax Consultant",
    tagline: "Corporate platform for financial advisory & tax consultation",
    description:
      "Professional corporate web platform for an accounting & tax consultancy firm, delivering clear service breakdowns, client inquiries, interactive calculation, and custom contact forms.",
    image:
      "https://res.cloudinary.com/dbqgtkyyq/image/upload/v1755614305/Smart_Files_rj06p4.png",
    category: "frontend",
    domain: "smart-file.pro",
    techStack: ["React", "TailwindCSS", "Formspree", "Responsive Design"],
    liveLink: "https://smart-file-alpha.vercel.app/",
    githubLink: "https://github.com/shrutigupta7788",
    featured: true,
    challenges: "Communicating complex financial and tax consulting service tiers with clarity and maintaining fast load times with clean typography.",
    solutions: "Organized modular section architecture with clear callouts, trust badges, and Formspree integration for instant client lead capture.",
    features: [
      "Structured service breakdown for corporate tax and personal filing",
      "Interactive consultation request forms with client validation",
      "Optimized SEO tags and accessible semantic HTML5 structure",
      "High performance, mobile-first design with 100% responsive layouts"
    ]
  },
  {
    id: "spline-3d",
    title: "3D Interactive Showcase Website",
    tagline: "Real-time 3D web experience rendered with Spline",
    description:
      "Interactive web showcase featuring immersive 3D scene rendering with Spline, custom keyframe camera animations, and responsive UI controls.",
    image:
      "https://res.cloudinary.com/dbqgtkyyq/image/upload/v1755614308/3D_Website_eagnb9.png",
    category: "ui",
    domain: "3d-showcase.dev",
    techStack: ["Spline 3D", "JavaScript", "HTML5", "CSS3 Animations"],
    liveLink: "https://three-d-project-one.vercel.app/",
    githubLink: "https://github.com/shrutigupta7788",
    featured: false,
    challenges: "Integrating canvas 3D graphics smoothly on mobile devices without dropping frame rates or blocking page scroll.",
    solutions: "Used lazy-loaded Spline scenes and responsive viewport clamps to maintain 60fps interaction across modern devices.",
    features: [
      "Interactive mouse-tracking 3D objects and environment lights",
      "Custom camera keyframes tied to user interaction",
      "Clean dark HUD interface overlay with developer controls"
    ]
  },
  {
    id: "dhanex",
    title: "Dhanex – Loan Partner & Smart EMI Calculator",
    tagline: "Financial lead platform with real-time loan math engine",
    description:
      "Trusted financial platform for personal and business loans with integrated interactive EMI calculation tools and instant lead generation forms.",
    image:
      "https://res.cloudinary.com/dbqgtkyyq/image/upload/v1757433098/Screenshot_2025-09-09_211911_yr7eah.png",
    category: "frontend",
    domain: "dhanex.finance",
    techStack: ["JavaScript", "EMI Engine", "Bootstrap", "CSS3"],
    liveLink: "https://dhanex-site.vercel.app/",
    githubLink: "https://github.com/shrutigupta7788",
    featured: false,
    challenges: "Executing instantaneous loan interest and principal calculations across variable tenures without input lag.",
    solutions: "Engineered a lightweight mathematical calculator engine in vanilla JavaScript with real-time DOM updates.",
    features: [
      "Interactive slider controls for Principal, Tenure, and Interest Rates",
      "Dynamic monthly EMI breakdown and total payable estimates",
      "Instant inquiry form capture for financial consultants"
    ]
  },
  {
    id: "animated-ui",
    title: "Animated Interactive Web Experience",
    tagline: "Fluid scroll choreography and micro-interactions",
    description:
      "Modern web experience emphasizing smooth scroll-driven animations, dynamic UI state transitions, and responsive layout structure.",
    image:
      "https://res.cloudinary.com/dbqgtkyyq/image/upload/v1755614313/Animation_Website_yudjyp.png",
    category: "ui",
    domain: "interactive-ui.dev",
    techStack: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    liveLink: "https://animated-websites-mu.vercel.app/",
    githubLink: "https://github.com/shrutigupta7788",
    featured: false,
    challenges: "Creating cinematic webpage transitions while maintaining zero jitter and low memory footprint.",
    solutions: "Leveraged GPU-accelerated CSS transforms and lightweight intersection observers for triggering animations on demand.",
    features: [
      "Scroll-linked entrance animations and staggered card fades",
      "Responsive typography and balanced visual rhythm",
      "Cross-browser testing across Safari, Chrome, and Firefox"
    ]
  },
  {
    id: "glassmorphism",
    title: "Glassmorphism Login & Register Form",
    tagline: "Modern frosted-glass authentication interface",
    description:
      "Interactive glassmorphism authentication UI featuring responsive multi-step forms, real-time input validation, and smooth blur animations.",
    image:
      "https://res.cloudinary.com/dbqgtkyyq/image/upload/v1757245758/Login_Registration_f3g4ir.png",
    category: "ui",
    domain: "glass-auth.ui",
    techStack: ["Glassmorphism", "CSS3", "JavaScript", "Form Validation"],
    liveLink: "https://login-registration-forms.vercel.app/",
    githubLink: "https://github.com/shrutigupta7788",
    featured: false,
    challenges: "Rendering multi-layered backdrop-filters cleanly across diverse screen resolutions without blurring text crispness.",
    solutions: "Structured high-contrast borders and fallbacks for browsers without backdrop-filter support.",
    features: [
      "Dynamic tab switching between Sign In and Registration views",
      "Client-side password strength and email regex verification",
      "Modern frosted glass aesthetic with multi-layer ambient glows"
    ]
  },
  {
    id: "auth-portal",
    title: "Modern Sign In & Sign Up Interface",
    tagline: "Responsive sliding authentication component",
    description:
      "Clean user authentication component designed with smooth sliding transitions, form validation, and responsive mobile-first layout.",
    image:
      "https://res.cloudinary.com/dbqgtkyyq/image/upload/v1757427515/ss_yajtj4.png",
    category: "ui",
    domain: "auth-interface.dev",
    techStack: ["HTML5", "CSS3", "JavaScript", "UI Animations"],
    liveLink: "https://sign-in-sign-up-page-zeta.vercel.app/",
    githubLink: "https://github.com/shrutigupta7788",
    featured: false,
    challenges: "Building a unified single-card sliding animation that works seamlessly on desktop and stacks naturally on mobile.",
    solutions: "Used CSS transform overlay panels with responsive breakpoints for clean mobile stacking.",
    features: [
      "Smooth sliding overlay between Login and Sign Up states",
      "Clean form input styling with floating labels",
      "Social login button layout with modern micro-interactions"
    ]
  },
];
