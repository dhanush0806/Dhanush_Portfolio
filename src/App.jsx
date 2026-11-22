import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Footer, FloatingScrollButton } from './components';
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ExperienceSection,
  EducationSection,
  CertificationsSection,
  ContactSection,
} from './sections';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [heroVisible, setHeroVisible] = useState(false);
  const glowRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 150);

    // Optimized hardware-accelerated ambient glow without re-rendering App
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(6, 182, 212, 0.05), transparent 40%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Track scroll position for active section
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'skills',
      'projects',
      'experience',
      'education',
      'certifications',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      // Update top scroll progress indicator
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0 && progressBarRef.current) {
        const progress = (window.scrollY / totalHeight) * 100;
        progressBarRef.current.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      {/* Interactive Background Glow (Ref-driven for 60fps+ performance) */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(800px circle at 50% 30%, rgba(6, 182, 212, 0.05), transparent 40%)',
        }}
      />

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Animated Ambient Orbs */}
      <div className="fixed top-[-10%] left-[-10%] z-0 h-[40rem] w-[40rem] rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none animate-float" />
      <div className="fixed bottom-[-10%] right-[-10%] z-0 h-[40rem] w-[40rem] rounded-full bg-blue-700/10 blur-[130px] pointer-events-none animate-float-delayed" />

      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-slate-900/30 pointer-events-none">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.9)] transition-[width] duration-75 ease-out rounded-r-full"
          style={{ width: '0%' }}
        />
      </div>

      {/* Navigation */}
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />

      {/* Main Content Sections */}
      <main className="relative z-10 pt-20">
        <HeroSection heroVisible={heroVisible} scrollTo={scrollTo} />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Dynamic Floating Action Button: Scroll to explore / Back to top */}
      <FloatingScrollButton scrollTo={scrollTo} />
    </div>
  );
}
