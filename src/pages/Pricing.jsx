import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { pricingPlans, pricingFaqs } from '../data/pricingData';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <>
      <PageHeader
        title="Simple, Transparent Pricing"
        breadcrumbs={[{ label: 'Pricing' }]}
      />

      {/* TOGGLE */}
      <section className="section pb-0">
        <div className="container">
          <div className="row section-header justify-content-center text-center">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">Retainer plans</span>
              <h2 className="section-title">Choose the plan that fits your stage</h2>
              <p className="section-subtitle mx-auto">
                All plans include a dedicated project lead, weekly demos and a shared Slack channel. Cancel or switch plans anytime.
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-3 mb-5 reveal">
            <span
              className={`fw-semibold ${!isYearly ? 'text-navy' : 'text-slate'}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </span>
            <div className="form-check form-switch m-0">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="billingToggle"
                checked={isYearly}
                onChange={(e) => setIsYearly(e.target.checked)}
                style={{ width: '3em', height: '1.5em', cursor: 'pointer' }}
              />
            </div>
            <span
              className={`fw-semibold ${isYearly ? 'text-navy' : 'text-slate'}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setIsYearly(true)}
            >
              Yearly <span className="badge-soft">Save 15%</span>
            </span>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="section pt-0">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {pricingPlans.map((plan) => {
              const displayPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

              return (
                <div key={plan.id} className="col-lg-4 reveal">
                  <div className={`pricing-card h-100 d-flex flex-column justify-content-between ${plan.featured ? 'featured' : ''}`}>
                    <div>
                      {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
                      <h3 className="mb-1">{plan.name}</h3>
                      <p className="text-slate small mb-3">{plan.description}</p>

                      <div className="price-wrap">
                        {displayPrice ? (
                          <>
                            <span className="price">${displayPrice.toLocaleString()}</span>
                            <span className="price-period">/mo</span>
                          </>
                        ) : (
                          <span className="price">{plan.customPriceLabel}</span>
                        )}
                      </div>

                      <hr className="pricing-divider" />

                      <ul className="feature-list">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className={!feat.included ? 'disabled' : ''}>
                            <i className={`bi ${feat.included ? 'bi-check-circle-fill' : 'bi-x-circle'}`}></i>
                            {' '}{feat.text}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/contact" className={`btn ${plan.buttonClass} w-100 mt-4`}>
                      {plan.buttonText}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-slate small mt-4 reveal">
            All plans include a 14-day satisfaction guarantee. Need a one-off project instead?{' '}
            <Link to="/contact" className="text-primary-custom fw-semibold">
              Get a custom quote →
            </Link>
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section bg-soft">
        <div className="container">
          <div className="row section-header justify-content-center text-center">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">Compare plans</span>
              <h2 className="section-title">Full feature breakdown</h2>
            </div>
          </div>

          <div className="table-responsive reveal">
            <table className="table align-middle bg-white rounded-4 overflow-hidden" style={{ boxShadow: 'var(--n-shadow-sm)' }}>
              <thead>
                <tr className="text-center">
                  <th className="text-start ps-4 py-3" style={{ fontFamily: 'var(--n-font-display)', color: 'var(--n-navy)' }}>Feature</th>
                  <th className="py-3" style={{ fontFamily: 'var(--n-font-display)', color: 'var(--n-navy)' }}>Starter</th>
                  <th className="py-3 text-primary-custom" style={{ fontFamily: 'var(--n-font-display)' }}>Growth</th>
                  <th className="py-3 pe-4" style={{ fontFamily: 'var(--n-font-display)', color: 'var(--n-navy)' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="text-start ps-4">Dedicated designer</td>
                  <td><i className="bi bi-check-lg text-success"></i></td>
                  <td><i className="bi bi-check-lg text-success"></i></td>
                  <td><i className="bi bi-check-lg text-success"></i></td>
                </tr>
                <tr className="text-center">
                  <td className="text-start ps-4">Dedicated engineer</td>
                  <td><i className="bi bi-dash text-slate-light"></i></td>
                  <td><i className="bi bi-check-lg text-success"></i></td>
                  <td><i className="bi bi-check-lg text-success"></i></td>
                </tr>
                <tr className="text-center">
                  <td className="text-start ps-4">QA engineer</td>
                  <td><i className="bi bi-dash text-slate-light"></i></td>
                  <td><i className="bi bi-dash text-slate-light"></i></td>
                  <td><i className="bi bi-check-lg text-success"></i></td>
                </tr>
                <tr className="text-center">
                  <td className="text-start ps-4">Monthly hours</td>
                  <td>40</td>
                  <td>100</td>
                  <td>Unlimited</td>
                </tr>
                <tr className="text-center">
                  <td className="text-start ps-4">Progress demos</td>
                  <td>Weekly</td>
                  <td>Twice weekly</td>
                  <td>Daily</td>
                </tr>
                <tr className="text-center">
                  <td className="text-start ps-4 pb-4">Support response time</td>
                  <td className="pb-4">48h</td>
                  <td className="pb-4">24h</td>
                  <td className="pb-4 pe-4">4h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="row section-header justify-content-center text-center">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">Billing questions</span>
              <h2 className="section-title">Pricing FAQs</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 reveal">
              <div className="accordion accordion-custom">
                {pricingFaqs.map((faq, idx) => (
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
                <h2 className="mb-2">Need a custom scope or SLA?</h2>
                <p className="mb-0 fs-5">We frequently structure custom enterprise engagements for multi-product roadmaps.</p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <Link to="/contact" className="btn btn-primary btn-lg-custom">
                  Talk to Sales <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
