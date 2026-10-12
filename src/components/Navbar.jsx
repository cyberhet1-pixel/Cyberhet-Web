import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar({ className = '' }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile navigation on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleNav = () => {
    setIsOpen(prev => !prev);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  // Determine if navbar is currently over a blue/dark header or has a blue background class
  const isSubPage = location.pathname !== '/';
  const isOverBlueHeader = isSubPage && !scrolled;
  const hasBlueClass = className.includes('bg-primary') ||
                       className.includes('bg-navy') ||
                       className.includes('bg-dark') ||
                       className.includes('navbar-dark') ||
                       className.includes('navbar-blue') ||
                       className.includes('bg-gradient-primary') ||
                       className.includes('bg-gradient-dark');
  const isBlueBg = hasBlueClass || isOverBlueHeader;

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-nexora fixed-top ${scrolled ? 'scrolled' : ''} ${isBlueBg ? 'navbar-on-blue' : ''} ${className}`}
    >
      <div className="container">
        {/* <Link className="navbar-brand navbar-brand-custom" to="/" onClick={closeNav}>
          Nexora<span>.</span>
        </Link> */}

<Link
  className="navbar-brand navbar-brand-custom"
  to="/"
  onClick={closeNav}
>
  <img
    src="/CyberHet Technology Services Logo.png"
    alt="CyberHet Technology Services"
    className="navbar-logo"
  />
</Link>


        <button
          className={`navbar-toggler navbar-toggler-custom ${isOpen ? 'active' : ''}`}
          type="button"
          onClick={toggleNav}
          aria-controls="mainNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1 mt-3 mt-lg-0">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/" end onClick={closeNav}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/about" onClick={closeNav}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/services" onClick={closeNav}>
                Services
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/portfolio" onClick={closeNav}>
                Portfolio
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/blog" onClick={closeNav}>
                Blog
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/pricing" onClick={closeNav}>
                Pricing
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/contact" onClick={closeNav}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link to="/contact" className="btn btn-primary btn-sm-custom w-100" onClick={closeNav}>
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
