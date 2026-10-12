import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success'

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => {
        setStatus("idle");
      }, 3500);
    }, 800);
  };

  // return (
  //   <footer className="footer-nexora">
  //     <div className="container">
  //       <div className="row gy-4">
  //         <div className="col-lg-4 col-md-6">
  //           <Link className="navbar-brand-custom d-inline-block mb-3" to="/" style={{ color: '#fff' }}>
  //             Nexora<span style={{ color: 'var(--n-primary)' }}>.</span>
  //           </Link>
  //           <p className="text-white-50 mb-4" style={{ maxWidth: '320px' }}>
  //             We help ambitious SaaS and tech companies design, build and scale digital products that customers love.
  //           </p>
  //           <div className="d-flex gap-2">
  //             <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
  //               <i className="bi bi-twitter-x"></i>
  //             </a>
  //             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
  //               <i className="bi bi-linkedin"></i>
  //             </a>
  //             <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Dribbble">
  //               <i className="bi bi-dribbble"></i>
  //             </a>
  //             <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
  //               <i className="bi bi-instagram"></i>
  //             </a>
  //           </div>
  //         </div>

  //         <div className="col-lg-2 col-md-6 col-6">
  //           <h6>Company</h6>
  //           <Link to="/about">About Us</Link>
  //           <Link to="/services">Services</Link>
  //           <Link to="/portfolio">Portfolio</Link>
  //           <Link to="/blog">Blog</Link>
  //           <Link to="/contact">Careers</Link>
  //         </div>

  //         <div className="col-lg-2 col-md-6 col-6">
  //           <h6>Services</h6>
  //           <Link to="/services/product-strategy">Product Strategy</Link>
  //           <Link to="/services/ui-ux-design">UI/UX Design</Link>
  //           <Link to="/services/web-development">Web Development</Link>
  //           <Link to="/services/cloud-devops">Cloud &amp; DevOps</Link>
  //           <Link to="/services/growth-marketing">Growth Marketing</Link>
  //         </div>

  //         <div className="col-lg-4 col-md-6">
  //           <h6>Stay in the loop</h6>
  //           <p className="text-white-50 mb-3">Get product updates and insights from our team, once a month.</p>
  //           <form className="d-flex gap-2" onSubmit={handleSubscribe}>
  //             <input
  //               type="email"
  //               className="form-control"
  //               placeholder="Work email"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //               required
  //               style={{
  //                 background: 'rgba(255, 255, 255, 0.06)',
  //                 borderColor: 'rgba(255, 255, 255, 0.12)',
  //                 color: '#fff'
  //               }}
  //             />
  //             <button
  //               className="btn btn-primary flex-shrink-0"
  //               type="submit"
  //               disabled={status === 'sending'}
  //             >
  //               {status === 'sending' ? (
  //                 <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  //               ) : status === 'success' ? (
  //                 <i className="bi bi-check-lg"></i>
  //               ) : (
  //                 <i className="bi bi-send"></i>
  //               )}
  //             </button>
  //           </form>
  //           {status === 'success' && (
  //             <small className="text-success mt-2 d-block">
  //               ✓ Thank you for subscribing!
  //             </small>
  //           )}
  //         </div>
  //       </div>

  //       <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
  //         <p className="mb-0">
  //           &copy; 2026 Nexora. All rights reserved by{' '}
  //           <a target="_blank" rel="noreferrer" href="https://github.com/HarshadMahadik" style={{ color: 'white' }}>
  //             Harshad Mahadik
  //           </a>{' '}
  //           &bull; Distributed by{' '}
  //           <a target="_blank" rel="noreferrer" href="https://themewagon.com/" style={{ color: 'white' }}>
  //             ThemeWagon
  //           </a>
  //         </p>
  //         <div className="d-flex gap-4">
  //           <Link to="/privacy" className="mb-0">Privacy Policy</Link>
  //           <Link to="/terms" className="mb-0">Terms of Service</Link>
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // );

  return (
    //   <footer className="footer-nexora" aria-label="Cyberhet website footer">
    //     <div className="container">
    //       <div className="row gy-4">
    //         {/* Company information */}
    //         <div className="col-lg-4 col-md-6">
    //           <Link
    //             className="navbar-brand-custom d-inline-block mb-3"
    //             to="/"
    //             style={{ color: "#fff" }}
    //             aria-label="Cyberhet home"
    //           >
    //             Cyberhet
    //             <span style={{ color: "var(--n-primary)" }}>.</span>
    //           </Link>

    //           <p className="text-white-50 mb-4" style={{ maxWidth: "320px" }}>
    //             Cyberhet helps businesses build custom software, AI-powered
    //             applications, modern websites and digital marketing solutions
    //             to support their growth.
    //           </p>

    //           <div className="d-flex gap-2">
    //             <a
    //               href="https://www.linkedin.com/"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="social-icon"
    //               aria-label="LinkedIn"
    //             >
    //               <i className="bi bi-linkedin" aria-hidden="true"></i>
    //             </a>

    //             <a
    //               href="https://www.instagram.com/"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="social-icon"
    //               aria-label="Instagram"
    //             >
    //               <i className="bi bi-instagram" aria-hidden="true"></i>
    //             </a>

    //             <a
    //               href="https://www.facebook.com/"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="social-icon"
    //               aria-label="Facebook"
    //             >
    //               <i className="bi bi-facebook" aria-hidden="true"></i>
    //             </a>

    //             <a
    //               href="https://x.com/"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="social-icon"
    //               aria-label="X"
    //             >
    //               <i className="bi bi-twitter-x" aria-hidden="true"></i>
    //             </a>
    //           </div>
    //         </div>

    //         {/* Company links */}
    //         <div className="col-lg-2 col-md-6 col-6">
    //           <h6>Company</h6>
    //           <Link to="/about">About Cyberhet</Link>
    //           <Link to="/services">Our Services</Link>
    //           <Link to="/portfolio">Our Portfolio</Link>
    //           <Link to="/blog">Blog & Insights</Link>
    //           <Link to="/contact">Contact Us</Link>
    //         </div>

    //         {/* Services */}
    //         <div className="col-lg-2 col-md-6 col-6">
    //           <h6>Our Services</h6>
    //           <Link to="/services/web-development">
    //             Website Development
    //           </Link>
    //           <Link to="/services/custom-software-development">
    //             Custom Software
    //           </Link>
    //           <Link to="/services/ai-development">
    //             AI Solutions
    //           </Link>
    //           <Link to="/services/digital-marketing">
    //             Digital Marketing
    //           </Link>
    //           <Link to="/services/seo">
    //             SEO Services
    //           </Link>
    //         </div>

    //         {/* Newsletter */}
    //         <div className="col-lg-4 col-md-6">
    //           <h6>Stay Updated</h6>

    //           <p className="text-white-50 mb-3">
    //             Get useful insights on AI, software development, SEO and
    //             digital growth delivered to your inbox.
    //           </p>

    //           <form
    //             className="d-flex gap-2"
    //             onSubmit={handleSubscribe}
    //           >
    //             <input
    //               type="email"
    //               className="form-control"
    //               placeholder="Enter your email"
    //               aria-label="Email address for newsletter"
    //               autoComplete="email"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               required
    //               style={{
    //                 background: "rgba(255, 255, 255, 0.06)",
    //                 borderColor: "rgba(255, 255, 255, 0.12)",
    //                 color: "#fff",
    //               }}
    //             />

    //             <button
    //               className="btn btn-primary flex-shrink-0"
    //               type="submit"
    //               disabled={status === "sending"}
    //               aria-label={
    //                 status === "sending"
    //                   ? "Subscribing"
    //                   : "Subscribe to newsletter"
    //               }
    //             >
    //               {status === "sending" ? (
    //                 <span
    //                   className="spinner-border spinner-border-sm"
    //                   role="status"
    //                   aria-label="Submitting"
    //                 ></span>
    //               ) : status === "success" ? (
    //                 <i className="bi bi-check-lg" aria-hidden="true"></i>
    //               ) : (
    //                 <i className="bi bi-send" aria-hidden="true"></i>
    //               )}
    //             </button>
    //           </form>

    //           {status === "success" && (
    //             <small className="text-success mt-2 d-block" role="status">
    //               Thank you for subscribing!
    //             </small>
    //           )}

    //           {status === "error" && (
    //             <small className="text-danger mt-2 d-block" role="alert">
    //               Subscription failed. Please try again.
    //             </small>
    //           )}
    //         </div>
    //       </div>

    //       {/* Footer bottom */}
    //       <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
    //         <p className="mb-0">
    //           &copy; {new Date().getFullYear()} Cyberhet. All rights reserved.
    //         </p>
    // {/*
    //         <div className="d-flex flex-wrap justify-content-center gap-4">
    //           <Link to="/privacy" className="mb-0">
    //             Privacy Policy
    //           </Link>

    //           <Link to="/terms" className="mb-0">
    //             Terms of Service
    //           </Link>
    //         </div> */}
    //       </div>
    //     </div>
    //   </footer>
    <footer className="footer-nexora" aria-label="CyberHet website footer">
      <div className="container">
        <div className="row gy-4">
          {/* Company Information */}
          <div className="col-lg-4 col-md-6">
            <Link
              to="/"
              className="footer-logo-link d-inline-block mb-3"
              aria-label="CyberHet home"
            >
              <img
                src="/Cyberhet%20logo.jpeg"
                alt="CyberHet Technology Services"
                className="footer-logo"
              />
            </Link>

            <p className="text-white-50 mb-4" style={{ maxWidth: "340px" }}>
              CyberHet is a technology services company based in Jaipur, India.
              We build custom software, AI applications, modern websites, mobile
              apps and digital solutions that help businesses grow.
            </p>

            {/* <div className="d-flex gap-2">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin" aria-hidden="true"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram" aria-hidden="true"></i>
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook" aria-hidden="true"></i>
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="X"
          >
            <i className="bi bi-twitter-x" aria-hidden="true"></i>
          </a>
        </div> */}
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6>Company</h6>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/portfolio">Our Portfolio</Link>
            <Link to="/blog">Blog & Insights</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6>Our Services</h6>
            <Link to="/services/web-development">Web Development</Link>
            <Link to="/services/custom-software-development">
              Custom Software
            </Link>
            <Link to="/services/ai-development">AI Solutions</Link>
            <Link to="/services/digital-marketing">Digital Marketing</Link>
            <Link to="/services/seo">SEO Services</Link>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4 col-md-6">
            <h6>Get in Touch</h6>

            <p className="text-white-50 mb-3">
              Have a project in mind? Let's discuss how we can help your
              business grow with technology.
            </p>

            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              <li className="d-flex gap-3 align-items-start">
                <i className="bi bi-geo-alt" aria-hidden="true"></i>
                <span>
                  CyberHet, Mansarovar,
                  <br />
                  Jaipur, Rajasthan 302020, India
                </span>
              </li>

              <li className="d-flex gap-3 align-items-center">
                <i className="bi bi-telephone" aria-hidden="true"></i>
                <a href="tel:+919799766202">+91 9799766202</a>
              </li>

              <li className="d-flex gap-3 align-items-center">
                <i className="bi bi-envelope" aria-hidden="true"></i>
                <a href="mailto:cyberhet1@gmail.com">cyberhet1@gmail.com</a>
              </li>

              <li className="d-flex gap-3 align-items-center">
                <i className="bi bi-globe" aria-hidden="true"></i>
                <a
                  href="https://www.google.com/maps/place/Cyberhet/@26.842073,75.7666065,14z/data=!4m6!3m5!1s0x396db590608827d1:0xa596060b10873b70!8m2!3d26.8405464!4d75.7547285!16s%2Fg%2F11zz58hxcq?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find us on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} CyberHet Technology Services. All
            rights reserved.
          </p>

          {/* <div className="d-flex flex-wrap justify-content-center gap-4">
        <Link to="/privacy" className="mb-0">
          Privacy Policy
        </Link>

        <Link to="/terms" className="mb-0">
          Terms of Service
        </Link>
      </div> */}
        </div>
      </div>
    </footer>
  );
}
