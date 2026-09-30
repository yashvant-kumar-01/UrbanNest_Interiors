import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import LightboxModal from '../components/LightboxModal';
import { 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Calendar,
  Sparkles,
  Maximize2
} from 'lucide-react';

export default function ServiceDetailPage({ slug, navigateTo, openConsultationModal }) {
  const service = SERVICES.find(s => s.slug === slug) || SERVICES[0];

  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleOpenLightbox = (idx) => {
    setActiveImgIdx(idx);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Service Hero */}
      <section style={{
        background: `linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url("${service.heroImage}") center/cover`,
        color: '#FFFFFF',
        padding: '6rem 0 5rem 0'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="badge-tag" style={{ background: 'rgba(197, 160, 89, 0.2)', color: '#C5A059' }}>
              Service Detail
            </div>
            <h1 style={{ fontSize: '3.2rem', color: '#FFFFFF', marginBottom: '1rem', lineHeight: '1.15' }}>
              {service.title}
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#D1D5DB', marginBottom: '2rem', lineHeight: '1.6' }}>
              {service.shortDesc}
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button onClick={openConsultationModal} className="btn btn-primary btn-lg">
                <Calendar size={18} />
                <span>Book Service Consultation</span>
              </button>
              <button onClick={() => navigateTo('#/projects')} className="btn btn-outline-white btn-lg">
                <span>View Real Executed Projects</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Description & Highlights */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <div className="badge-tag">Service Overview</div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                Thoughtful Engineering & Elegant Aesthetics
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {service.fullDesc}
              </p>

              <div style={{ background: 'var(--color-bg-light)', padding: '2rem', borderRadius: '16px', border: '1px solid #E5E7EB', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#111827' }}>
                  Why Homeowners Choose Our {service.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {service.highlights.map((hl) => (
                    <div key={hl} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', fontWeight: '600', color: '#1F2937' }}>
                      <CheckCircle2 size={20} color="#C5A059" style={{ flexShrink: 0 }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inclusions Box */}
            <div style={{
              background: '#111827',
              color: '#FFFFFF',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-xl)'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#C5A059', textTransform: 'uppercase', tracking: '0.05em', fontWeight: '700', marginBottom: '0.5rem' }}>
                What We Provide
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.75rem', marginBottom: '1.25rem' }}>
                Turnkey Scope of Work
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {service.includes.map((inc, i) => (
                  <div key={inc} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#E5E7EB' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(197, 160, 89, 0.2)',
                      color: '#C5A059',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      {i + 1}
                    </div>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={openConsultationModal}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Request Detailed BOQ & Layout</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Available Design Styles */}
      <section style={{ padding: '5rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Design Aesthetics</div>
            <h2 className="section-title">Popular Design Styles for {service.title}</h2>
            <p className="section-subtitle">
              Choose from curated architectural themes tailored for modern Indian luxury homes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {service.designStyles.map(st => (
              <div key={st} style={{
                background: '#FFFFFF',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <Sparkles size={24} color="#C5A059" />
                <span style={{ fontWeight: '700', fontSize: '1rem', color: '#111827' }}>{st}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Visual Inspiration</div>
            <h2 className="section-title">{service.title} Project Gallery</h2>
            <p className="section-subtitle">
              Click any image to expand full-screen high-resolution details.
            </p>
          </div>

          <div className="grid-3">
            {service.gallery.map((imgUrl, idx) => (
              <div 
                key={idx} 
                className="card"
                style={{ cursor: 'pointer', position: 'relative' }}
                onClick={() => handleOpenLightbox(idx)}
              >
                <div className="card-img-wrapper" style={{ height: '280px' }}>
                  <img src={imgUrl} alt={`${service.title} view ${idx + 1}`} className="card-img" />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.3)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFF'
                  }} className="img-hover-overlay">
                    <Maximize2 size={32} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      {service.faq && service.faq.length > 0 && (
        <section style={{ padding: '6rem 0', background: 'var(--color-bg-light)' }}>
          <div className="container-narrow">
            <div className="section-header">
              <div className="badge-tag">Got Questions?</div>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Clear answers regarding timelines, material choices, and execution processes.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {service.faq.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx} 
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '12px',
                      border: '1px solid #E5E7EB',
                      overflow: 'hidden',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        textAlign: 'left',
                        background: 'transparent',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontWeight: '700',
                        fontSize: '1.05rem',
                        color: '#111827'
                      }}
                    >
                      <span>{item.question}</span>
                      {isOpen ? <ChevronUp size={20} color="#C5A059" /> : <ChevronDown size={20} color="#6B7280" />}
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: '0 1.5rem 1.25rem 1.5rem',
                        color: '#4B5563',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        borderTop: '1px solid #F3F4F6'
                      }}>
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Consultation Banner */}
      <section className="container">
        <div className="cta-banner">
          <h2 className="cta-title">Ready to Design Your {service.title}?</h2>
          <p className="cta-desc">
            Book a complimentary 1-on-1 session with our senior interior architect in Ahmedabad to review your floor plans.
          </p>
          <button onClick={openConsultationModal} className="btn btn-primary btn-lg">
            <span>Book Consultation Now</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={service.gallery}
        currentIndex={activeImgIdx}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setActiveImgIdx((activeImgIdx - 1 + service.gallery.length) % service.gallery.length)}
        onNext={() => setActiveImgIdx((activeImgIdx + 1) % service.gallery.length)}
      />
    </div>
  );
}
