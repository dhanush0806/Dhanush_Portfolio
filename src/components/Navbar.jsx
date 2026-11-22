import React, { useState } from 'react';
import {
  Terminal,
  FileText,
  ChevronDown,
  Eye,
  Download,
  Menu,
  X
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ activeSection, scrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false); // Mobile-ku state add pannirukkom

  const mainLinks = ['Home', 'About', 'Skills', 'Projects'];
  const moreLinks = ['Experience', 'Education', 'Certifications', 'Contact'];

  const navClass = (item) =>
    `transition-colors duration-300 relative py-2 ${
      activeSection === item.toLowerCase()
        ? 'text-cyan-400'
        : 'text-slate-400 hover:text-cyan-300'
    }`;

  const handleScroll = (item) => {
    scrollTo(item.toLowerCase());
    setMobileMenuOpen(false);
    setResumeDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/50 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 md:px-8 h-16 sm:h-20 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-2.5 sm:gap-3 font-mono font-bold text-lg sm:text-xl tracking-tighter group cursor-pointer shrink-0"
          onClick={() => scrollTo('home')}
        >
          <Terminal
            className="text-cyan-400 group-hover:rotate-12 transition-transform duration-500"
            size={22}
          />
          <span className="group-hover:text-cyan-400 transition-colors duration-300">
            Dhanush<span className="text-cyan-400">_</span>Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7 text-sm font-semibold tracking-wide absolute left-1/2 -translate-x-1/2">
          {mainLinks.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={navClass(item)}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              )}
            </button>
          ))}

          {/* More Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1.5 py-2 text-slate-400 hover:text-cyan-300 transition-colors duration-300"
            >
              More
              <ChevronDown
                size={15}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <div className="absolute top-full right-0 mt-3 w-44 rounded-xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-xl overflow-hidden py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {moreLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScroll(item)}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Actions: Resume & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Resume Dropdown (Desktop Hover + Mobile Click Toggle) */}
          <div className="relative group shrink-0">
            <button
              onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-slate-700/70 bg-slate-900/60 text-white hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 text-xs sm:text-sm font-semibold"
            >
              <FileText size={15} className="text-cyan-400" />
              <span>Resume</span>
              <ChevronDown size={13} className={`transition-transform duration-300 ${resumeDropdownOpen ? 'rotate-180' : 'group-hover:rotate-180'}`} />
            </button>

            {/* Dropdown Menu (Works on Desktop Hover AND Mobile Click State) */}
            <div className={`absolute top-full right-0 pt-3 w-40 z-50 transition-all duration-200 ${
              resumeDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
            }`}>
              <div className="rounded-xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-xl p-2">
                <a
                  href={personalInfo.resume.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
                >
                  <Eye size={16} />
                  View
                </a>

                <a
                  href={personalInfo.resume.downloadUrl}
                  download={personalInfo.resume.downloadFilename}
                  onClick={() => setResumeDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setResumeDropdownOpen(false);
            }}
            className="md:hidden p-2 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-xl px-4 py-4 space-y-1.5 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          {[...mainLinks, ...moreLinks].map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.toLowerCase()
                  ? 'text-cyan-400 bg-cyan-500/10'
                  : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-900'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};