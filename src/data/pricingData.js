export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "For early-stage teams validating an MVP.",
    monthlyPrice: 4500,
    yearlyPrice: 3825,
    featured: false,
    badge: null,
    buttonText: "Get Started",
    buttonClass: "btn-light-custom",
    features: [
      { text: "1 dedicated designer", included: true },
      { text: "Up to 40 hours/month", included: true },
      { text: "Weekly progress demos", included: true },
      { text: "Shared Slack channel", included: true },
      { text: "Dedicated engineer", included: false },
      { text: "Priority support", included: false }
    ]
  },
  {
    id: "growth",
    name: "Growth",
    description: "For scaling teams shipping every sprint.",
    monthlyPrice: 9500,
    yearlyPrice: 8075,
    featured: true,
    badge: "Most Popular",
    buttonText: "Get Started",
    buttonClass: "btn-primary",
    features: [
      { text: "1 designer + 1 engineer", included: true },
      { text: "Up to 100 hours/month", included: true },
      { text: "Twice-weekly demos", included: true },
      { text: "Shared Slack channel", included: true },
      { text: "Priority support (24h)", included: true },
      { text: "Dedicated QA engineer", included: false }
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For complex, multi-team product organizations.",
    monthlyPrice: null,
    yearlyPrice: null,
    customPriceLabel: "Custom",
    featured: false,
    badge: null,
    buttonText: "Talk to Us",
    buttonClass: "btn-light-custom",
    features: [
      { text: "Full pod (design + dev + QA)", included: true },
      { text: "Unlimited hours", included: true },
      { text: "Daily standups", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Priority support (4h)", included: true },
      { text: "Custom SLAs & contracts", included: true }
    ]
  }
];

export const pricingFaqs = [
  {
    q: "Can we switch or cancel our plan anytime?",
    a: "Yes. All retainer plans run month-to-month with a 14-day notice period to cancel or switch tiers. Unused hours do not roll over, but we proactively flag capacity mid-month so you always get full value."
  },
  {
    q: "What is the difference between a retainer and a project?",
    a: "A project has a defined scope, fixed price, and fixed deadline — best when you know exactly what you want built. A retainer gives you dedicated recurring capacity that flexes to whatever priorities your backlog has each sprint."
  },
  {
    q: "How quickly can our team get started?",
    a: "Most engagements kick off within 5 to 7 business days of signing. We spend the first two days running an onboarding workshop and setting up Slack, Figma and repo access."
  },
  {
    q: "Do you sign NDAs before initial discussions?",
    a: "Yes, we are happy to sign standard mutual non-disclosure agreements before our first discovery call."
  },
  {
    q: "What payment methods and currencies do you support?",
    a: "We support ACH wire transfers, Stripe credit card processing, and invoicing in USD, EUR, and GBP with standard Net-15 or Net-30 payment terms."
  }
];
