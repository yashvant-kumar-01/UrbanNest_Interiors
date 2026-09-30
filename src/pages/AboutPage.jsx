import React from 'react';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/content';
import { 
  Award, 
  Users, 
  Building, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

export default function AboutPage({ navigateTo, openConsultationModal }) {
  const philosophies = [
    {
      title: "Functionality First",
      desc: "An interior space must support the daily flow of your life. We prioritize ventilation, storage capacity, and ergonomic movement before applying aesthetic coats."
    },
    {
      title: "Deep Personalization",
      desc: "No copy-pasting design templates. We study your family routines, storage habits, cooking style, and aesthetic preferences to craft a custom environment."
    },
    {
      title: "Timeless Simplicity",
      desc: "Trends fade, but clean spatial proportions, natural warm wood tones, and uncluttered geometry age gracefully for decades."
    },
    {
      title: "Uncompromising Quality",
      desc: "We use 100% boiling water proof marine plywood, premium quartz surfaces, and soft-close German fittings built to withstand humid Indian climates."
    },
    {
      title: "Micro-Level Attention",
      desc: "From 1mm laser-cut edge banding to invisible wiring troughs and shadow-recessed false ceiling coves, perfection lies in the details."
    }
  ];

  return (
    <div>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url("/images/hero_interior.jpg") center/cover',
        color: '#FFFFFF',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="badge-tag" style={{ background: 'rgba(197, 160, 89, 0.2)', color: '#C5A059' }}>
            About UrbanNest Interiors
          </div>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Designing Spaces That Elevate Daily Life
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#D1D5DB' }}>
            Ahmedabad's leading full-service interior design firm committed to delivering functional luxury, transparent execution, and timeless Indian modernism.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Story */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div className="badge-tag">Who We Are</div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                Bespoke Interior Solutions in Ahmedabad & Gujarat
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Founded in 2018 in Prahlad Nagar, Ahmedabad, UrbanNest Interiors was born out of a desire to eliminate the friction, cost overruns, and quality compromises traditional home renovation brings.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: '1.7', marginBottom: '2rem' }}>
                We combine architectural studio discipline with state-of-the-art German factory precision manufacturing. By managing every stage—from initial 2D floor plans, 3D photorealistic renderings, civil site alterations to final upholstery—we guarantee a smooth, hassle-free journey for homeowners.
              </p>

              <div style={{ display: 'flex', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#C5A059' }}>250+</div>
                  <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>Homes & Offices Delivered</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#C5A059' }}>60 Days</div>
                  <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>Guaranteed Turnkey Timeline</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#C5A059' }}>10 Years</div>
                  <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>Structural Cabinet Warranty</div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', height: '440px' }}>
                <img 
                  src="/images/master_bedroom.jpg" 
                  alt="Interior Design Studio Team Ahmedabad" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Design Philosophy */}
      <section style={{ padding: '6rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Guiding Principles</div>
            <h2 className="section-title">Our Design Philosophy</h2>
            <p className="section-subtitle">
              Every room we design is guided by 5 non-negotiable core pillars of interior architecture.
            </p>
          </div>

          <div className="grid-3">
            {philosophies.map((item, idx) => (
              <div key={item.title} className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#C5A059', opacity: 0.8, marginBottom: '0.75rem' }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#111827' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.925rem', color: '#6B7280', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats Grid */}
      <section style={{ padding: '5rem 0', background: '#111827', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', textAlign: 'center' }}>
            {COMPANY_INFO.stats.map(st => (
              <div key={st.label}>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: '#C5A059', marginBottom: '0.3rem' }}>
                  {st.value}
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.25rem' }}>
                  {st.label}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>
                  {st.suffix}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Design Leadership</div>
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-subtitle">
              Experienced architects, interior designers, and execution engineers who make your dream home a reality.
            </p>
          </div>

          <div className="grid-2">
            {TEAM_MEMBERS.map(m => (
              <div key={m.name} style={{
                display: 'flex',
                gap: '1.5rem',
                background: '#FAFAFB',
                padding: '1.5rem',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                alignItems: 'center'
              }}>
                <img 
                  src={m.image} 
                  alt={m.name} 
                  style={{ width: '130px', height: '130px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }} 
                />
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#111827', marginBottom: '0.2rem' }}>{m.name}</h3>
                  <div style={{ color: '#C5A059', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.1rem' }}>{m.role}</div>
                  <div style={{ fontSize: '0.8rem', color: '#9CA3AF', marginBottom: '0.6rem' }}>{m.credentials}</div>
                  <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: '1.5' }}>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button 
              onClick={openConsultationModal}
              className="btn btn-primary btn-lg"
            >
              <span>Work With Our Team</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
