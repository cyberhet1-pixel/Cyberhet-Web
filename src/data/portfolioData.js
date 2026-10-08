export const portfolioData = [
  {
    id: "payflow",
    slug: "payflow",
    title: "Payflow Dashboard Redesign",
    category: "design",
    categoryLabel: "FinTech · Product Design",
    client: "Payflow Inc.",
    industry: "FinTech",
    services: "UI/UX, Development",
    timeline: "10 weeks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=500&fit=crop",
    summary: "Reimagining payment analytics for enterprise finance teams, resulting in a 64% surge in weekly active usage.",
    challenge: "Payflow's payment analytics dashboard had grown organically over five years, accumulating dense tables, inconsistent navigation and confusing terminology. Internal data showed only 22% of users opened the dashboard more than once a month — most relied on exported spreadsheets instead.",
    approach: "We began with 14 user interviews and a full audit of support tickets to identify the top friction points. From there, we restructured the information architecture around three core workflows: monitoring, reconciliation and reporting. Rather than a full rebuild, we shipped the new dashboard in three phases — each validated with a beta group of 40 users before wider rollout.",
    result: "Within three months of full rollout, weekly active usage of the dashboard rose sharply and support tickets related to reporting confusion dropped significantly. The new design system also became the foundation for Payflow's mobile app redesign, completed by their internal team six months later.",
    quote: {
      text: "Nexora didn't just make it prettier — they fundamentally rethought how our users work with data. The phased rollout meant zero disruption to our team.",
      author: "Head of Product, Payflow Inc."
    },
    stats: [
      { label: "Weekly active usage", value: "+64%" },
      { label: "Support tickets", value: "−38%" },
      { label: "Avg. session time", value: "+2.1x" },
      { label: "Time to first insight", value: "−51%" }
    ],
    tech: ["Figma", "React", "D3.js", "Node.js", "PostgreSQL"]
  },
  {
    id: "metricly",
    slug: "metricly",
    title: "Metricly Analytics Platform",
    category: "dev",
    categoryLabel: "SaaS · Web Development",
    client: "Metricly AI",
    industry: "B2B SaaS",
    services: "Frontend & Cloud Architecture",
    timeline: "14 weeks",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=500&fit=crop",
    summary: "High-throughput data visualization engine capable of processing millions of event queries under 200ms.",
    challenge: "Metricly needed to migrate from an unscalable legacy monolithic UI to a blazing-fast micro-frontend architecture supporting real-time event streaming and complex filtering.",
    approach: "Engineered a modular React front-end coupled with WebSocket streaming, web workers for client-side aggregations, and virtualized data grids that maintain 60 FPS even with 100,000+ rows.",
    result: "Reduced query visualization latency from 4.8 seconds to 180ms, unlocking enterprise tiers and accelerating Metricly's Series A fundraise.",
    quote: {
      text: "The performance gains exceeded our internal targets. Our enterprise clients noticed the difference on day one.",
      author: "CTO, Metricly"
    },
    stats: [
      { label: "Query latency", value: "−96%" },
      { label: "Render frame rate", value: "60 FPS" },
      { label: "Client retention", value: "+42%" },
      { label: "Data throughput", value: "10x" }
    ],
    tech: ["React", "TypeScript", "WebSockets", "Vite", "TailwindCSS"]
  },
  {
    id: "carewise",
    slug: "carewise",
    title: "Carewise Patient App",
    category: "brand",
    categoryLabel: "HealthTech · Branding",
    client: "Carewise Health",
    industry: "HealthTech",
    services: "Branding, UI/UX Design",
    timeline: "8 weeks",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=500&fit=crop",
    summary: "Empathetic brand identity and intuitive mobile portal connecting patients with specialized clinicians.",
    challenge: "Existing patient portals were clinical, cold, and inaccessible to elderly demographics, causing high drop-off during appointment scheduling.",
    approach: "Conducted inclusive design workshops with senior patients, creating high-contrast accessible color tokens, legible typography scales, and a simplified two-tap booking process.",
    result: "Carewise achieved a 99.4% task completion rate among patients over 65, receiving widespread praise from healthcare networks.",
    quote: {
      text: "Nexora brought empathy and human-centered design to a space that desperately needed both.",
      author: "Founder, Carewise"
    },
    stats: [
      { label: "Booking completion", value: "99.4%" },
      { label: "App Store rating", value: "4.9 ★" },
      { label: "Patient onboarding", value: "+115%" },
      { label: "Support call volume", value: "−45%" }
    ],
    tech: ["Figma", "Design Tokens", "React Native", "WCAG 2.1 AA"]
  },
  {
    id: "orbiq",
    slug: "orbiq",
    title: "Orbiq CRM Platform",
    category: "dev",
    categoryLabel: "B2B SaaS · Development",
    client: "Orbiq Inc.",
    industry: "Sales Automation",
    services: "Full-Stack Development",
    timeline: "12 weeks",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=600&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=500&fit=crop",
    summary: "Custom deal-pipeline orchestration CRM with automated sync to calendar, email, and billing.",
    challenge: "Sales reps spent over 40% of their day manually logging activities across 5 different disjointed tools.",
    approach: "Designed a centralized workspace with bi-directional syncing, smart task triggers, and instant keyboard-driven navigation.",
    result: "Saved an estimated 7.5 hours per sales rep per week, driving a 30% increase in pipeline velocities.",
    quote: {
      text: "Our sales reps genuinely love using Orbiq. That is practically unheard of for a CRM.",
      author: "VP of Sales, Orbiq"
    },
    stats: [
      { label: "Hours saved / rep", value: "7.5 hrs" },
      { label: "Pipeline velocity", value: "+30%" },
      { label: "Data sync uptime", value: "99.99%" },
      { label: "User adoption", value: "98%" }
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "OAuth2"]
  },
  {
    id: "verta",
    slug: "verta",
    title: "Verta Mobile Banking App",
    category: "design",
    categoryLabel: "FinTech · UI Design",
    client: "Verta Financial",
    industry: "FinTech",
    services: "Mobile UI/UX Design",
    timeline: "9 weeks",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=601&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=500&fit=crop",
    summary: "Next-generation digital banking experience with biometric security, budgeting widgets, and instant transfers.",
    challenge: "Gen-Z and millennial users found legacy banking apps sterile and anxiety-inducing when viewing financial balances.",
    approach: "Introduced smart visual spending insights, micro-animations for money transfers, and privacy-mode gestures for public environments.",
    result: "Organic referral rates tripled in the first 90 days following the app store launch.",
    quote: {
      text: "The visual polish and attention to micro-interactions completely transformed our brand perception.",
      author: "Chief Product Officer, Verta"
    },
    stats: [
      { label: "Organic referrals", value: "+210%" },
      { label: "Active daily users", value: "+84%" },
      { label: "Satisfaction score", value: "94/100" },
      { label: "Avg session duration", value: "4.2 min" }
    ],
    tech: ["Figma", "ProtoPie", "Design System", "iOS & Android Tokens"]
  },
  {
    id: "cloudra",
    slug: "cloudra",
    title: "Cloudra Brand Identity",
    category: "brand",
    categoryLabel: "Cloud Infrastructure · Branding",
    client: "Cloudra Systems",
    industry: "DevOps & Cloud",
    services: "Brand Strategy, Visual Identity",
    timeline: "6 weeks",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&h=600&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=500&fit=crop",
    summary: "Rebranding a Kubernetes orchestration platform to communicate developer empowerment and cloud reliability.",
    challenge: "Cloudra's previous identity looked generic and failed to convey the technical sophistication of their distributed systems.",
    approach: "Crafted a sharp geometric mark, vibrant developer-friendly color system, customized icon set, and technical diagramming guidelines.",
    result: "Boosted marketing conversion rates by 55% and established Cloudra as a category leader at major tech conferences.",
    quote: {
      text: "The new identity gave our developer community an emblem they are genuinely proud to put on their laptops.",
      author: "CEO, Cloudra"
    },
    stats: [
      { label: "Landing page conversion", value: "+55%" },
      { label: "Brand awareness", value: "+130%" },
      { label: "Community engagement", value: "+80%" },
      { label: "Investor interest", value: "4x" }
    ],
    tech: ["Brand Guidelines", "Vector Assets", "Figma", "Design Tokens"]
  },
  {
    id: "flowbit",
    slug: "flowbit",
    title: "Flowbit Automation Suite",
    category: "dev",
    categoryLabel: "Productivity SaaS · Development",
    client: "Flowbit Corp",
    industry: "Workflow Automation",
    services: "Frontend & API Integration",
    timeline: "11 weeks",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&h=600&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=500&fit=crop",
    summary: "Visual drag-and-drop workflow canvas enabling non-technical teams to automate multi-step operations.",
    challenge: "Building a complex flowchart builder with real-time validation, branch logic, and undo/redo history without lagging.",
    approach: "Implemented a custom React Flow canvas engine with SVG-based render optimizations and optimistic execution previews.",
    result: "Users created over 250,000 active automation workflows within the first 6 months of general availability.",
    quote: {
      text: "Nexora solved tough technical canvas problems that our internal team had struggled with for two quarters.",
      author: "VP Engineering, Flowbit"
    },
    stats: [
      { label: "Workflows created", value: "250K+" },
      { label: "Activation rate", value: "+72%" },
      { label: "Canvas load time", value: "<150ms" },
      { label: "NPS score", value: "+68" }
    ],
    tech: ["React", "SVG Canvas", "Zustand", "TypeScript", "WebSockets"]
  },
  {
    id: "northpeak",
    slug: "northpeak",
    title: "Northpeak Consulting Portal",
    category: "design",
    categoryLabel: "Consulting · Web Design",
    client: "Northpeak Advisory",
    industry: "Management Consulting",
    services: "Information Architecture, Web Design",
    timeline: "7 weeks",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=600&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=500&fit=crop",
    summary: "Client engagement portal facilitating asynchronous strategic reviews, deliverables approval, and billing.",
    challenge: "Consulting partners were overwhelmed by chaotic email threads and fragmented document attachments.",
    approach: "Designed a clean, distraction-free client workspace featuring milestone trackers, feedback pins, and interactive decision trees.",
    result: "Reduced project milestone sign-off duration from 14 days down to 48 hours.",
    quote: {
      text: "Our clients frequently tell us our portal sets us miles apart from traditional consulting firms.",
      author: "Managing Partner, Northpeak"
    },
    stats: [
      { label: "Sign-off time", value: "−85%" },
      { label: "Client satisfaction", value: "98%" },
      { label: "Email clutter reduction", value: "−65%" },
      { label: "Onboarding speed", value: "3x" }
    ],
    tech: ["Figma", "React", "Next.js", "TailwindCSS"]
  }
];
