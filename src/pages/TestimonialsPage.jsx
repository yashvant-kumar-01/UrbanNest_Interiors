import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, CheckCircle2, Quote, ArrowRight } from 'lucide-react';

export default function TestimonialsPage({ openConsultationModal }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Home Interior', 'Kitchen', 'Villa', 'Office'];

  const filteredTestimonials = filter === 'All' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.category === filter);

  return (
    <div>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(rgba(17,24,39,0.88), rgba(17,24,39,0.88)), url("/images/master_bedroom.jpg") center/cover',
        color: '#FFFFFF',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="badge-tag" style={{ background: 'rgba(197, 160, 89, 0.2)', color: '#C5A059' }}>
            Client Feedback
          </div>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            What Our Homeowners Say
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#D1D5DB' }}>
            Read verified reviews from clients across Prahlad Nagar, Bopal, Bodakdev, and GIFT City.
          </p>
        </div>
      </section>

      {/* Testimonials Filter & Grid */}
      <section style={{ padding: '5rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                style={{
                  padding: '0.65rem 1.4rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  background: filter === c ? '#111827' : '#FFFFFF',
                  color: filter === c ? '#C5A059' : '#4B5563',
                  border: filter === c ? 'none' : '1px solid #E5E7EB',
                  cursor: 'pointer'
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid-2">
            {filteredTestimonials.map(t => (
              <div key={t.id} className="testimonial-card" style={{ padding: '2.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div className="stars">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="#F59E0B" stroke="none" />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#059669', background: '#ECFDF5', padding: '0.25rem 0.65rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle2 size={12} /> Verified Client
                    </span>
                  </div>

                  <p className="testimonial-text" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#1F2937' }}>
                    "{t.comment}"
                  </p>
                </div>

                <div className="testimonial-author" style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid #F3F4F6' }}>
                  <img src={t.avatar} alt={t.name} className="author-avatar" />
                  <div>
                    <div className="author-name" style={{ fontSize: '1.05rem' }}>{t.name}</div>
                    <div className="author-meta">{t.project} • {t.location}</div>
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
          <h2 className="cta-title">Join Our 250+ Satisfied Homeowners</h2>
          <p className="cta-desc">
            Experience 5-star interior design execution for your home in Ahmedabad.
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
