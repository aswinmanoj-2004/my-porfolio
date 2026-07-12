import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { resumeData } from '../data/resumeData';

export default function Hero() {
  const { name, title, subtitles, summary, github, linkedin, email, phone } = resumeData.personalInfo;

  // Typewriter effect states
  const [subIndex, setSubIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % subtitles.length;
      const fullText = subtitles[i];

      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      overflow: 'hidden',
    }}>
      <div className="container hero-container" style={{
        position: 'relative',
        zIndex: 5,
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        alignItems: 'center',
        gap: '40px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Left Column: Text Info */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '24px',
          width: '100%'
        }}>
          {/* Subtitle / Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: 'var(--accent-cyan)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              marginBottom: '10px'
            }}>
              Welcome to my space
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2.3rem, 4.5vw, 4.5rem)',
              lineHeight: 1.1,
              fontWeight: 800,
              color: '#ffffff',
              margin: '10px 0'
            }}
          >
            Hi, I'm <span className="gradient-text">{name}</span>
          </motion.h1>

          {/* Typewriter Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'var(--font-display)'
            }}
          >
            <span>I'm a&nbsp;</span>
            <span style={{ color: '#ffffff', borderRight: '2px solid var(--accent-cyan)', paddingRight: '4px' }}>
              {text}
            </span>
          </motion.div>

          {/* Short Summary */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
              color: 'var(--text-secondary)',
              maxWidth: '650px',
              lineHeight: '1.8',
              marginTop: '10px'
            }}
          >
            {summary}
          </motion.p>

          {/* Social Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              display: 'flex',
              gap: '16px',
              margin: '10px 0'
            }}
          >
            <a href={github} target="_blank" rel="noreferrer" className="hero-social-btn">
              <Github size={20} />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="hero-social-btn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${email}`} className="hero-social-btn">
              <Mail size={20} />
            </a>
            <a href={`tel:${phone}`} className="hero-social-btn">
              <Phone size={20} />
            </a>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              marginTop: '15px'
            }}
          >
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
              Get In Touch
            </button>
          </motion.div>
        </div>

        {/* Right Column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100%'
          }}
          className="hero-image-wrapper"
        >
          {/* Radial white glow behind the image */}
          <div className="hero-image-glow" />

          {/* Animated Float Container */}
          <motion.div
            animate={{
              y: [-12, 12, -12],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="hero-image-card"
          >
            <img
              src="/image/aswin3-removebg-preview.png"
              alt="Aswin Manoj"
              className="hero-profile-img"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          zIndex: 5
        }}
        onClick={() => scrollToSection('skills')}
      >
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>Scroll Down</span>
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid var(--text-muted)',
          borderRadius: '12px',
          position: 'relative'
        }}>
          <motion.div
            animate={{
              y: [6, 20, 6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              width: '4px',
              height: '8px',
              background: 'var(--accent-cyan)',
              borderRadius: '2px',
              position: 'absolute',
              left: '50%',
              marginLeft: '-2px',
              top: '4px'
            }}
          />
        </div>
      </motion.div>

      <style>{`
        .hero-social-btn {
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
        .hero-social-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.12);
          transform: translateY(-3px);
        }
        
        .hero-image-glow {
          position: absolute;
          width: 400px;
          height: 500px;
          border-radius: 120px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
          z-index: 1;
          filter: blur(35px);
          pointer-events: none;
        }

        .hero-image-card {
          position: relative;
          width: 380px;
          height: 480px;
          border-radius: 120px;
          background: #000000;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: center;
          align-items: flex-end;
          z-index: 2;
          overflow: hidden;
          transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-image-card:hover {
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-image-card:hover .hero-profile-img {
          transform: scale(1.06);
        }

        @media (max-width: 1100px) {
          .hero-image-card {
            width: 320px;
            height: 410px;
            border-radius: 100px;
          }
          .hero-image-glow {
            width: 340px;
            height: 430px;
          }
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
            justify-items: center;
            margin-top: 50px;
          }
          .hero-container > div:first-child {
            align-items: center !important;
            order: 2;
          }
          .hero-image-wrapper {
            order: 1;
            margin-bottom: 10px;
          }
          .hero-image-card {
            width: 300px;
            height: 380px;
            border-radius: 90px;
          }
          .hero-image-glow {
            width: 320px;
            height: 400px;
          }
        }

        @media (max-width: 480px) {
          .hero-image-card {
            width: 260px;
            height: 330px;
            border-radius: 80px;
          }
          .hero-image-glow {
            width: 280px;
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
}
