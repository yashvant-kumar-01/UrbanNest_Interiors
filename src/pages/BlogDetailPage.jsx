import React from 'react';
import { BLOG_POSTS } from '../data/content';
import { ChevronLeft, Calendar, Clock, User, Share2, ArrowRight } from 'lucide-react';

export default function BlogDetailPage({ slug, navigateTo, openConsultationModal }) {
  const post = BLOG_POSTS.find(b => b.slug === slug) || BLOG_POSTS[0];

  return (
    <div>
      {/* Back button strip */}
      <div style={{ background: '#1F2937', padding: '0.75rem 0', color: '#D1D5DB', fontSize: '0.875rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            onClick={() => navigateTo('#/blog')}
            style={{ background: 'none', border: 'none', color: '#C5A059', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: '600' }}
          >
            <ChevronLeft size={16} /> All Journal Articles
          </button>
          <span>/</span>
          <span>{post.category}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section style={{
        background: `linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url("${post.mainImage}") center/cover`,
        color: '#FFFFFF',
        padding: '5rem 0'
      }}>
        <div className="container-narrow">
          <div className="badge-tag" style={{ background: 'rgba(197, 160, 89, 0.2)', color: '#C5A059' }}>
            {post.category}
          </div>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '1.25rem', lineHeight: '1.2' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', gap: '1.5rem', color: '#D1D5DB', fontSize: '0.9rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <User size={16} color="#C5A059" /> By {post.author}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Calendar size={16} color="#C5A059" /> {post.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={16} color="#C5A059" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ padding: '5rem 0', background: '#FFFFFF' }}>
        <div className="container-narrow">
          <div style={{
            fontSize: '1.05rem',
            lineHeight: '1.8',
            color: '#374151'
          }}>
            <p style={{ fontSize: '1.2rem', fontWeight: '500', color: '#111827', marginBottom: '2rem', borderLeft: '4px solid #C5A059', paddingLeft: '1.25rem' }}>
              {post.excerpt}
            </p>

            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            <div style={{
              background: 'var(--color-bg-light)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid #E5E7EB',
              marginTop: '3.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#111827', marginBottom: '0.25rem' }}>
                  Enjoyed this article?
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#6B7280' }}>
                  Speak directly with author {post.author} for customized home interior guidance.
                </p>
              </div>
              <button onClick={openConsultationModal} className="btn btn-primary" style={{ flexShrink: 0 }}>
                <span>Book Design Session</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
