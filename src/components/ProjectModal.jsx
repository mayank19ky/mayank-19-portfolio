import React from 'react';
import { X, ExternalLink, Github, Cpu, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-circuit-900 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-circuit-950 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            {project.badge || 'ENGINEERING BUILD'}
          </span>
          <span className="text-xs font-mono text-slate-500">// {project.specId}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{project.title}</h3>

        {/* Full Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.fullDesc || project.description}
        </p>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span>Architecture & Key Highlights</span>
          </h4>
          <ul className="space-y-2.5">
            {project.features?.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono tracking-wider text-amber-400 uppercase mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Silicon & Software Stack</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs font-mono px-3 py-1 rounded-md bg-circuit-950 border border-slate-700 text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold bg-cyan-500 text-circuit-950 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/30"
            >
              <ExternalLink className="w-4 h-4" />
              <span>LAUNCH LIVE SYSTEM</span>
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs text-slate-400 bg-slate-800/60 border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Live Deployment Pending</span>
            </div>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs text-slate-300 bg-circuit-950 border border-slate-700 hover:text-white hover:border-slate-500 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>SOURCE REPO</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
