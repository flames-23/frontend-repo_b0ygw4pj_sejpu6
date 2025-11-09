import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import { motion } from 'framer-motion';
import { Phone, User, Mail, School, Github, Mail as MailIcon } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 text-white">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
            >
              Get in touch
            </motion.h3>
            <p className="text-slate-300 mt-2">Questions, collaborations, or demo requests — we’d love to hear from you.</p>

            <div className="mt-8 space-y-3 text-slate-300">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-cyan-300" /> +91 90000 00000</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-cyan-300" /> contact@smartsafetybadge.dev</div>
              <div className="flex items-center gap-3"><School className="h-4 w-4 text-cyan-300" /> Your College / Department</div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300 flex items-center gap-2"><User className="h-4 w-4" /> Name</label>
                <input type="text" required className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/15 px-3 py-2 text-white outline-none focus:ring-2 ring-cyan-400/40" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-300 flex items-center gap-2"><Mail className="h-4 w-4" /> Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/15 px-3 py-2 text-white outline-none focus:ring-2 ring-cyan-400/40" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-300">Message</label>
              <textarea rows={4} required className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/15 px-3 py-2 text-white outline-none focus:ring-2 ring-cyan-400/40" placeholder="How can we help?" />
            </div>
            <button className="px-5 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition">Send Message</button>
            <p className="text-xs text-slate-400">This demo stores inputs locally only. Hook to Firebase or your API to store/send emails.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-4 text-white">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Our Mission
        </motion.h3>
        <p className="mt-3 text-slate-300 max-w-3xl">
          Smart Safety Badge is a wearable designed to improve personal security with real-time monitoring, AI-assisted anomaly detection, and instant SOS alerts. Built as a final-year project and polished for hackathons, it demonstrates how connected devices and human-centered design can protect people in critical moments.
        </p>
      </div>
    </section>
  );
}

function FooterInline() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 text-slate-300 grid md:grid-cols-2 items-center gap-6">
        <div>
          <div className="text-white font-semibold">Smart Safety Badge</div>
          <p className="text-sm">Project demo website for showcasing real-time personal safety IoT innovation.</p>
        </div>
        <div className="flex md:justify-end gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white">
            <MailIcon className="h-4 w-4" /> Contact
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <MissionSection />
        <ContactSection />
      </main>
      <FooterInline />
    </div>
  );
}

export default App;
