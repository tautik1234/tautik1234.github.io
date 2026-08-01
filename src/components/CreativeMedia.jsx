import React from 'react';
import { Film, Play } from 'lucide-react';
import { creativeMediaList } from '../data/portfolioData';

export default function CreativeMedia({ onOpenVideo }) {
  return (
    <section id="creative-media" className="section-wrapper">
      <div className="section-header">
        <h2 className="section-title">
          <Film size={28} className="gradient-text" /> Creative Media Showcase
        </h2>
        <p className="section-subtitle">
          Curated video edits, fan cuts, and audio mixes created with CapCut and Premiere Pro.
        </p>
      </div>

      <div className="creative-media-grid">
        {creativeMediaList.map((media) => (
          <div
            key={media.id}
            className="glass-panel media-card"
            onClick={() => onOpenVideo(media)}
          >
            <div className="media-thumb-wrapper">
              <img src={media.thumbnail} alt={media.title} className="media-thumb" />
              <div className="media-play-overlay">
                <div className="play-icon-circle">
                  <Play size={24} fill="currentColor" style={{ marginLeft: '4px' }} />
                </div>
              </div>
            </div>
            <div className="media-info">
              <h3 className="media-title">{media.title}</h3>
              <span className="media-tag">{media.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
