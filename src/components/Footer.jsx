import React from 'react';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  Lock 
} from 'lucide-react';

export default function Footer({ navigateTo, openConsultationModal, openOwnerModal }) {
  const handleLink = (route) => {
    navigateTo(route);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div>
            <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="logo-icon" style={{ width: '36px', height: '36px', background: '#C5A059', color: '#111827' }}>
                <Compass size={22} />
              </div>
              <span>UrbanNest <span style={{ color: '#C5A059', fontWeight: '400' }}>Interiors</span></span>
            </div>
            <p className="footer-desc">
              {COMPANY_INFO.aboutShort}
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem' }}>
              <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noreferrer" className="btn-outline-white" style={{ width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noreferrer" className="btn-outline-white" style={{ width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noreferrer" className="btn-outline-white" style={{ width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleLink('#'); }} className="footer-link">Home</a></li>
              <li><a href="#/about" onClick={(e) => { e.preventDefault(); handleLink('#/about'); }} className="footer-link">About Us</a></li>
              <li><a href="#/services" onClick={(e) => { e.preventDefault(); handleLink('#/services'); }} className="footer-link">Our Services</a></li>
              <li><a href="#/projects" onClick={(e) => { e.preventDefault(); handleLink('#/projects'); }} className="footer-link">Portfolio Projects</a></li>
              <li><a href="#/process" onClick={(e) => { e.preventDefault(); handleLink('#/process'); }} className="footer-link">Design Process</a></li>
              <li><a href="#/testimonials" onClick={(e) => { e.preventDefault(); handleLink('#/testimonials'); }} className="footer-link">Testimonials</a></li>
              <li><a href="#/blog" onClick={(e) => { e.preventDefault(); handleLink('#/blog'); }} className="footer-link">Interior Blog</a></li>
              <li><a href="#/contact" onClick={(e) => { e.preventDefault(); handleLink('#/contact'); }} className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="footer-heading">Design Services</h4>
            <ul className="footer-links">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <a 
                    href={`#/services/${s.slug}`} 
                    onClick={(e) => { e.preventDefault(); handleLink(`#/services/${s.slug}`); }} 
                    className="footer-link"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Studio */}
          <div>
            <h4 className="footer-heading">Studio Address</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: '#C5A059', flexShrink: 0, marginTop: '2px' }} />
                <span>{COMPANY_INFO.contact.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: '#C5A059', flexShrink: 0 }} />
                <a href={`tel:${COMPANY_INFO.contact.phone}`} style={{ color: '#D1D5DB' }}>{COMPANY_INFO.contact.phone}</a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} style={{ color: '#C5A059', flexShrink: 0 }} />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} style={{ color: '#D1D5DB' }}>{COMPANY_INFO.contact.email}</a>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <button 
                onClick={openConsultationModal} 
                className="btn btn-primary btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Book Free Consultation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} UrbanNest Interiors. All Rights Reserved. Designed in Ahmedabad.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span 
              style={{ cursor: 'pointer', color: '#C5A059', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }} 
              onClick={openOwnerModal} 
              title="Protected Owner Portal - PIN Required"
            >
              <Lock size={14} /> Owner Portal
            </span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleLink('#/contact')}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleLink('#/contact')}>Terms of Service</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleLink('#/process')}>10-Year Warranty Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

