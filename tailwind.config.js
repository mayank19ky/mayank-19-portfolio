/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        circuit: {
          950: '#040711',
          900: '#080d1a',
          850: '#0c1426',
          800: '#111b33',
          700: '#1e2b4d',
          600: '#2d3e6b',
        },
        silicon: {
          teal: '#00f2fe',
          cyan: '#06b6d4',
          copper: '#f59e0b',
          gold: '#fbbf24',
          pcb: '#10b981',
          trace: '#38bdf8',
        },
        background: '#040711',
        foreground: '#f8fafc',
        muted: '#0e1628',
        'muted-foreground': '#94a3b8',
        ring: '#00f2fe',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Menlo', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'trace-glow': 'traceGlow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        traceGlow: {
          '0%': { opacity: '0.3', filter: 'drop-shadow(0 0 2px rgba(6, 182, 212, 0.4))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.9))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 1px, transparent 1px)',
        'chip-pattern': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
