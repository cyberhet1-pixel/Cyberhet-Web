// export const blogData = [
//   {
//     id: "roadmap-reality",
//     slug: "roadmap-reality",
//     title: "How to Build a Product Roadmap That Survives Contact With Reality",
//     category: "Product Strategy",
//     summary: "Most roadmaps fall apart within a quarter. Here's the framework we use to keep ours adaptable without losing direction.",
//     author: "Daniel Hwang",
//     authorRole: "CEO & Co-Founder",
//     authorBio: "CEO & Co-Founder at Nexora. Previously led product teams at two YC-backed startups. Writes about product strategy and team building.",
//     authorAvatar: "https://i.pravatar.cc/160?img=8",
//     date: "June 2, 2026",
//     readTime: "7 min read",
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=500&fit=crop",
//     featured: true,
//     tags: ["Product Management", "Roadmapping", "Strategy"],
//     content: [
//       "Every product team has a roadmap. Very few have one that survives the first quarter unchanged — and that's actually fine, if the roadmap was built to flex. The problem is most aren't.",
//       "The classic roadmap is a list of features mapped to dates. It looks reassuring in a board meeting, but it treats every commitment as equally certain. When priorities shift — a competitor ships first, a key customer churns, an engineering estimate doubles — the whole document needs rework, and stakeholders lose trust in the next version too.",
//       "We've found the fix isn't more detail. It's restructuring the roadmap around confidence levels and outcomes rather than fixed dates and features.",
//       "Instead of a single timeline, we organize roadmaps into three horizons: 'Now' (committed, in active development), 'Next' (scoped and likely, but not yet started), and 'Later' (directional bets that need more validation). Each horizon carries a different level of detail and a different conversation with stakeholders.",
//       "A roadmap item that says 'Build CSV export' tells you what to build but not why. Reframe it as 'Reduce manual reporting time for enterprise admins' and suddenly the team has room to find the best solution — which might not be a CSV export at all. This framing also makes it far easier to deprioritize items honestly when something more impactful comes up.",
//       "Quarterly roadmap reviews are too infrequent to catch drift early and too frequent to justify a full re-plan each time. A lightweight monthly check — 30 minutes, three questions: what moved, what's blocked, what's new — keeps the roadmap honest without becoming a planning treadmill.",
//       "A roadmap's job isn't to predict the future perfectly — it's to give your team and stakeholders a shared, current understanding of priorities. Build yours so that being wrong about a date doesn't mean being wrong about direction."
//     ]
//   },
//   {
//     id: "design-system-decay",
//     slug: "design-system-decay",
//     title: "Why Your Design System Keeps Falling Apart",
//     category: "Design",
//     summary: "Three common reasons design systems decay — and how to structure yours to last across distributed product teams.",
//     author: "Priya Nair",
//     authorRole: "Head of Design",
//     authorBio: "Head of Design at Nexora. Leads design system architecture and user research for enterprise SaaS clients.",
//     authorAvatar: "https://i.pravatar.cc/160?img=47",
//     date: "May 24, 2026",
//     readTime: "5 min read",
//     image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=700&h=450&fit=crop",
//     featured: false,
//     tags: ["Design Systems", "Figma", "UI/UX"],
//     content: [
//       "Most design systems start with great fanfare. A team spends two months building Figma components, writes extensive documentation, and presents it all in an all-hands meeting. Six months later, engineers are writing custom CSS again and designers are detaching components.",
//       "Design systems fail when they are treated as static products rather than living infrastructure. If contributing a new variation requires four rounds of committee approval, people will simply bypass it.",
//       "To make your system resilient, link tokens directly to code repositories with automated sync, establish clear governance on when to extend vs when to fork, and treat deprecation as a normal, healthy part of the component lifecycle."
//     ]
//   },
//   {
//     id: "cutting-cloud-costs",
//     slug: "cutting-cloud-costs",
//     title: "A Practical Guide to Cutting Cloud Costs by 40%",
//     category: "Engineering",
//     summary: "The audit checklist and architectural refactors we run on every client infrastructure review to eliminate waste.",
//     author: "Marcus Lee",
//     authorRole: "Head of Engineering",
//     authorBio: "Head of Engineering at Nexora. Specializes in distributed systems, Kubernetes orchestration, and cloud optimization.",
//     authorAvatar: "https://i.pravatar.cc/160?img=52",
//     date: "May 18, 2026",
//     readTime: "9 min read",
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&h=450&fit=crop",
//     featured: false,
//     tags: ["DevOps", "AWS", "Cloud"],
//     content: [
//       "Overprovisioned Kubernetes nodes, unattached EBS volumes, forgotten staging environments, and unindexed database queries are the primary culprits behind runaway cloud invoices.",
//       "In this guide, we break down our proven 4-stage optimization playbook: telemetry collection, idle resource purging, auto-scaling policy tuning, and instance commitment planning.",
//       "By applying right-sizing and spot instances to non-critical background jobs, teams can consistently reclaim 35% to 50% of their monthly infrastructure bill without sacrificing performance."
//     ]
//   },
//   {
//     id: "onboarding-metrics",
//     slug: "onboarding-metrics",
//     title: "The Onboarding Metrics That Actually Predict Churn",
//     category: "Growth",
//     summary: "Forget vanity completion rates. Here are the leading behavioral signals that indicate whether a user will stick around.",
//     author: "Daniel Hwang",
//     authorRole: "CEO & Co-Founder",
//     authorBio: "CEO & Co-Founder at Nexora. Focuses on SaaS growth models, onboarding experiments, and unit economics.",
//     authorAvatar: "https://i.pravatar.cc/160?img=8",
//     date: "May 10, 2026",
//     readTime: "6 min read",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=450&fit=crop",
//     featured: false,
//     tags: ["Growth", "Onboarding", "Retention"],
//     content: [
//       "Just because a user finished a 5-step onboarding wizard doesn't mean they received value. In fact, many users simply click 'Next' as quickly as possible to get rid of the modal.",
//       "The true predictors of 90-day retention are 'Time to First Core Action' and 'Secondary Loop Triggering' within the first 72 hours.",
//       "We share how to build automated event funnels in PostHog or Mixpanel to isolate exactly where drop-offs happen and test lightweight nudges that rescue churn-prone cohorts."
//     ]
//   },
//   {
//     id: "remote-discovery-sprints",
//     slug: "remote-discovery-sprints",
//     title: "Running Discovery Sprints Remotely: A Step-by-Step Guide",
//     category: "Strategy",
//     summary: "How we replicate in-person workshop energy, creative alignment, and consensus across 9 timezones.",
//     author: "Daniel Hwang",
//     authorRole: "CEO & Co-Founder",
//     authorBio: "CEO & Co-Founder at Nexora. Passionate about remote-first operating systems and agile workflows.",
//     authorAvatar: "https://i.pravatar.cc/160?img=8",
//     date: "April 29, 2026",
//     readTime: "10 min read",
//     image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&h=450&fit=crop",
//     featured: false,
//     tags: ["Remote Work", "Sprint", "Agile"],
//     content: [
//       "Remote workshops don't fail because people aren't in the same room. They fail when organizers try to force 8-hour Zoom sessions instead of combining asynchronous preparation with punchy 60-minute sync checkpoints.",
//       "Here is the exact Miro framework and schedule template we use with our global clients to condense weeks of debate into a decisive 5-day discovery sprint."
//     ]
//   },
//   {
//     id: "accessibility-audit-checklist",
//     slug: "accessibility-audit-checklist",
//     title: "Accessibility Isn't Optional: A Practical Audit Checklist",
//     category: "Design",
//     summary: "A 20-point practical WCAG checklist we apply before every product handoff to guarantee compliance and inclusivity.",
//     author: "Priya Nair",
//     authorRole: "Head of Design",
//     authorBio: "Head of Design at Nexora. Advocate for universal design standards and accessible web experiences.",
//     authorAvatar: "https://i.pravatar.cc/160?img=47",
//     date: "April 15, 2026",
//     readTime: "6 min read",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&h=450&fit=crop",
//     featured: false,
//     tags: ["Accessibility", "WCAG", "Design"],
//     content: [
//       "Web accessibility (a11y) is often treated as a last-minute chore right before launching a site. In reality, accessible architecture improves keyboard navigation, SEO, and overall UX for every single user.",
//       "Check contrast ratios, semantic landmarks, ARIA states, screen reader flow, and interactive tap targets early to build an inclusive application from day zero."
//     ]
//   }
// ];

export const blogData = [
  {
    id: "roadmap-reality",
    slug: "roadmap-reality",
    title: "How to Build a Product Roadmap That Survives Contact With Reality",
    category: "Product Strategy",
    summary:
      "Learn how to create an adaptable product roadmap that keeps business goals, customer needs and development priorities aligned.",
    author: "CyberHet Team",
    authorRole: "Technology Team",
    authorBio:
      "The CyberHet team shares practical insights about software development, product strategy and business technology.",
    authorAvatar: "/sandeep3.jpg",
    date: "October 12, 2026",
    readTime: "7 min read",
    image: "/Product Roadmap Planning Session.png",
    featured: true,
    tags: ["Product Management", "Roadmapping", "Strategy"],
    content: [
      "Every product team needs a roadmap, but a useful roadmap should adapt when new information changes priorities. The goal is to provide direction without pretending that every decision or delivery date is certain.",
      "Traditional roadmaps often list features against fixed dates. When customer needs change, technical work takes longer than expected or business priorities shift, the entire plan may need to be revised.",
      "A practical alternative is to organize work around confidence levels and outcomes instead of treating every feature as a guaranteed commitment.",
      "Divide priorities into three horizons: Now for active work, Next for items being prepared, and Later for ideas that need more validation. Each horizon should have an appropriate level of detail.",
      "Instead of describing a task only as 'Build CSV export', describe the intended outcome, such as helping administrators reduce manual reporting. This gives the team room to explore the best solution.",
      "Review the roadmap regularly. Discuss what has changed, what is blocked and what new information may affect priorities. Keep stakeholders informed when assumptions or timelines change.",
      "A roadmap is a shared guide to priorities, not a perfect prediction of the future. Build one that can change while keeping the team focused on meaningful business outcomes."
    ]
  },
  {
    id: "design-system-decay",
    slug: "design-system-decay",
    title: "Why Your Design System Keeps Falling Apart",
    category: "UI/UX Design",
    summary:
      "Explore common design-system problems and learn how reusable components, consistent design tokens and documentation help teams maintain consistency.",
    author: "CyberHet Team",
    authorRole: "Technology Team",
    authorBio:
      "The CyberHet team shares practical insights about software development, product strategy and business technology.",
    authorAvatar: "/sandeep2.jpg",
    date: "October 12, 2026",
    readTime: "5 min read",
    image: "/Collaborative Design System Studio.png",
    featured: false,
    tags: ["Design Systems", "Figma", "UI/UX"],
    content: [
      "A design system combines reusable interface components, design tokens and guidelines. It helps designers and developers build consistent experiences across pages and products.",
      "Design systems can become inconsistent when components are difficult to find, documentation is outdated or teams repeatedly create their own alternatives.",
      "Start with frequently used elements such as buttons, form fields, navigation, cards and typography. Define their purpose, variants and expected behavior.",
      "Keep design and development aligned by reviewing component changes together and documenting how components should be used.",
      "A design system should evolve with the product. Regular maintenance, feedback and clear contribution rules help teams reuse components instead of rebuilding them."
    ]
  },
  {
    id: "cutting-cloud-costs",
    slug: "cutting-cloud-costs",
    title: "A Practical Guide to Managing Cloud Infrastructure Costs",
    category: "Cloud & DevOps",
    summary:
      "Learn how to review cloud usage, identify idle resources and make infrastructure decisions based on measured requirements.",
    author: "CyberHet Team",
    authorRole: "Technology Team",
    authorBio:
      "The CyberHet team shares practical insights about software development, product strategy and business technology.",
    authorAvatar: "/sandeep4.jpg",
    date: "October 12, 2026",
    readTime: "8 min read",
    image: "/Cloud Cost Optimization Dashboard.png",
    featured: false,
    tags: ["DevOps", "Cloud Computing", "Infrastructure"],
    content: [
      "Cloud costs can become difficult to manage when applications use multiple services, environments and storage resources.",
      "Begin by reviewing billing reports and grouping costs by application, environment and service. This makes it easier to understand where the budget is being used.",
      "Look for idle virtual machines, unused storage, oversized resources and development environments that run longer than necessary.",
      "Measure CPU, memory, network traffic and response times before reducing infrastructure capacity. Cutting resources without understanding workload requirements can affect reliability.",
      "Set budgets and usage alerts, review costs regularly and document changes. The potential savings depend on your current infrastructure, workload and business requirements.",
      "Cloud optimization should balance cost, performance, security and availability rather than focus on the lowest possible bill."
    ]
  },
  {
    id: "onboarding-metrics",
    slug: "onboarding-metrics",
    title: "The Onboarding Metrics That Help You Understand User Retention",
    category: "Product Analytics",
    summary:
      "Discover useful onboarding metrics that help product teams understand where users struggle and whether they reach important product features.",
    author: "CyberHet Team",
    authorRole: "Technology Team",
    authorBio:
      "The CyberHet team shares practical insights about software development, product strategy and business technology.",
    authorAvatar: "/sandeep6.jpg",
    date: "October 12, 2026",
    readTime: "6 min read",
    image: "/User Onboarding Analytics Workspace.png",
    featured: false,
    tags: ["Analytics", "Onboarding", "User Retention"],
    content: [
      "Completing an onboarding checklist does not necessarily mean a user understands a product or has received value from it.",
      "Track meaningful actions that indicate progress, such as creating a first project, inviting a teammate or successfully using a core feature.",
      "Measure how long users take to reach their first important action and identify the steps where they frequently stop.",
      "Use event analytics and funnel reports to investigate drop-offs. Collect only the information you need and respect applicable privacy requirements.",
      "Test improvements with a clear hypothesis and compare results over an appropriate period. Metrics can reveal patterns, but further research may be needed to understand why users behave in a particular way."
    ]
  },
  {
    id: "remote-discovery-sprints",
    slug: "remote-discovery-sprints",
    title: "Running Product Discovery Workshops Remotely",
    category: "Product Strategy",
    summary:
      "Learn how to plan remote discovery workshops, align stakeholders, investigate user problems and prioritize product ideas.",
    author: "CyberHet Team",
    authorRole: "Technology Team",
    authorBio:
      "The CyberHet team shares practical insights about software development, product strategy and business technology.",
    authorAvatar: "/sandeep3.jpg",
    date: "October 12, 2026",
    readTime: "7 min read",
    image: "/Remote Product Discovery Workshop.png",
    featured: false,
    tags: ["Product Discovery", "Remote Work", "Planning"],
    content: [
      "Remote product discovery works best when participants understand the problem and expected outcomes before the meeting begins.",
      "Share background information in advance, including user feedback, current workflow diagrams and important business constraints.",
      "Use focused sessions to map user problems, explore possible solutions and identify assumptions that need testing.",
      "Finish each workshop with documented decisions, unresolved questions, assigned owners and clear next steps.",
      "After the workshop, validate important assumptions through user interviews, prototypes or small experiments before committing to a large implementation.",
      "Good discovery is not about generating the largest number of ideas. It is about identifying the most useful problems to solve and gathering evidence to guide decisions."
    ]
  },
  {
    id: "accessibility-audit-checklist",
    slug: "accessibility-audit-checklist",
    title: "Website Accessibility: A Practical Audit Checklist",
    category: "Web Accessibility",
    summary:
      "Review keyboard navigation, image descriptions, form labels, color contrast and other accessibility essentials for business websites.",
    author: "CyberHet Team",
    authorRole: "Technology Team",
    authorBio:
      "The CyberHet team shares practical insights about software development, product strategy and business technology.",
    authorAvatar: "/sandeep2.jpg",
    date: "October 12, 2026",
    readTime: "6 min read",
    image: "/Accessible Web Audit Workspace.png",
    featured: false,
    tags: ["Accessibility", "WCAG", "Web Development"],
    content: [
      "Website accessibility helps people with different abilities use digital products. It should be considered throughout design and development rather than only before launch.",
      "Check whether important controls can be reached and operated using a keyboard. Make sure the current keyboard focus is visible.",
      "Give informative images meaningful alternative text. Decorative images should generally use an empty alt attribute so assistive technology can skip them.",
      "Use clear form labels, helpful error messages, descriptive links and sufficient text contrast. Do not rely on color alone to communicate important information.",
      "Combine automated accessibility checks with manual keyboard testing and, where possible, assistive-technology testing.",
      "An accessibility audit can help identify issues, but it does not automatically guarantee compliance. Continue testing as the website changes."
    ]
  }
];


export const blogCategories = [
  { name: "Product Strategy", count: 12 },
  { name: "Design", count: 18 },
  { name: "Engineering", count: 24 },
  { name: "Growth", count: 9 },
  { name: "Company News", count: 5 }
];

export const popularTags = [
  "UX Research", "Figma", "React", "SaaS", "DevOps", "Branding", "Onboarding"
];
