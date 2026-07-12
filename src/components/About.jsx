import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cpu, Sparkles } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" style={{ padding: '100px 8% 80px 8%', background: '#050505' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '50px',
            marginTop: '30px',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          {/* Column 1: Bio */}
          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: '1.3'
            }}>
              Blending <span className="gradient-text">Software Engineering</span> with <span className="gradient-text">AI Innovation</span>
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              I am an <strong>Integrated MCA student</strong> at DePaul Institute of Science and Technology (DiST) under Mahatma Gandhi University, Kottayam (2022 - 2027). Ever since beginning my studies, I have dedicated myself to mastering both frontend development and full-stack architecture, while actively integrating artificial intelligence into modern web applications.
            </p>


            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              I’m focused on building modern, user-friendly web applications. With hands-on experience in frameworks like React and Angular, backends using PHP and ASP.NET (C#), and various database systems, I strive to bridge the gap between complex design concepts and robust code.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Beyond coding, I've spent substantial time researching and certifying in AI & Machine Learning. I hold several credentials from Microsoft, Google, and Anthropic in AI Fluency, Prompt Engineering, and ML Engineering, allowing me to engineer smarter workflows and design next-generation web applications.
            </p>
          </motion.div>

          {/* Column 2: Quick Highlights / Stats Grid */}
          <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h4 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: '600', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '-4px' }}>
                Quick Highlights
              </h4>

              {/* Highlight 1 */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '10px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <BookOpen size={20} />
                </div>
                <div>
                  <h5 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: '600' }}>Academic Journey</h5>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
                    Currently pursuing a 5-year Integrated Master of Computer Applications (IMCA) (2022 - 2027) at DiST.
                  </p>
                </div>
              </div>

              {/* Highlight 2 */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '10px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Cpu size={20} />
                </div>
                <div>
                  <h5 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: '600' }}>AI & ML Specialist</h5>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
                    Certified by Microsoft, Google, and Anthropic in Prompt Engineering, AI Fluency, and ML Foundations.
                  </p>
                </div>
              </div>

              {/* Highlight 3 */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '10px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Sparkles size={20} />
                </div>
                <div>
                  <h5 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: '600' }}>UI/UX Focused Coding</h5>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
                    Proficient in UI/UX concepts in Figma, translating designs into smooth frontend experiences in React and Angular.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
