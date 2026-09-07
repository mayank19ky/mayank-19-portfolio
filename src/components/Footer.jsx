import React from 'react';
import { Cpu, ArrowUp, Github, Linkedin, Mail, Phone, Heart, Download } from 'lucide-react';

export default function Footer({ onResumeClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-circuit-950 border-t border-slate-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Schematic Bus Line divider */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent">
          <div className="absolute left-1/2 -top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-circuit-950 border border-cyan-400"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand & Microchip Tag */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-circuit-900 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="font-bold tracking-wider text-white text-base">
              MAYANK<span className="text-cyan-400">.YADAV</span>
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            First-year B.Tech ECE student specializing in Semiconductors (TrueChip partner track) at JECRC University. Focused on VLSI, AI, and hardware innovation.
          </p>

          <div className="text-[11px] font-mono text-cyan-400/80">
            LOC: Rewari, Haryana & Jaipur, India
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h4 className="text-xs font-mono tracking-wider text-slate-300 uppercase mb-4">
            // NAVIGATION
          </h4>
          <ul className="space-y-2 text-xs font-mono text-slate-400">
            <li>
              <a href="#about" className="hover:text-cyan-400 transition-colors">01. About Profile</a>
            </li>
            <li>
              <a href="#education" className="hover:text-cyan-400 transition-colors">02. Academic Pipeline</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">03. Silicon Matrix</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">04. Engineering Builds</a>
            </li>
            <li>
              <a href="#interests" className="hover:text-cyan-400 transition-colors">05. Horizon Radar</a>
            </li>
            <li>
              <a href="#achievements" className="hover:text-cyan-400 transition-colors">06. Certifications</a>
            </li>
          </ul>
        </div>

        {/* Channels & Resources */}
        <div>
          <h4 className="text-xs font-mono tracking-wider text-slate-300 uppercase mb-4">
            // CHANNELS & ASSETS
          </h4>
          <ul className="space-y-2.5 text-xs font-mono text-slate-400">
            <li>
              <a
                href="/Mayank_Kumar_Yadav_Resume.pdf"
                download="Mayank_Kumar_Yadav_Resume.pdf"
                onClick={onResumeClick}
                className="text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume (PDF Download)</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mayank-kumar-yadav-b8158b273/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn Profile
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mayank19ky"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                GitHub Repositories
              </a>
            </li>
            <li>
              <a href="mailto:mayank19ky@gmail.com" className="hover:text-cyan-400 transition-colors">
                Email Dispatch
              </a>
            </li>
          </ul>
        </div>

        {/* Telemetry Status */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono tracking-wider text-slate-300 uppercase mb-4">
            // TELEMETRY
          </h4>
          <div className="p-3.5 rounded-xl bg-circuit-900/60 border border-slate-800 space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between text-slate-400">
              <span>SYSTEM:</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Nominal
              </span>
            </div>
            <div className="flex items-center justify-between text-slate-400">
              <span>BUILD:</span>
              <span className="text-cyan-400">Vite + React + Tailwind</span>
            </div>
            <div className="flex items-center justify-between text-slate-400">
              <span>TARGET:</span>
              <span className="text-amber-400">Vercel Ready (Static)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div>
          © {new Date().getFullYear()} Mayank Kumar Yadav. Designed with Semiconductor & Silicon Identity.
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-circuit-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          aria-label="Scroll back to top"
        >
          <span>RETURN TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
