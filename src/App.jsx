import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CircuitBackground from './components/CircuitBackground';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import VisualShowcase from './components/VisualShowcase';
import Interests from './components/Interests';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastType, setToastType] = useState('success');

  const showToast = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  const handleResumeDownload = () => {
    showToast('Downloading Mayank_Kumar_Yadav_Resume.pdf...');
  };

  return (
    <div className="relative min-h-screen bg-circuit-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Circuit Background */}
      <CircuitBackground />

      {/* Sticky Navigation Bar */}
      <Navbar onResumeClick={handleResumeDownload} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero onResumeClick={handleResumeDownload} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <VisualShowcase />
        <Interests />
        <Achievements />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onResumeClick={handleResumeDownload} />

      {/* System Toast Notification */}
      <Toast message={toastMessage} visible={toastVisible} type={toastType} />
    </div>
  );
}
