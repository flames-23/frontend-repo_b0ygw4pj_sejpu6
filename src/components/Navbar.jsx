import { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#dashboard', label: 'Live Dashboard' },
    { href: '#features', label: 'Features' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-cyan-300">
          <Shield className="h-6 w-6" />
          <span className="font-semibold tracking-wide">Smart Safety Badge</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-200/90 hover:text-cyan-300 transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#dashboard"
            className="px-4 py-2 rounded-xl bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 hover:bg-cyan-400/30 transition">
            Open Dashboard
          </a>
        </div>
        <button
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#dashboard"
              onClick={() => setOpen(false)}
              className="block text-center px-3 py-2 rounded-lg bg-cyan-400/20 text-cyan-200 border border-cyan-400/30"
            >
              Open Dashboard
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
