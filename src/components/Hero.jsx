import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full grid md:grid-cols-2 items-center pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 py-16 col-span-2 grid md:grid-cols-2 items-center gap-10">
        <div className="">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Smart Safety Badge – Enhancing Personal Security
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-slate-200/90 max-w-xl"
          >
            A wearable IoT device that protects lives with real-time alerts, GPS tracking, and AI-powered safety monitoring.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#dashboard" className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition">Live Dashboard</a>
            <a href="#features" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Learn More</a>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-cyan-500/20 blur-3xl rounded-full" />
          <div className="relative grid grid-cols-2 gap-4">
            {[
              { title: 'Real-Time GPS Tracking', desc: 'Live location with dark map theme' },
              { title: 'SOS Alert Button', desc: 'Instant alerts with sound + flash' },
              { title: 'ESP32-CAM Feed', desc: 'View captured image/video' },
              { title: 'Battery & Signal', desc: 'Smart power + connectivity' },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl text-white"
              >
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-slate-200/80">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
