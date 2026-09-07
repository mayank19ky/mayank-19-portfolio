import React from 'react';
import { Award, ShieldCheck, CheckCircle2, PlusCircle, ExternalLink, Sparkles } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      id: 'google-ai',
      title: 'Google AI Certification',
      issuer: 'Google (Online Certification)',
      status: 'VERIFIED CREDENTIAL',
      date: 'Completed',
      category: 'ARTIFICIAL INTELLIGENCE',
      description:
        'Comprehensive foundational training covering Artificial Intelligence principles, Machine Learning lifecycles, Neural Network architectures, and responsible Generative AI practices.',
      skillsLearned: [
        'Foundations of Machine Learning & Neural Networks',
        'Generative AI workflows and prompt engineering',
        'Responsible AI development and ethical frameworks',
        'Practical integration of AI capabilities in modern software',
      ],
      linkText: 'Google AI Program',
      isCompleted: true,
      highlight: true,
    },
    {
      id: 'truechip-partnership',
      title: 'TrueChip Semiconductor Specialization Track',
      issuer: 'TrueChip & JECRC University',
      status: 'ACTIVE COHORT',
      date: '2024 — Present',
      category: 'VLSI & SEMICONDUCTORS',
      description:
        'Selected for the premier joint semiconductor engineering cohort in direct partnership with TrueChip. Immersed in industry-standard curriculum for digital electronics and chip verification.',
      skillsLearned: [
        'Semiconductor device physics and fabrication fundamentals',
        'Digital logic and microarchitectural concepts',
        'Exposure to verification IP and ASIC/FPGA design flow',
      ],
      linkText: 'TrueChip Curriculum',
      isCompleted: true,
      highlight: false,
    },
    {
      id: 'future-hackathons',
      title: 'Hackathons, Competitions & Research Honors',
      issuer: 'National & University Sprints',
      status: 'UPCOMING MILESTONES',
      date: 'In Active Preparation',
      category: 'COMPETITIVE & HARDWARE',
      description:
        'Targeting national-level hardware hackathons, robotics challenges, and open-source contributions. Actively forming team alliances to prototype breakthrough solutions.',
      skillsLearned: [
        'Rapid 24/36-hour MVP hardware-software synthesis',
        'Cross-disciplinary teamwork and technical pitch delivery',
      ],
      linkText: 'Watch This Space',
      isCompleted: false,
      highlight: false,
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-cyan-400"></div>
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            // 06. CREDENTIALS & HONORS
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Certifications & <span className="text-gradient-cyan">Milestones</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Verified certifications, industrial affiliations, and competitive engineering milestones. Designed for modular growth as new achievements unlock.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-circuit-900 border border-slate-800 text-xs font-mono text-cyan-300 self-start">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>VERIFIED CREDENTIAL ARCHIVE</span>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between backdrop-blur-sm ${
                item.highlight
                  ? 'bg-circuit-900/80 border-cyan-500/50 shadow-xl shadow-cyan-500/10 hover:border-cyan-400 hover:-translate-y-1'
                  : 'bg-circuit-900/40 border-slate-800/90 hover:border-slate-700 hover:-translate-y-1'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${
                      item.isCompleted
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                    }`}
                  >
                    {item.status}
                  </span>

                  <span className="text-xs font-mono text-slate-500">{item.date}</span>
                </div>

                <div className="text-[11px] font-mono text-cyan-400/80 uppercase tracking-wide mb-1">
                  {item.category}
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5">{item.title}</h3>
                <div className="text-xs text-amber-400/90 font-medium mb-4">{item.issuer}</div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-6">
                  {item.skillsLearned.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-[11px] text-slate-500">{item.linkText}</span>
                {item.isCompleted ? (
                  <span className="text-cyan-400 flex items-center gap-1 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified</span>
                  </span>
                ) : (
                  <span className="text-amber-400 flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    <span>In Progress</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
