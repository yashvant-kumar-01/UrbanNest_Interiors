import React, { useState } from 'react';
import { IndianRupee, Calculator, Check, ArrowRight } from 'lucide-react';

export default function BudgetEstimator({ openConsultationModal }) {
  const [bhk, setBhk] = useState('3BHK');
  const [tier, setTier] = useState('Premium');
  const [includeKitchen, setIncludeKitchen] = useState(true);
  const [includeCeiling, setIncludeCeiling] = useState(true);

  // Estimation multiplier logic for Ahmedabad market
  const calculateEstimate = () => {
    let base = 700000;
    if (bhk === '2BHK') base = 550000;
    if (bhk === '3BHK') base = 850000;
    if (bhk === '4BHK') base = 1300000;
    if (bhk === 'Villa') base = 2200000;

    let tierMult = 1.0;
    if (tier === 'Essential') tierMult = 0.85;
    if (tier === 'Premium') tierMult = 1.25;
    if (tier === 'Luxury') tierMult = 1.8;

    let extra = 0;
    if (includeKitchen) extra += 180000;
    if (includeCeiling) extra += 95000;

    const total = Math.round((base * tierMult) + extra);
    const minEst = Math.round(total * 0.92 / 100000);
    const maxEst = Math.round(total * 1.08 / 100000);

    return { min: minEst, max: maxEst, exact: (total / 100000).toFixed(2) };
  };

  const est = calculateEstimate();

  return (
    <div style={{
      background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
      color: '#FFFFFF',
      borderRadius: '20px',
      padding: '3rem 2rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      margin: '3rem 0'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
        <div className="badge-tag" style={{ background: 'rgba(197, 160, 89, 0.2)', color: '#C5A059' }}>
          <Calculator size={14} /> Interactive Estimator
        </div>
        <h2 style={{ color: '#FFFFFF', fontSize: '2.2rem', marginBottom: '0.75rem' }}>
          Calculate Your Interior Design Estimate
        </h2>
        <p style={{ color: '#9CA3AF', fontSize: '0.975rem' }}>
          Get an instant, transparent price estimate tailored for homes in Ahmedabad based on property type and finish preferences.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Property Size */}
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.6rem', color: '#E5E7EB' }}>
              1. Select Property Layout
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
              {['2BHK', '3BHK', '4BHK', 'Villa'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setBhk(type)}
                  style={{
                    padding: '0.6rem 0.4rem',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    background: bhk === type ? '#C5A059' : 'rgba(255,255,255,0.08)',
                    color: bhk === type ? '#111827' : '#FFFFFF',
                    border: bhk === type ? 'none' : '1px solid rgba(255,255,255,0.15)'
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Material Finish Tier */}
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.6rem', color: '#E5E7EB' }}>
              2. Choose Material & Finish Standard
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
              {[
                { name: 'Essential', desc: 'Laminates & HDMR' },
                { name: 'Premium', desc: 'Acrylics & Quartz' },
                { name: 'Luxury', desc: 'PU & Real Veneer' }
              ].map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setTier(item.name)}
                  style={{
                    padding: '0.75rem 0.5rem',
                    borderRadius: '8px',
                    textAlign: 'center',
                    background: tier === item.name ? '#C5A059' : 'rgba(255,255,255,0.08)',
                    color: tier === item.name ? '#111827' : '#FFFFFF',
                    border: tier === item.name ? 'none' : '1px solid rgba(255,255,255,0.15)'
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{item.name}</div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Addons */}
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.6rem', color: '#E5E7EB' }}>
              3. Include Core Modules
            </label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                <input
                  type="checkbox"
                  checked={includeKitchen}
                  onChange={(e) => setIncludeKitchen(e.target.checked)}
                  style={{ accentColor: '#C5A059', width: '18px', height: '18px' }}
                />
                Modular Kitchen
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                <input
                  type="checkbox"
                  checked={includeCeiling}
                  onChange={(e) => setIncludeCeiling(e.target.checked)}
                  style={{ accentColor: '#C5A059', width: '18px', height: '18px' }}
                />
                False Ceiling & COB Lights
              </label>
            </div>
          </div>
        </div>

        {/* Estimation Output Card */}
        <div style={{
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(10px)',
          padding: '2rem',
          borderRadius: '16px',
          border: '1px solid rgba(197, 160, 89, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', tracking: '0.05em', color: '#C5A059', fontWeight: '600', marginBottom: '0.5rem' }}>
            Estimated Investment Range
          </div>

          <div style={{ fontSize: '2.8rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.5rem' }}>
            ₹{est.min} - ₹{est.max} <span style={{ fontSize: '1.2rem', fontWeight: '500', opacity: 0.8 }}>Lakhs</span>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '1.5rem' }}>
            Includes 3D architectural renders, turnkey execution, factory assembly, and 10-year warranty.
          </p>

          <div style={{ textAlign: 'left', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.825rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
              <span style={{ color: '#D1D5DB' }}>Layout Selection:</span>
              <span style={{ fontWeight: '600', color: '#FFFFFF' }}>{bhk}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
              <span style={{ color: '#D1D5DB' }}>Finish Grade:</span>
              <span style={{ fontWeight: '600', color: '#C5A059' }}>{tier}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#D1D5DB' }}>Turnkey Delivery Timeline:</span>
              <span style={{ fontWeight: '600', color: '#FFFFFF' }}>45 - 60 Working Days</span>
            </div>
          </div>

          <button
            onClick={openConsultationModal}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>Get Itemized BOQ Quote</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
