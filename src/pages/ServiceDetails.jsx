import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { servicesData } from '../data/servicesData';

export default function ServiceDetails() {
  const { id } = useParams();
  const [activeFaq, setActiveFaq] = useState(0);

  // Match service by id/slug or default to the second one (ui-ux-design)
  const currentService = servicesData.find(s => s.slug === id || s.id === id) || servicesData[1];

  return (
    <>
      <PageHeader
        title={currentService.title}
        breadcrumbs={[
          { label: 'Services', link: '/services' },
          { label: currentService.title }
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="row g-5">
            {/* MAIN CONTENT */}
            <div className="col-lg-8 reveal">
              <img
                src={currentService.heroImage}
                className="rounded-img w-100 mb-4"
                alt={`${currentService.title} illustration`}
                style={{ aspectRatio: '16/9', objectFit: 'cover' }}
              />

              <span className="eyebrow">Service overview</span>
              <h2 className="mb-3">{currentService.title} that drives business impact</h2>
              <p className="mb-4 fs-5 text-slate">{currentService.shortDesc}</p>
              <p className="mb-4">{currentService.fullDesc}</p>

              <h3 className="mb-3 mt-5">What's included</h3>
              <div className="row g-3 mb-4">
                {currentService.included.map((item, idx) => (
                  <div key={idx} className="col-md-6">
                    <div className="feature-grid-item">
                      <div className="icon-box icon-box-primary">
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                      <div>
                        <strong className="text-navy d-block mb-1">{item.title}</strong>
                        <span className="small text-slate">{item.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mb-3 mt-5">Our process</h3>
              <div className="row g-4 mb-4">
                {currentService.process.map((step, idx) => (
                  <div key={idx} className="col-md-6">
                    <div className="process-step h-100">
                      <span className="process-number">{step.step}</span>
                      <h4 className="card-title">{step.title}</h4>
                      <p className="mb-0">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* SERVICE FAQ */}
              <h3 className="mb-3 mt-5">Common questions</h3>
              <div className="accordion accordion-custom">
                {currentService.faqs.map((faq, idx) => (
                  <div key={idx} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${activeFaq === idx ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === idx ? 'show' : ''}`}>
                      <div className="accordion-body">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4 reveal">
              <div className="widget mb-4">
                <h5>All Services</h5>
                <ul className="widget-link-list">
                  {servicesData.map((svc) => (
                    <li key={svc.id}>
                      <Link
                        to={`/services/${svc.slug}`}
                        className={`text-decoration-none ${svc.id === currentService.id ? 'fw-bold text-primary-custom' : 'text-slate'}`}
                      >
                        {svc.title}
                      </Link>
                      <i className="bi bi-chevron-right small text-slate-light"></i>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="widget bg-gradient-dark text-white border-0">
                <div className="icon-box icon-box-white mb-3">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>
                <h5 className="text-white">Ready to get started?</h5>
                <p className="text-white-50 small mb-3">
                  Book a discovery call to discuss how our {currentService.title} pod can plug into your roadmap.
                </p>
                <Link to="/contact" className="btn btn-primary w-100">
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
