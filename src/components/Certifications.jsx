import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Certifications() {
  const { certifications } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Helper to color-code issuers or show custom styled labels
  const getIssuerStyle = (issuer) => {
    switch (issuer.toLowerCase()) {
      case 'hackerrank':
        return { color: '#2ec866', bg: 'rgba(46, 200, 102, 0.05)', border: 'rgba(46, 200, 102, 0.15)' };
      case 'coursera':
        return { color: '#0056d2', bg: 'rgba(0, 86, 210, 0.05)', border: 'rgba(0, 86, 210, 0.15)' };
      case 'anthropic':
        return { color: '#e05c36', bg: 'rgba(224, 92, 54, 0.05)', border: 'rgba(224, 92, 54, 0.15)' };
      case 'simplilearn':
        return { color: '#f28a2b', bg: 'rgba(242, 138, 43, 0.05)', border: 'rgba(242, 138, 43, 0.15)' };
      default:
        return { color: 'var(--accent-blue)', bg: 'rgba(255, 255, 255, 0.03)', border: 'rgba(255, 255, 255, 0.08)' };
    }
  };

  return (
    <section id="certifications">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Certifications
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '20px'
          }}
        >
          {certifications.map((cert, idx) => {
            const style = getIssuerStyle(cert.issuer);
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '20px',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* Badge & Award Icon */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)'
                    }}>
                      <Award size={22} />
                    </div>
                    {/* Issuer label */}
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: style.color,
                      background: style.bg,
                      border: `1px solid ${style.border}`,
                      padding: '3px 10px',
                      borderRadius: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Certification Name */}
                  <h3 style={{
                    fontSize: '1.1rem',
                    color: '#ffffff',
                    fontWeight: '700',
                    lineHeight: '1.4',
                    marginTop: '4px'
                  }}>
                    {cert.name}
                  </h3>
                </div>

                {/* View Credential CTA */}
                <div>
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      fontSize: '0.85rem',
                      padding: '8px 0',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    View Certificate <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
