export const servicesData = [
  {
    id: "product-strategy",
    title: "Product Strategy",
    slug: "product-strategy",
    icon: "bi-bar-chart-line",
    colorClass: "icon-box-primary",
    shortDesc: "User research, competitive analysis and roadmap planning that aligns your team around what matters most.",
    fullDesc: "We help product teams uncover high-impact opportunities, validate market demand, and turn fuzzy visions into prioritized, actionable roadmaps that survive contact with reality.",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=500&fit=crop",
    included: [
      { icon: "bi-search", title: "Market & User Research", desc: "Qualitative interviews, surveys and competitive benchmarking." },
      { icon: "bi-diagram-3", title: "Product Roadmapping", desc: "Outcome-based milestones and confidence-rated sprint planning." },
      { icon: "bi-graph-up-arrow", title: "Growth & Retention Modeling", desc: "Funnel diagnostics, onboarding audits and core KPI frameworks." },
      { icon: "bi-layers", title: "Feature Prioritization", desc: "Frameworks (RICE, Kano) to eliminate opinion-driven roadmaps." }
    ],
    process: [
      { step: "01", title: "Audit & Alignment", desc: "Deep dive into your existing metrics, team capacity and market position." },
      { step: "02", title: "User Discovery", desc: "Direct conversations with power users, churned users and prospective buyers." },
      { step: "03", title: "Opportunity Mapping", desc: "Synthesizing research into clear strategic bets and problem statements." },
      { step: "04", title: "Actionable Roadmap", desc: "A phased delivery plan with success metrics and resource estimates." }
    ],
    faqs: [
      { q: "How long does a product strategy sprint take?", a: "Most strategy sprints run between 2 to 4 weeks depending on scope, involving weekly working sessions and stakeholder synthesis." },
      { q: "What deliverables will we receive?", a: "You receive an executive summary, complete user interview transcripts, an interactive opportunity map, and a prioritized roadmap in Notion or Linear." },
      { q: "Can you help our internal team execute the roadmap?", a: "Yes, our engineering and design pods frequently transition directly into execution mode following the strategy phase." }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: "bi-palette",
    colorClass: "icon-box-secondary",
    shortDesc: "Wireframes, interactive prototypes and a documented design system your team can scale with.",
    fullDesc: "Good design isn't decoration — it's the difference between a user completing a checkout flow or abandoning it. Our UI/UX design service covers everything from early research to a fully documented design system, handed off in developer-ready Figma files.",
    heroImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&h=500&fit=crop",
    included: [
      { icon: "bi-search", title: "User Research", desc: "Interviews, surveys and usability testing." },
      { icon: "bi-diagram-3", title: "Information Architecture", desc: "Sitemaps and user-flow diagrams." },
      { icon: "bi-pencil-square", title: "Wireframing", desc: "Low-fidelity flows for rapid validation." },
      { icon: "bi-layers", title: "Design Systems", desc: "Reusable components, tokens and documentation." }
    ],
    process: [
      { step: "01", title: "Research & Audit", desc: "We review analytics, run usability tests and interview your users to find friction points." },
      { step: "02", title: "Wireframes", desc: "Structured low-fidelity flows reviewed with stakeholders before visual design starts." },
      { step: "03", title: "Visual Design", desc: "High-fidelity screens built on a documented design system and component library." },
      { step: "04", title: "Handoff & Support", desc: "Developer-ready files, specs, and 30 days of post-handoff design support." }
    ],
    faqs: [
      { q: "How long does a typical design project take?", a: "A full redesign typically runs 6–10 weeks depending on scope, with weekly review checkpoints." },
      { q: "Do you provide developer handoff files?", a: "Yes — every project includes a structured Figma file with components, tokens and annotations ready for engineering." },
      { q: "Can you work within our existing brand guidelines?", a: "Absolutely. We adapt to your existing design tokens or help expand them into a complete system." }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    slug: "web-development",
    icon: "bi-code-slash",
    colorClass: "icon-box-success",
    shortDesc: "Production-grade front-end and back-end engineering using modern, maintainable frameworks.",
    fullDesc: "We build modern, scalable web applications and SaaS platforms with clean architecture, high test coverage, and blazing-fast performance. From React and Next.js frontends to resilient APIs and cloud backends.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=500&fit=crop",
    included: [
      { icon: "bi-laptop", title: "Modern Front-end", desc: "React, Next.js, TypeScript, Tailwind/Bootstrap with high responsiveness." },
      { icon: "bi-hdd-network", title: "Robust APIs & Backends", desc: "Node.js, Python, GraphQL, and RESTful architectures." },
      { icon: "bi-database-check", title: "Database Architecture", desc: "PostgreSQL, MongoDB, Redis caching, and optimized data schemas." },
      { icon: "bi-shield-check", title: "Code Quality & Testing", desc: "Automated unit, integration, and end-to-end tests built in." }
    ],
    process: [
      { step: "01", title: "Technical Architecture", desc: "Stack selection, schema design and API contracts defined upfront." },
      { step: "02", title: "Sprint-Based Engineering", desc: "Two-week agile sprints with working staging builds deployed continuously." },
      { step: "03", title: "Rigorous QA & Testing", desc: "Automated test suites, security checks and cross-device testing." },
      { step: "04", title: "Launch & CI/CD", desc: "Zero-downtime deployment pipelines with full telemetry and monitoring." }
    ],
    faqs: [
      { q: "Which tech stacks do you specialize in?", a: "We specialize in React, Next.js, Node.js, TypeScript, Python, PostgreSQL, and AWS/GCP cloud environments." },
      { q: "Do we own the code?", a: "100%. All repositories, code, architecture documentation, and assets belong entirely to you." },
      { q: "Do you offer post-launch maintenance?", a: "Yes, we offer ongoing engineering retainers for continuous feature delivery and maintenance." }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    icon: "bi-cloud-arrow-up",
    colorClass: "icon-box-primary",
    shortDesc: "Infrastructure-as-code, CI/CD pipelines and observability so your platform scales reliably.",
    fullDesc: "Ensure maximum uptime, bank-grade security, and automated deployments with cloud infrastructure tailored for high-growth SaaS applications.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=500&fit=crop",
    included: [
      { icon: "bi-gear-wide-connected", title: "CI/CD Pipelines", desc: "Automated testing, linting, and continuous deployments." },
      { icon: "bi-cloud-check", title: "Cloud Architecture", desc: "AWS, GCP, Terraform infrastructure-as-code and containerization." },
      { icon: "bi-activity", title: "Observability & Monitoring", desc: "Datadog, Prometheus, Grafana, and automated incident alerting." },
      { icon: "bi-lock", title: "Cost & Security Optimization", desc: "Slashing cloud waste while enforcing strict IAM and VPC standards." }
    ],
    process: [
      { step: "01", title: "Infra Audit", desc: "Evaluating current cloud spend, security posture, and bottlenecks." },
      { step: "02", title: "IaC Implementation", desc: "Codifying infrastructure with Terraform or CloudFormation." },
      { step: "03", title: "Pipeline Modernization", desc: "Setting up automated preview environments and deployment gates." },
      { step: "04", title: "Observability Setup", desc: "Configuring real-time dashboards, alerting, and log aggregation." }
    ],
    faqs: [
      { q: "Can you help reduce our AWS or GCP monthly bill?", a: "Yes, our typical infrastructure audit yields 25%–45% reductions in monthly cloud spend." },
      { q: "How do you handle zero-downtime deploys?", a: "We configure blue/green and canary release strategies with automated rollback triggers." }
    ]
  },
  {
    id: "growth-marketing",
    title: "Growth Marketing",
    slug: "growth-marketing",
    icon: "bi-megaphone",
    colorClass: "icon-box-secondary",
    shortDesc: "SEO, content and lifecycle campaigns engineered to lower CAC and increase retention.",
    fullDesc: "Accelerate your customer acquisition and reduce churn with quantitative growth experiments, technical SEO, and automated email lifecycle flows.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=500&fit=crop",
    included: [
      { icon: "bi-search", title: "Technical SEO", desc: "Core Web Vitals tuning, programmatic pages, and structured schema." },
      { icon: "bi-funnel", title: "Conversion Rate Optimization", desc: "A/B testing landing pages and checkout flows to maximize conversions." },
      { icon: "bi-envelope-check", title: "Lifecycle Email Flows", desc: "Onboarding sequences, win-back drip campaigns and churn prevention." },
      { icon: "bi-pie-chart", title: "Attribution Modeling", desc: "Clear analytics setup in PostHog, Mixpanel, and Google Analytics 4." }
    ],
    process: [
      { step: "01", title: "Funnel Analysis", desc: "Pinpointing drop-offs across user acquisition and activation stages." },
      { step: "02", title: "Growth Hypothesis", desc: "Prioritizing experiments by expected uplift vs implementation effort." },
      { step: "03", title: "Rapid Execution", desc: "Shipping landing pages, messaging tweaks, and onboarding updates." },
      { step: "04", title: "Iterate & Scale", desc: "Doubling down on winning experiments and automating workflows." }
    ],
    faqs: [
      { q: "What analytics tools do you work with?", a: "We work with PostHog, Mixpanel, Amplitude, GA4, HubSpot, and Customer.io." }
    ]
  },
  {
    id: "qa-security-audits",
    title: "QA & Security Audits",
    slug: "qa-security-audits",
    icon: "bi-shield-check",
    colorClass: "icon-box-success",
    shortDesc: "Automated test suites, penetration testing and compliance reviews before you ship.",
    fullDesc: "Protect your customer trust with thorough security audits, vulnerability scanning, and end-to-end automated test suites before major releases.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=500&fit=crop",
    included: [
      { icon: "bi-bug", title: "Automated E2E Testing", desc: "Playwright and Cypress suites guarding critical user paths." },
      { icon: "bi-shield-shaded", title: "Penetration Testing", desc: "Simulated attacks identifying OWASP Top 10 vulnerabilities." },
      { icon: "bi-clipboard-check", title: "Compliance Readiness", desc: "SOC 2, GDPR, and HIPAA technical gap analysis." },
      { icon: "bi-speedometer2", title: "Load & Stress Testing", desc: "Ensuring your application holds up under sudden traffic spikes." }
    ],
    process: [
      { step: "01", title: "Threat Modeling", desc: "Mapping potential attack vectors across endpoints and data stores." },
      { step: "02", title: "Automated Scanning", desc: "Running static and dynamic code vulnerability scanners." },
      { step: "03", title: "Manual Exploitation", desc: "Simulating targeted attacks against business logic and auth flows." },
      { step: "04", title: "Remediation Support", desc: "Providing exact code patches and verifying fixes before sign-off." }
    ],
    faqs: [
      { q: "Will we get an audit report suitable for enterprise buyers?", a: "Yes, we produce an executive summary and detailed remediation report accepted by vendor risk teams." }
    ]
  }
];
