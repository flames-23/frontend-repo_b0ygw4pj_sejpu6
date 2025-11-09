import { motion } from 'framer-motion';
import { MapPin, BellRing, Camera, Battery, Cloud } from 'lucide-react';

export default function Features() {
  const items = [
    { icon: MapPin, title: 'Real-Time GPS Tracking', desc: 'Dark-themed live maps with precise coordinates.' },
    { icon: BellRing, title: 'SOS Alert Button', desc: 'One-tap distress alerts with audio + visual cues.' },
    { icon: Camera, title: 'Live Camera Feed (ESP32-CAM)', desc: 'Capture and stream frames for situational awareness.' },
    { icon: Battery, title: 'Battery Status', desc: 'Smart power monitoring with percentage and health.' },
    { icon: Cloud, title: 'Cloud Integration', desc: 'Sync to Firebase/IoT server for real-time updates.' },
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Built for safety. Designed for speed.
        </motion.h2>
        <p className="text-slate-300 mt-2 max-w-2xl">
          A neon-cyan interface powered by modern IoT — responsive, secure, and ready for real-world demos.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-6 rounded-2xl bg-white/10 border border-white/15 text-white backdrop-blur-xl hover:translate-y-[-2px] transition"
            >
              <div className="h-11 w-11 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {["Badge detects danger", "Sends location & image", "Cloud dashboard updates", "Emergency contact notified"].map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-900/30 border border-white/10 text-white"
            >
              <div className="text-cyan-300 font-bold">{i + 1}️⃣</div>
              <div className="mt-1 font-medium">{step}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
