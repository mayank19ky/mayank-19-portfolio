import React from 'react';
import { Download, ArrowRight, Mail, Sparkles, Cpu, Layers, Radio, ShieldCheck } from 'lucide-react';

export default function Hero({ onResumeClick }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative Silicon IC Die Motif in center background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] lg:w-[680px] h-[340px] sm:h-[540px] lg:h-[680px] rounded-3xl border border-cyan-500/15 pointer-events-none -z-10 flex items-center justify-center rotate-45 opacity-40">
        <div className="w-3/4 h-3/4 rounded-2xl border border-amber-500/15 flex items-center justify-center">
          <div className="w-1/2 h-1/2 rounded-xl border border-cyan-400/20 bg-cyan-950/10"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Status Chip / Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-circuit-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md shadow-sm shadow-cyan-500/10 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="tracking-wide">TRUECHIP PARTNERED ECE SPECIALIZATION</span>
          <span className="text-slate-600">|</span>
          <span className="text-amber-400 font-semibold">1ST YEAR CORE</span>
        </div>

        {/* Name - Large & Confident */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
          MAYANK KUMAR{' '}
          <span className="text-gradient-cyan relative inline-block">
            YADAV
            <svg
              className="absolute -bottom-1 left-0 w-full h-2 text-cyan-400/50"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0,4 L 180,4 L 195,1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-xl lg:text-2xl font-medium text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
          <span className="text-cyan-400 font-semibold">B.Tech ECE Student</span>{' '}
          <span className="text-slate-500">|</span>{' '}
          <span className="text-amber-300 font-semibold">Semiconductor & VLSI Enthusiast</span>{' '}
          <span className="text-slate-500">|</span>{' '}
          <span className="text-slate-200">Building in AI & Robotics</span>
        </p>

        {/* Authentic Polished 2-3 Line Intro */}
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-9 leading-relaxed">
          First-year engineer at <strong className="text-slate-200">JECRC University, Jaipur</strong> specializing in Semiconductors in partnership with <strong className="text-amber-400 font-medium">TrueChip</strong>. Passionate about chip design, silicon architecture, robotics, and generative AI — focused on deep engineering and building high-impact tech ventures.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {/* Download Resume Button (Prominent) */}
          <a
            href="/Mayank_Kumar_Yadav_Resume.pdf"
            download="Mayank_Kumar_Yadav_Resume.pdf"
            onClick={onResumeClick}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-circuit-950 hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4 text-circuit-950 group-hover:scale-110 transition-transform" />
            <span>DOWNLOAD RESUME</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-circuit-950/20 text-circuit-950 font-bold">PDF</span>
          </a>

          {/* View Projects Button */}
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-md shadow-cyan-500/10 hover:-translate-y-0.5"
          >
            <Layers className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>VIEW PROJECTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Contact Me Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-medium bg-circuit-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800/60 transition-all hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>CONTACT ME</span>
          </a>
        </div>

        {/* Silicon Telemetry / Hardware HUD Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 border-t border-slate-800/80 text-left">
          <div className="p-3.5 rounded-xl bg-circuit-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400">Core Track</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">Semiconductor & VLSI</div>
            <div className="text-[11px] text-amber-400/90 font-mono">TrueChip Partnership</div>
          </div>

          <div className="p-3.5 rounded-xl bg-circuit-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Layers className="w-4 h-4" />
              <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400">Institution</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">JECRC University</div>
            <div className="text-[11px] text-slate-400 font-mono">Jaipur, Rajasthan</div>
          </div>

          <div className="p-3.5 rounded-xl bg-circuit-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400">Certification</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">Google AI Certified</div>
            <div className="text-[11px] text-cyan-400 font-mono">Foundational ML & AI</div>
          </div>

          <div className="p-3.5 rounded-xl bg-circuit-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Radio className="w-4 h-4 animate-pulse" />
              <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400">Current Status</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">Active Builder</div>
            <div className="text-[11px] text-emerald-400 font-mono">Hackathons & Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}
