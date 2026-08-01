import React from 'react';
import { Sparkles, Film, Video, Music, Gamepad2, Award, Terminal, Cpu, Database, Cloud, Layers, Globe2, BookOpen } from 'lucide-react';
import { educationData, experienceData, achievementsList, technicalSkillsCategories, languagesList, hobbiesList } from '../data/portfolioData';

export default function EducationSkills() {
  const getHobbyIcon = (iconName) => {
    switch (iconName) {
      case 'Film': return <Film size={22} />;
      case 'Video': return <Video size={22} />;
      case 'Music': return <Music size={22} />;
      case 'Gamepad2': return <Gamepad2 size={22} />;
      default: return <BookOpen size={22} />;
    }
  };

  return (
    <section id="education-skills" className="section-wrapper animate-fade-in">
      
      {/* Top Key Achievements Grid */}
      <div className="achievements-banner-grid margin-bottom-block">
        {achievementsList.map((ach) => (
          <div key={ach.id} className="achievement-card-badge">
            <div className="ach-badge-header">
              <Award size={18} className="ach-icon" />
              <span className="ach-pill-badge">{ach.badge}</span>
            </div>
            <h4 className="ach-title font-serif">{ach.title}</h4>
            <p className="ach-desc">{ach.description}</p>
          </div>
        ))}
      </div>

      {/* Main Editorial Grid */}
      <div className="editorial-grid-container">
        
        {/* Left Column: Education, Experience & Hobbies */}
        <div className="editorial-col-left">
          
          {/* Education Timeline */}
          <div className="editorial-block education-block">
            <h2 className="block-title font-serif">Education</h2>
            <div className="timeline-list">
              {educationData.map((edu) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-left">
                    <Sparkles size={16} className="star-connector" />
                    <span className="timeline-year">{edu.period}</span>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-degree">{edu.degree}</h3>
                    <p className="timeline-institution">{edu.institution} • {edu.location}</p>
                    <span className="timeline-grade-badge">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Container */}
          <div className="editorial-block experience-block">
            <h2 className="block-title font-serif" style={{ color: '#F6F2EC' }}>Experience & Internships</h2>
            <div className="timeline-list">
              {experienceData.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-left">
                    <Sparkles size={16} className="star-connector light" />
                    <span className="timeline-year light">{exp.period}</span>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-degree light">{exp.role}</h3>
                    <p className="timeline-institution light">{exp.company} ({exp.type})</p>
                    <p className="exp-desc-text">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Tag Pills */}
            <div className="exp-tags-row">
              <span className="exp-tag">#PythonDeveloper</span>
              <span className="exp-tag">#Multithreading</span>
              <span className="exp-tag">#MachineLearning</span>
              <span className="exp-tag">#DataEngineering</span>
              <span className="exp-tag">#FullStack</span>
            </div>
          </div>

          {/* Hobbies & Interests Section (Positioned on Left under Experience) */}
          <div className="editorial-block hobbies-block">
            <h2 className="block-title font-serif">Hobbies & Interests</h2>
            <div className="hobbies-grid">
              {hobbiesList.map((hobby) => (
                <div key={hobby.name} className="hobby-card">
                  <div className="hobby-icon-wrapper">
                    {getHobbyIcon(hobby.icon)}
                  </div>
                  <h4 className="hobby-title">{hobby.name}</h4>
                  <span className="hobby-sub">{hobby.category}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Technical Skills & Languages */}
        <div className="editorial-col-right">

          {/* Technical Skills Block */}
          <div className="editorial-block skills-block">
            <h2 className="block-title font-serif">Technical Skills & Expertise</h2>

            <div className="skill-category-group">
              <h4 className="sub-block-title"><Terminal size={16} /> Programming Languages</h4>
              <div className="skill-tags-flex">
                {technicalSkillsCategories.languages.map(item => (
                  <span key={item} className="skill-chip-tag accent">{item}</span>
                ))}
              </div>
            </div>

            <div className="skill-category-group">
              <h4 className="sub-block-title"><Cpu size={16} /> AI, ML & Computer Vision</h4>
              <div className="skill-tags-flex">
                {technicalSkillsCategories.aiMachineLearning.map(item => (
                  <span key={item} className="skill-chip-tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="skill-category-group">
              <h4 className="sub-block-title"><Layers size={16} /> Web Frameworks & Libraries</h4>
              <div className="skill-tags-flex">
                {technicalSkillsCategories.webFrameworks.map(item => (
                  <span key={item} className="skill-chip-tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="skill-category-group">
              <h4 className="sub-block-title"><Cloud size={16} /> Cloud, DevOps & Tools</h4>
              <div className="skill-tags-flex">
                {technicalSkillsCategories.toolsCloud.map(item => (
                  <span key={item} className="skill-chip-tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="skill-category-group">
              <h4 className="sub-block-title"><Database size={16} /> Core CS & Databases</h4>
              <div className="skill-tags-flex">
                {technicalSkillsCategories.coreCS.map(item => (
                  <span key={item} className="skill-chip-tag muted">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="editorial-block languages-block">
            <h2 className="block-title font-serif">Languages</h2>
            <div className="languages-flex-row">
              {languagesList.map((lang) => (
                <div key={lang.name} className="language-card">
                  <div className="lang-header">
                    <Globe2 size={16} className="lang-icon" />
                    <span className="lang-name">{lang.name}</span>
                  </div>
                  <span className="lang-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
