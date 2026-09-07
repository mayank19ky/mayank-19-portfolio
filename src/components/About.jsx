import React from 'react';
import { Cpu, Terminal, Zap, Lightbulb, Compass, Award, Rocket, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Cpu,
      title: 'Silicon & VLSI Specialization',
      tag: 'HARDWARE CORE',
      color: 'cyan',
      description:
        'Enrolled in the industry-partnered Semiconductor curriculum with TrueChip. Immersing in semiconductor physics, circuit design, digital logic, and foundational VLSI methodologies from day one.',
    },
    {
      icon: Zap,
      title: 'AI & Robotics Convergence',
      tag: 'INTELLIGENT EDGE',
      color: 'amber',
      description:
        'Certified in Google AI foundations. Actively exploring how machine learning algorithms interface with embedded hardware, sensor arrays, and robotic controllers to create intelligent physical systems.',
    },
    {
      icon: Rocket,
      title: 'Builder & Founder Mindset',
      tag: 'ENTREPRENEURIAL',
      color: 'emerald',
      description:
        'Driven by an ambition to invent rather than merely operate. Actively competing in hackathons, coding clubs, and open-source communities with a long-term vision for deeptech entrepreneurship.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-slate-900">
      {/* Decorative background circuit trace line */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-cyan-400"></div>
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            // 01. ARCHITECTURAL PROFILE
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-12">
          Engineering The Future of <span className="text-gradient-cyan">Silicon & Intelligence</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story / Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <div className="p-6 rounded-2xl bg-circuit-900/60 border border-slate-800/90 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
              
              <p className="mb-4">
                I am a first-year <span className="text-white font-semibold">B.Tech Electronics & Communication Engineering (ECE)</span> student at <span className="text-cyan-300 font-medium">JECRC University, Jaipur</span>, pursuing a specialized track in <span className="text-amber-400 font-medium">Semiconductors in partnership with TrueChip</span>.
              </p>

              <p className="mb-4">
                While many gravitate toward conventional software development, I have always been fascinated by what happens beneath the abstraction layer — where electrical potential, silicon wafers, and algorithmic logic converge into compute power. I'm genuinely passionate about the semiconductor and VLSI industry and the hardware revolution currently unfolding.
              </p>

              <p>
                Beyond lecture halls, I completed the <span className="text-cyan-300 font-medium">Google AI certification</span> course online, and I am continuously expanding my toolkit across C, Python, robotics prototyping, and web development. I thrive in hackathons, coding societies, and technical sprints where ideas must be translated into functional systems at speed.
              </p>
            </div>

            {/* Founder Mindset Quote Block */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/10 via-circuit-900 to-circuit-900 border-l-4 border-amber-500 text-slate-200">
              <p className="italic text-sm sm:text-base text-amber-200/90 font-medium mb-2">
                "Long-term, I want to combine deep technical hardware engineering with entrepreneurship — I'd rather build something of my own from scratch than just be an employee. I am early in my journey, but intensely serious about the craft."
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <span>— Mayank Kumar Yadav</span>
                <span>•</span>
                <span>Rewari, Haryana</span>
              </div>
            </div>

            {/* Fast facts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-circuit-900/40 border border-slate-800">
                <div className="text-xs font-mono text-slate-400">Origin / Roots</div>
                <div className="text-sm font-semibold text-white">Rewari, Haryana</div>
              </div>
              <div className="p-3 rounded-lg bg-circuit-900/40 border border-slate-800">
                <div className="text-xs font-mono text-slate-400">Campus</div>
                <div className="text-sm font-semibold text-white">JECRC, Jaipur</div>
              </div>
              <div className="p-3 rounded-lg bg-circuit-900/40 border border-slate-800">
                <div className="text-xs font-mono text-slate-400">Goal Horizon</div>
                <div className="text-sm font-semibold text-amber-400">DeepTech Founder</div>
              </div>
            </div>
          </div>

          {/* 3 Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-circuit-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-circuit-950 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
