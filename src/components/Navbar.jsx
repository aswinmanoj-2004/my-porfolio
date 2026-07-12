import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { resumeData } from '../data/resumeData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'internship', label: 'Internship' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Highlight nav link based on scroll position
      const scrollPos = window.scrollY + 120;

      // Update header transparency
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: scrolled ? '15px 8%' : '25px 8%',
      background: scrolled ? 'rgba(5, 5, 5, 0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'var(--transition-smooth)',
      boxSizing: 'border-box'
    }}>
      {/* Logo */}
      <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.4rem',
        fontWeight: '800',
        color: '#ffffff',
        textDecoration: 'none',
        letterSpacing: '0.05em',
        background: 'var(--accent-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        ASWIN MANOJ
      </a>

      {/* Desktop Links */}
      <div style={{
        display: 'none',
        alignItems: 'center',
        gap: '30px',
        '@media (min-width: 992px)': { display: 'flex' } // Handled via JSX styling rule or standard JS styles
      }} className="desktop-menu">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: '500',
              textDecoration: 'none',
              color: activeSection === link.id ? '#ffffff' : 'var(--text-secondary)',
              position: 'relative',
              padding: '6px 0',
              transition: 'var(--transition-fast)',
            }}
            className="nav-link"
          >
            {link.label}
            {activeSection === link.id && (
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: 'var(--accent-gradient)',
                borderRadius: '2px'
              }} />
            )}
          </a>
        ))}
      </div>

      {/* Desktop Socials */}
      <div style={{
        display: 'none',
        alignItems: 'center',
        gap: '15px'
      }} className="desktop-socials">
        <a href={resumeData.personalInfo.github} target="_blank" rel="noreferrer" style={{
          color: 'var(--text-secondary)',
          transition: 'var(--transition-fast)'
        }} className="social-icon">
          <Github size={20} />
        </a>
        <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noreferrer" style={{
          color: 'var(--text-secondary)',
          transition: 'var(--transition-fast)'
        }} className="social-icon">
          <Linkedin size={20} />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: '#ffffff',
          cursor: 'pointer',
          display: 'none'
        }}
        className="mobile-menu-btn"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          width: '100%',
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-color)',
          padding: '20px 8%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxSizing: 'border-box',
          zIndex: 99
        }}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: '500',
                textDecoration: 'none',
                color: activeSection === link.id ? 'var(--accent-cyan)' : 'var(--text-primary)',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{
            display: 'flex',
            gap: '20px',
            marginTop: '10px',
            borderTop: '1px solid var(--border-color)',
            paddingTop: '15px'
          }}>
            <a href={resumeData.personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
              <Github size={22} />
            </a>
            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      )}

      {/* Inject styling inside Navbar for desktop/mobile toggle */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .desktop-socials { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-menu { display: none !important; }
          .desktop-socials { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-link:hover {
          color: #ffffff !important;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
        }
        .social-icon:hover {
          color: var(--accent-cyan) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </nav>
  );
}
