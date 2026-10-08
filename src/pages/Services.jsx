import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const [activeFaq, setActiveFaq] = useState(0);

  const generalFaqs = [
    {
      q: "How quickly can you kick off a new engagement?",
      a: "Most projects kick off within 5 to 7 business days of agreement. We begin with a dedicated kickoff workshop to align on deliverables, timelines, and tools."
    },
    {
      q: "Can we mix and match different services?",
      a: "Absolutely. Many clients start with a Product Strategy sprint, move into UI/UX Design, and then scale into Full-Stack Web Development."
    },
    {
      q: "Do you work with non-technical founders?",
      a: "Yes! We specialize in translating complex technical and product challenges into clear, plain-language decisions so you always feel in control."
    },
    {
      q: "What does communication look like during the project?",
      a: "You have a direct shared Slack channel with your pod, weekly live video demos, and real-time dashboard tracking on Linear and Figma."
    }
  ];

  return (
    <>
      <PageHeader
        title="Our Services"
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* SERVICES GRID */}
      <section className="section">
        <div className="container">
          <div className="row section-header justify-content-center text-center">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">Full-stack capability</span>
              <h2 className="section-title">Everything you need under one roof</h2>
              <p className="section-subtitle mx-auto">
                Mix and match services to fit your stage — from a single design sprint to a fully managed product team.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {servicesData.map((service) => (
              <div key={service.id} className="col-md-6 col-lg-4 reveal">
                <div className="card-premium h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className={`icon-box icon-box-lg ${service.colorClass} mb-4`}>
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h3 className="card-title">{service.title}</h3>
                    <p className="mb-3">{service.shortDesc}</p>
                  </div>
                  <Link to={`/services/${service.slug}`} className="card-link-arrow mt-2">
                    Learn more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE ENGAGE */}
      <section className="section bg-soft">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 reveal">
              <span className="eyebrow">Engagement models</span>
              <h2 className="section-title">Flexible ways to work with us</h2>
              <p className="section-subtitle mb-4">
                Whether you need a short sprint or an ongoing partner, we shape the engagement around your roadmap — not the other way around.
              </p>
              <ul className="list-check">
                <li>
                  <i className="bi bi-check"></i>
                  <div><strong className="text-navy">Fixed-scope projects</strong> — defined deliverables, timeline and price.</div>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <div><strong className="text-navy">Monthly retainers</strong> — a dedicated pod working from your backlog.</div>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <div><strong className="text-navy">Staff augmentation</strong> — embed our specialists directly in your team.</div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 reveal">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=560&fit=crop"
                className="rounded-img w-100"
                alt="Team planning session on whiteboard"
                style={{ aspectRatio: '5/4', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="row section-header justify-content-center text-center">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">Questions</span>
              <h2 className="section-title">Frequently asked questions</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 reveal">
              <div className="accordion accordion-custom">
                {generalFaqs.map((faq, idx) => (
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-soft">
        <div className="container">
          <div className="cta-section reveal">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="mb-2">Need a custom scope or estimate?</h2>
                <p className="mb-0 fs-5">Tell us about your project goals and we will prepare a tailored proposal.</p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <Link to="/contact" className="btn btn-primary btn-lg-custom">
                  Get a Free Estimate <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
