import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Internship() {
  const internship = resumeData.internships[0]; // Get the NeST internship details

  return (
    <section id="internship" style={{ position: 'relative' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Professional Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '850px', margin: '0 auto' }}
        >
          <div className="glass-card" style={{
            padding: '40px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* Top Row: Role and Company */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '15px',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '20px'
            }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}>
                  <Briefcase size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: '700' }}>
                    {internship.role}
                  </h3>
                  <p style={{
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    color: 'var(--accent-blue)',
                    marginTop: '2px'
                  }}>
                    {internship.company}
                  </p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '6px 14px',
                borderRadius: '20px',
                border: '1px solid var(--border-color)'
              }}>
                <Calendar size={14} />
                <span>{internship.period}</span>
              </div>
            </div>

            {/* Description & Detail Bullets */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              color: 'var(--text-secondary)',
              lineHeight: '1.8'
            }}>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                {internship.description}
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginTop: '10px'
              }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-cyan)', marginTop: '4px', flexShrink: 0 }} />
                  <span>Acquired deep proficiency in core Angular architecture, including modules, components, services, and routing.</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-cyan)', marginTop: '4px', flexShrink: 0 }} />
                  <span>Implemented asynchronous data streams using RxJS observables for state management and API integration.</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-cyan)', marginTop: '4px', flexShrink: 0 }} />
                  <span>Crafted responsive, modular frontend layouts, improving site loading speeds and cross-browser responsiveness.</span>
                </div>
              </div>
            </div>

            {/* Credential Action Link */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginTop: '10px'
            }}>
              <a 
                href={internship.credentialLink} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary"
                style={{ fontSize: '0.9rem', padding: '10px 22px' }}
              >
                View Internship Certificate <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
