import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  if (!isOpen || !images || images.length === 0) return null;

  return (
    <div 
      className="modal-backdrop" 
      style={{ zIndex: 3000, background: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
    >
      <div 
        style={{
          position: 'relative',
          maxWidth: '1100px',
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-50px',
            right: 0,
            background: 'rgba(255,255,255,0.2)',
            color: '#FFFFFF',
            border: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={24} />
        </button>

        <div style={{ position: 'relative', width: '100%', borderRadius: '12px', overflow: 'hidden', background: '#000' }}>
          <img 
            src={images[currentIndex]} 
            alt="Interior view full screen"
            style={{
              width: '100%',
              maxHeight: '75vh',
              objectFit: 'contain',
              display: 'block'
            }}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                style={{
                  position: 'absolute',
                  left: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#FFF',
                  border: 'none',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={onNext}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#FFF',
                  border: 'none',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
        </div>

        <div style={{ color: '#E5E7EB', marginTop: '1rem', fontSize: '0.9rem' }}>
          Image {currentIndex + 1} of {images.length} — UrbanNest Interiors Portfolio
        </div>
      </div>
    </div>
  );
}
