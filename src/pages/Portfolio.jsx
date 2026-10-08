import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { portfolioData } from '../data/portfolioData';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === filter);

  return (
    <>
      <PageHeader
        title="Our Portfolio"
        breadcrumbs={[{ label: 'Portfolio' }]}
      />

      {/* FILTERS */}
      <section className="section pb-0">
        <div className="container">
          <div className="row section-header justify-content-center text-center">
            <div className="col-lg-7 reveal">
              <span className="eyebrow">Case studies</span>
              <h2 className="section-title">Work we're proud of</h2>
              <p className="section-subtitle mx-auto">
                A selection of recent engagements across industries and project types.
              </p>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 reveal">
            <button
              className={`btn btn-sm-custom filter-btn ${filter === 'all' ? 'btn-primary' : 'btn-light-custom'}`}
              onClick={() => setFilter('all')}
              type="button"
            >
              All Work
            </button>
            <button
              className={`btn btn-sm-custom filter-btn ${filter === 'design' ? 'btn-primary' : 'btn-light-custom'}`}
              onClick={() => setFilter('design')}
              type="button"
            >
              Product Design
            </button>
            <button
              className={`btn btn-sm-custom filter-btn ${filter === 'dev' ? 'btn-primary' : 'btn-light-custom'}`}
              onClick={() => setFilter('dev')}
              type="button"
            >
              Development
            </button>
            <button
              className={`btn btn-sm-custom filter-btn ${filter === 'brand' ? 'btn-primary' : 'btn-light-custom'}`}
              onClick={() => setFilter('brand')}
              type="button"
            >
              Branding
            </button>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="section pt-0">
        <div className="container">
          <div className="row g-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4 reveal">
                <Link to={`/portfolio/${item.slug}`} className="portfolio-card d-block">
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
      </section>

      {/* CTA */}
      <section className="section bg-soft">
        <div className="container">
          <div className="cta-section reveal">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="mb-2">Have a project in mind?</h2>
                <p className="mb-0 fs-5">Let's discuss how we can bring your next product idea to life.</p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <Link to="/contact" className="btn btn-primary btn-lg-custom">
                  Start a Project <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
