import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { 
  Coffee, 
  Ruler, 
  Monitor, 
  Layers, 
  Hammer, 
  Key, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Clock
} from 'lucide-react';

export default function ProcessPage({ navigateTo, openConsultationModal }) {
  const extendedSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      duration: "Day 1 - 2",
      desc: "In-depth meeting at our studio in Prahlad Nagar or virtually to understand your space, functional needs, lifestyle preferences, and preliminary budget bounds."
    },
    {
      step: "02",
      title: "Site Visit & Laser Survey",
      duration: "Day 3 - 5",
      desc: "Our architectural surveyors conduct 3D laser measurement of your property to map electrical, plumbing, wall alignment, and beam heights."
    },
    {
      step: "03",
      title: "Requirement & Moodboard Mapping",
      duration: "Day 6 - 10",
      desc: "We co-create moodboards, color swatches, and 2D space layout plans to establish visual direction."
    },
    {
      step: "04",
      title: "3D Visualization & VR Walkthrough",
      duration: "Day 11 - 18",
      desc: "Experience photo-realistic 3D renderings of your living rooms, modular kitchens, and master suites down to exact lighting details."
    },
    {
      step: "05",
      title: "Material Selection & BOQ Quote",
      duration: "Day 19 - 22",
      desc: "Touch physical samples of marine ply, acrylics, laminates, quartz, and hardware. Approve a 100% itemized, non-fluctuating quotation."
    },
    {
      step: "06",
      title: "Factory Production & Onsite Civil",
      duration: "Day 23 - 45",
      desc: "Modular cabinets are precision engineered on German CNC machines while onsite teams complete ceiling, wiring, and tile work."
    },
    {
      step: "07",
      title: "Assembly & Quality Inspection",
      duration: "Day 46 - 55",
      desc: "Factory-finished modules are installed by master carpenters, followed by a strict 40-point quality audit for edge banding and soft-close operation."
    },
    {
      step: "08",
      title: "Deep Cleaning & Handover",
      duration: "Day 56 - 60",
      desc: "Professional deep cleaning, key handover ceremony, and delivery of your 10-Year Structural Warranty certificate."
    }
  ];

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
            Structured Workflow
          </div>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Our 8-Step Interior Design Journey
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#D1D5DB' }}>
            How we turn raw floor plans into beautifully finished living spaces with guaranteed timelines.
          </p>
        </div>
      </section>

      {/* Extended Steps */}
      <section style={{ padding: '6rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container-narrow">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {extendedSteps.map((st, idx) => (
              <div 
                key={st.step}
                style={{
                  background: '#FFFFFF',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'var(--color-dark)',
                  color: '#C5A059',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  flexShrink: 0
                }}>
                  {st.step}
                </div>

                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <h3 style={{ fontSize: '1.35rem', color: '#111827' }}>{st.title}</h3>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#C5A059', background: 'rgba(197, 160, 89, 0.12)', padding: '0.3rem 0.75rem', borderRadius: '50px' }}>
                      <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      {st.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.975rem', color: '#4B5563', lineHeight: '1.6' }}>
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <button onClick={openConsultationModal} className="btn btn-primary btn-lg">
              <span>Start Step 01 - Book Free Consultation</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
