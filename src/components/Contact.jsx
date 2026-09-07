import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Send, ExternalLink, MessageSquare, Terminal } from 'lucide-react';

export default function Contact({ onShowToast }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactDetails = {
    phone: '+91 9138001940',
    email: 'mayank19ky@gmail.com',
    location: 'Rewari, Haryana / Jaipur, Rajasthan, India',
    linkedin: 'https://www.linkedin.com/in/mayank-kumar-yadav-b8158b273/',
    github: 'https://github.com/mayank19ky',
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) {
      onShowToast(`Copied ${fieldName} to clipboard!`);
    }
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      if (onShowToast) {
        onShowToast('Message transmitted! Opening email client...');
      }

      // Generate mailto link
      const mailtoLink = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      
      window.open(mailtoLink, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-slate-900 bg-circuit-950/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-cyan-400"></div>
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            // 07. COMMUNICATION BUS
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Initialize <span className="text-gradient-cyan">Connection</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Always eager to connect for semiconductor discussions, robotics projects, hackathon teams, and mentorship.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-circuit-900 border border-slate-800 text-xs font-mono text-emerald-400 self-start">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AVAILABLE FOR INTERNSHIPS & HACKATHONS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Channels & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-circuit-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all backdrop-blur-sm group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-circuit-950 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">PHONE // DIRECT VOICE</div>
                    <a
                      href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(contactDetails.phone, 'Phone')}
                  className="p-2 rounded-lg bg-circuit-950 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedField === 'Phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-circuit-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all backdrop-blur-sm group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-circuit-950 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">EMAIL // PRIMARY INBOX</div>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(contactDetails.email, 'Email')}
                  className="p-2 rounded-lg bg-circuit-950 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shrink-0"
                  title="Copy Email Address"
                  aria-label="Copy Email Address"
                >
                  {copiedField === 'Email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-circuit-900/70 border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-circuit-950 border border-slate-700 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">BASE LOCATION // DUAL HUB</div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {contactDetails.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels (LinkedIn & GitHub) */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-circuit-900/80 border border-slate-800 hover:border-cyan-500/50 flex items-center gap-3 text-slate-300 hover:text-white transition-all group hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-lg bg-circuit-950 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-circuit-950 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold truncate">LinkedIn</div>
                  <div className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                    <span>Connect</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </div>
                </div>
              </a>

              <a
                href={contactDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-circuit-900/80 border border-slate-800 hover:border-amber-500/50 flex items-center gap-3 text-slate-300 hover:text-white transition-all group hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-lg bg-circuit-950 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-circuit-950 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold truncate">GitHub</div>
                  <div className="text-[10px] font-mono text-amber-400 flex items-center gap-1">
                    <span>Repositories</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Terminal Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-circuit-900/80 border border-slate-800/90 backdrop-blur-md relative overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    dispatch_message.io
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400/80">
                  PORT // 25:SMTP
                </span>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto animate-bounce">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Packet Transmitted Successfully</h3>
                  <p className="text-sm text-slate-400 max-w-md mx-auto">
                    Thank you, <span className="text-cyan-300 font-medium">{formData.name}</span>. Your message has been prepared for transmission to{' '}
                    <span className="text-amber-300">{contactDetails.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs text-cyan-400 bg-circuit-950 border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        YOUR NAME <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-4 py-2.5 rounded-xl bg-circuit-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        YOUR EMAIL <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. elena@semiconductor.org"
                        className="w-full px-4 py-2.5 rounded-xl bg-circuit-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      SUBJECT <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Hackathon Team Collaboration / Hardware Project"
                      className="w-full px-4 py-2.5 rounded-xl bg-circuit-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      TRANSMISSION PAYLOAD (MESSAGE) <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message, project idea, or collaboration proposal here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-circuit-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-500 to-cyan-600 text-circuit-950 hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING DATA PACKET...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>DISPATCH DIRECT MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
