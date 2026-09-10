import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, Download, ExternalLink } from 'lucide-react';

export default function Navbar({ onResumeClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'showcase', 'interests', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Interests', href: '#interests' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-circuit-950/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Microchip Identity */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-lg bg-circuit-900 border border-cyan-400/40 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-sm shadow-cyan-500/20">
            <Cpu className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
          </div>
          <div>
            <span className="font-bold tracking-wider text-slate-100 text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
              MAYANK<span className="text-cyan-400">.YADAV</span>
            </span>
            <div className="text-[10px] font-mono text-cyan-400/80 tracking-widest leading-none">
              ECE_VLSI // DIE_01
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-all ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Actions (Resume & Mobile Hamburger) */}
        <div className="flex items-center gap-3">
          <a
            href="/Mayank_Kumar_Yadav_Resume.pdf"
            download="Mayank_Kumar_Yadav_Resume.pdf"
            onClick={onResumeClick}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-gradient-to-r from-amber-500/20 to-amber-600/30 border border-amber-500/40 text-amber-300 hover:from-amber-500/30 hover:to-amber-600/40 hover:border-amber-400 transition-all shadow-sm hover:shadow-amber-500/20 active:scale-95"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>RESUME.PDF</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-circuit-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-circuit-950/95 border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl shadow-2xl animate-fadeIn">
          <div className="text-[11px] font-mono text-cyan-400/70 pb-1 border-b border-slate-800">
            // NAVIGATE_SYSTEM
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="/Mayank_Kumar_Yadav_Resume.pdf"
              download="Mayank_Kumar_Yadav_Resume.pdf"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onResumeClick) onResumeClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-mono font-semibold bg-amber-500/20 border border-amber-500/50 text-amber-300 hover:bg-amber-500/30 transition-all"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
