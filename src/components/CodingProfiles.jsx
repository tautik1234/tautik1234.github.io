import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Code2, ExternalLink, Trophy, Star, CheckCircle, Award, Zap, Award as CertificateIcon, X } from 'lucide-react';
import { codingProfilesData } from '../data/portfolioData';

export default function CodingProfiles() {
  const [certModalImage, setCertModalImage] = useState(null);

  return (
    <section id="coding-profiles" className="section-wrapper">
      <div className="section-header">
        <h2 className="section-title">
          <Code2 size={28} className="gradient-text" /> Competitive Programming & Coding Profiles
        </h2>
        <p className="section-subtitle">
          Verified problem-solving stats, contest ratings, domain badges, and competitive achievements across 7 platforms.
        </p>
      </div>

      {/* Stats Counter Bar */}
      <div className="coding-stats-banner">
        <div className="stats-banner-item">
          <Trophy size={22} className="stats-icon" />
          <div>
            <span className="stats-number">777+</span>
            <span className="stats-label">Total Solved Across 7 Platforms</span>
          </div>
        </div>
        <div className="stats-banner-item">
          <Zap size={22} className="stats-icon" />
          <div>
            <span className="stats-number">1413</span>
            <span className="stats-label">LeetCode Rating (184 Solved)</span>
          </div>
        </div>
        <div className="stats-banner-item">
          <Star size={22} className="stats-icon" />
          <div>
            <span className="stats-number">1195</span>
            <span className="stats-label">CodeChef Rating (Div 4)</span>
          </div>
        </div>
        <div className="stats-banner-item">
          <Award size={22} className="stats-icon" />
          <div>
            <span className="stats-number">345</span>
            <span className="stats-label">Smart Interviews Solved</span>
          </div>
        </div>
      </div>

      {/* Coding Profiles Cards Grid */}
      <div className="coding-profiles-grid">
        {codingProfilesData.map((profile) => (
          <div key={profile.id} className="glass-panel coding-profile-card">
            <div className="profile-card-header-row">
              <div>
                <h3 className="platform-name font-serif">{profile.platform}</h3>
              </div>
              <span className="platform-rating-badge">{profile.rating}</span>
            </div>

            <p className="profile-handle-text">@{profile.handle}</p>

            <ul className="profile-highlights-list">
              {profile.highlights.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle size={14} className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="profile-card-footer-actions">
              {profile.url ? (
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.85rem' }}
                >
                  <ExternalLink size={14} /> Visit Profile
                </a>
              ) : (
                <span className="btn-secondary" style={{ flex: 1, textAlign: 'center', opacity: 0.8, fontSize: '0.85rem' }}>
                  Verified Track
                </span>
              )}

              {profile.id === 'smart-interviews' && (
                <button
                  className="btn-secondary quirky-cert-btn"
                  onClick={() => setCertModalImage('./coding-profiles/smart-interviews-certificate.png')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem' }}
                >
                  📜 YAY! CERTIFICATE!
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Preview Lightbox Modal */}
      {certModalImage && createPortal(
        <div className="modal-backdrop cert-modal-backdrop" onClick={() => setCertModalImage(null)}>
          <div className="modal-content cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CertificateIcon size={20} className="gradient-text" />
                <h3 className="modal-title font-serif">Smart Interviews — Gold Certified Smart Coder</h3>
              </div>
              <button 
                className="modal-close-btn" 
                onClick={() => setCertModalImage(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="cert-modal-body">
              <div className="cert-image-preview-container">
                <img 
                  src={certModalImage} 
                  alt="Smart Interviews Gold Certificate" 
                  className="cert-image-preview" 
                  style={{ background: '#ffffff', padding: '12px', borderRadius: '8px' }}
                />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
