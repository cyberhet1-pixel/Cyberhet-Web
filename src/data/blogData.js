export const blogData = [
  {
    id: "roadmap-reality",
    slug: "roadmap-reality",
    title: "How to Build a Product Roadmap That Survives Contact With Reality",
    category: "Product Strategy",
    summary: "Most roadmaps fall apart within a quarter. Here's the framework we use to keep ours adaptable without losing direction.",
    author: "Daniel Hwang",
    authorRole: "CEO & Co-Founder",
    authorBio: "CEO & Co-Founder at Nexora. Previously led product teams at two YC-backed startups. Writes about product strategy and team building.",
    authorAvatar: "https://i.pravatar.cc/160?img=8",
    date: "June 2, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=500&fit=crop",
    featured: true,
    tags: ["Product Management", "Roadmapping", "Strategy"],
    content: [
      "Every product team has a roadmap. Very few have one that survives the first quarter unchanged — and that's actually fine, if the roadmap was built to flex. The problem is most aren't.",
      "The classic roadmap is a list of features mapped to dates. It looks reassuring in a board meeting, but it treats every commitment as equally certain. When priorities shift — a competitor ships first, a key customer churns, an engineering estimate doubles — the whole document needs rework, and stakeholders lose trust in the next version too.",
      "We've found the fix isn't more detail. It's restructuring the roadmap around confidence levels and outcomes rather than fixed dates and features.",
      "Instead of a single timeline, we organize roadmaps into three horizons: 'Now' (committed, in active development), 'Next' (scoped and likely, but not yet started), and 'Later' (directional bets that need more validation). Each horizon carries a different level of detail and a different conversation with stakeholders.",
      "A roadmap item that says 'Build CSV export' tells you what to build but not why. Reframe it as 'Reduce manual reporting time for enterprise admins' and suddenly the team has room to find the best solution — which might not be a CSV export at all. This framing also makes it far easier to deprioritize items honestly when something more impactful comes up.",
      "Quarterly roadmap reviews are too infrequent to catch drift early and too frequent to justify a full re-plan each time. A lightweight monthly check — 30 minutes, three questions: what moved, what's blocked, what's new — keeps the roadmap honest without becoming a planning treadmill.",
      "A roadmap's job isn't to predict the future perfectly — it's to give your team and stakeholders a shared, current understanding of priorities. Build yours so that being wrong about a date doesn't mean being wrong about direction."
    ]
  },
  {
    id: "design-system-decay",
    slug: "design-system-decay",
    title: "Why Your Design System Keeps Falling Apart",
    category: "Design",
    summary: "Three common reasons design systems decay — and how to structure yours to last across distributed product teams.",
    author: "Priya Nair",
    authorRole: "Head of Design",
    authorBio: "Head of Design at Nexora. Leads design system architecture and user research for enterprise SaaS clients.",
    authorAvatar: "https://i.pravatar.cc/160?img=47",
    date: "May 24, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=700&h=450&fit=crop",
    featured: false,
    tags: ["Design Systems", "Figma", "UI/UX"],
    content: [
      "Most design systems start with great fanfare. A team spends two months building Figma components, writes extensive documentation, and presents it all in an all-hands meeting. Six months later, engineers are writing custom CSS again and designers are detaching components.",
      "Design systems fail when they are treated as static products rather than living infrastructure. If contributing a new variation requires four rounds of committee approval, people will simply bypass it.",
      "To make your system resilient, link tokens directly to code repositories with automated sync, establish clear governance on when to extend vs when to fork, and treat deprecation as a normal, healthy part of the component lifecycle."
    ]
  },
  {
    id: "cutting-cloud-costs",
    slug: "cutting-cloud-costs",
    title: "A Practical Guide to Cutting Cloud Costs by 40%",
    category: "Engineering",
    summary: "The audit checklist and architectural refactors we run on every client infrastructure review to eliminate waste.",
    author: "Marcus Lee",
    authorRole: "Head of Engineering",
    authorBio: "Head of Engineering at Nexora. Specializes in distributed systems, Kubernetes orchestration, and cloud optimization.",
    authorAvatar: "https://i.pravatar.cc/160?img=52",
    date: "May 18, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&h=450&fit=crop",
    featured: false,
    tags: ["DevOps", "AWS", "Cloud"],
    content: [
      "Overprovisioned Kubernetes nodes, unattached EBS volumes, forgotten staging environments, and unindexed database queries are the primary culprits behind runaway cloud invoices.",
      "In this guide, we break down our proven 4-stage optimization playbook: telemetry collection, idle resource purging, auto-scaling policy tuning, and instance commitment planning.",
      "By applying right-sizing and spot instances to non-critical background jobs, teams can consistently reclaim 35% to 50% of their monthly infrastructure bill without sacrificing performance."
    ]
  },
  {
    id: "onboarding-metrics",
    slug: "onboarding-metrics",
    title: "The Onboarding Metrics That Actually Predict Churn",
    category: "Growth",
    summary: "Forget vanity completion rates. Here are the leading behavioral signals that indicate whether a user will stick around.",
    author: "Daniel Hwang",
    authorRole: "CEO & Co-Founder",
    authorBio: "CEO & Co-Founder at Nexora. Focuses on SaaS growth models, onboarding experiments, and unit economics.",
    authorAvatar: "https://i.pravatar.cc/160?img=8",
    date: "May 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=450&fit=crop",
    featured: false,
    tags: ["Growth", "Onboarding", "Retention"],
    content: [
      "Just because a user finished a 5-step onboarding wizard doesn't mean they received value. In fact, many users simply click 'Next' as quickly as possible to get rid of the modal.",
      "The true predictors of 90-day retention are 'Time to First Core Action' and 'Secondary Loop Triggering' within the first 72 hours.",
      "We share how to build automated event funnels in PostHog or Mixpanel to isolate exactly where drop-offs happen and test lightweight nudges that rescue churn-prone cohorts."
    ]
  },
  {
    id: "remote-discovery-sprints",
    slug: "remote-discovery-sprints",
    title: "Running Discovery Sprints Remotely: A Step-by-Step Guide",
    category: "Strategy",
    summary: "How we replicate in-person workshop energy, creative alignment, and consensus across 9 timezones.",
    author: "Daniel Hwang",
    authorRole: "CEO & Co-Founder",
    authorBio: "CEO & Co-Founder at Nexora. Passionate about remote-first operating systems and agile workflows.",
    authorAvatar: "https://i.pravatar.cc/160?img=8",
    date: "April 29, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&h=450&fit=crop",
    featured: false,
    tags: ["Remote Work", "Sprint", "Agile"],
    content: [
      "Remote workshops don't fail because people aren't in the same room. They fail when organizers try to force 8-hour Zoom sessions instead of combining asynchronous preparation with punchy 60-minute sync checkpoints.",
      "Here is the exact Miro framework and schedule template we use with our global clients to condense weeks of debate into a decisive 5-day discovery sprint."
    ]
  },
  {
    id: "accessibility-audit-checklist",
    slug: "accessibility-audit-checklist",
    title: "Accessibility Isn't Optional: A Practical Audit Checklist",
    category: "Design",
    summary: "A 20-point practical WCAG checklist we apply before every product handoff to guarantee compliance and inclusivity.",
    author: "Priya Nair",
    authorRole: "Head of Design",
    authorBio: "Head of Design at Nexora. Advocate for universal design standards and accessible web experiences.",
    authorAvatar: "https://i.pravatar.cc/160?img=47",
    date: "April 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&h=450&fit=crop",
    featured: false,
    tags: ["Accessibility", "WCAG", "Design"],
    content: [
      "Web accessibility (a11y) is often treated as a last-minute chore right before launching a site. In reality, accessible architecture improves keyboard navigation, SEO, and overall UX for every single user.",
      "Check contrast ratios, semantic landmarks, ARIA states, screen reader flow, and interactive tap targets early to build an inclusive application from day zero."
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
