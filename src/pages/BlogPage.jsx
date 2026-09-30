import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/content';
import { ArrowRight, Clock, User, Calendar, Tag } from 'lucide-react';

export default function BlogPage({ navigateTo, openConsultationModal }) {
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Design Tips'];

  const filteredPosts = selectedCat === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(b => b.category.toLowerCase() === selectedCat.toLowerCase());

  return (
    <div>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(rgba(17,24,39,0.88), rgba(17,24,39,0.88)), url("/images/hero_interior.jpg") center/cover',
        color: '#FFFFFF',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="badge-tag" style={{ background: 'rgba(197, 160, 89, 0.2)', color: '#C5A059' }}>
            Design Insights
          </div>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Interior Design Journal & Ideas
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#D1D5DB' }}>
            Expert advice, trends, material guides, and space optimization tips for Indian homes.
          </p>
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
                <div className="card-img-wrapper" style={{ height: '220px' }}>
                  <img src={post.mainImage} alt={post.title} className="card-img" />
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
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="card-title" style={{ fontSize: '1.25rem' }}>{post.title}</h3>
                  <p className="card-text">{post.excerpt}</p>

                  <button
                    onClick={() => navigateTo(`#/blog/${post.slug}`)}
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
        </div>
      </section>
    </div>
  );
}
