# Mayank Kumar Yadav — Personal Engineering Portfolio

A modern, high-performance personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Features a custom **Semiconductor & Integrated Circuit (IC)** design aesthetic tailored for an ambitious first-year Electronics & Communication Engineering (ECE) student specializing in Semiconductors (in partnership with TrueChip).

---

## ⚡ Tech Stack & Architecture

- **Core Framework**: React 18
- **Tooling & Bundler**: Vite 6 (ultra-fast HMR and tree-shaken static production builds)
- **Styling**: Tailwind CSS 3 (custom circuit colors, PCB dot grids, and glowing bus lines)
- **Iconography**: Lucide React (crisp, lightweight vector icons)
- **Deployment**: 100% Static — Ready for Vercel, Netlify, or GitHub Pages
- **Typography**: Inter (UI & Headings) + JetBrains Mono (Specs, Hardware HUD & Code)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or newer)
- npm (v9 or newer)

### Installation
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

The application will run locally at `http://localhost:3000`.

### Production Build
```bash
# Compile and optimize for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploying to Vercel

This repository includes a pre-configured `vercel.json` and standard Vite output (`dist/`).

### Option 1: Vercel CLI
```bash
npx vercel
```

### Option 2: GitHub Integration
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Mayank Kumar Yadav portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Import the project into your [Vercel Dashboard](https://vercel.com).
3. Vercel will automatically detect **Vite** and configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

---

## 📁 Project Structure

```
├── index.html                      # Entry HTML with meta tags & typography
├── package.json                    # Project dependencies and build scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Custom semiconductor colors & animations
├── vercel.json                     # Vercel deployment configuration
├── vite.config.js                  # Vite configuration
├── public/
│   ├── chip-icon.svg               # Microchip vector icon & favicon
│   └── Mayank_Kumar_Yadav_Resume.pdf # Downloadable resume PDF
├── scripts/
│   └── generate-resume-pdf.js      # Resume PDF generation utility
└── src/
    ├── index.css                   # Global styles & custom circuit utilities
    ├── main.jsx                    # React root mounting
    ├── App.jsx                     # Main application layout & state
    └── components/
        ├── CircuitBackground.jsx   # Ambient SVG circuit traces & glowing nodes
        ├── Navbar.jsx              # Responsive header, brand glyph, and mobile drawer
        ├── Hero.jsx                # Confident headline, dynamic badge, CTA & HUD specs
        ├── About.jsx               # Authentic student story, TrueChip focus & 3 pillars
        ├── Education.jsx           # Circuit bus timeline (JECRC + TrueChip, 12th, 10th)
        ├── Skills.jsx              # Silicon Die Matrix with interactive category tabs
        ├── Projects.jsx            # Featured builds with tech stack & live action modals
        ├── ProjectModal.jsx        # Rich dialog displaying architecture & highlights
        ├── Interests.jsx           # Horizon radar: Robotics, Hackathons, Open Source
        ├── Achievements.jsx        # Google AI certification & expandable slots
        ├── Contact.jsx             # One-click copy phone/email, social links & contact form
        ├── Footer.jsx              # Schematic divider, quick links & telemetry status
        └── Toast.jsx               # Visual HUD status notification for clipboard events
```

---

## 📝 Customization Guide

- **Resume**: Replace `public/Mayank_Kumar_Yadav_Resume.pdf` with your updated resume PDF whenever desired. The download buttons automatically serve this file.
- **Contact Details**: Update phone, email, and social links in `src/components/Contact.jsx`.
- **Projects**: Add or edit projects in the `projects` array inside `src/components/Projects.jsx`.
- **Certifications**: Add new hackathon victories or course credentials to the `achievements` array in `src/components/Achievements.jsx`.
