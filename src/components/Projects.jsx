import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { Github } from './SocialIcons';
import { resumeData } from '../data/resumeData';

export default function Projects() {
  const { projects } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="projects">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Key Projects
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            marginTop: '20px'
          }}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxSizing: 'border-box',
                gap: '20px'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Card Header: Icon & GitHub link */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ color: 'var(--accent-cyan)' }}>
                    <Folder size={32} strokeWidth={1.5} />
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{
                      color: 'var(--text-secondary)',
                      transition: 'var(--transition-fast)'
                    }} 
                    className="project-git-link"
                  >
                    <Github size={22} />
                  </a>
                </div>

                {/* Project Title */}
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: '700' }}>
                    {project.title}
                  </h3>
                  {/* Tech stack tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginTop: '8px'
                  }}>
                    {project.tech.split(',').map((techName, tIdx) => (
                      <span key={tIdx} style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--text-secondary)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {techName.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {project.description}
                </p>

                {/* Key Bullet Points */}
                <ul style={{
                  paddingLeft: '20px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  lineHeight: '1.5'
                }}>
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ listStyleType: 'circle' }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* View Github CTA */}
              <div style={{ marginTop: '10px' }}>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    fontSize: '0.9rem',
                    padding: '10px 0',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  Source Code <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .project-git-link:hover {
          color: var(--accent-cyan) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
