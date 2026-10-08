import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    budget: '',
    service: '',
    message: '',
    agreeTerms: false
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'success'
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    if (
      !formData.fullName ||
      !formData.workEmail ||
      !formData.workEmail.includes('@') ||
      !formData.budget ||
      !formData.service ||
      !formData.message ||
      !formData.agreeTerms
    ) {
      return;
    }

    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        fullName: '',
        workEmail: '',
        companyName: '',
        budget: '',
        service: '',
        message: '',
        agreeTerms: false
      });
      setValidated(false);

      setTimeout(() => {
        setFormStatus('idle');
      }, 4000);
    }, 1200);
  };

  return (
    <>
      <PageHeader
        title="Get In Touch"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* CONTACT INFO CARDS */}
      <section className="section pb-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4 reveal">
              <div className="card-premium text-center">
                <div className="icon-box icon-box-primary mx-auto mb-3">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h3 className="card-title">Visit Us</h3>
                <p className="mb-0">148 Innovation Drive, Suite 400<br />San Francisco, CA 94107</p>
              </div>
            </div>
            <div className="col-md-4 reveal">
              <div className="card-premium text-center">
                <div className="icon-box icon-box-secondary mx-auto mb-3">
                  <i className="bi bi-envelope"></i>
                </div>
                <h3 className="card-title">Email Us</h3>
                <p className="mb-1">General inquiries:<br />
                  <a href="mailto:hello@nexora.com" className="text-primary-custom fw-semibold text-decoration-none">
                    hello@nexora.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 reveal">
              <div className="card-premium text-center">
                <div className="icon-box icon-box-success mx-auto mb-3">
                  <i className="bi bi-telephone"></i>
                </div>
                <h3 className="card-title">Call Us</h3>
                <p className="mb-0">Mon – Fri, 9am – 6pm PST<br />
                  <a href="tel:+14155550182" className="text-primary-custom fw-semibold text-decoration-none">
                    +1 (415) 555-0182
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-stretch">
            {/* FORM */}
            <div className="col-lg-7 reveal">
              <span className="eyebrow">Send a message</span>
              <h2 className="section-title mb-4">Tell us about your project</h2>

              <form className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                    <div className="invalid-feedback">Please enter your name.</div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="workEmail">Work Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="workEmail"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      required
                    />
                    <div className="invalid-feedback">Please enter a valid email address.</div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="companyName">Company</label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="budget">Estimated Budget</label>
                    <select
                      className="form-select"
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      required
                    >
                      <option value="" disabled>Select a range</option>
                      <option>Under $5,000</option>
                      <option>$5,000 – $15,000</option>
                      <option>$15,000 – $50,000</option>
                      <option>$50,000+</option>
                    </select>
                    <div className="invalid-feedback">Please select a budget range.</div>
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="service">Service Needed</label>
                    <select
                      className="form-select"
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option>Product Strategy</option>
                      <option>UI/UX Design</option>
                      <option>Web Development</option>
                      <option>Cloud &amp; DevOps</option>
                      <option>Growth Marketing</option>
                      <option>Something else</option>
                    </select>
                    <div className="invalid-feedback">Please select a service.</div>
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="message">Project Details</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Tell us a bit about your goals, timeline, and anything else we should know."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                    <div className="invalid-feedback">Please share a few details about your project.</div>
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                        required
                      />
                      <label className="form-check-label small text-slate" htmlFor="agreeTerms">
                        I agree to the <a href="#" className="text-primary-custom">Privacy Policy</a> and consent to being contacted about my inquiry.
                      </label>
                      <div className="invalid-feedback">You must agree before submitting.</div>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg-custom"
                      disabled={formStatus === 'sending'}
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : formStatus === 'success' ? (
                        'Message sent ✓'
                      ) : (
                        'Send Message'
                      )}
                    </button>
                    {formStatus === 'success' && (
                      <span className="text-success ms-3 fw-semibold">
                        Thank you! We will reply within 24 hours.
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </div>

            {/* MAP & OFFICE INFO */}
            <div className="col-lg-5 reveal">
              <div className="h-100 d-flex flex-column justify-content-between">
                <div className="map-frame mb-4" style={{ height: '320px' }}>
                  <iframe
                    title="Nexora Studio San Francisco"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0863878696803!2d-122.39997192348574!3d37.78800791142514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c4c1a2f6b%3A0x6b78ff76d338a0c2!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="card-premium">
                  <h4 className="card-title mb-3">What happens next?</h4>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                    <li className="d-flex gap-3">
                      <div className="icon-box icon-box-primary flex-shrink-0" style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>
                        1
                      </div>
                      <div>
                        <strong className="text-navy d-block">Quick Discovery Review</strong>
                        <small className="text-slate">We review your goals within 24 business hours.</small>
                      </div>
                    </li>
                    <li className="d-flex gap-3">
                      <div className="icon-box icon-box-secondary flex-shrink-0" style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>
                        2
                      </div>
                      <div>
                        <strong className="text-navy d-block">30-Min Strategy Call</strong>
                        <small className="text-slate">Meet your lead pod to discuss scope, timelines and budget.</small>
                      </div>
                    </li>
                    <li className="d-flex gap-3">
                      <div className="icon-box icon-box-success flex-shrink-0" style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>
                        3
                      </div>
                      <div>
                        <strong className="text-navy d-block">Tailored Proposal</strong>
                        <small className="text-slate">Receive a detailed roadmap and transparent pricing.</small>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
