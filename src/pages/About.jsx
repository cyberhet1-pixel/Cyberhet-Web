import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { teamMembers, companyValues } from '../data/teamData';

export default function About() {
  return (
    <>
      <PageHeader
        title="We're Nexora"
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 reveal">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=560&fit=crop"
                className="rounded-img w-100"
                alt="Nexora studio workspace"
                style={{ aspectRatio: '5/4', objectFit: 'cover' }}
              />
            </div>
            <div className="col-lg-6 reveal">
              <span className="eyebrow">Our story</span>
              <h2 className="section-title">Founded by operators, built for operators</h2>
              <p className="section-subtitle mb-3">
                Nexora started in 2014 when three product leads, frustrated with slow agency turnaround, decided to build the studio they wished they could hire. Over a decade later, we've shipped products for fintech, healthtech and B2B SaaS companies across 34 countries.
              </p>
              <p className="mb-4">
                Today our team of 42 designers, engineers and strategists works in small, senior pods — each dedicated to two or three clients at a time so quality never slips.
              </p>
              <div className="row g-3">
                <div className="col-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-box icon-box-primary">
                      <i className="bi bi-calendar-check"></i>
                    </div>
                    <div>
                      <strong className="text-navy d-block">Since 2014</strong>
                      <small className="text-slate">12 years operating</small>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-box icon-box-success">
                      <i className="bi bi-globe"></i>
                    </div>
                    <div>
                      <strong className="text-navy d-block">Remote-first</strong>
                      <small className="text-slate">Across 9 timezones</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VALUES */}
      <section className="section bg-soft">
        <div className="container">
          <div className="row section-header justify-content-center text-center">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">What drives us</span>
              <h2 className="section-title">The principles behind every engagement</h2>
            </div>
          </div>
          <div className="row g-4">
            {companyValues.map((val, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 reveal">
                <div className="card-premium text-center">
                  <div className={`icon-box ${val.iconClass} mx-auto mb-3`}>
                    <i className={`bi ${val.icon}`}></i>
                  </div>
                  <h3 className="card-title">{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <div className="row section-header justify-content-center text-center">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">Leadership</span>
              <h2 className="section-title">Meet the people steering the ship</h2>
            </div>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 reveal">
                <div className="card-premium text-center">
                  <img
                    src={member.avatar}
                    className="rounded-circle mb-3"
                    style={{ width: '96px', height: '96px', objectFit: 'cover' }}
                    alt={`${member.name}, ${member.role}`}
                  />
                  <h3 className="card-title">{member.name}</h3>
                  <p className="text-primary-custom fw-semibold mb-2">{member.role}</p>
                  <p className="small mb-0">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-soft">
        <div className="container">
          <div className="cta-section reveal">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="mb-2">Want to join our senior pod?</h2>
                <p className="mb-0 fs-5">We're always looking for world-class designers and engineers.</p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <Link to="/contact" className="btn btn-primary btn-lg-custom">
                  View Openings <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
