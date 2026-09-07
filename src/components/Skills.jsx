import React, { useState } from 'react';
import { Cpu, Code2, Sparkles, Wrench, Layers, CheckCircle2, Flame, Brain } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Layers },
    { id: 'core', label: 'Core ECE & Hardware', icon: Cpu },
    { id: 'programming', label: 'Programming & Web', icon: Code2 },
    { id: 'emerging', label: 'AI & Emerging Tech', icon: Sparkles },
    { id: 'tools', label: 'Robotics & Tooling', icon: Wrench },
  ];

  const skillsData = [
    // Core ECE & Semiconductors
    {
      name: 'Electronics Fundamentals',
      category: 'core',
      level: 'Core Knowledge',
      status: 'Foundational',
      highlight: true,
      desc: 'Semiconductor physics, PN junctions, diodes, transistors, circuit laws (KVL/KCL), and signal analysis.',
    },
    {
      name: 'VLSI & Chip Design',
      category: 'core',
      level: 'Active Learning',
      status: 'In Progress (TrueChip)',
      highlight: true,
      desc: 'Digital logic design, CMOS basics, microarchitecture concepts, and foundational VLSI flow.',
    },
    {
      name: 'Embedded Systems',
      category: 'core',
      level: 'Active Learning',
      status: 'Prototyping',
      highlight: false,
      desc: 'Microcontroller architecture, GPIO programming, register-level understanding, and peripherals.',
    },
    {
      name: 'Digital Electronics & Logic',
      category: 'core',
      level: 'Core Knowledge',
      status: 'Foundational',
      highlight: false,
      desc: 'Boolean algebra, logic gates, flip-flops, multiplexers, counters, and finite state machines.',
    },

    // Programming
    {
      name: 'C Programming',
      category: 'programming',
      level: 'Proficient',
      status: 'Low-Level Core',
      highlight: true,
      desc: 'Pointers, dynamic memory allocation, data structures, and hardware-close systems coding.',
    },
    {
      name: 'Python',
      category: 'programming',
      level: 'Proficient',
      status: 'Automation & AI',
      highlight: true,
      desc: 'Scripting, algorithmic problem-solving, AI model interactions, and computational workflows.',
    },
    {
      name: 'HTML5 & CSS3',
      category: 'programming',
      level: 'Proficient',
      status: 'Front-End',
      highlight: false,
      desc: 'Semantic web structure, responsive layout design, CSS Grid, Flexbox, and modern interfaces.',
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'programming',
      level: 'Intermediate',
      status: 'Dynamic Web',
      highlight: false,
      desc: 'Asynchronous event loops, DOM manipulation, APIs, modern ES modules, and interactive apps.',
    },

    // Emerging Tech
    {
      name: 'Artificial Intelligence',
      category: 'emerging',
      level: 'Google Certified',
      status: 'Certified Core',
      highlight: true,
      desc: 'Machine learning fundamentals, supervised/unsupervised paradigms, and intelligent agent workflows.',
    },
    {
      name: 'Generative AI & LLMs',
      category: 'emerging',
      level: 'Hands-on',
      status: 'Modern AI Tools',
      highlight: true,
      desc: 'Prompt engineering, multimodal model capabilities, API integration, and AI-assisted engineering.',
    },

    // Tools & Robotics
    {
      name: 'Robotics Prototyping',
      category: 'tools',
      level: 'Active Learning',
      status: 'Hands-on Hardware',
      highlight: true,
      desc: 'Sensor integration (ultrasonic, IR), motor drivers, actuation, and microcontroller prototyping.',
    },
    {
      name: 'Git & GitHub',
      category: 'tools',
      level: 'Intermediate',
      status: 'Version Control',
      highlight: false,
      desc: 'Repository management, branching strategies, collaborative workflows, and open-source tracking.',
    },
    {
      name: 'Modern Web Development',
      category: 'tools',
      level: 'Intermediate',
      status: 'React & Tailwind',
      highlight: false,
      desc: 'Component-driven architectures, rapid Vite toolchains, responsive Tailwind styling.',
    },
    {
      name: 'Digital Productivity Systems',
      category: 'tools',
      level: 'Proficient',
      status: 'Engineering Workflow',
      highlight: false,
      desc: 'Structured technical documentation, markdown workflows, task automation, and CLI tools.',
    },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-cyan-400"></div>
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            // 03. SILICON DIE MATRIX
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical <span className="text-gradient-cyan">Capabilities & Skillset</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              An evolving matrix spanning silicon hardware physics, low-level systems programming, and modern intelligent applications.
            </p>
          </div>

          {/* Specialization Pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-circuit-900 border border-slate-800 text-xs font-mono text-slate-300 self-start">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>HARDWARE + SOFTWARE SYNTHESIS</span>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-cyan-500/15 border border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/20'
                    : 'bg-circuit-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`relative p-5 rounded-xl border transition-all duration-300 group hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between ${
                skill.highlight
                  ? 'bg-circuit-900/80 border-cyan-500/30 hover:border-cyan-400/80 shadow-lg shadow-cyan-500/5'
                  : 'bg-circuit-900/40 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {/* Microchip Pin Header Accent */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-circuit-950 border border-slate-800 text-cyan-300/90 font-medium">
                  {skill.status}
                </span>

                <span
                  className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                    skill.level.includes('Certified')
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : skill.level.includes('Learning')
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  }`}
                >
                  {skill.level}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{skill.desc}</p>
              </div>

              {/* IC Pin connector visual footer */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60"></span>
                  <span className="text-[10px] uppercase">{skill.category}</span>
                </div>
                <span className="text-[10px] text-slate-600">PIN_{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
