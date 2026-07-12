import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CanvasBackground from './components/CanvasBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { resumeData } from './data/resumeData';
import Lenis from 'lenis';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#030303',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        gap: '20px'
      }}>
        {/* Loading Spinner */}
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: '3px solid rgba(255, 255, 255, 0.05)',
          borderTopColor: 'var(--accent-cyan)',
          animation: 'spin 1s linear infinite'
        }} />
        <span style={{
          color: '#ffffff',
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem',
          fontWeight: '600',
          letterSpacing: '0.15em',
          textTransform: 'uppercase'
        }}>
          Loading Portfolio
        </span>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', background: '#050505', overflowX: 'hidden' }}>
      {/* 3D Particle Background */}
      <CanvasBackground />

      {/* Foreground Content */}
      <div style={{ position: 'relative', zIndex: 5 }}>
        {/* Header/Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Internship />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <footer style={{
          background: 'rgba(5, 5, 5, 0.9)',
          borderTop: '1px solid var(--border-color)',
          padding: '40px 8%',
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px'
        }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: '500', color: '#ffffff' }}>
            &copy; {new Date().getFullYear()} {resumeData.personalInfo.name}. All Rights Reserved.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            Designed & Developed using React, Three.js & Framer Motion
          </p>
        </footer>
      </div>
    </div>
  );
}
