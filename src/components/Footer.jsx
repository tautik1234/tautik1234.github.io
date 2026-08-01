import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { contactInfo, personalInfo } from '../data/portfolioData';

export default function Footer({ setActiveSection }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-socials">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href={contactInfo.emailMailto}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <nav className="footer-nav-links">
          <a href="#skills" onClick={() => setActiveSection('skills')}>Skills</a>
          <span>|</span>
          <a href="#certifications" onClick={() => setActiveSection('certifications')}>Certifications</a>
          <span>|</span>
          <a href="#projects" onClick={() => setActiveSection('projects')}>Projects</a>
          <span>|</span>
          <a href="#creative-media" onClick={() => setActiveSection('creative-media')}>Creative Media</a>
          <span>|</span>
          <a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a>
        </nav>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>

        <p className="footer-attribution">
          Icons credit: <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noreferrer">Freepik</a>, <a href="https://www.flaticon.com/authors/iconsimple" target="_blank" rel="noreferrer">iconsimple</a>, <a href="https://www.flaticon.com/authors/pixel-perfect" target="_blank" rel="noreferrer">Pixel Perfect</a> from <a href="https://www.flaticon.com" target="_blank" rel="noreferrer">Flaticon</a>.
        </p>
      </div>
    </footer>
  );
}
