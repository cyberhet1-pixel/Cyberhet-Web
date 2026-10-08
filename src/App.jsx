import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import { useScrollReveal } from './hooks/useScrollReveal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Portfolio from './pages/Portfolio';
import PortfolioSingle from './pages/PortfolioSingle';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

export default function App() {
  // Activate lightweight scroll reveal on page changes
  useScrollReveal();

  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legacy / Direct HTML route redirects */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/about.html" element={<Navigate to="/about" replace />} />
          <Route path="/services.html" element={<Navigate to="/services" replace />} />
          <Route path="/service-details.html" element={<Navigate to="/services/ui-ux-design" replace />} />
          <Route path="/portfolio.html" element={<Navigate to="/portfolio" replace />} />
          <Route path="/portfolio-single.html" element={<Navigate to="/portfolio/payflow" replace />} />
          <Route path="/blog.html" element={<Navigate to="/blog" replace />} />
          <Route path="/blog-details.html" element={<Navigate to="/blog/roadmap-reality" replace />} />
          <Route path="/pricing.html" element={<Navigate to="/pricing" replace />} />
          <Route path="/contact.html" element={<Navigate to="/contact" replace />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
