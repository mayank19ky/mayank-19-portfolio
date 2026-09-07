import React from 'react';
import { GraduationCap, School, Calendar, MapPin, Award, CheckCircle, Cpu } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering (ECE)',
      specialization: 'Semiconductor & VLSI Specialization (in partnership with TrueChip)',
      institution: 'JECRC University',
      location: 'Jaipur, Rajasthan, India',
      period: '2024 — Expected 2030',
      status: 'Current // 1st Year Core',
      highlights: [
        'Curriculum specifically tailored in partnership with TrueChip, a leading global verification IP and semiconductor design house.',
        'Core coursework covering Semiconductor Physics, Circuit Analysis, Digital Systems, and Electronic Devices.',
        'Actively participating in technical clubs, robotics workshops, and open coding challenges.',
      ],
      featured: true,
    },
    {
      degree: 'Senior Secondary Education (Class 12th - CBSE)',
      specialization: 'Science Stream (Physics, Chemistry, Mathematics)',
      institution: 'SD SR SEC School',
      location: 'Kakrala, Mahendragarh, Haryana, India',
      period: 'Completed',
      status: 'CBSE Board Verified',
      highlights: [
        'Strengthened foundations in analytical calculus, electromagnetic physics, and problem-solving.',
        'Actively prepared for rigorous engineering entrance and competitive STEM examinations.',
      ],
      featured: false,
    },
    {
      degree: 'Secondary Education (Class 10th - CBSE)',
      specialization: 'General Academic Curriculum',
      institution: 'SD SR SEC School',
      location: 'Kakrala, Mahendragarh, Haryana, India',
      period: 'Completed',
      status: 'CBSE Board Verified',
      highlights: [
        'Consistent academic distinction with strong honors in Mathematics and Basic Sciences.',
        'Participated in school level science exhibitions and quiz competitions.',
      ],
      featured: false,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-slate-900 bg-circuit-950/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-400"></div>
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
            // 02. ACADEMIC PIPELINE
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Formal <span className="text-gradient-copper">Education & Credentials</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base mb-12">
          Chronological milestone of formal schooling and current university-level semiconductor engineering training.
        </p>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {educationData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Circuit Bus Node Indicator */}
              <div
                className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                  item.featured
                    ? 'bg-circuit-950 border-cyan-400 text-cyan-400 shadow-md shadow-cyan-400/40'
                    : 'bg-circuit-950 border-slate-600 text-slate-400'
                }`}
              >
                {item.featured ? (
                  <Cpu className="w-3 h-3 text-cyan-400 animate-pulse" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                )}
              </div>

              {/* Education Card */}
              <div
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 backdrop-blur-sm ${
                  item.featured
                    ? 'bg-circuit-900/80 border-cyan-500/40 shadow-xl shadow-cyan-500/5 hover:border-cyan-400'
                    : 'bg-circuit-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full border ${
                      item.featured
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300 font-semibold'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    {item.status}
                  </span>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {item.degree}
                </h3>

                {item.specialization && (
                  <div className="text-sm sm:text-base font-medium text-amber-400/95 mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{item.specialization}</span>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 mb-4 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                    <School className="w-4 h-4 text-cyan-400" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-sm text-slate-400 flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-0.5 text-xs font-mono shrink-0">►</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
