import React from 'react';
import { FolderGit2, Construction, HardHat, RefreshCw } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      <div className="section-header">
        <h2 className="section-title">
          <FolderGit2 size={28} className="gradient-text" /> Featured Projects & Systems
        </h2>
        <p className="section-subtitle">
          Full-stack applications, AI/LLM platforms, deep learning models, and containerized cloud deployments.
        </p>
      </div>

      {/* Under Construction Card Container */}
      <div className="glass-panel projects-under-construction-card">
        <div className="construction-icon-wrapper">
          <Construction size={48} className="construction-icon gradient-text" />
          <HardHat size={28} className="hardhat-icon" />
        </div>
        
        <h3 className="construction-title font-serif">SECTION UNDER CONSTRUCTION</h3>
        
        <p className="construction-desc">
          Projects and systems are currently being migrated and deployed directly from my local development machine to GitHub. Check back soon for live deployments, complete repository links, and system architecture breakdowns!
        </p>

        <div className="construction-badge-row">
          <span className="construction-pill-badge">
            <RefreshCw size={14} className="spin-icon" /> Active Local Deployment in Progress
          </span>
        </div>
      </div>
    </section>
  );
}
