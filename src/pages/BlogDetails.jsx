import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { blogData } from '../data/blogData';

export default function BlogDetails() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const post = blogData.find(p => p.slug === id || p.id === id) || blogData[0];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    const newComment = {
      name: formData.name,
      comment: formData.comment,
      date: 'Just now'
    };

    setComments(prev => [newComment, ...prev]);
    setCommentSubmitted(true);
    setFormData({ name: '', email: '', comment: '' });

    setTimeout(() => {
      setCommentSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <PageHeader
        title={post.title}
        subtitle={post.category}
        breadcrumbs={[
          { label: 'Blog', link: '/blog' },
          { label: post.title }
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 reveal">
              {/* Author Info */}
              <div className="d-flex align-items-center gap-3 mb-4 pb-4 border-bottom">
                <img
                  src={post.authorAvatar}
                  className="rounded-circle"
                  style={{ width: '48px', height: '48px' }}
                  alt={post.author}
                />
                <div>
                  <div className="fw-bold text-navy">{post.author}</div>
                  <small className="text-slate-light">{post.date} · {post.readTime}</small>
                </div>
              </div>

              {/* Banner Image */}
              <img
                src={post.image}
                className="rounded-img w-100 mb-4"
                alt={post.title}
                style={{ aspectRatio: '16/9', objectFit: 'cover' }}
              />

              {/* Dynamic Content Paragraphs */}
              {post.content.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'fs-5 mb-4' : 'mb-4'}>
                  {paragraph}
                </p>
              ))}

              {/* Three Horizon Framework Callout */}
              <div className="row g-3 mb-4 mt-2">
                <div className="col-md-4">
                  <div className="feature-grid-item flex-column">
                    <div className="icon-box icon-box-success mb-2">
                      <i className="bi bi-1-circle"></i>
                    </div>
                    <strong className="text-navy d-block mb-1">Now</strong>
                    <span className="small text-slate">In progress, fully scoped, dates are commitments.</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-grid-item flex-column">
                    <div className="icon-box icon-box-primary mb-2">
                      <i className="bi bi-2-circle"></i>
                    </div>
                    <strong className="text-navy d-block mb-1">Next</strong>
                    <span className="small text-slate">Scoped at a high level, dates are estimates.</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-grid-item flex-column">
                    <div className="icon-box icon-box-secondary mb-2">
                      <i className="bi bi-3-circle"></i>
                    </div>
                    <strong className="text-navy d-block mb-1">Later</strong>
                    <span className="small text-slate">Directional only — themes, not features.</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="d-flex flex-wrap gap-2 mb-4 pt-3 border-top">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="badge-soft">{tag}</span>
                ))}
              </div>

              {/* Author Box */}
              <div className="widget d-flex gap-3 align-items-center mb-5">
                <img
                  src={post.authorAvatar}
                  className="rounded-circle"
                  style={{ width: '64px', height: '64px' }}
                  alt={post.author}
                />
                <div>
                  <h5 className="mb-1">{post.author}</h5>
                  <p className="small mb-0 text-slate">{post.authorBio}</p>
                </div>
              </div>

              {/* Comments Section */}
              <h4 className="mb-4">Comments ({comments.length})</h4>

              {comments.length > 0 && (
                <div className="mb-4">
                  {comments.map((c, i) => (
                    <div key={i} className="p-3 bg-soft rounded-3 mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <strong className="text-navy">{c.name}</strong>
                        <small className="text-slate-light">{c.date}</small>
                      </div>
                      <p className="mb-0 text-slate small">{c.comment}</p>
                    </div>
                  ))}
                </div>
              )}

              <form onSubmit={handleCommentSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="authorName">Name</label>
                    <input
                      id="authorName"
                      type="text"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="authorEmail">Email</label>
                    <input
                      id="authorEmail"
                      type="email"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="userComment">Comment</label>
                    <textarea
                      id="userComment"
                      className="form-control"
                      rows="4"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      Post Comment
                    </button>
                    {commentSubmitted && (
                      <span className="text-success ms-3 align-middle">
                        ✓ Comment posted successfully!
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4 reveal">
              <div className="widget mb-4">
                <h5>More Articles</h5>
                <ul className="widget-link-list">
                  {blogData.filter(p => p.id !== post.id).slice(0, 4).map(p => (
                    <li key={p.id}>
                      <Link to={`/blog/${p.slug}`} className="text-decoration-none text-navy">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="widget bg-gradient-dark text-white border-0">
                <div className="icon-box icon-box-white mb-3">
                  <i className="bi bi-chat-heart"></i>
                </div>
                <h5 className="text-white">Discuss this article</h5>
                <p className="text-white-50 small mb-3">
                  Have questions or want to collaborate with our strategy team?
                </p>
                <Link to="/contact" className="btn btn-primary w-100">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
