import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/content';
import { ArrowRight, Clock, Calendar, ExternalLink, Globe } from 'lucide-react';

export default function BlogPage({ navigateTo }) {
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Design Tips'];

  const filteredPosts = selectedCat === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(b => b.category.toLowerCase() === selectedCat.toLowerCase());

  const industryAuthorities = [
    { name: 'Architectural Digest India', url: 'https://www.architecturaldigest.in/' },
    { name: 'Houzz India', url: 'https://www.houzz.in/' },
    { name: 'ArchDaily', url: 'https://www.archdaily.com/' },
    { name: 'Blum Hardware Systems', url: 'https://www.blum.com/in/en/' },
    { name: 'Pantone Color Institute', url: 'https://www.pantone.com/' },
    { name: 'Bureau of Indian Standards', url: 'https://www.bis.gov.in/' }
  ];

  return (
    <div>
      {/* Header Banner */}
      <section className="page-header-section">
        <div className="container">
          <div className="page-header-banner" style={{
            backgroundImage: 'linear-gradient(rgba(17,24,39,0.88), rgba(17,24,39,0.88)), url("/images/hero_interior.jpg")'
          }}>
            <div className="badge-tag" style={{ background: 'rgba(197, 160, 89, 0.2)', color: '#C5A059' }}>
              Design Insights
            </div>
            <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '1rem' }}>
              Interior Design Journal & Ideas
            </h1>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#D1D5DB' }}>
              Honest guides, realistic floor-planning tricks, and material lessons learned from designing homes across Ahmedabad.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section style={{ padding: '5rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          {/* Categories */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setSelectedCat(c)}
                style={{
                  padding: '0.6rem 1.3rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  background: selectedCat === c ? '#111827' : '#FFFFFF',
                  color: selectedCat === c ? '#C5A059' : '#4B5563',
                  border: selectedCat === c ? 'none' : '1px solid #E5E7EB',
                  cursor: 'pointer'
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {filteredPosts.map(post => (
              <div key={post.id} className="card">
                <div 
                  className="card-img-wrapper" 
                  style={{ height: '220px', cursor: 'pointer' }}
                  onClick={() => navigateTo(`/blog/${post.slug}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigateTo(`/blog/${post.slug}`); }}
                  title={`Read: ${post.title}`}
                >
                  <img 
                    src={post.mainImage} 
                    alt={`${post.title} - Interior Design Ideas Ahmedabad`} 
                    loading="lazy" 
                    decoding="async" 
                    className="card-img" 
                  />
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    background: '#111827',
                    color: '#C5A059',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '50px'
                  }}>
                    {post.category}
                  </span>
                </div>
                <div className="card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#9CA3AF', marginBottom: '0.6rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} /> {post.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    {post.externalResources && post.externalResources.length > 0 && (
                      <span className="card-external-tag" title="Includes curated external industry references">
                        <ExternalLink size={11} /> {post.externalResources.length} References
                      </span>
                    )}
                  </div>

                  <h3 
                    className="card-title" 
                    style={{ fontSize: '1.25rem', cursor: 'pointer' }}
                    onClick={() => navigateTo(`/blog/${post.slug}`)}
                  >
                    {post.title}
                  </h3>
                  <p className="card-text">{post.excerpt}</p>

                  <button
                    onClick={() => navigateTo(`/blog/${post.slug}`)}
                    className="btn btn-outline btn-sm"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Trusted External Design Authorities Bar */}
          <div className="blog-partners-bar">
            <div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#C5A059', fontWeight: '700', fontSize: '0.85rem' }}>
                <Globe size={16} /> Trusted Publications & Technical Standards
              </span>
              <p style={{ margin: '0.25rem 0 0 0', color: '#6B7280', fontSize: '0.875rem' }}>
                Practical advice informed by real hardware engineering, Indian building guidelines, and design research:
              </p>
            </div>
            <div className="partner-pills">
              {industryAuthorities.map((auth, idx) => (
                <a
                  key={idx}
                  href={auth.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-pill"
                  title={`Open ${auth.name} website (external link)`}
                >
                  <span>{auth.name}</span>
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
