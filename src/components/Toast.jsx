import React from 'react';
import { CheckCircle, Info } from 'lucide-react';

export default function Toast({ message, visible, type = 'success' }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg bg-circuit-900 border border-cyan-500/40 text-slate-100 shadow-2xl shadow-cyan-500/20 backdrop-blur-md transition-all transform animate-bounce">
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
      ) : (
        <Info className="w-5 h-5 text-amber-400 shrink-0" />
      )}
      <div className="text-sm font-mono tracking-wide">
        <span className="text-cyan-400 font-semibold">[SYS_STATUS] </span>
        {message}
      </div>
    </div>
  );
}
