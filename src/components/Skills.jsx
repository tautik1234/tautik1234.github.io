import React, { useState } from 'react';
import { Award, Wrench, Code } from 'lucide-react';
import { languages, tools } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="skills" className="section-wrapper">
      <div className="section-header">
        <h2 className="section-title">
          <Award size={28} className="gradient-text" /> Skills & Technical Stack
        </h2>
        <p className="section-subtitle">
          Core programming languages, frameworks, and developer software I work with.
        </p>
      </div>

      <div className="projects-filter-bar">
        <button
          onClick={() => setActiveTab('all')}
          className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
        >
          All Skills
        </button>
        <button
          onClick={() => setActiveTab('languages')}
          className={`filter-btn ${activeTab === 'languages' ? 'active' : ''}`}
        >
          Languages Known
        </button>
        <button
          onClick={() => setActiveTab('tools')}
          className={`filter-btn ${activeTab === 'tools' ? 'active' : ''}`}
        >
          Tools & Software
        </button>
      </div>

      {(activeTab === 'all' || activeTab === 'languages') && (
        <div style={{ marginBottom: '36px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Code size={20} /> Languages Known
          </h3>
          <div className="skills-grid">
            {languages.map((lang) => (
              <div key={lang.name} className="glass-panel skill-card">
                <img src={lang.icon} alt={lang.name} className="skill-icon-img" />
                <h4 className="skill-name">{lang.name}</h4>
                <span className="skill-level">{lang.level}</span>
                <span className="skill-detail">{lang.type}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {(activeTab === 'all' || activeTab === 'tools') && (
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Wrench size={20} /> Tools Known
          </h3>
          <div className="skills-grid">
            {tools.map((tool) => (
              <div key={tool.name} className="glass-panel skill-card">
                <img src={tool.icon} alt={tool.name} className="skill-icon-img" style={{ borderRadius: tool.name === 'CapCut' ? '12px' : '4px' }} />
                <h4 className="skill-name">{tool.name}</h4>
                <span className="skill-detail">{tool.detail}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
