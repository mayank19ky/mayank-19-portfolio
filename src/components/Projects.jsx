import React, { useState } from 'react';
import { Cpu, ExternalLink, Github, ArrowUpRight, Sparkles, FolderGit2, CheckCircle2 } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'portfolio',
      specId: 'PRJ_01 // CORE_PORTFOLIO',
      badge: 'PRODUCTION SYSTEM',
      title: 'Personal Semiconductor-Themed Portfolio',
      shortDesc:
        'A high-performance personal web platform designed with an authentic semiconductor IC & circuit board aesthetic, dynamic telemetry, and zero-bloat modern stack.',
      fullDesc:
        'Built from the ground up to reflect a first-year ECE engineer specializing in Semiconductors. Rather than opting for generic tech templates, this site implements custom SVG circuit trace styling, hardware telemetry indicators, interactive skill matrix, and instant resume delivery.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Lucide Icons', 'HTML5/CSS3', 'Vercel'],
      features: [
        'Custom semiconductor & PCB circuit trace design system',
        'Responsive layout optimized across mobile, tablet, and high-DPI displays',
        'Instant one-click resume download with embedded PDF architecture',
        'Interactive skill category filtering and clipboard-copy contact tools',
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/mayank19ky',
      accentColor: 'cyan',
    },
    {
      id: 'ai-project',
      specId: 'PRJ_02 // NEURAL_INTERFACE',
      badge: 'INTELLIGENT WEB',
      title: 'AI Website Project',
      shortDesc:
        'An interactive web interface powered by modern generative AI capabilities, exploring prompt engineering, intelligent task assistance, and conversational intelligence.',
      fullDesc:
        'Developed as an exploratory platform following Google AI certification. Explores how generative models and modern frontend systems integrate to provide contextual responses, code explanations, and automated reasoning for engineering students.',
      tech: ['Python', 'Generative AI APIs', 'JavaScript', 'HTML5', 'Tailwind CSS', 'Node.js'],
      features: [
        'Interactive conversational prompt playground with structured outputs',
        'Demonstrates Google AI certification principles in generative workflows',
        'Clean, responsive UI with markdown rendering and code syntax highlighting',
        'Modular architecture ready for edge AI model connectivity',
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/mayank19ky',
      accentColor: 'amber',
    },
    {
      id: 'student-productivity',
      specId: 'PRJ_03 // ACADEMIC_FLOW',
      badge: 'ENGINEERING UTILITY',
      title: 'Student Productivity Project',
      shortDesc:
        'A streamlined academic task and resource management dashboard tailored for B.Tech engineering coursework, lab submissions, and technical study tracking.',
      fullDesc:
        'Created to optimize day-to-day academic workflow for 1st year engineering students. Centralizes assignment deadlines, laboratory experiment logs, chip design study notes, and daily coding sprint goals into a distraction-free interface.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage / State', 'Productivity CLI'],
      features: [
        'Structured tracking for engineering subjects (Physics, Math, Circuit Theory)',
        'Laboratory record milestone planner and deadline countdowns',
        'Local state persistence without unnecessary backend friction',
        'Distraction-free high-contrast interface designed for long study sessions',
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/mayank19ky',
      accentColor: 'emerald',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-cyan-400"></div>
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            // 04. ENGINEERING SHOWCASE
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="text-gradient-cyan">Projects & Builds</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Concrete implementations translating engineering concepts into real-world code and interactive platforms.
            </p>
          </div>

          <a
            href="https://github.com/mayank19ky"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-circuit-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all self-start"
          >
            <Github className="w-4 h-4" />
            <span>EXPLORE GITHUB ARCHIVE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-circuit-900/70 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden backdrop-blur-sm shadow-xl shadow-black/20"
            >
              {/* Card Top / Header */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-circuit-950 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-circuit-950 border border-slate-800 text-slate-300">
                    {project.badge}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-cyan-400/80 mb-2">
                  {project.specId}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.shortDesc}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-circuit-950 border border-slate-800 text-slate-300 group-hover:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-circuit-950/60 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                      title="Preview Project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
