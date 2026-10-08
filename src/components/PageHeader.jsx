import { Link } from 'react-router-dom';

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <header className="page-header">
      <div className="container">
        {subtitle && (
          <span className="tag-pill mb-2 d-inline-block" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
            {subtitle}
          </span>
        )}
        <h1 className="mb-3">{title}</h1>
        {breadcrumbs.length > 0 && (
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx}>
                {' '}<span>/</span>{' '}
                {crumb.link ? (
                  <Link to={crumb.link}>{crumb.label}</Link>
                ) : (
                  <span className="active">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
