export default {
  frontend: {
    title: "Frontend Engineering",
    description: "Building responsive, modern, and accessible user interfaces with declarative frameworks.",
    skills: [
      { name: "React.js", level: "Advanced", icon: "SiReact", color: "#61DAFB", detail: "Hooks, Router, SPA architecture" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "SiJavascript", color: "#F7DF1E", detail: "Async/Await, DOM manipulation, ESNext" },
      { name: "Tailwind CSS", level: "Advanced", icon: "SiTailwindcss", color: "#38BDF8", detail: "Custom themes, responsiveness, utilities" },
      { name: "HTML5", level: "Advanced", icon: "SiHtml5", color: "#E34F26", detail: "Semantic markup, accessibility, SEO" },
      { name: "CSS3", level: "Advanced", icon: "SiCss3", color: "#1572B6", detail: "Flexbox, CSS Grid, custom keyframes" },
      { name: "Bootstrap", level: "Proficient", icon: "SiBootstrap", color: "#7952B3", detail: "Grid systems, UI component library" },
    ]
  },
  backend: {
    title: "Backend & Databases",
    description: "Architecting reliable server endpoints, API routing, and document database storage.",
    skills: [
      { name: "Node.js", level: "Proficient", icon: "SiNodedotjs", color: "#5FA04E", detail: "Event-driven runtime & backend logic" },
      { name: "Express.js", level: "Proficient", icon: "SiExpress", isMonochrome: true, detail: "Middleware, REST routes, error handling" },
      { name: "MongoDB", level: "Proficient", icon: "SiMongodb", color: "#47A248", detail: "NoSQL collections, queries, aggregation" },
      { name: "RESTful APIs", level: "Advanced", icon: "FaServer", color: "#38BDF8", detail: "CRUD endpoints, status codes, JSON payloads" },
    ]
  },
  tools: {
    title: "Developer Tooling & Workflows",
    description: "Modern developer environment, version control, build pipelines, and design handoff.",
    skills: [
      { name: "Git", level: "Advanced", icon: "SiGit", color: "#F05032", detail: "Branching, rebasing, version management" },
      { name: "GitHub", level: "Advanced", icon: "SiGithub", isMonochrome: true, detail: "Remote repos, open source, PRs" },
      { name: "Vite", level: "Advanced", icon: "SiVite", color: "#BD34FE", detail: "Ultra-fast bundler & development server" },
      { name: "Postman", level: "Proficient", icon: "SiPostman", color: "#FF6C37", detail: "API endpoint verification & debugging" },
      { name: "Figma", level: "Proficient", icon: "SiFigma", color: "#F24E1E", detail: "UI wireframing & component specs" },
      { name: "npm", level: "Advanced", icon: "SiNpm", color: "#CB3837", detail: "Package dependency management" },
    ]
  },
  principles: {
    title: "Engineering Practices",
    description: "Core software engineering principles ensuring code longevity, maintainability, and UX quality.",
    skills: [
      { name: "Component Reusability", level: "Core", icon: "FaCode", color: "#60A5FA", detail: "DRY patterns & structured component trees" },
      { name: "Responsive Layouts", level: "Core", icon: "FaMobileAlt", color: "#34D399", detail: "Mobile-first, desktop-optimized layouts" },
      { name: "Async State Mgmt", level: "Core", icon: "FaBolt", color: "#FBBF24", detail: "Fetch lifecycle, loading & error states" },
      { name: "Clean Git Workflow", level: "Core", icon: "FaLayerGroup", color: "#A78BFA", detail: "Meaningful commits, clean history" },
    ]
  }
};
