import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ExternalLink } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contacts = [
    {
      key: 'email',
      label: 'E-Mail',
      value: contactInfo.email,
      icon: Mail,
      pngIcon: './icons/gmail.png',
      actionUrl: contactInfo.emailMailto,
      actionLabel: 'Send Mail',
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      value: contactInfo.linkedinDisplay,
      icon: Linkedin,
      pngIcon: './icons/linkedin.png',
      actionUrl: contactInfo.linkedin,
      actionLabel: 'View Profile',
    },
    {
      key: 'github',
      label: 'GitHub',
      value: contactInfo.githubDisplay,
      icon: Github,
      pngIcon: './icons/github.png',
      actionUrl: contactInfo.github,
      actionLabel: 'View Repo',
    },
  ];

  return (
    <section id="contact" className="section-wrapper">
      <div className="section-header">
        <h2 className="section-title">
          <Mail size={28} className="gradient-text" /> Get In Touch
        </h2>
        <p className="section-subtitle">
          Say hi, pitch an idea, or send memes — I'm all ears!
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '36px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>
          That was a great ride viewing my website!
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '24px' }}>
          Hope you'd knock back again! Feel free to reach out via any of the channels below.
        </p>

        <div className="contact-grid">
          {contacts.map((item) => {
            const isCopied = copiedKey === item.key;
            return (
              <div key={item.key} className="glass-panel contact-card">
                <div className="contact-header-row">
                  <div className="contact-icon-box">
                    {item.pngIcon ? (
                      <img src={item.pngIcon} alt={item.label} className="contact-icon-img" />
                    ) : (
                      <item.icon size={22} />
                    )}
                  </div>
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                </div>

                <div className="contact-actions">
                  <a
                    href={item.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact-action"
                  >
                    <ExternalLink size={14} />
                    <span>{item.actionLabel}</span>
                  </a>

                  <button
                    onClick={() => copyToClipboard(item.actionUrl || item.value, item.key)}
                    className="btn-contact-action"
                    title="Copy link"
                  >
                    {isCopied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                    <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
