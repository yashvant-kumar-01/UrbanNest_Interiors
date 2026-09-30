import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { Calendar, CheckCircle, ShieldCheck, Send, ArrowRight } from 'lucide-react';

import { processLeadSubmission } from '../utils/leadHandler';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Ahmedabad',
    propertyType: '3BHK Apartment',
    propertySize: '1800 sq.ft',
    preferredService: 'Full Home Interior Design',
    estimatedBudget: '₹10 Lakhs - ₹20 Lakhs',
    preferredContactTime: 'Morning (10:00 AM - 1:00 PM)',
    projectDescription: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const generatedRef = 'UNI-BOOK-' + Math.floor(100000 + Math.random() * 900000);
    const result = processLeadSubmission(formData, generatedRef);

    setTimeout(() => {
      setLoading(false);
      setBookingId(generatedRef);
      setWhatsappUrl(result.whatsappUrl);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(rgba(17,24,39,0.9), rgba(17,24,39,0.9)), url("/images/hero_interior.jpg") center/cover',
        color: '#FFFFFF',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="badge-tag" style={{ background: 'rgba(197, 160, 89, 0.2)', color: '#C5A059' }}>
            Book Appointment
          </div>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Schedule a Design Consultation
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#D1D5DB' }}>
            Meet our senior architectural team at our Prahlad Nagar studio or at your site in Ahmedabad.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section style={{ padding: '6rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container-narrow">
          <div style={{
            background: '#FFFFFF',
            padding: '3.5rem 3rem',
            borderRadius: '24px',
            border: '1px solid #E5E7EB',
            boxShadow: 'var(--shadow-xl)'
          }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                  <h2 style={{ fontSize: '2rem', color: '#111827', marginBottom: '0.5rem' }}>
                    Tell Us About Your Space
                  </h2>
                  <p style={{ color: '#6B7280', fontSize: '1rem' }}>
                    We provide a comprehensive floor plan evaluation & preliminary estimate during consultation.
                  </p>
                </div>

                <div className="form-grid-2">
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

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98795 00000"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@domain.com"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Property Location (Ahmedabad / Gujarat) *</label>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="e.g. SG Highway, Ahmedabad"
                      className="form-control"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Property Type *</label>
                    <select
                      name="propertyType"
                      className="form-control"
                      value={formData.propertyType}
                      onChange={handleChange}
                    >
                      <option value="2BHK Apartment">2BHK Apartment</option>
                      <option value="3BHK Apartment">3BHK Apartment</option>
                      <option value="4BHK Apartment / Penthouse">4BHK Apartment / Penthouse</option>
                      <option value="Luxury Villa / Bungalow">Luxury Villa / Bungalow</option>
                      <option value="Office / Commercial Space">Office / Commercial Space</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Property Size (Approx. Sq. Ft.) *</label>
                    <input
                      type="text"
                      name="propertySize"
                      required
                      placeholder="e.g. 1800 sq.ft"
                      className="form-control"
                      value={formData.propertySize}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Preferred Service</label>
                    <select
                      name="preferredService"
                      className="form-control"
                      value={formData.preferredService}
                      onChange={handleChange}
                    >
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Estimated Budget Range</label>
                    <select
                      name="estimatedBudget"
                      className="form-control"
                      value={formData.estimatedBudget}
                      onChange={handleChange}
                    >
                      <option value="₹5 Lakhs - ₹10 Lakhs">₹5 Lakhs - ₹10 Lakhs</option>
                      <option value="₹10 Lakhs - ₹20 Lakhs">₹10 Lakhs - ₹20 Lakhs</option>
                      <option value="₹20 Lakhs - ₹35 Lakhs">₹20 Lakhs - ₹35 Lakhs</option>
                      <option value="₹35 Lakhs+">₹35 Lakhs+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Contact Time Window</label>
                  <select
                    name="preferredContactTime"
                    className="form-control"
                    value={formData.preferredContactTime}
                    onChange={handleChange}
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Description & Floor Plan Status</label>
                  <textarea
                    name="projectDescription"
                    rows={4}
                    placeholder="Provide additional details regarding possession date, key architectural ideas, or floor plan availability..."
                    className="form-control"
                    value={formData.projectDescription}
                    onChange={handleChange}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem', fontSize: '0.85rem', color: '#6B7280' }}>
                  <ShieldCheck size={18} color="#C5A059" />
                  <span>100% Privacy Protection. No spam or commercial sharing.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Send size={18} />
                  <span>{loading ? 'Processing Appointment...' : 'Submit Consultation Request'}</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(197, 160, 89, 0.15)',
                  color: '#C5A059',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <CheckCircle size={52} />
                </div>
                <h2 style={{ fontSize: '2.2rem', color: '#111827', marginBottom: '0.75rem' }}>
                  Consultation Booking Successful!
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#4B5563', maxWidth: '540px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
                  Dear <strong>{formData.name}</strong>, your consultation appointment request for your property in <strong>{formData.location}</strong> has been registered.
                </p>

                <div style={{
                  background: '#FAFAFB',
                  border: '1px solid #E5E7EB',
                  padding: '1.5rem 2rem',
                  borderRadius: '16px',
                  maxWidth: '480px',
                  margin: '0 auto 1.5rem auto',
                  textAlign: 'left'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#6B7280', textTransform: 'uppercase' }}>Booking Reference ID</span>
                    <span style={{ fontSize: '0.8rem', background: '#DEF7EC', color: '#03543F', padding: '0.2rem 0.5rem', borderRadius: '6px', fontWeight: '600' }}>✓ Database Saved</span>
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111827', marginBottom: '0.5rem' }}>{bookingId}</div>
                  <div style={{ fontSize: '0.9rem', color: '#C5A059', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Scheduled Contact Window: {formData.preferredContactTime}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle size={15} /> <span>Email notification sent to studio (hello@urbannestinteriors.com)</span>
                  </div>
                </div>

                <div style={{ maxWidth: '480px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                    style={{ 
                      background: '#25D366', 
                      borderColor: '#25D366',
                      color: '#FFFFFF',
                      width: '100%', 
                      justifyContent: 'center',
                      fontWeight: '700'
                    }}
                  >
                    📱 Send Direct Inquiry on WhatsApp
                  </a>
                  <button onClick={() => setSubmitted(false)} className="btn btn-secondary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
