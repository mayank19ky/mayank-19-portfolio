import React, { useState } from 'react';
import { CoverflowCarousel } from '@/components/ui/coverflow-carousel';
import DemoOne from '@/components/ui/demo';
import { Sparkles, Layers, SlidersHorizontal, Eye } from 'lucide-react';

const ENGINEERING_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Silicon Microchip Die & Circuit Traces",
    title: "Semiconductor Silicon & VLSI",
    subtitle: "Hardware Specialization",
    meta: [
      { label: "Domain", value: "VLSI / Physical Design" },
      { label: "Partner", value: "TrueChip" },
      { label: "Focus", value: "Digital Logic & ASIC" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Robotics and Hardware Prototyping",
    title: "Robotics & Edge Hardware",
    subtitle: "Active Prototyping",
    meta: [
      { label: "Core", value: "Microcontrollers" },
      { label: "Sensors", value: "Ultrasonic / IR" },
      { label: "Actuation", value: "Motor Drivers / Servo" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Artificial Intelligence and Neural Networks",
    title: "AI & Generative Models",
    subtitle: "Google Certified",
    meta: [
      { label: "Credential", value: "Google AI Certified" },
      { label: "Topics", value: "ML, Neural Nets, LLMs" },
      { label: "Workflow", value: "Prompt Systems & Python" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Low-Level Programming and Systems Architecture",
    title: "Systems Coding & Architecture",
    subtitle: "C & Python Foundations",
    meta: [
      { label: "Languages", value: "C, Python, JavaScript" },
      { label: "Paradigms", value: "Low-level & Modular" },
      { label: "Tooling", value: "Git, Linux, VS Code" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Competitive Hackathons and Collaboration",
    title: "Hackathons & Rapid Sprints",
    subtitle: "Builder Mindset",
    meta: [
      { label: "Sprint", value: "36-Hour Builds" },
      { label: "Role", value: "Hardware-Software Lead" },
      { label: "Goal", value: "DeepTech Innovation" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Cybernetic High-Performance Computing",
    title: "Next-Gen Compute Platforms",
    subtitle: "Research Horizon",
    meta: [
      { label: "Architecture", value: "RISC-V & Edge AI" },
      { label: "Scope", value: "Smart Sensors" },
      { label: "Status", value: "Active Study" },
    ],
  },
];

export default function VisualShowcase() {
  const [viewMode, setViewMode] = useState('engineering'); // 'engineering' | 'demo'

  return (
    <section id="showcase" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-slate-900 bg-circuit-950/70">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-cyan-400"></div>
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            // 05. 3D INTERACTIVE RADAR
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive <span className="text-gradient-cyan">Coverflow Showcase</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Drag, swipe, or use keyboard arrow keys to navigate the 3D perspective carousel. Built with shadcn component architecture, Tailwind CSS, and TypeScript.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-circuit-900 border border-slate-800 self-start">
            <button
              onClick={() => setViewMode('engineering')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                viewMode === 'engineering'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Engineering Highlights
            </button>
            <button
              onClick={() => setViewMode('demo')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                viewMode === 'demo'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Demo Album Mode
            </button>
          </div>
        </div>

        {/* Carousel Container with Circuit Border */}
        <div className="relative rounded-3xl bg-circuit-900/50 border border-cyan-500/20 p-4 sm:p-8 backdrop-blur-md shadow-2xl shadow-cyan-500/5 overflow-hidden">
          {/* Subtle circuit corner decorations */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-mono text-cyan-400/70">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>PERSPECTIVE_ENGINE // 3D_COVERFLOW</span>
          </div>

          <div className="pt-6">
            {viewMode === 'engineering' ? (
              <CoverflowCarousel
                slides={ENGINEERING_SLIDES}
                showCaption
                showNavigation
                showPagination
                cardWidth="clamp(180px, 24vw, 290px)"
              />
            ) : (
              <DemoOne />
            )}
          </div>

          {/* Interactive Help Hint */}
          <div className="text-center mt-6 text-xs font-mono text-slate-500">
            [ HINT: Click & drag horizontally or use Left / Right Arrow keys ]
          </div>
        </div>
      </div>
    </section>
  );
}
