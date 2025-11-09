import { useEffect, useMemo, useRef, useState } from 'react';
import { MapPin, Signal, Battery, Camera, AlertTriangle } from 'lucide-react';

// Lightweight simulated data stream if backend unavailable
function useSimulatedDevice() {
  const [data, setData] = useState({
    device_id: 'SSB-001',
    user: 'Alex Kim',
    latitude: 37.7749,
    longitude: -122.4194,
    battery: 82,
    signal: 72,
    sos_status: false,
    image_url: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  });

  useEffect(() => {
    const id = setInterval(() => {
      setData(prev => {
        const jitter = () => (Math.random() - 0.5) * 0.0015;
        const flipSOS = Math.random() < 0.02 ? !prev.sos_status : prev.sos_status;
        return {
          ...prev,
          latitude: prev.latitude + jitter(),
          longitude: prev.longitude + jitter(),
          battery: Math.max(5, prev.battery - (Math.random() * 0.2)),
          signal: Math.max(10, 60 + Math.random() * 40),
          sos_status: flipSOS,
        };
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return { data, setData };
}

function ProgressRing({ value, color = 'text-cyan-300', track = 'stroke-white/10' }) {
  const r = 26; const c = 2 * Math.PI * r;
  const dash = useMemo(() => `${(value / 100) * c} ${c}`, [value]);
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16">
      <circle cx="32" cy="32" r={r} className={`fill-none stroke-[6] ${track}`} />
      <circle cx="32" cy="32" r={r} className={`fill-none stroke-[6] ${color}`} strokeDasharray={dash} strokeLinecap="round" transform="rotate(-90 32 32)" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-white text-xs font-semibold">{Math.round(value)}%</text>
    </svg>
  );
}

export default function Dashboard() {
  const { data, setData } = useSimulatedDevice();
  const audioRef = useRef(null);

  useEffect(() => {
    if (data.sos_status && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  }, [data.sos_status]);

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${data.longitude - 0.01}%2C${data.latitude - 0.01}%2C${data.longitude + 0.01}%2C${data.latitude + 0.01}&layer=mapnik&marker=${data.latitude}%2C${data.longitude}`;

  return (
    <section id="dashboard" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 text-white">
          <AlertTriangle className={`h-6 w-6 ${data.sos_status ? 'text-red-400 animate-pulse' : 'text-cyan-300'}`} />
          <h2 className="text-3xl font-bold">Live Dashboard</h2>
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60">
            <div className={`p-3 text-sm flex items-center gap-2 ${data.sos_status ? 'bg-red-500/15 text-red-200' : 'bg-white/5 text-slate-300'}`}>
              <MapPin className="h-4 w-4" /> Lat: {data.latitude.toFixed(5)} • Lng: {data.longitude.toFixed(5)}
            </div>
            <iframe title="live-map" src={mapSrc} className="w-full h-[360px] md:h-[460px]" />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-white grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-300">Device</div>
                <div className="font-semibold">{data.device_id} • {data.user}</div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs border ${data.sos_status ? 'bg-red-500/15 text-red-200 border-red-400/30' : 'bg-emerald-500/15 text-emerald-200 border-emerald-400/30'}`}>
                {data.sos_status ? 'SOS' : 'NORMAL'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-4">
                <Battery className="text-cyan-300" />
                <div>
                  <div className="text-xs text-slate-400">Battery</div>
                  <div className="font-semibold">{Math.round(data.battery)}%</div>
                </div>
                <div className="ml-auto">
                  <ProgressRing value={data.battery} />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-4">
                <Signal className="text-cyan-300" />
                <div>
                  <div className="text-xs text-slate-400">Signal</div>
                  <div className="font-semibold">{Math.round(data.signal)}%</div>
                </div>
                <div className="ml-auto">
                  <ProgressRing value={data.signal} color="text-emerald-300" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <a href={data.image_url} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
                <img src={data.image_url} alt="ESP32 snapshot" className="h-36 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-sm bg-gradient-to-t from-black/60 to-transparent text-white flex items-center gap-2">
                  <Camera className="h-4 w-4" /> Latest ESP32-CAM Image
                </div>
              </a>
              <div className="grid gap-3">
                <button onClick={() => setData(d => ({ ...d, sos_status: !d.sos_status }))} className={`w-full px-4 py-3 rounded-xl font-semibold border transition ${data.sos_status ? 'bg-red-500/20 text-red-100 border-red-400/30 animate-pulse' : 'bg-cyan-500/20 text-cyan-100 border-cyan-400/30'}`}>
                  {data.sos_status ? 'Clear SOS' : 'Send Test Alert'}
                </button>
                <a href={data.image_url} target="_blank" rel="noreferrer" className="w-full px-4 py-3 rounded-xl font-semibold border bg-white/10 border-white/20 text-white text-center">View Live Camera</a>
              </div>
            </div>
          </div>
        </div>

        {data.sos_status && (
          <div className="mt-6 p-4 rounded-xl border border-red-400/30 bg-red-500/10 text-red-100 animate-pulse text-center">
            SOS ACTIVE — Emergency contacts have been notified.
          </div>
        )}

        <audio ref={audioRef} src="https://cdn.pixabay.com/download/audio/2021/08/09/audio_2d27976f3f.mp3?filename=warning-6101.mp3" preload="auto" />
      </div>
    </section>
  );
}
