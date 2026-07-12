import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, GraduationCap } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Education() {
  const { education } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="education" style={{ position: 'relative' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Education Journey
        </motion.h2>

        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '30px auto 0 auto'
        }}>
          {/* Vertical Timeline Center Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '8px',
            bottom: '8px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-cyan), rgba(255, 255, 255, 0.03))',
            zIndex: 1
          }} />

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              position: 'relative',
              zIndex: 2
            }}
          >
            {education.map((edu, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                style={{
                  display: 'flex',
                  gap: '24px',
                  position: 'relative'
                }}
              >
                {/* Timeline Node Icon */}
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  border: '2px solid var(--accent-cyan)',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                  flexShrink: 0,
                  zIndex: 3
                }}>
                  {idx === 0 ? <GraduationCap size={20} /> : (idx === 1 ? <BookOpen size={18} /> : <Award size={18} />)}
                </div>

                {/* Content Card */}
                <div className="glass-card" style={{
                  flex: 1,
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '10px'
                  }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      color: '#ffffff',
                      fontWeight: '700',
                      lineHeight: '1.4'
                    }}>
                      {edu.degree}
                    </h3>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p style={{
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)'
                  }}>
                    {edu.institution}
                  </p>

                  <p style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6'
                  }}>
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
