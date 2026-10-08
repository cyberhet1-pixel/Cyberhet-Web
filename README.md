# Nexora — React.js Application

A modern, high-performance React (Vite) single-page application converted from the Nexora Bootstrap 5 SaaS & Agency template.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000` with fast Hot Module Replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
Generates optimized, minified production assets in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
d:\Cyberhet\nexora-1.0.0\
├── public/                 # Static public assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx      # Sticky navbar with mobile menu & active links
│   │   ├── Footer.jsx      # Responsive footer with interactive newsletter
│   │   ├── PageHeader.jsx  # Reusable banner header with breadcrumbs
│   │   ├── BackToTop.jsx   # Smooth scroll-to-top floating button
│   │   └── ScrollToTop.jsx # Route-change scroll position reset
│   ├── data/               # Structured data stores
│   │   ├── servicesData.js # Service offerings, inclusions, process & FAQs
│   │   ├── portfolioData.js# Case studies with metrics, stats & tech stacks
│   │   ├── blogData.js     # Articles, tags, categories & markdown content
│   │   ├── pricingData.js  # Retainer plans, yearly discount & feature comparison
│   │   ├── teamData.js     # Leadership team & core values
│   │   └── testimonialsData.js # Client feedback & partner logos
│   ├── hooks/
│   │   └── useScrollReveal.js # IntersectionObserver scroll reveal animations
│   ├── pages/              # Route views
│   │   ├── Home.jsx        # Landing page with hero, metrics, services, social proof
│   │   ├── About.jsx       # Studio story, values, team & stats
│   │   ├── Services.jsx    # Full capability catalog & engagement models
│   │   ├── ServiceDetails.jsx # In-depth service view with process & FAQs
│   │   ├── Portfolio.jsx   # Case studies with live category filter
│   │   ├── PortfolioSingle.jsx # Single project case study with metrics & prev/next
│   │   ├── Blog.jsx        # Insights hub with live search & category filters
│   │   ├── BlogDetails.jsx # Post view with comments & author bio
│   │   ├── Pricing.jsx     # Monthly/Yearly toggle, feature comparison & FAQs
│   │   └── Contact.jsx     # Validated project inquiry form & map
│   ├── custom.css          # Design system & CSS custom properties
│   ├── App.jsx             # React Router setup & layout
│   └── main.jsx            # React root entry point
├── index.html              # HTML shell & font definitions
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies & scripts
```

---

## ⚡ Key Features Added in React

- **React Router SPA**: Instant transitions across all 10 pages without full-page reloads.
- **Dynamic Case Study & Service Pages**: Navigate seamlessly to `/services/:id` and `/portfolio/:id`.
- **Interactive Portfolio Filter**: Filter projects by *Product Design*, *Development*, or *Branding* in real-time.
- **Interactive Pricing Toggle**: Switch between *Monthly* and *Yearly* billing with dynamic 15% discount calculation.
- **Live Blog Search & Filter**: Filter articles by keyword or category instantly as you type.
- **Form State Management**: Contact and comment forms feature validation, loading spinners, and success confirmations.
- **Scroll Reveal Animations**: Lightweight `IntersectionObserver` hook adds smooth reveal transitions as elements enter viewport.
- **Responsive Sticky Header**: Smooth shadow & blur backdrop transition on scroll, with animated hamburger toggle for mobile devices.
