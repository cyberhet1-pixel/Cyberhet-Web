import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => {
        setStatus('idle');
      }, 3500);
    }, 800);
  };

  return (
    <footer className="footer-nexora">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <Link className="navbar-brand-custom d-inline-block mb-3" to="/" style={{ color: '#fff' }}>
              Nexora<span style={{ color: 'var(--n-primary)' }}>.</span>
            </Link>
            <p className="text-white-50 mb-4" style={{ maxWidth: '320px' }}>
              We help ambitious SaaS and tech companies design, build and scale digital products that customers love.
            </p>
            <div className="d-flex gap-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Dribbble">
                <i className="bi bi-dribbble"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <h6>Company</h6>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Careers</Link>
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <h6>Services</h6>
            <Link to="/services/product-strategy">Product Strategy</Link>
            <Link to="/services/ui-ux-design">UI/UX Design</Link>
            <Link to="/services/web-development">Web Development</Link>
            <Link to="/services/cloud-devops">Cloud &amp; DevOps</Link>
            <Link to="/services/growth-marketing">Growth Marketing</Link>
          </div>

          <div className="col-lg-4 col-md-6">
            <h6>Stay in the loop</h6>
            <p className="text-white-50 mb-3">Get product updates and insights from our team, once a month.</p>
            <form className="d-flex gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="form-control"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#fff'
                }}
              />
              <button
                className="btn btn-primary flex-shrink-0"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : status === 'success' ? (
                  <i className="bi bi-check-lg"></i>
                ) : (
                  <i className="bi bi-send"></i>
                )}
              </button>
            </form>
            {status === 'success' && (
              <small className="text-success mt-2 d-block">
                ✓ Thank you for subscribing!
              </small>
            )}
          </div>
        </div>

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
          <p className="mb-0">
            &copy; 2026 Nexora. All rights reserved by{' '}
            <a target="_blank" rel="noreferrer" href="https://github.com/HarshadMahadik" style={{ color: 'white' }}>
              Harshad Mahadik
            </a>{' '}
            &bull; Distributed by{' '}
            <a target="_blank" rel="noreferrer" href="https://themewagon.com/" style={{ color: 'white' }}>
              ThemeWagon
            </a>
          </p>
          <div className="d-flex gap-4">
            <Link to="/privacy" className="mb-0">Privacy Policy</Link>
            <Link to="/terms" className="mb-0">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
