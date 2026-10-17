import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/content';
import { ChevronLeft, Calendar, Clock, User, ArrowRight, Share2, Check, ExternalLink, Globe } from 'lucide-react';
import { shareContent } from '../utils/seoHelper';

export default function BlogDetailPage({ slug, navigateTo, openConsultationModal }) {
  const post = BLOG_POSTS.find(b => b.slug === slug) || BLOG_POSTS[0];
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const res = await shareContent({
      title: post.title,
      text: post.excerpt,
      url: window.location.href
    });
    if (res.success || res.method === 'clipboard') {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;

  return (
    <div>
      {/* Back button strip */}
      <div style={{ background: '#1F2937', padding: '0.75rem 0', color: '#D1D5DB', fontSize: '0.875rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', overflowWrap: 'break-word' }}>
          <button
            onClick={() => navigateTo('/blog')}
            style={{ background: 'none', border: 'none', color: '#C5A059', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: '600', padding: 0 }}
          >
            <ChevronLeft size={16} /> All Journal Articles
          </button>
          <span>/</span>
          <span>{post.category}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="page-header-section">
        <div className="container">
          <div className="page-header-banner" style={{
            backgroundImage: `linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url("${post.mainImage}")`,
            textAlign: 'left'
          }}>
            <div className="container-narrow" style={{ padding: 0 }}>
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
                {post.externalResources && post.externalResources.length > 0 && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#F3F4F6' }}>
                    <ExternalLink size={15} color="#C5A059" /> {post.externalResources.length} Curated References
                  </span>
                )}
              </div>
            </div>
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
            <p style={{ fontSize: '1.2rem', fontWeight: '500', color: '#111827', marginBottom: '1.5rem', borderLeft: '4px solid #C5A059', paddingLeft: '1.25rem' }}>
              {post.excerpt}
            </p>

            {/* Social Sharing & Backlink Generator Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.85rem 1.25rem',
              background: '#F9FAFB',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              marginBottom: '2.5rem',
              flexWrap: 'wrap'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Share2 size={16} color="#C5A059" /> Share Article:
              </span>
              <a
                href={whatsappShareUrl}
                target="_blank"
                className="btn btn-sm btn-outline"
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.825rem' }}
                rel="noopener noreferrer"
                title="Share on WhatsApp"
              >
                WhatsApp
              </a>
              <a
                href={linkedinShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline"
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.825rem' }}
                title="Share on LinkedIn"
              >
                LinkedIn
              </a>
              <button
                onClick={handleCopyLink}
                className="btn btn-sm btn-outline"
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.825rem' }}
                title="Copy Article Link"
              >
                {copied ? <Check size={14} color="#10B981" /> : null}
                <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
              </button>
            </div>

            {/* Main Article Content with in-text external links */}
            <div className="blog-content-body" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Related External Resources & References */}
            {post.externalResources && post.externalResources.length > 0 && (
              <div className="blog-external-resources">
                <div className="resources-header">
                  <div className="resources-badge">
                    <Globe size={13} /> Recommended Reading & Sources
                  </div>
                  <h3 style={{ fontSize: '1.35rem', color: '#111827', margin: '0.5rem 0 0.4rem 0' }}>
                    Curated Reading & External References
                  </h3>
                  <p style={{ color: '#6B7280', fontSize: '0.925rem', margin: 0 }}>
                    Helpful guides, technical standards, and trusted publications related to this topic:
                  </p>
                </div>

                <div className="resources-grid">
                  {post.externalResources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-resource-card"
                      title={`Visit ${resource.source} (opens in new tab)`}
                    >
                      <div className="resource-top">
                        <span className="resource-source-badge">{resource.source}</span>
                        <span className="resource-tag">{resource.tag}</span>
                      </div>
                      <h4 className="resource-title">
                        {resource.title}
                      </h4>
                      <p className="resource-desc">
                        {resource.description}
                      </p>
                      <div className="resource-footer">
                        <span className="resource-action-text">Read on {resource.source}</span>
                        <ExternalLink size={14} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div
              className="blog-cta-banner"
              style={{
                background: 'var(--color-bg-light)',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                marginTop: '3.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem',
                flexWrap: 'wrap'
              }}
            >
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
