import React from 'react';

export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      {/* Subtle PCB Grid background */}
      <div className="absolute inset-0 circuit-grid opacity-60" />
      
      {/* Ambient gradient glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      {/* SVG Circuit Traces */}
      <svg className="w-full h-full absolute inset-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="traceGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="copperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Top-left circuit network */}
        <g stroke="url(#traceGrad1)" strokeWidth="1.2" fill="none">
          <path d="M 0,100 L 150,100 L 220,170 L 400,170" className="trace-line" />
          <path d="M 150,100 L 150,250 L 280,380" />
          <path d="M 30,0 L 30,180 L 100,250" />
          <circle cx="220" cy="170" r="3" fill="#00f2fe" fillOpacity="0.7" />
          <circle cx="400" cy="170" r="3" fill="#38bdf8" fillOpacity="0.7" />
          <circle cx="280" cy="380" r="2.5" fill="#00f2fe" fillOpacity="0.5" />
        </g>

        {/* Top-right circuit network */}
        <g stroke="url(#copperGrad)" strokeWidth="1.2" fill="none">
          <path d="M 900,50 L 1150,50 L 1250,150 L 1400,150" className="trace-line" />
          <path d="M 1150,50 L 1150,220 L 1050,320" />
          <circle cx="1250" cy="150" r="3" fill="#f59e0b" fillOpacity="0.8" />
          <circle cx="1050" cy="320" r="2.5" fill="#fbbf24" fillOpacity="0.6" />
        </g>

        {/* Bottom circuit traces */}
        <g stroke="url(#traceGrad1)" strokeWidth="1" fill="none">
          <path d="M 200,800 L 400,800 L 520,680 L 800,680" />
          <circle cx="520" cy="680" r="3" fill="#00f2fe" fillOpacity="0.6" />
          <circle cx="800" cy="680" r="2.5" fill="#38bdf8" fillOpacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
