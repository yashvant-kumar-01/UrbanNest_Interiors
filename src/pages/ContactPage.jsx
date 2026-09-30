import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  ShieldCheck 
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full Home Interior Design',
    propertyType: '3BHK Apartment',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

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
            Get In Touch
          </div>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Contact UrbanNest Interiors
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#D1D5DB' }}>
            Visit our interior studio in Prahlad Nagar, Ahmedabad or send us a message to schedule a site measurement.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            {/* Left: Contact Details */}
            <div>
              <div className="badge-tag">Studio Information</div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                We'd Love to Hear About Your Home
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                Whether you are buying a new 3BHK flat on SG Highway, remodeling a villa in Bopal, or setting up a corporate office in GIFT City, our design team is ready to guide you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(197, 160, 89, 0.15)',
                    color: '#C5A059',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#111827', marginBottom: '0.2rem' }}>Studio Address</h3>
                    <p style={{ fontSize: '0.95rem', color: '#4B5563' }}>{COMPANY_INFO.contact.address}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(197, 160, 89, 0.15)',
                    color: '#C5A059',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#111827', marginBottom: '0.2rem' }}>Phone Numbers</h3>
                    <p style={{ fontSize: '0.95rem', color: '#4B5563' }}>
                      <a href={`tel:${COMPANY_INFO.contact.phone}`} style={{ color: '#111827', fontWeight: '600' }}>{COMPANY_INFO.contact.phone}</a> / {COMPANY_INFO.contact.phoneSecondary}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(197, 160, 89, 0.15)',
                    color: '#C5A059',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#111827', marginBottom: '0.2rem' }}>Email Address</h3>
                    <p style={{ fontSize: '0.95rem', color: '#4B5563' }}>
                      <a href={`mailto:${COMPANY_INFO.contact.email}`} style={{ color: '#111827', fontWeight: '600' }}>{COMPANY_INFO.contact.email}</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(197, 160, 89, 0.15)',
                    color: '#C5A059',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#111827', marginBottom: '0.2rem' }}>Business Hours</h3>
                    <p style={{ fontSize: '0.95rem', color: '#4B5563' }}>{COMPANY_INFO.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div style={{
              background: '#FFFFFF',
              padding: '3rem 2.5rem',
              borderRadius: '20px',
              border: '1px solid #E5E7EB',
              boxShadow: 'var(--shadow-lg)'
            }}>
              {!submitted ? (
                <>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#111827' }}>
                    Send Us a Message
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#6B7280', marginBottom: '2rem' }}>
                    Fill out the form below and we will contact you within 4 hours.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Samir Shah"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="samir@example.com"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+91 98980 00000"
                          className="form-control"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">Service Interested In</label>
                        <select
                          name="service"
                          className="form-control"
                          value={formData.service}
                          onChange={handleChange}
                        >
                          {SERVICES.map(s => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Property Type</label>
                        <select
                          name="propertyType"
                          className="form-control"
                          value={formData.propertyType}
                          onChange={handleChange}
                        >
                          <option value="2BHK Apartment">2BHK Apartment</option>
                          <option value="3BHK Apartment">3BHK Apartment</option>
                          <option value="4BHK / Villa">4BHK / Villa</option>
                          <option value="Office Interior">Office Interior</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Message *</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        placeholder="Tell us about your space layout, key requirements or site location..."
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <Send size={18} />
                      <span>{loading ? 'Sending Request...' : 'Request a Consultation'}</span>
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '50%', 
                    background: 'rgba(197, 160, 89, 0.15)', 
                    color: '#C5A059',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto'
                  }}>
                    <CheckCircle size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: '#111827', marginBottom: '0.5rem' }}>
                    Message Received!
                  </h3>
                  <p style={{ color: '#4B5563', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Thank you <strong>{formData.name}</strong>. Our senior interior consultant will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ahmedabad Map Embed */}
      <section style={{ height: '400px', width: '100%', borderTop: '1px solid #E5E7EB' }}>
        <iframe
          title="UrbanNest Interiors Ahmedabad Map Location"
          src={COMPANY_INFO.contact.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
