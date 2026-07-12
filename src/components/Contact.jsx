import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { resumeData } from '../data/resumeData';

export default function Contact() {
  const { email, phone, linkedin, github, location } = resumeData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Contact Me
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          marginTop: '20px'
        }} className="contact-grid">
          
          {/* Column 1: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '10px', fontWeight: '700' }}>
                Let's Work Together
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Have an exciting project, job opening, or just want to connect? Drop me a message or reach out via my socials.
              </p>
            </div>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</p>
                  <a href={`mailto:${email}`} className="contact-link">{email}</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="contact-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</p>
                  <a href={`tel:${phone}`} className="contact-link">+{phone}</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="contact-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</p>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '15px' }}>Find me on</p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href={github} target="_blank" rel="noreferrer" className="contact-social-btn">
                  <Github size={20} />
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="contact-social-btn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="glass-card"
            style={{ padding: '30px' }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }} className="form-row">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="form-input" 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="form-input" 
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="subject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  className="form-input" 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  className="form-textarea"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="btn btn-primary"
                style={{
                  width: '100%',
                  marginTop: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: 'rgba(46, 200, 102, 0.1)',
                    color: '#2ec866',
                    border: '1px solid rgba(46, 200, 102, 0.2)',
                    padding: '12px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>

      <style>{`
        .contact-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }
        .contact-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition-fast);
        }
        .contact-link:hover {
          color: var(--accent-cyan);
        }
        .contact-social-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: var(--transition-smooth);
        }
        .contact-social-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(255, 255, 255, 0.03);
          transform: translateY(-3px);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.08);
        }
        .form-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .form-input, .form-textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 12px 16px;
          color: #ffffff;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-fast);
        }
        .form-input:focus, .form-textarea:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.05);
        }
        @media (max-width: 480px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
