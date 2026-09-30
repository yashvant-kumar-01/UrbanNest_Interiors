import React, { useState, useEffect } from 'react';
import { X, Lock, Key, Download, Trash2, Eye, EyeOff, ShieldCheck, UserCheck, RefreshCw } from 'lucide-react';
import { 
  getSavedLeads, 
  exportLeadsToCSV, 
  verifyOwnerPIN, 
  setOwnerPIN, 
  getOwnerPIN,
  clearSavedLeads 
} from '../utils/leadHandler';

export default function OwnerModal({ isOpen, onClose }) {
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [leads, setLeads] = useState([]);
  
  // PIN change state
  const [isChangingPin, setIsChangingPin] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [pinSuccessMsg, setPinSuccessMsg] = useState('');

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      setLeads(getSavedLeads());
    }
  }, [isOpen, isAuthenticated]);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (verifyOwnerPIN(pin)) {
      setIsAuthenticated(true);
      setErrorMsg('');
      setLeads(getSavedLeads());
    } else {
      setErrorMsg('Incorrect PIN! Default PIN is 1234. Please try again.');
    }
  };

  const handleClose = () => {
    setPin('');
    setErrorMsg('');
    setIsAuthenticated(false);
    setIsChangingPin(false);
    setPinSuccessMsg('');
    onClose();
  };

  const handleExport = () => {
    const success = exportLeadsToCSV();
    if (!success) {
      alert('No customer leads currently stored to export.');
    }
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all stored customer leads? This action cannot be undone.')) {
      clearSavedLeads();
      setLeads([]);
      alert('Stored leads database cleared successfully.');
    }
  };

  const handleChangePinSubmit = (e) => {
    e.preventDefault();
    if (newPin.trim().length < 4) {
      alert('PIN must be at least 4 characters/digits long.');
      return;
    }
    setOwnerPIN(newPin.trim());
    setPinSuccessMsg(`Owner PIN updated successfully! Your new PIN is: ${newPin.trim()}`);
    setNewPin('');
    setTimeout(() => {
      setIsChangingPin(false);
      setPinSuccessMsg('');
    }, 2500);
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()} 
        style={{ maxWidth: isAuthenticated ? '760px' : '440px', width: '92%' }}
      >
        <button className="modal-close" onClick={handleClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!isAuthenticated ? (
          /* Authentication Screen */
          <div style={{ textAlign: 'center', padding: '0.5rem' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(197, 160, 89, 0.15)',
              color: '#C5A059',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <Lock size={30} />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1E293B', marginBottom: '0.5rem' }}>
              Owner Security Portal
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Enter your Owner Passcode to access customer leads & export data.
            </p>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPin ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Enter Owner PIN (Default: 1234)"
                  value={pin}
                  onChange={(e) => { setPin(e.target.value); setErrorMsg(''); }}
                  required
                  autoFocus
                  style={{
                    paddingRight: '2.5rem',
                    textAlign: 'center',
                    fontSize: '1.1rem',
                    letterSpacing: '2px',
                    borderColor: errorMsg ? '#EF4444' : '#CBD5E1'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#64748B',
                    cursor: 'pointer'
                  }}
                >
                  {showPin ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {errorMsg && (
                <div style={{ color: '#DC2626', fontSize: '0.85rem', fontWeight: '500' }}>
                  {errorMsg}
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <ShieldCheck size={18} />
                <span>Verify & Access Leads</span>
              </button>

              <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.5rem' }}>
                💡 Default Security PIN: <strong style={{ color: '#C5A059' }}>1234</strong> (You can change this anytime after logging in)
              </div>
            </form>
          </div>
        ) : (
          /* Owner Authenticated Dashboard */
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem' }}>
              <div style={{ background: '#10B981', color: '#FFF', padding: '6px', borderRadius: '50%' }}>
                <UserCheck size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', margin: 0, color: '#0F172A' }}>
                  Owner Dashboard & Lead Manager
                </h3>
                <span style={{ fontSize: '0.82rem', color: '#10B981', fontWeight: '600' }}>
                  ✓ Authenticated Session
                </span>
              </div>
            </div>

            {/* Quick Actions & Stats */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem', 
              marginBottom: '1.5rem' 
            }}>
              <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Total Customer Leads</div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#C5A059' }}>
                  {leads.length}
                </div>
              </div>

              <button 
                onClick={handleExport}
                className="btn btn-primary"
                style={{ height: '100%', flexDirection: 'column', justifyContent: 'center', gap: '0.3rem', padding: '0.8rem' }}
                disabled={leads.length === 0}
              >
                <Download size={22} />
                <span style={{ fontSize: '0.9rem' }}>Export Leads (CSV Excel)</span>
              </button>

              <button 
                onClick={() => setIsChangingPin(!isChangingPin)}
                className="btn btn-outline"
                style={{ height: '100%', flexDirection: 'column', justifyContent: 'center', gap: '0.3rem', padding: '0.8rem' }}
              >
                <Key size={20} />
                <span style={{ fontSize: '0.85rem' }}>Change Owner PIN</span>
              </button>
            </div>

            {/* PIN Change Section */}
            {isChangingPin && (
              <div style={{ background: '#FEF3C7', border: '1px solid #F59E0B', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', color: '#92400E' }}>Set New Owner PIN</h4>
                <form onSubmit={handleChangePinSubmit} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter new 4+ digit PIN"
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value)}
                    required
                    style={{ flex: 1, background: '#FFF' }}
                  />
                  <button type="submit" className="btn btn-primary btn-sm">Save PIN</button>
                  <button type="button" onClick={() => setIsChangingPin(false)} className="btn btn-outline btn-sm">Cancel</button>
                </form>
                {pinSuccessMsg && (
                  <div style={{ color: '#065F46', fontSize: '0.85rem', marginTop: '0.5rem', fontWeight: '600' }}>
                    {pinSuccessMsg}
                  </div>
                )}
              </div>
            )}

            {/* Customer Leads List */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '700', color: '#334155' }}>
                Recent Inquiries ({leads.length})
              </h4>
              {leads.length > 0 && (
                <button 
                  onClick={handleClear}
                  style={{ background: 'none', border: 'none', color: '#EF4444', fontSize: '0.82rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  <Trash2 size={14} /> Clear Database
                </button>
              )}
            </div>

            {leads.length === 0 ? (
              <div style={{ 
                padding: '2.5rem 1rem', 
                textAlign: 'center', 
                background: '#F8FAFC', 
                borderRadius: '8px', 
                color: '#64748B',
                fontSize: '0.9rem' 
              }}>
                <ShieldCheck size={32} style={{ color: '#94A3B8', marginBottom: '0.5rem' }} />
                <p style={{ margin: 0 }}>No leads currently stored in this browser.</p>
                <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.25rem' }}>
                  Customer form submissions from Contact & Consultation forms automatically appear here & in your email.
                </p>
              </div>
            ) : (
              <div style={{ maxHeight: '280px', overflowY: 'auto', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ background: '#F1F5F9', borderBottom: '1px solid #E2E8F0', textAlign: 'left' }}>
                      <th style={{ padding: '8px 12px' }}>Ref ID</th>
                      <th style={{ padding: '8px 12px' }}>Customer Name</th>
                      <th style={{ padding: '8px 12px' }}>Phone</th>
                      <th style={{ padding: '8px 12px' }}>Service / Property</th>
                      <th style={{ padding: '8px 12px' }}>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((item, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '8px 12px', fontWeight: '600', color: '#C5A059' }}>{item.refId}</td>
                        <td style={{ padding: '8px 12px', fontWeight: '600' }}>{item.name}</td>
                        <td style={{ padding: '8px 12px' }}>
                          <a href={`tel:${item.phone}`} style={{ color: '#2563EB' }}>{item.phone}</a>
                        </td>
                        <td style={{ padding: '8px 12px' }}>{item.preferredService || item.propertyType}</td>
                        <td style={{ padding: '8px 12px', color: '#64748B', fontSize: '0.78rem' }}>{item.timestamp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}
