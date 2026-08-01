import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EducationSkills from './components/EducationSkills';
import CodingProfiles from './components/CodingProfiles';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import CreativeMedia from './components/CreativeMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import { ArrowUp } from 'lucide-react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Dynamic Section Active Detection
      const sections = ['home', 'education-skills', 'coding-profiles', 'certifications', 'projects', 'creative-media', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  const handleSelectCreativeMedia = () => {
    setActiveSection('creative-media');
    const el = document.getElementById('creative-media');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="main-content">
        <Hero />
        <EducationSkills />
        <CodingProfiles />
        <Certifications />
        <Projects onSelectCreativeMedia={handleSelectCreativeMedia} />
        <CreativeMedia onOpenVideo={(media) => setSelectedVideo(media)} />
        <Contact />
      </main>

      <Footer setActiveSection={setActiveSection} />

      {/* Floating Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Back to Top"
          title="Back to Top"
        >
          <ArrowUp size={22} />
        </button>
      )}

      {/* Video Modal Lightbox */}
      {selectedVideo && (
        <VideoModal
          media={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}
