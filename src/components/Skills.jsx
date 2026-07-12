import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

export default function Skills() {
  const { skills } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          My Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '25px',
            marginTop: '20px'
          }}
        >
          {skills.map((categoryObj, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                color: '#ffffff',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '10px',
                marginBottom: '5px',
                fontWeight: '600'
              }}>
                {categoryObj.category}
              </h3>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                {categoryObj.items.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{
                      scale: 1.05,
                      borderColor: 'var(--accent-cyan)',
                      boxShadow: '0 0 12px rgba(255, 255, 255, 0.08)',
                      background: 'rgba(255, 255, 255, 0.03)'
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      color: 'var(--text-primary)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-color)',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      cursor: 'default',
                      transition: 'background 0.2s ease, border-color 0.2s ease',
                      display: 'inline-block'
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
