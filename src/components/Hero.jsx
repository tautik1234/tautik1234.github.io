import React from 'react';
import { Sparkles, Github, Linkedin, ArrowDown } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('education-skills');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-editorial-wrapper animate-fade-in">
      {/* Top Banner Block */}
      <div className="hero-banner-card">
        <div className="banner-bg-outline-text">PORTFOLIO PORTFOLIO PORTFOLIO</div>
        
        <div className="hero-banner-header">
          <h1 className="hero-editorial-logo">PORTFOLIO</h1>
          <div className="hero-banner-handles">
            <div><span className="handle-label">GH:</span> <a href={contactInfo.github} target="_blank" rel="noreferrer">/tautik1234</a></div>
            <div><span className="handle-label">LI:</span> <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">/tautik-penumudi</a></div>
            <div><span className="handle-label">LC:</span> <a href={contactInfo.leetcode} target="_blank" rel="noreferrer">/tautik_1234</a></div>
          </div>
        </div>

        <div className="hero-banner-content">
          <div className="hero-quote-card">
            <Sparkles size={20} className="sparkle-icon" />
            <p>
              I build impactful data-driven web solutions, CLI utilities, and interactive media projects with pragmatic design.
            </p>
          </div>
        </div>

        {/* Floating Scroll Down Circular Badge */}
        <button className="scroll-down-badge" onClick={scrollToAbout} aria-label="Scroll down">
          <span>Scroll down</span>
          <ArrowDown size={14} />
        </button>
      </div>

      {/* Intro & Resume Block */}
      <div className="hero-intro-grid">
        <div className="intro-left-col">
          <h2 className="intro-heading">
            Hello, <br />
            I'm Tautik !
          </h2>
          <p className="intro-bio">
            I am a Computer Science (Data Science) student at Prasad V Potluri Siddhartha Institute of Technology. I enjoy solving algorithmic problems, experimenting with code, and continuously building projects across web development and media analytics.
          </p>

          <div className="intro-action-row">
            <a 
              href={contactInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="intro-pill-link"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a 
              href={contactInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="intro-pill-link secondary"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="intro-right-col">
          <div className="intro-resume-bg-text">RESUME RESUME RESUME</div>
          
          <div className="profile-card-container">
            <div className="profile-avatar-frame tinted-editorial-frame">
              <img src="./Profile_Image2.jpeg" alt={personalInfo.name} className="profile-avatar-img tinted-hero-img" />
              <div className="tint-overlay"></div>
              <span className="profile-tag-pill tag-bottom-right">Vijayawada, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
