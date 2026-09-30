import React, { useState } from 'react';
import { PROJECTS } from '../data/content';
import { ArrowRight, Filter, MapPin, Layers, Calendar, Sparkles } from 'lucide-react';

export default function ProjectsPage({ navigateTo, openConsultationModal }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Residential', 'Villa', 'Kitchen', 'Bedroom', 'Office'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

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
            Our Work
          </div>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Portfolio of Completed Interiors
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#D1D5DB' }}>
            Explore real homes, luxury villas, modular kitchens, and workspaces executed across Ahmedabad.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section style={{ padding: '5rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            justify: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem'
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.65rem 1.4rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  background: activeCategory === cat ? '#111827' : '#FFFFFF',
                  color: activeCategory === cat ? '#C5A059' : '#4B5563',
                  border: activeCategory === cat ? 'none' : '1px solid #E5E7EB',
                  boxShadow: activeCategory === cat ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
              >
                {cat} {cat === 'All' ? `(${PROJECTS.length})` : ''}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid-3">
            {filteredProjects.map(proj => (
              <div key={proj.id} className="card">
                <div className="card-img-wrapper" style={{ height: '270px' }}>
                  <img src={proj.heroImage} alt={proj.title} className="card-img" />
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    background: '#111827',
                    color: '#C5A059',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '50px',
                    textTransform: 'uppercase'
                  }}>
                    {proj.category}
                  </span>
                </div>
                <div className="card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#6B7280', marginBottom: '0.4rem' }}>
                    <MapPin size={14} color="#C5A059" />
                    <span>{proj.location} • {proj.type}</span>
                  </div>
                  <h3 className="card-title" style={{ fontSize: '1.4rem' }}>{proj.title}</h3>
                  <div style={{ fontSize: '0.825rem', color: '#C5A059', fontWeight: '600', marginBottom: '0.75rem' }}>
                    Style: {proj.designStyle}
                  </div>
                  <p className="card-text">{proj.overview.substring(0, 115)}...</p>
                  
                  <div style={{
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    paddingTop: '1rem',
                    borderTop: '1px solid #F3F4F6',
                    marginTop: '1rem'
                  }}>
                    <span style={{ fontSize: '0.825rem', color: '#6B7280' }}>
                      Area: <strong>{proj.areaSqFt} sq.ft</strong>
                    </span>
                    <button
                      onClick={() => navigateTo(`#/projects/${proj.id}`)}
                      className="btn btn-outline btn-sm"
                    >
                      <span>View Project</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container">
        <div className="cta-banner">
          <h2 className="cta-title">Want a Similar Interior Design for Your Home?</h2>
          <p className="cta-desc">
            Get in touch with our lead architect in Ahmedabad to discuss customized layouts and material finishes.
          </p>
          <button onClick={openConsultationModal} className="btn btn-primary btn-lg">
            <span>Book Design Consultation</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
