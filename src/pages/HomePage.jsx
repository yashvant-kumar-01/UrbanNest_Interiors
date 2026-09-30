import React from 'react';
import { 
  COMPANY_INFO, 
  CORE_VALUES, 
  SERVICES, 
  PROJECTS, 
  PROCESS_STEPS, 
  TESTIMONIALS 
} from '../data/content';
import BudgetEstimator from '../components/BudgetEstimator';
import { 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Compass, 
  UserCheck, 
  Layout, 
  ShieldCheck, 
  FileCheck, 
  Award, 
  Sparkles,
  Coffee,
  Ruler,
  Monitor,
  Layers,
  Hammer,
  Key
} from 'lucide-react';

const iconMap = {
  UserCheck: <UserCheck size={28} />,
  Layout: <Layout size={28} />,
  ShieldCheck: <ShieldCheck size={28} />,
  FileCheck: <FileCheck size={28} />,
  Award: <Award size={28} />,
  Sparkles: <Sparkles size={28} />,
  Coffee: <Coffee size={24} />,
  Ruler: <Ruler size={24} />,
  Monitor: <Monitor size={24} />,
  Layers: <Layers size={24} />,
  Hammer: <Hammer size={24} />,
  Key: <Key size={24} />
};

export default function HomePage({ navigateTo, openConsultationModal }) {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-trust">
              <MapPin size={16} color="#C5A059" />
              <span>{COMPANY_INFO.trustStatement}</span>
            </div>

            <h1 className="hero-title">
              Beautiful Spaces, Designed Around You.
            </h1>

            <p className="hero-subtitle">
              {COMPANY_INFO.subTagline} We transform apartments, villas, and commercial offices into timeless, functional sanctuaries across Ahmedabad.
            </p>

            <div className="hero-buttons">
              <button 
                onClick={() => navigateTo('#/projects')} 
                className="btn btn-primary btn-lg"
              >
                <span>Explore Our Projects</span>
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={openConsultationModal} 
                className="btn btn-outline-white btn-lg"
              >
                <span>Book a Consultation</span>
              </button>
            </div>

            {/* Quick Stats Bar in Hero */}
            <div style={{
              display: 'flex',
              gap: '2.5rem',
              borderTop: '1px solid rgba(255,255,255,0.15)',
              paddingTop: '1.5rem',
              flexWrap: 'wrap'
            }}>
              {COMPANY_INFO.stats.slice(0, 3).map((st) => (
                <div key={st.label}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#C5A059' }}>{st.value}</div>
                  <div style={{ fontSize: '0.85rem', color: '#D1D5DB' }}>{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div className="badge-tag">About UrbanNest</div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                We Design Spaces That Feel Like Home
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4B5563', marginBottom: '1.25rem' }}>
                At UrbanNest Interiors, we believe that an interior design project is much more than selecting furniture or paint colors. It is about creating a personalized ecosystem that elevates your daily lifestyle, reflects your unique taste, and optimizes every inch of your space.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4B5563', marginBottom: '2rem' }}>
                Based in Prahlad Nagar, Ahmedabad, our multi-disciplinary team of CEPT and NID-trained architects and interior designers takes complete turnkey responsibility—from initial 3D visualization and civil alterations to factory wood fabrication and key handover.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '600' }}>
                  <CheckCircle2 size={20} color="#C5A059" /> 100% Custom Tailored Designs
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '600' }}>
                  <CheckCircle2 size={20} color="#C5A059" /> Guaranteed 60-Day Delivery
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '600' }}>
                  <CheckCircle2 size={20} color="#C5A059" /> 10-Year Structural Warranty
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '600' }}>
                  <CheckCircle2 size={20} color="#C5A059" /> Transparent No-Hidden Cost Quote
                </div>
              </div>

              <button 
                onClick={() => navigateTo('#/about')} 
                className="btn btn-secondary"
              >
                <span>Read Our Full Story</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                height: '480px'
              }}>
                <img 
                  src="/images/hero_interior.jpg" 
                  alt="Modern Indian living room design in Ahmedabad"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-25px',
                background: '#111827',
                color: '#FFFFFF',
                padding: '1.5rem 2rem',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
                maxWidth: '260px'
              }}>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#C5A059' }}>8+ Years</div>
                <div style={{ fontSize: '0.875rem', color: '#D1D5DB' }}>Crafting Luxury Homes in Gujarat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW SECTION */}
      <section style={{ padding: '6rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">What We Do</div>
            <h2 className="section-title">Our Interior Design Services</h2>
            <p className="section-subtitle">
              Comprehensive turnkey design and execution solutions tailored to residential and commercial properties.
            </p>
          </div>

          <div className="grid-3">
            {SERVICES.map((s) => (
              <div key={s.id} className="card">
                <div className="card-img-wrapper">
                  <img src={s.heroImage} alt={s.title} className="card-img" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-text">{s.shortDesc}</p>
                  <button
                    onClick={() => navigateTo(`#/services/${s.slug}`)}
                    className="btn btn-outline btn-sm"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <span>View Service</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button 
              onClick={() => navigateTo('#/services')} 
              className="btn btn-primary"
            >
              <span>Explore All Services & Pricing</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Our Strengths</div>
            <h2 className="section-title">Why Choose UrbanNest Interiors</h2>
            <p className="section-subtitle">
              We combine architectural precision, high-grade materials, and transparent pricing to give you peace of mind.
            </p>
          </div>

          <div className="grid-3">
            {CORE_VALUES.map((val) => (
              <div key={val.title} style={{
                background: '#FAFAFB',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                transition: 'var(--transition-normal)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(197, 160, 89, 0.15)',
                  color: '#C5A059',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  {iconMap[val.icon] || <Sparkles size={28} />}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#111827' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '0.925rem', color: '#6B7280', lineHeight: '1.6' }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS PORTFOLIO PREVIEW */}
      <section style={{ padding: '6rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Portfolio Showcase</div>
            <h2 className="section-title">Featured Completed Projects</h2>
            <p className="section-subtitle">
              Explore recent homes, luxury villas, and corporate offices designed by our team in Ahmedabad.
            </p>
          </div>

          <div className="grid-3">
            {PROJECTS.slice(0, 3).map((proj) => (
              <div key={proj.id} className="card">
                <div className="card-img-wrapper" style={{ height: '260px' }}>
                  <img src={proj.heroImage} alt={proj.title} className="card-img" />
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    background: '#111827',
                    color: '#C5A059',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '50px',
                    textTransform: 'uppercase'
                  }}>
                    {proj.category}
                  </span>
                </div>
                <div className="card-body">
                  <div style={{ fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '0.25rem' }}>
                    {proj.location} • {proj.type}
                  </div>
                  <h3 className="card-title">{proj.title}</h3>
                  <p className="card-text">{proj.overview.substring(0, 110)}...</p>
                  <button
                    onClick={() => navigateTo(`#/projects/${proj.id}`)}
                    className="btn btn-outline btn-sm"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <span>View Project Story</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button 
              onClick={() => navigateTo('#/projects')} 
              className="btn btn-secondary"
            >
              <span>View All {PROJECTS.length} Completed Projects</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. DESIGN PROCESS */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">How We Work</div>
            <h2 className="section-title">Our Seamless Design Process</h2>
            <p className="section-subtitle">
              A structured 6-step journey from initial concept discussion to final keys handover.
            </p>
          </div>

          <div className="process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="process-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="process-num">{step.number}</div>
                  <div style={{ color: '#C5A059' }}>
                    {iconMap[step.icon] || <Coffee size={24} />}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: '#111827' }}>
                  {step.title}
                </h3>
                <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#C5A059', marginBottom: '0.75rem' }}>
                  {step.subtitle}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: '1.5' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button 
              onClick={() => navigateTo('#/process')} 
              className="btn btn-outline"
            >
              <span>Learn Detailed Process & Timeline Guarantee</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE BUDGET ESTIMATOR TOOL */}
      <section className="container">
        <BudgetEstimator openConsultationModal={openConsultationModal} />
      </section>

      {/* 8. TESTIMONIALS */}
      <section style={{ padding: '6rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Client Reviews</div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real feedback from homeowners and business leaders across Ahmedabad and Gujarat.
            </p>
          </div>

          <div className="grid-2">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div>
                  <div className="stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" stroke="none" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{t.comment}"</p>
                </div>
                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} className="author-avatar" />
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-meta">{t.project} • {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="container">
        <div className="cta-banner">
          <h2 className="cta-title">
            Let's Create a Space You'll Love Coming Home To.
          </h2>
          <p className="cta-desc">
            Tell us about your space, your ideas and your vision. Our design team in Ahmedabad will help turn them into a thoughtfully designed interior.
          </p>
          <button 
            onClick={openConsultationModal} 
            className="btn btn-primary btn-lg"
          >
            <span>Book a Consultation</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
