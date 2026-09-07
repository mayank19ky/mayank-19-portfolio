import React from 'react';
import { Bot, Code2, Trophy, Rocket, Compass, Sparkles, Cpu, GitBranch } from 'lucide-react';

export default function Interests() {
  const explorationAreas = [
    {
      icon: Bot,
      title: 'Robotics & Hardware Interfacing',
      status: 'Active Prototyping',
      tag: 'EDGE SYSTEMS',
      color: 'cyan',
      description:
        'Experimenting with microcontrollers, ultrasonic distance arrays, servo actuation, and motor drivers. Exploring how low-level firmware bridges mechanical motion with electronic sensory feedback.',
    },
    {
      icon: Trophy,
      title: 'Hackathons & Rapid Sprints',
      status: 'Ready to Compete',
      tag: 'COMPETITIVE SPRINT',
      color: 'amber',
      description:
        'Drawn to the intensity of 36-hour build cycles. Thriving under pressure to architect, build, and pitch functional hardware-software prototypes alongside multidisciplinary teams.',
    },
    {
      icon: GitBranch,
      title: 'Open Source & Chip Toolchains',
      status: 'Active Study',
      tag: 'COLLABORATIVE DEV',
      color: 'emerald',
      description:
        'Following modern open-silicon movements (including RISC-V architectures and open-source EDA tools). Believing that accessible tooling will democratize the next generation of custom chips.',
    },
    {
      icon: Rocket,
      title: 'DeepTech Startups & Commercialization',
      status: 'Long-term Horizon',
      tag: 'FOUNDER AMBITION',
      color: 'purple',
      description:
        'Constantly studying how semiconductor innovations and physical AI technologies evolve from research labs into scalable commercial ventures. Dedicated to creating and owning, not just maintaining.',
    },
  ];

  return (
    <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-slate-900 bg-circuit-950/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-400"></div>
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
            // 05. HORIZON RADAR
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interests & <span className="text-gradient-copper">What I'm Exploring</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Branch-relevant curiosity and active pursuits beyond the standard syllabus — where energy meets engineering.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-circuit-900 border border-slate-800 text-xs font-mono text-amber-400 self-start">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>ACTIVE CURIOSITY MATRIX</span>
          </div>
        </div>

        {/* Exploration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {explorationAreas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-circuit-900/60 border border-slate-800/90 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-circuit-950 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:border-amber-400 group-hover:text-amber-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-circuit-950 border border-slate-800 text-slate-400">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400/90 font-medium">{item.status}</span>
                  <span className="text-slate-600">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
