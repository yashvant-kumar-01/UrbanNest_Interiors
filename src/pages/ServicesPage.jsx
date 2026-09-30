import React from 'react';
import { SERVICES } from '../data/content';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export default function ServicesPage({ navigateTo, openConsultationModal }) {
  return (
    <div>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url("/images/modular_kitchen.jpg") center/cover',
        color: '#FFFFFF',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="badge-tag" style={{ background: 'rgba(197, 160, 89, 0.2)', color: '#C5A059' }}>
            Our Offerings
          </div>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Comprehensive Interior Design Services
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#D1D5DB' }}>
            From full turnkey home transformations to specialized modular kitchens and executive offices in Ahmedabad.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section style={{ padding: '6rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {SERVICES.map((s, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={s.id} 
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    border: '1px solid #E5E7EB',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-md)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 0
                  }}
                  className="service-overview-card"
                >
                  <div style={{
                    order: isEven ? 1 : 2,
                    position: 'relative',
                    minHeight: '380px'
                  }}>
                    <img 
                      src={s.heroImage} 
                      alt={s.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <div style={{
                    order: isEven ? 2 : 1,
                    padding: '3rem 2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#C5A059', textTransform: 'uppercase', tracking: '0.05em', marginBottom: '0.5rem' }}>
                      Service 0{idx + 1}
                    </div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem', color: '#111827' }}>
                      {s.title}
                    </h2>
                    <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      {s.fullDesc}
                    </p>

                    <div style={{ marginBottom: '1.75rem' }}>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#111827', marginBottom: '0.6rem' }}>
                        Key Highlights:
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {s.highlights.slice(0, 3).map((item) => (
                          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#4B5563' }}>
                            <CheckCircle2 size={16} color="#C5A059" /> {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button
                        onClick={() => navigateTo(`#/services/${s.slug}`)}
                        className="btn btn-primary"
                      >
                        <span>Detailed Page</span>
                        <ArrowRight size={16} />
                      </button>
                      <button
                        onClick={openConsultationModal}
                        className="btn btn-outline"
                      >
                        <span>Get Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantees Strip */}
      <section style={{ padding: '4rem 0', background: '#111827', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <ShieldCheck size={36} color="#C5A059" style={{ margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '0.25rem' }}>10-Year Cabinet Warranty</h3>
              <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>100% Anti-Termite & Water Resistant Plywood</p>
            </div>
            <div>
              <Sparkles size={36} color="#C5A059" style={{ margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '0.25rem' }}>3D Realistic Renders</h3>
              <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Zero guesswork before factory manufacturing</p>
            </div>
            <div>
              <Layers size={36} color="#C5A059" style={{ margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '0.25rem' }}>German Machine Precision</h3>
              <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>1mm laser edge banding and Blum soft close</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
