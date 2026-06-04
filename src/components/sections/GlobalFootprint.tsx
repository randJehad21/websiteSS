"use client";
import { motion } from 'motion/react';

const locations = [
  { name: 'Riyadh', country: 'Saudi Arabia', active: true, x: 50, y: 50 },
  { name: 'Dubai', country: 'United Arab Emirates', active: true, x: 58, y: 54 },
  { name: 'Karachi', country: 'Pakistan', active: false, x: 62, y: 62 },
  { name: 'Calgary', country: 'Canada', active: false, x: 40, y: 38 },
  { name: 'Melbourne', country: 'Australia', active: false, x: 65, y: 72 },
];

export default function GlobalFootprint() {
  const hub = locations.find(l => l.name === 'Riyadh');
  if (!hub) return null;
  return (
    <section className="py-40 bg-deep-black text-white overflow-hidden relative" id="global-presence">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* LEFT */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-samurai-red font-bold tracking-[0.3em] uppercase mb-6 text-sm"
            >
              Global Presence
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1]">
              Global Reach. <br />
              <span className="text-samurai-red">Local Insight.</span>
            </h2>

            <p className="text-xl opacity-50 font-light leading-relaxed mb-10">
              Headquartered in Riyadh with roots in Dubai, our intelligence network spans five countries, 
              connecting over 2,800 organizations with world-class technology expertise. 
            </p>

            <div className="space-y-6">
              {['Riyadh HQ - Saudi Arabia', 'Dubai Hub - United Arab Emirates', 'Karachi — Pakistan', 'Calgary — Canada', 'Melbourne — Australia'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-steel-silver font-medium"
                >
                  <div className="w-2 h-2 rounded-full bg-samurai-red" />
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="lg:w-2/3 relative h-[400px] md:h-[600px] w-full">

            {/* BACKGROUND GLOBE SHAPE */}
            {/* ONE SVG for lines + dots */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
            >
              {/* CONNECTION LINES */}
              {locations
                .filter(loc => loc.name !== 'Riyadh')
                .map((loc, i) => (
                  <motion.path
                    key={loc.name}
                    d={`M${hub.x} ${hub.y} L${loc.x} ${loc.y}`}
                    stroke="#E11D48"
                    strokeWidth="0.5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1],
                      opacity: [0, 1],
                    }}
                    transition={{
                      duration: 3,   // 👈 full draw time
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                  />
                ))}

              {/* DOTS inside SVG */}
              {locations.map((loc) => (
                <circle
                  key={loc.name}
                  cx={loc.x}
                  cy={loc.y}
                  r="1"
                  fill={loc.active ? '#ef4444' : 'rgba(255,255,255,0.3)'}
                />
              ))}
            </svg>

            {/* LABELS stay as HTML divs — that's fine */}
            <div className="absolute inset-0">
              {locations.map((loc) => (
                <div
                  key={loc.name}
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  className="absolute"
                >
                  <div className="absolute left-5 top-[-6px]">
                    <div className="text-sm font-semibold">{loc.name}</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest">{loc.country}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* DARK EDGE VIGNETTE */}
            <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-transparent to-deep-black pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black pointer-events-none" />

          </div>
        </div>
      </div>
    </section>
  );
}