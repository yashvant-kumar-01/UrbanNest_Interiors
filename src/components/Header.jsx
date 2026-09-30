import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/content';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Compass, 
  ChevronRight, 
  Calendar 
} from 'lucide-react';

export default function Header({ currentRoute, navigateTo, openConsultationModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', route: '#' },
    { label: 'About', route: '#/about' },
    { label: 'Services', route: '#/services' },
    { label: 'Projects', route: '#/projects' },
    { label: 'Process', route: '#/process' },
    { label: 'Testimonials', route: '#/testimonials' },
    { label: 'Blog', route: '#/blog' },
    { label: 'Contact', route: '#/contact' },
  ];

  const handleNavClick = (route) => {
    navigateTo(route);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#'); }} 
            className="brand-logo"
          >
            <div className="logo-icon">
              <Compass size={24} />
            </div>
            <span>UrbanNest <span style={{ color: '#C5A059', fontWeight: '400' }}>Interiors</span></span>
          </a>

          {/* Desktop Nav */}
          <ul className="nav-links">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route || (item.route !== '#' && currentRoute.startsWith(item.route));
              return (
                <li key={item.label}>
                  <a
                    href={item.route}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.route);
                    }}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={openConsultationModal}
              className="btn btn-primary btn-sm header-cta-btn"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Calendar size={16} />
              <span>Book a Consultation</span>
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer Overlay */}
      <div 
        className={`drawer-overlay ${isMobileMenuOpen ? 'show' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Nav Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="brand-logo" style={{ fontSize: '1.2rem' }}>
            <div className="logo-icon" style={{ width: '34px', height: '34px' }}>
              <Compass size={20} />
            </div>
            <span>UrbanNest Interiors</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#111827' }}
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <li key={item.label}>
                <a
                  href={item.route}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.route);
                  }}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{item.label}</span>
                    <ChevronRight size={18} opacity={0.5} />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

        <div style={{ marginTop: 'auto' }}>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              openConsultationModal();
            }}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Calendar size={18} />
            <span>Book a Consultation</span>
          </button>
          <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#6B7280', textAlign: 'center' }}>
            <p>Ahmedabad, Gujarat</p>
            <p>+91 98795 43210</p>
          </div>
        </div>
      </div>
    </>
  );
}
