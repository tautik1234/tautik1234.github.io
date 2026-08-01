import React, { useState } from 'react';
import { Home, UserCheck, Code2, GraduationCap, FolderGit2, Film, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/portfolioData';

export default function Navbar({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'education-skills', label: 'About', icon: UserCheck },
    { id: 'coding-profiles', label: 'Coding Profiles', icon: Code2 },
    { id: 'certifications', label: 'Certifications', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'creative-media', label: 'Creative Media', icon: Film },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => handleNavClick('home')}>
          <img src={personalInfo.avatar} alt={personalInfo.name} className="navbar-avatar" />
          <span className="navbar-title font-serif">{personalInfo.name}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-item ${isActive ? 'active' : ''}`}
                aria-label={item.label}
              >
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Round Mail Button with Quirky Hovercard */}
          <div className="navbar-cta-wrapper">
            <a
              href={contactInfo.emailMailto}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-cta-round-btn"
              aria-label="Send Email"
            >
              <ArrowUpRight size={18} />
            </a>
            <div className="navbar-cta-hovercard">
              <span>Wanna chat? Yeah, click this to mail me! 🚀</span>
            </div>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
}
