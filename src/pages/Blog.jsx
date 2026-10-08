import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { blogData, blogCategories, popularTags } from '../data/blogData';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Filter posts based on search term and category
  const filteredPosts = blogData.filter(post => {
    const matchesSearch = searchTerm === '' ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(p => p.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(p => p.id !== (featuredPost ? featuredPost.id : null));

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSuccess(false);
    }, 3000);
  };

  return (
    <>
      <PageHeader
        title="Insights &amp; Resources"
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="section">
        <div className="container">
          <div className="row g-5">
            {/* BLOG LIST */}
            <div className="col-lg-8">
              {(selectedCategory || searchTerm) && (
                <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-soft rounded-3">
                  <span>
                    Showing results for:{' '}
                    <strong>{selectedCategory || `"${searchTerm}"`}</strong>
                  </span>
                  <button
                    className="btn btn-sm btn-link text-primary-custom p-0 text-decoration-none"
                    onClick={() => { setSelectedCategory(''); setSearchTerm(''); }}
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {filteredPosts.length === 0 ? (
                <div className="text-center py-5">
                  <i className="bi bi-search fs-1 text-slate-light mb-3 d-block"></i>
                  <h4>No articles found</h4>
                  <p className="text-slate">Try searching with different keywords or selecting a category.</p>
                  <button
                    className="btn btn-primary btn-sm-custom mt-2"
                    onClick={() => { setSelectedCategory(''); setSearchTerm(''); }}
                  >
                    Show all articles
                  </button>
                </div>
              ) : (
                <>
                  {/* Featured post */}
                  {featuredPost && (
                    <Link to={`/blog/${featuredPost.slug}`} className="text-decoration-none reveal d-block mb-4">
                      <div className="card-premium p-0 overflow-hidden">
                        <div className="row g-0">
                          <div className="col-md-6">
                            <img
                              src={featuredPost.image}
                              className="w-100 h-100"
                              style={{ objectFit: 'cover', minHeight: '260px' }}
                              alt={featuredPost.title}
                            />
                          </div>
                          <div className="col-md-6 d-flex flex-column justify-content-center p-4">
                            <span className="tag-pill">{featuredPost.category}</span>
                            <h3 className="mb-2">{featuredPost.title}</h3>
                            <p className="mb-3">{featuredPost.summary}</p>
                            <div className="d-flex align-items-center gap-2 text-slate-light small">
                              <img
                                src={featuredPost.authorAvatar}
                                className="rounded-circle"
                                style={{ width: '28px', height: '28px' }}
                                alt={featuredPost.author}
                              />
                              <span>{featuredPost.author}</span> · <span>{featuredPost.date}</span> · <span>{featuredPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}

                  {/* Regular posts */}
                  <div className="row g-4">
                    {regularPosts.map((post) => (
                      <div key={post.id} className="col-md-6 reveal">
                        <Link to={`/blog/${post.slug}`} className="text-decoration-none">
                          <div className="card-premium p-0 overflow-hidden h-100 d-flex flex-column">
                            <div className="blog-card-img">
                              <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-card-body pb-4 flex-grow-1 d-flex flex-column justify-content-between">
                              <div>
                                <span className="tag-pill">{post.category}</span>
                                <h3 className="card-title">{post.title}</h3>
                                <p className="small mb-0">{post.summary}</p>
                              </div>
                              <div className="meta-row mt-3">
                                <span><i className="bi bi-person me-1"></i>{post.author}</span>
                                <span><i className="bi bi-clock me-1"></i>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4">
              {/* Search Widget */}
              <div className="widget reveal mb-4">
                <h5>Search</h5>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="btn btn-primary" type="button" aria-label="Search">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="widget reveal mb-4">
                <h5>Categories</h5>
                <ul className="widget-link-list">
                  {blogCategories.map((cat, idx) => (
                    <li
                      key={idx}
                      onClick={() => setSelectedCategory(selectedCategory === cat.name ? '' : cat.name)}
                      style={{ cursor: 'pointer' }}
                      className={selectedCategory === cat.name ? 'fw-bold text-primary-custom' : ''}
                    >
                      <span>{cat.name}</span>
                      <span>{cat.count}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="widget reveal mb-4">
                <h5>Popular Tags</h5>
                <div className="d-flex flex-wrap gap-2">
                  {popularTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="badge-soft"
                      style={{ cursor: 'pointer' }}
                      onClick={() => setSearchTerm(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subscribe Widget */}
              <div className="widget bg-gradient-dark text-white border-0 reveal">
                <div className="icon-box icon-box-white mb-3">
                  <i className="bi bi-envelope-paper"></i>
                </div>
                <h5 className="text-white">Subscribe to our newsletter</h5>
                <p className="text-white-50 small mb-3">One email a month — practical insights, no fluff.</p>
                <form onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.12)', color: '#fff' }}
                  />
                  <button className="btn btn-primary w-100" type="submit">
                    Subscribe
                  </button>
                  {newsletterSuccess && (
                    <small className="text-success mt-2 d-block">
                      ✓ Subscribed successfully!
                    </small>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
