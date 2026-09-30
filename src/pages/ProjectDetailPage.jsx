import React, { useState } from 'react';
import { PROJECTS } from '../data/content';
import LightboxModal from '../components/LightboxModal';
import { 
  MapPin, 
  Calendar, 
  Ruler, 
  IndianRupee, 
  ArrowRight, 
  CheckCircle2, 
  Maximize2,
  ChevronLeft
} from 'lucide-react';

export default function ProjectDetailPage({ projectId, navigateTo, openConsultationModal }) {
  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const handleOpenLightbox = (idx) => {
    setActiveImgIdx(idx);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Back button strip */}
      <div style={{ background: '#1F2937', padding: '0.75rem 0', color: '#D1D5DB', fontSize: '0.875rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            onClick={() => navigateTo('#/projects')}
            style={{ background: 'none', border: 'none', color: '#C5A059', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: '600' }}
          >
            <ChevronLeft size={16} /> All Portfolio Projects
          </button>
          <span>/</span>
          <span>{project.title}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section style={{
        background: `linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url("${project.heroImage}") center/cover`,
        color: '#FFFFFF',
        padding: '5rem 0'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'inline-flex', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="badge-tag" style={{ background: 'rgba(197, 160, 89, 0.2)', color: '#C5A059' }}>
                {project.category}
              </span>
              <span className="badge-tag" style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF' }}>
                {project.designStyle}
              </span>
            </div>

            <h1 style={{ fontSize: '3.2rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
              {project.title}
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#D1D5DB', marginBottom: '2rem' }}>
              {project.location} • {project.type}
            </p>

            {/* Quick Spec Pills */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              padding: '1.25rem 1.75rem',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.15)',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#9CA3AF' }}>Super Built-Up Area</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF' }}>{project.areaSqFt} sq.ft</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#9CA3AF' }}>Turnkey Execution</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF' }}>{project.duration}</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#9CA3AF' }}>Investment Tier</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#C5A059' }}>{project.budgetTier}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Story */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <div className="badge-tag">Project Story</div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                Design Concept & Client Brief
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: '1.7', marginBottom: '2rem' }}>
                {project.overview}
              </p>

              {/* Challenge & Solution Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ background: '#FFFBEB', padding: '1.5rem', borderRadius: '12px', border: '1px solid #FDE68A' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#92400E', marginBottom: '0.4rem' }}>
                    The Design Challenge
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: '#B45309', lineHeight: '1.6' }}>
                    {project.challenge}
                  </p>
                </div>

                <div style={{ background: '#ECFDF5', padding: '1.5rem', borderRadius: '12px', border: '1px solid #A7F3D0' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#065F46', marginBottom: '0.4rem' }}>
                    Our Architectural Solution
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: '#047857', lineHeight: '1.6' }}>
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Room Breakdown Box */}
            <div style={{
              background: 'var(--color-bg-light)',
              padding: '2.5rem',
              borderRadius: '20px',
              border: '1px solid #E5E7EB'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '1.5rem' }}>
                Room-by-Room Execution Details
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {project.roomBreakdown.map((item, idx) => (
                  <div key={idx} style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                    <div style={{ fontWeight: '700', fontSize: '1.05rem', color: '#C5A059', marginBottom: '0.25rem' }}>
                      {item.room}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: '1.5' }}>
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button 
                  onClick={openConsultationModal}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Book Consultation For Your Space</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: '6rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">High-Res Gallery</div>
            <h2 className="section-title">Explore Project Spaces</h2>
            <p className="section-subtitle">
              Click any image to view in full-screen lightbox presentation mode.
            </p>
          </div>

          <div className="grid-2">
            {project.gallery.map((imgUrl, idx) => (
              <div 
                key={idx} 
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => handleOpenLightbox(idx)}
              >
                <div className="card-img-wrapper" style={{ height: '320px' }}>
                  <img src={imgUrl} alt={`${project.title} space ${idx + 1}`} className="card-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container">
        <div className="cta-banner">
          <h2 className="cta-title">Inspired by {project.title}?</h2>
          <p className="cta-desc">
            Let's customize this design aesthetic for your property in Ahmedabad.
          </p>
          <button onClick={openConsultationModal} className="btn btn-primary btn-lg">
            <span>Book Design Consultation</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={project.gallery}
        currentIndex={activeImgIdx}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setActiveImgIdx((activeImgIdx - 1 + project.gallery.length) % project.gallery.length)}
        onNext={() => setActiveImgIdx((activeImgIdx + 1) % project.gallery.length)}
      />
    </div>
  );
}
