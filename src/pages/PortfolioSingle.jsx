import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { portfolioData } from '../data/portfolioData';

export default function PortfolioSingle() {
  const { id } = useParams();

  const currentIndex = portfolioData.findIndex(item => item.slug === id || item.id === id);
  const currentItem = currentIndex !== -1 ? portfolioData[currentIndex] : portfolioData[0];

  // Previous and next project navigation
  const prevIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
  const nextIndex = (currentIndex + 1) % portfolioData.length;
  const prevProject = portfolioData[prevIndex];
  const nextProject = portfolioData[nextIndex];

  return (
    <>
      <PageHeader
        title={currentItem.title}
        breadcrumbs={[
          { label: 'Portfolio', link: '/portfolio' },
          { label: currentItem.title }
        ]}
      />

      <section className="section">
        <div className="container">
          {/* PROJECT META */}
          <div className="row g-4 mb-5 reveal">
            <div className="col-md-3 col-6">
              <small className="text-slate-light text-uppercase fw-semibold" style={{ letterSpacing: '0.08em', fontSize: '0.75rem' }}>Client</small>
              <p className="fw-semibold text-navy mb-0">{currentItem.client}</p>
            </div>
            <div className="col-md-3 col-6">
              <small className="text-slate-light text-uppercase fw-semibold" style={{ letterSpacing: '0.08em', fontSize: '0.75rem' }}>Industry</small>
              <p className="fw-semibold text-navy mb-0">{currentItem.industry}</p>
            </div>
            <div className="col-md-3 col-6">
              <small className="text-slate-light text-uppercase fw-semibold" style={{ letterSpacing: '0.08em', fontSize: '0.75rem' }}>Services</small>
              <p className="fw-semibold text-navy mb-0">{currentItem.services}</p>
            </div>
            <div className="col-md-3 col-6">
              <small className="text-slate-light text-uppercase fw-semibold" style={{ letterSpacing: '0.08em', fontSize: '0.75rem' }}>Timeline</small>
              <p className="fw-semibold text-navy mb-0">{currentItem.timeline}</p>
            </div>
          </div>

          <img
            src={currentItem.image}
            className="rounded-img w-100 mb-5 reveal"
            alt={`${currentItem.title} banner`}
            style={{ aspectRatio: '2/1', objectFit: 'cover' }}
          />

          <div className="row g-5">
            {/* MAIN CONTENT */}
            <div className="col-lg-8 reveal">
              <span className="eyebrow">The challenge</span>
              <h2 className="mb-3">Overcoming user friction & complexity</h2>
              <p className="mb-4">{currentItem.challenge}</p>

              <span className="eyebrow">Our approach</span>
              <h2 className="mb-3">Research-led, shipped in iterative phases</h2>
              <p className="mb-4">{currentItem.approach}</p>

              {currentItem.detailImage && (
                <img
                  src={currentItem.detailImage}
                  className="rounded-img w-100 mb-4"
                  alt="Project process screenshot"
                  style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                />
              )}

              <span className="eyebrow">The result</span>
              <h2 className="mb-3">Measurable business transformation</h2>
              <p className="mb-4">{currentItem.result}</p>

              {currentItem.quote && (
                <blockquote className="border-start border-3 ps-4 py-2 mb-4" style={{ borderColor: 'var(--n-primary) !important' }}>
                  <p className="fs-5 fst-italic text-navy mb-2">"{currentItem.quote.text}"</p>
                  <footer className="text-slate small">— {currentItem.quote.author}</footer>
                </blockquote>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4 reveal">
              <div className="widget mb-4">
                <h5>Results at a glance</h5>
                <ul className="widget-link-list">
                  {currentItem.stats.map((stat, idx) => (
                    <li key={idx}>
                      {stat.label} <span className="text-success fw-bold">{stat.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="widget mb-4">
                <h5>Tech &amp; Tools</h5>
                <div className="d-flex flex-wrap gap-2">
                  {currentItem.tech.map((t, idx) => (
                    <span key={idx} className="badge-soft">{t}</span>
                  ))}
                </div>
              </div>

              <div className="widget bg-gradient-dark text-white border-0">
                <div className="icon-box icon-box-white mb-3">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>
                <h5 className="text-white">Like what you see?</h5>
                <p className="text-white-50 small mb-3">Let's talk about your product's next chapter.</p>
                <Link to="/contact" className="btn btn-primary w-100">
                  Start a Project
                </Link>
              </div>
            </div>
          </div>

          {/* PROJECT NAVIGATION */}
          <div className="row mt-5 pt-4 border-top reveal">
            <div className="col-6">
              <Link to={`/portfolio/${prevProject.slug}`} className="text-decoration-none">
                <small className="text-slate-light d-block mb-1">
                  <i className="bi bi-arrow-left me-1"></i> Previous
                </small>
                <span className="fw-bold text-navy">{prevProject.title}</span>
              </Link>
            </div>
            <div className="col-6 text-end">
              <Link to={`/portfolio/${nextProject.slug}`} className="text-decoration-none">
                <small className="text-slate-light d-block mb-1">
                  Next <i className="bi bi-arrow-right ms-1"></i>
                </small>
                <span className="fw-bold text-navy">{nextProject.title}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
