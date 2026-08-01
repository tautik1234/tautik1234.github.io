import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Award, Search, ExternalLink, Download, FileText, Image, ChevronDown, ChevronUp, X, CheckCircle2 } from 'lucide-react';
import { institutesList, certificationsData } from '../data/certificationsData';

export default function Certifications() {
  const [selectedInstitute, setSelectedInstitute] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedInstitutes, setExpandedInstitutes] = useState({});
  const [previewDoc, setPreviewDoc] = useState(null);

  const toggleInstituteExpand = (instId) => {
    setExpandedInstitutes(prev => ({
      ...prev,
      [instId]: !prev[instId]
    }));
  };

  // Filter certifications based on institute selection and search query
  const filteredCertifications = certificationsData.filter((item) => {
    const matchesInstitute = selectedInstitute === 'all' || item.instituteId === selectedInstitute;
    const matchesSearch = searchQuery.trim() === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.instituteName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesInstitute && matchesSearch;
  });

  // Group filtered certifications by institute
  const groupedCertifications = institutesList.map((inst) => {
    const certs = filteredCertifications.filter(c => c.instituteId === inst.id);
    return {
      ...inst,
      certs
    };
  }).filter(group => group.certs.length > 0);

  return (
    <section id="certifications" className="section-wrapper">
      <div className="section-header">
        <h2 className="section-title">
          <Award size={28} className="gradient-text" /> Certifications & Badges
        </h2>
        <p className="section-subtitle">
          Verified certificates, virtual internships, and skill badges earned across 8 prestigious institutes.
        </p>
      </div>

      {/* Control Bar: Search & Institute Filter Pills */}
      <div className="cert-controls-container">
        <div className="cert-search-wrapper">
          <Search size={18} className="cert-search-icon" />
          <input
            type="text"
            placeholder="Search certificates by title, category, or institute..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="cert-search-input"
          />
          {searchQuery && (
            <button 
              className="cert-search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="cert-filter-pills">
          <button
            onClick={() => setSelectedInstitute('all')}
            className={`filter-btn ${selectedInstitute === 'all' ? 'active' : ''}`}
          >
            All Institutes ({certificationsData.length})
          </button>
          {institutesList.map((inst) => {
            const count = certificationsData.filter(c => c.instituteId === inst.id).length;
            return (
              <button
                key={inst.id}
                onClick={() => setSelectedInstitute(inst.id)}
                className={`filter-btn ${selectedInstitute === inst.id ? 'active' : ''}`}
              >
                {inst.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Grouped Certifications List */}
      {groupedCertifications.length === 0 ? (
        <div className="glass-panel cert-empty-state">
          <p>No certificates found matching "{searchQuery}".</p>
          <button 
            className="btn-secondary" 
            onClick={() => { setSearchQuery(''); setSelectedInstitute('all'); }}
            style={{ marginTop: '12px' }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="cert-groups-wrapper">
          {groupedCertifications.map((group) => {
            // Default closed: expanded only if user explicitly toggled, or if a single institute filter is active, or if search is typed
            const isExpanded = Boolean(
              expandedInstitutes[group.id] ||
              (selectedInstitute !== 'all' && selectedInstitute === group.id) ||
              searchQuery.trim() !== ''
            );

            return (
              <div key={group.id} className="glass-panel cert-group-card">
                <div 
                  className="cert-group-header" 
                  onClick={() => toggleInstituteExpand(group.id)}
                >
                  <div className="cert-group-title-area">
                    <span className="cert-group-badge-icon">
                      <CheckCircle2 size={20} />
                    </span>
                    <div>
                      <div className="cert-group-headline">
                        <h3 className="cert-group-name">{group.name}</h3>
                        <span className="cert-count-pill">{group.certs.length} Document{group.certs.length > 1 ? 's' : ''}</span>
                      </div>
                      <p className="cert-group-desc">{group.description}</p>
                    </div>
                  </div>

                  <button className="cert-collapse-btn" aria-label="Toggle institute details">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>

                {isExpanded && (
                  <div className="cert-cards-grid">
                    {group.certs.map((cert) => (
                      <div key={cert.id} className="cert-item-card">
                        <div className="cert-card-top">
                          <div className="cert-format-badge">
                            {cert.fileType === 'png' ? (
                              <><Image size={14} /> BADGE (PNG)</>
                            ) : (
                              <><FileText size={14} /> CERTIFICATE (PDF)</>
                            )}
                          </div>
                          <span className="cert-category-tag">{cert.category}</span>
                        </div>

                        <h4 className="cert-item-title">{cert.title}</h4>

                        <div className="cert-card-actions">
                          <button 
                            className="cert-action-btn view-btn"
                            onClick={() => setPreviewDoc(cert)}
                          >
                            <ExternalLink size={14} /> Preview
                          </button>
                          <a 
                            href={cert.filePath} 
                            download 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-action-btn download-btn"
                          >
                            <Download size={14} /> Download
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Top-level Modal Portal for Certificate Preview */}
      {previewDoc && createPortal(
        <div className="modal-backdrop cert-modal-backdrop" onClick={() => setPreviewDoc(null)}>
          <div className="modal-content cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={20} className="gradient-text" />
                <h3 className="modal-title">{previewDoc.title}</h3>
              </div>
              <button 
                className="modal-close-btn" 
                onClick={() => setPreviewDoc(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="cert-modal-body">
              {previewDoc.fileType === 'png' ? (
                <div className="cert-image-preview-container">
                  <img 
                    src={previewDoc.filePath} 
                    alt={previewDoc.title} 
                    className="cert-image-preview" 
                  />
                </div>
              ) : (
                <iframe 
                  src={previewDoc.filePath} 
                  title={previewDoc.title} 
                  className="cert-pdf-iframe"
                />
              )}
            </div>

            <div className="cert-modal-footer">
              <span className="cert-modal-institute">{previewDoc.instituteName}</span>
              <a 
                href={previewDoc.filePath} 
                download
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', fontSize: '0.9rem' }}
              >
                <Download size={16} /> Open Original Document
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
