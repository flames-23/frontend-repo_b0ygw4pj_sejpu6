import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 text-slate-300 grid md:grid-cols-2 items-center gap-6">
        <div>
          <div className="text-white font-semibold">Smart Safety Badge</div>
          <p className="text-sm">Project demo website for showcasing real-time personal safety IoT innovation.</p>
        </div>
        <div className="flex md:justify-end gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white">
            <Mail className="h-4 w-4" /> Contact
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
