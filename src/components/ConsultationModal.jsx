import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Send, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/content';

import { processLeadSubmission } from '../utils/leadHandler';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Ahmedabad',
    propertyType: '3BHK Apartment',
    propertySize: '',
    preferredService: 'Full Home Interior Design',
    estimatedBudget: '₹10 Lakhs - ₹20 Lakhs',
    preferredTime: 'Morning (10 AM - 1 PM)',
    projectDescription: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const generatedRef = 'UNI-2026-' + Math.floor(1000 + Math.random() * 9000);
    const result = processLeadSubmission(formData, generatedRef);

    setTimeout(() => {
      setLoading(false);
      setRefNumber(generatedRef);
      setWhatsappUrl(result.whatsappUrl);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div style={{ marginBottom: '1.75rem' }}>
              <div className="badge-tag">
                <Calendar size={14} /> Free Design Consultation
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.4rem', color: '#111827' }}>
                Book Your Interior Consultation
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#6B7280' }}>
                Share details about your space and our lead designer will provide a personalized concept review.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Rajesh Shah"
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
                    placeholder="+91 98980 00000"
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
                    placeholder="name@example.com"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Property Location in Gujarat *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g. Prahlad Nagar, Ahmedabad"
                    className="form-control"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-grid-2">
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
                    <option value="4BHK / Penthouse">4BHK / Penthouse</option>
                    <option value="Independent Villa / Bungalow">Independent Villa / Bungalow</option>
                    <option value="Office / Commercial Space">Office / Commercial Space</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Estimated Budget</label>
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
                <label className="form-label">Interested Service</label>
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
                <label className="form-label">Project Details & Vision (Optional)</label>
                <textarea
                  name="projectDescription"
                  rows={3}
                  placeholder="Tell us about your floor plan status, key preferences or timeline..."
                  className="form-control"
                  value={formData.projectDescription}
                  onChange={handleChange}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.8rem', color: '#6B7280' }}>
                <ShieldCheck size={16} color="#C5A059" />
                <span>Your information is strictly private. No spam or third-party sharing.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {loading ? 'Submitting Details...' : 'Request Design Consultation'}
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '50%', 
              background: 'rgba(197, 160, 89, 0.15)', 
              color: '#C5A059',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle size={42} />
            </div>
            <h2 style={{ fontSize: '1.8rem', color: '#111827', marginBottom: '0.75rem' }}>
              Consultation Request Confirmed!
            </h2>
            <p style={{ color: '#4B5563', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
              Thank you, <strong>{formData.name}</strong>. Our senior interior architect will review your project requirements for <strong>{formData.location}</strong> and call you back within 4 business hours.
            </p>

            <div style={{ 
              background: '#F9FAFB', 
              padding: '1.25rem', 
              borderRadius: '16px', 
              border: '1px solid #E5E7EB',
              marginBottom: '1.5rem',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>Lead Reference ID</span>
                <span style={{ fontSize: '0.8rem', background: '#DEF7EC', color: '#03543F', padding: '0.2rem 0.5rem', borderRadius: '6px', fontWeight: '600' }}>✓ Saved to Database</span>
              </div>
              <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#111827' }}>{refNumber}</div>
              <div style={{ fontSize: '0.85rem', color: '#059669', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle size={15} /> <span>Notification dispatched to studio email (hello@urbannestinteriors.com)</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
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
              <button onClick={handleReset} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
