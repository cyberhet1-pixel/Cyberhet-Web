import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { portfolioData } from "../data/portfolioData";
import { testimonialsData, clientLogos } from "../data/testimonialsData";

export default function Home() {
  const featuredServices = servicesData.slice(0, 4);
  const featuredPortfolio = portfolioData.slice(0, 3);

  return (
    <>
      {/* HERO SECTION */}
      {/* <header className="hero">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 hero-content">
              <span className="eyebrow">SOFTWARE & AI SOLUTIONS FOR MODERN BUSINESSES</span>
              <h1 className="mb-4">
                Build, launch and scale your <span className="text-primary-custom">digital product</span> faster.
              </h1>
              <p className="fs-5 mb-4" style={{ maxWidth: '540px' }}>
                Nexora is your end-to-end product partner — strategy, design and engineering teams that ship measurable results for SaaS and tech-driven businesses.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4 justify-content-lg-start justify-content-center">
                <Link to="/contact" className="btn btn-primary btn-lg-custom">
                  Start a Project <i className="bi bi-arrow-right ms-1"></i>
                </Link>
                <Link to="/services" className="btn btn-light-custom btn-lg-custom">
                  Explore Services
                </Link>
              </div>
              <div className="d-flex align-items-center gap-3 justify-content-lg-start justify-content-center">
                <div className="d-flex">
                  <img src="https://i.pravatar.cc/40?img=12" className="rounded-circle border border-2 border-white" style={{ width: '38px', height: '38px', marginRight: '-10px' }} alt="Client avatar" />
                  <img src="https://i.pravatar.cc/40?img=32" className="rounded-circle border border-2 border-white" style={{ width: '38px', height: '38px', marginRight: '-10px' }} alt="Client avatar" />
                  <img src="https://i.pravatar.cc/40?img=45" className="rounded-circle border border-2 border-white" style={{ width: '38px', height: '38px' }} alt="Client avatar" />
                </div>
                <div>
                  <div className="stars mb-0" style={{ color: '#FFB400', fontSize: '0.85rem' }}>
                    ★★★★★ <span className="text-navy fw-semibold">4.9/5</span>
                  </div>
                  <small className="text-slate">from 320+ client reviews</small>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-visual position-relative mx-auto" style={{ maxWidth: '480px' }}>
                <div className="hero-mock-card">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-2">
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56', display: 'block' }}></span>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E', display: 'block' }}></span>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F', display: 'block' }}></span>
                    </div>
                    <span className="badge-soft">Live</span>
                  </div>
                  <div className="mock-bar" style={{ width: '90%' }}></div>
                  <div className="mock-bar" style={{ width: '65%' }}></div>
                  <div className="row g-2 my-3">
                    <div className="col-6">
                      <div className="p-3 rounded-3" style={{ background: 'var(--n-bg-alt)' }}>
                        <i className="bi bi-graph-up-arrow text-primary-custom fs-4"></i>
                        <div className="fw-bold text-navy mt-2 font-display">+148%</div>
                        <small className="text-slate">Conversions</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-3 rounded-3" style={{ background: '#F4F0FF' }}>
                        <i className="bi bi-people text-primary-custom fs-4" style={{ color: 'var(--n-secondary) !important' }}></i>
                        <div className="fw-bold text-navy mt-2 font-display">12.4k</div>
                        <small className="text-slate">Active Users</small>
                      </div>
                    </div>
                  </div>
                  <div className="mock-bar" style={{ width: '100%', height: '70px', borderRadius: '10px', background: 'linear-gradient(90deg, var(--n-bg-alt), #F4F0FF)' }}></div>
                </div>

                <div className="hero-float-badge badge-1 d-none d-sm-flex">
                  <div className="icon-box icon-box-success" style={{ width: '36px', height: '36px', borderRadius: '10px', fontSize: '1.1rem' }}>
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <div>Project Delivered<br /><small className="text-slate fw-normal">On time, every time</small></div>
                </div>

                <div className="hero-float-badge badge-2 d-none d-sm-flex">
                  <div className="icon-box icon-box-primary" style={{ width: '36px', height: '36px', borderRadius: '10px', fontSize: '1.1rem' }}>
                    <i className="bi bi-lightning-charge-fill"></i>
                  </div>
                  <div>Avg. 3.2x ROI<br /><small className="text-slate fw-normal">within 6 months</small></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <header className="hero">
        <div className="container">
          <div className="row align-items-center gy-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 hero-content">
              <span className="eyebrow">AI • SOFTWARE • AUTOMATION</span>

              <h1 className="mb-4">
                Build smarter with{" "}
                <span className="text-primary-custom">custom software</span> &
                AI solutions.
              </h1>

              <p className="fs-5 mb-4" style={{ maxWidth: "540px" }}>
                Cyberhet is a software and AI services company based in Jaipur,
                India. We build custom software, AI applications, web and mobile
                apps, and business automation solutions for businesses,
                startups, and organizations worldwide.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4 justify-content-lg-start justify-content-center">
                <Link to="/contact" className="btn btn-primary btn-lg-custom">
                  Start a Project <i className="bi bi-arrow-right ms-1"></i>
                </Link>

                <Link
                  to="/services"
                  className="btn btn-light-custom btn-lg-custom"
                >
                  Explore Services
                </Link>
              </div>

              {/* TRUST / POSITIONING */}
              <div className="d-flex align-items-center gap-3 justify-content-lg-start justify-content-center">
                <div className="d-flex align-items-center">
                  <div
                    className="icon-box icon-box-primary"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      fontSize: "1rem",
                    }}
                  >
                    <i className="bi bi-code-slash"></i>
                  </div>

                  <div
                    className="icon-box icon-box-success"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      fontSize: "1rem",
                      marginLeft: "-8px",
                    }}
                  >
                    <i className="bi bi-robot"></i>
                  </div>

                  <div
                    className="icon-box"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      fontSize: "1rem",
                      marginLeft: "-8px",
                      background: "#F4F0FF",
                      color: "var(--n-secondary)",
                    }}
                  >
                    <i className="bi bi-lightning-charge-fill"></i>
                  </div>
                </div>

                <div>
                  <div className="fw-semibold text-navy">
                    Software • AI • Automation
                  </div>

                  <small className="text-slate">
                    Built for real business needs
                  </small>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="col-lg-6">
              <div
                className="hero-visual position-relative mx-auto"
                style={{ maxWidth: "480px" }}
              >
                <div className="hero-mock-card">
                  {/* TOP BAR */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-2">
                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "#FF5F56",
                          display: "block",
                        }}
                      ></span>

                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "#FFBD2E",
                          display: "block",
                        }}
                      ></span>

                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "#27C93F",
                          display: "block",
                        }}
                      ></span>
                    </div>

                    <span className="badge-soft">AI Powered</span>
                  </div>

                  {/* MOCK CONTENT */}
                  <div className="mock-bar" style={{ width: "90%" }}></div>
                  <div className="mock-bar" style={{ width: "65%" }}></div>

                  {/* SERVICES */}
                  <div className="row g-2 my-3">
                    <div className="col-6">
                      <div
                        className="p-3 rounded-3"
                        style={{ background: "var(--n-bg-alt)" }}
                      >
                        <i className="bi bi-robot text-primary-custom fs-4"></i>

                        <div className="fw-bold text-navy mt-2 font-display">
                          AI Apps
                        </div>

                        <small className="text-slate">
                          Intelligent solutions
                        </small>
                      </div>
                    </div>

                    <div className="col-6">
                      <div
                        className="p-3 rounded-3"
                        style={{ background: "#F4F0FF" }}
                      >
                        <i
                          className="bi bi-lightning-charge-fill fs-4"
                          style={{
                            color: "var(--n-secondary)",
                          }}
                        ></i>

                        <div className="fw-bold text-navy mt-2 font-display">
                          Automation
                        </div>

                        <small className="text-slate">Smarter workflows</small>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM FEATURE */}
                  <div
                    className="mock-bar d-flex align-items-center px-3"
                    style={{
                      width: "100%",
                      height: "70px",
                      borderRadius: "10px",
                      background:
                        "linear-gradient(90deg, var(--n-bg-alt), #F4F0FF)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-code-square text-primary-custom fs-4"></i>

                      <div>
                        <div className="fw-semibold text-navy">
                          Custom Software
                        </div>

                        <small className="text-slate">
                          Built around your business
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FLOATING BADGE 1 */}
                <div className="hero-float-badge badge-1 d-none d-sm-flex">
                  <div
                    className="icon-box icon-box-success"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      fontSize: "1.1rem",
                    }}
                  >
                    <i className="bi bi-check-lg"></i>
                  </div>

                  <div>
                    Solution Delivered
                    <br />
                    <small className="text-slate fw-normal">
                      Built for your goals
                    </small>
                  </div>
                </div>

                {/* FLOATING BADGE 2 */}
                <div className="hero-float-badge badge-2 d-none d-sm-flex">
                  <div
                    className="icon-box icon-box-primary"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      fontSize: "1.1rem",
                    }}
                  >
                    <i className="bi bi-lightning-charge-fill"></i>
                  </div>

                  <div>
                    Built to Scale
                    <br />
                    <small className="text-slate fw-normal">
                      From idea to production
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* LOGO CLOUD */}
      {/* <section className="py-4 bg-white border-bottom">
        <div className="container">
          <p
            className="text-center text-slate small fw-semibold text-uppercase mb-4"
            style={{ letterSpacing: "0.1em" }}
          >
            Powering product teams at
          </p>
          <div className="row align-items-center justify-content-center g-4">
            {clientLogos.map((client, index) => (
              <div key={index} className="col-4 col-md-2">
                <div className="logo-cloud-item">
                  <i className={`bi ${client.icon} me-1`}></i>
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SERVICES OVERVIEW */}
      {/* <section className="section bg-soft">
        <div className="container">
          <div className="row section-header align-items-end">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">What we do</span>
              <h2 className="section-title">
                Software, AI & Automation Solutions for Modern Businesses
              </h2>
              <p className="section-subtitle">
                From custom software and AI development to web applications and business automation, we build scalable solutions around your business goals.
              </p>
            </div>
            <div className="col-lg-5 text-lg-end mt-3 mt-lg-0 reveal">
              <Link to="/services" className="card-link-arrow">
                View all services <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {featuredServices.map((service) => (
              <div key={service.id} className="col-md-6 col-lg-3 reveal">
                <div className="card-premium">
                  <div className={`icon-box ${service.colorClass} mb-4`}>
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="mb-3">{service.shortDesc}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="card-link-arrow"
                  >
                    Learn more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section
        className="section bg-soft"
        aria-labelledby="featured-services-heading"
      >
        <div className="container">
          <div className="row section-header align-items-end">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">What we do</span>

              <h2 id="featured-services-heading" className="section-title">
                Software, AI &amp; Automation Solutions for Modern Businesses
              </h2>

              <p className="section-subtitle">
                Cyberhet builds custom software, AI-powered applications,
                websites and business automation solutions to help businesses
                streamline operations and solve real-world problems.
              </p>
            </div>

            <div className="col-lg-5 text-lg-end mt-3 mt-lg-0 reveal">
              <Link to="/services" className="card-link-arrow">
                Explore all software and AI services
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {featuredServices.map((service) => (
              <div key={service.id} className="col-md-6 col-lg-3 reveal">
                <article className="card-premium">
                  <div
                    className={`icon-box ${service.colorClass} mb-4`}
                    aria-hidden="true"
                  >
                    <i className={`bi ${service.icon}`}></i>
                  </div>

                  <h3 className="card-title">{service.title}</h3>

                  <p className="mb-3">{service.shortDesc}</p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="card-link-arrow"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / WHY US */}
      {/* <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 reveal">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=560&fit=crop"
                  className="rounded-img w-100"
                  alt="Nexora team collaborating in office"
                  style={{ aspectRatio: "5/4", objectFit: "cover" }}
                />
                <div
                  className="hero-float-badge badge-2 d-none d-sm-flex"
                  style={{
                    position: "absolute",
                    bottom: "-1.5rem",
                    left: "-1.5rem",
                    right: "auto",
                  }}
                >
                  <div
                    className="icon-box icon-box-primary"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      fontSize: "1.1rem",
                    }}
                  >
                    <i className="bi bi-award"></i>
                  </div>
                  <div>
                    Top Rated Agency
                    <br />
                    <small className="text-slate fw-normal">
                      Clutch &amp; G2, 2025
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 reveal">
              <span className="eyebrow">Why Nexora</span>
              <h2 className="section-title">
                A senior team, embedded in your workflow
              </h2>
              <p className="section-subtitle mb-4">
                We don't hand off decks and disappear. Our designers and
                engineers work inside your tools — Slack, Linear, Figma — as an
                extension of your team.
              </p>
              <ul className="list-check mb-4">
                <li>
                  <i className="bi bi-check"></i>
                  <div>
                    <strong className="text-navy">
                      Dedicated senior squad
                    </strong>{" "}
                    — no junior bait-and-switch, ever.
                  </div>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <div>
                    <strong className="text-navy">
                      Transparent weekly sprints
                    </strong>{" "}
                    with shared dashboards and demos.
                  </div>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <div>
                    <strong className="text-navy">
                      Flexible engagement models
                    </strong>{" "}
                    — project, retainer or staff augmentation.
                  </div>
                </li>
              </ul>
              <Link to="/about" className="btn btn-primary btn-lg-custom">
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section" aria-labelledby="why-cyberhet-heading">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Image */}
            <div className="col-lg-6 reveal">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=560&fit=crop"
                  className="rounded-img w-100"
                  alt="Team collaborating on software development and digital solutions"
                  width="700"
                  height="560"
                  loading="lazy"
                  decoding="async"
                  style={{
                    aspectRatio: "5/4",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="hero-float-badge badge-2 d-none d-sm-flex"
                  style={{
                    position: "absolute",
                    bottom: "-1.5rem",
                    left: "-1.5rem",
                    right: "auto",
                  }}
                >
                  <div
                    className="icon-box icon-box-primary"
                    aria-hidden="true"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      fontSize: "1.1rem",
                    }}
                  >
                    <i className="bi bi-lightning-charge"></i>
                  </div>

                  <div>
                    Smart Digital Solutions
                    <br />
                    <small className="text-slate fw-normal">
                      Software, AI & Automation
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6 reveal">
              <span className="eyebrow">Why Choose Cyberhet</span>

              <h2 id="why-cyberhet-heading" className="section-title">
                Your Technology Partner for Software, AI and Business Growth
              </h2>

              <p className="section-subtitle mb-4">
                Cyberhet helps businesses turn ideas into practical digital
                solutions. From custom software and website development to
                AI-powered applications, workflow automation and digital
                marketing, we build solutions around your business needs.
              </p>

              <ul className="list-check mb-4">
                <li>
                  <i className="bi bi-check" aria-hidden="true"></i>
                  <div>
                    <strong className="text-navy">
                      Custom Software Development
                    </strong>{" "}
                    — websites, web applications and business tools designed for
                    your requirements.
                  </div>
                </li>

                <li>
                  <i className="bi bi-check" aria-hidden="true"></i>
                  <div>
                    <strong className="text-navy">
                      AI & Business Automation
                    </strong>{" "}
                    — AI-powered tools, intelligent workflows and automation to
                    reduce repetitive work.
                  </div>
                </li>

                <li>
                  <i className="bi bi-check" aria-hidden="true"></i>
                  <div>
                    <strong className="text-navy">
                      Digital Marketing & SEO
                    </strong>{" "}
                    — search engine optimization, branding and online marketing
                    solutions to support business growth.
                  </div>
                </li>
              </ul>

              <Link to="/about" className="btn btn-primary btn-lg-custom">
                Discover Cyberhet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      {/* <section className="stats-strip py-5 bg-white">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3 stat-item reveal">
              <div className="stat-number">480+</div>
              <div className="stat-label">Projects delivered</div>
            </div>
            <div className="col-6 col-md-3 stat-item reveal">
              <div className="stat-number">12 yrs</div>
              <div className="stat-label">Industry experience</div>
            </div>
            <div className="col-6 col-md-3 stat-item reveal">
              <div className="stat-number">96%</div>
              <div className="stat-label">Client retention</div>
            </div>
            <div className="col-6 col-md-3 stat-item reveal">
              <div className="stat-number">34</div>
              <div className="stat-label">Countries served</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* PROCESS */}
      {/* <section className="section bg-soft">
        <div className="container">
          <div className="row section-header justify-content-center text-center">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">How we work</span>
              <h2 className="section-title">
                A proven four-step delivery process
              </h2>
              <p className="section-subtitle mx-auto">
                Every engagement follows the same disciplined process — refined
                across hundreds of launches.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 reveal">
              <div className="process-step">
                <span className="process-number">01</span>
                <h3 className="card-title">Discover</h3>
                <p>
                  We audit your product, market and users to identify the
                  highest-leverage opportunities.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 reveal">
              <div className="process-step">
                <span className="process-number">02</span>
                <h3 className="card-title">Design</h3>
                <p>
                  Wireframes evolve into polished, tested interfaces backed by a
                  reusable design system.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 reveal">
              <div className="process-step">
                <span className="process-number">03</span>
                <h3 className="card-title">Build</h3>
                <p>
                  Engineers ship in two-week sprints with continuous integration
                  and staging previews.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 reveal">
              <div className="process-step">
                <span className="process-number">04</span>
                <h3 className="card-title">Scale</h3>
                <p>
                  Post-launch, we monitor performance and iterate based on real
                  usage data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        className="section bg-soft"
        aria-labelledby="cyberhet-process-heading"
      >
        <div className="container">
          <div className="row section-header justify-content-center text-center">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">How We Work</span>

              <h2 id="cyberhet-process-heading" className="section-title">
                Our Process for Building Software, AI and Digital Solutions
              </h2>

              <p className="section-subtitle mx-auto">
                From understanding your business needs to launching and
                improving your solution, Cyberhet follows a structured process
                to deliver practical, reliable and scalable digital products.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {/* Step 1 */}
            <div className="col-md-6 col-lg-3 reveal">
              <div className="process-step">
                <span className="process-number">01</span>

                <h3 className="card-title">Discover & Plan</h3>

                <p>
                  We understand your business goals, target audience and
                  challenges to define the right software, website or AI
                  solution for your needs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-md-6 col-lg-3 reveal">
              <div className="process-step">
                <span className="process-number">02</span>

                <h3 className="card-title">Design & Strategize</h3>

                <p>
                  We plan the user experience, website structure, application
                  features and technical approach to create an intuitive digital
                  product.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-6 col-lg-3 reveal">
              <div className="process-step">
                <span className="process-number">03</span>

                <h3 className="card-title">Develop & Test</h3>

                <p>
                  We build custom software, responsive websites, AI-powered
                  applications and automated workflows, then test functionality
                  and usability before launch.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="col-md-6 col-lg-3 reveal">
              <div className="process-step">
                <span className="process-number">04</span>

                <h3 className="card-title">Launch & Improve</h3>

                <p>
                  We help deploy your solution, monitor its performance and
                  identify opportunities for improvements, automation and future
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK / PORTFOLIO */}
      {/* <section className="section">
        <div className="container">
          <div className="row section-header align-items-end">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">Selected work</span>
              <h2 className="section-title">
                Case studies that speak for themselves
              </h2>
            </div>
            <div className="col-lg-5 text-lg-end mt-3 mt-lg-0 reveal">
              <Link to="/portfolio" className="card-link-arrow">
                View full portfolio <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {featuredPortfolio.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4 reveal">
                <Link
                  to={`/portfolio/${item.slug}`}
                  className="portfolio-card d-block"
                >
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <span>{item.categoryLabel}</span>
                    <h5>{item.title}</h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section" aria-labelledby="cyberhet-portfolio-heading">
        <div className="container">
          <div className="row section-header align-items-end">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">Our Portfolio</span>

              <h2 id="cyberhet-portfolio-heading" className="section-title">
                Software, AI and Digital Solutions Built for Real Business Needs
              </h2>

              <p className="section-subtitle">
                Explore our software development, website design, AI application
                and digital solution projects to see how ideas can become
                practical digital experiences.
              </p>
            </div>

            <div className="col-lg-5 text-lg-end mt-3 mt-lg-0 reveal">
              <Link to="/portfolio" className="card-link-arrow">
                Explore Our Projects{" "}
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {featuredPortfolio.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4 reveal">
                <Link
                  to={`/portfolio/${item.slug}`}
                  className="portfolio-card d-block"
                  aria-label={`View project: ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} — Cyberhet project`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "4 / 3",
                      objectFit: "cover",
                    }}
                  />

                  <div className="portfolio-overlay">
                    <span>{item.categoryLabel}</span>
                    <h3 className="card-title">{item.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* <section className="section bg-soft">
        <div className="container">
          <div className="row section-header justify-content-center text-center">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">Client feedback</span>
              <h2 className="section-title">Don't just take our word for it</h2>
            </div>
          </div>

          <div className="row g-4">
            {testimonialsData.map((t) => (
              <div key={t.id} className="col-md-6 col-lg-4 reveal">
                <div className="testimonial-card">
                  <div className="stars">{"★".repeat(t.rating)}</div>
                  <p>"{t.quote}"</p>
                  <div className="testimonial-author">
                    <img src={t.avatar} alt={t.name} />
                    <div>
                      <div className="name">{t.name}</div>
                      <div className="role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section
        className="section bg-soft"
        aria-labelledby="cyberhet-testimonials-heading"
      >
        <div className="container">
          <div className="row section-header justify-content-center text-center">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">Client Testimonials</span>

              <h2 id="cyberhet-testimonials-heading" className="section-title">
                What Clients Say About Working With Cyberhet
              </h2>

              <p className="section-subtitle mx-auto">
                Discover feedback from clients who have worked with Cyberhet on
                software development, website design, AI solutions and digital
                projects.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {testimonialsData.map((t) => (
              <div key={t.id} className="col-md-6 col-lg-4 reveal">
                <article className="testimonial-card">
                  <div
                    className="stars"
                    role="img"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {"★".repeat(Math.max(0, Math.min(5, t.rating)))}
                    <span className="visually-hidden"> out of 5 stars</span>
                  </div>

                  <blockquote className="mb-4">
                    <p className="mb-0">{t.quote}</p>
                  </blockquote>

                  <div className="testimonial-author">
                    <img
                      src={t.avatar}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width="48"
                      height="48"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />

                    <div>
                      <div className="name">{t.name}</div>
                      <div className="role">{t.role}</div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA SECTION */}
      {/* <section className="section">
        <div className="container">
          <div className="cta-section reveal">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="mb-2">Ready to build something great?</h2>
                <p className="mb-0 fs-5">
                  Book a free 30-minute strategy call — no pressure, no sales
                  script.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <Link to="/contact" className="btn btn-primary btn-lg-custom">
                  Book a Call <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section" aria-labelledby="cyberhet-cta-heading">
        <div className="container">
          <div className="cta-section reveal">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <span className="eyebrow">Let's Build Together</span>

                <h2 id="cyberhet-cta-heading" className="mb-2">
                  Ready to Build Your Next Digital Solution?
                </h2>

                <p className="mb-0 fs-5">
                  From custom software and website development to AI-powered
                  tools and business automation, Cyberhet can help you turn your
                  ideas into practical digital solutions.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <Link
                  to="/contact"
                  className="btn btn-primary btn-lg-custom"
                  aria-label="Contact Cyberhet about your project"
                >
                  Discuss Your Project{" "}
                  <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
