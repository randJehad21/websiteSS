"use client";
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import {
  ShieldCheck,
  Network,
  Radar,
  Bug,
  Factory,
  ChevronDown,
} from 'lucide-react';

const threatData = [
  { month: 'Jan', threats: 120 },
  { month: 'Feb', threats: 310 },
  { month: 'Mar', threats: 280 },
  { month: 'Apr', threats: 540 },
  { month: 'May', threats: 420 },
  { month: 'Jun', threats: 760 },
];

const capabilities = [
  {
    icon: Network,
    title: 'Infrastructure Protection',
    description:
      'Next-gen Firewalls, IDS/IPS, WAF, DLP, Endpoint Security, IAM, PAM, MFA, Zero Trust Architecture, and CSPM-driven hardening.',

    tags: ['NGFW', 'Zero Trust', 'IAM', 'PAM', 'CSPM'],
  },

  {
    icon: Radar,
    title: 'Threat Intelligence & DFIR',
    description:
      'Real-time threat visibility, malware analysis, digital forensics, rapid containment, incident recovery, and NCA-compliant reporting.',

    tags: ['DFIR', 'Forensics', 'Threat Intel'],
  },

  {
    icon: Bug,
    title: 'VA/PT & Red Teaming',
    description:
      'Comprehensive web, application, and infrastructure testing with adversary simulation and continuous vulnerability management.',

    tags: ['Red Team', 'VAPT', 'Pen Testing'],
  },

  {
    icon: Factory,
    title: 'Cloud & OT Security',
    description:
      'DevSecOps integration, API security, cloud-native protection, OT/ICS segmentation, SCADA monitoring, and anomaly detection.',

    tags: ['DevSecOps', 'OT/ICS', 'SCADA', 'CASB'],
  },
  {
    icon: ShieldCheck,
    title: 'Managed Security Operations (SOC)',
    description:
      '24×7 monitoring, detection & incident response. Threat hunting, alert triage, vulnerability prioritization, and use-case mapping aligned with MITRE ATT&CK and NCA frameworks.',

    tags: ['SIEM', 'SOAR', 'EDR/XDR', 'MITRE ATT&CK', 'NCA ECC', '24×7'],
  },
];

export default function Cybersecurity() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="cybersecurity"
      className="relative py-40 overflow-hidden bg-soft-white dark:bg-deep-black transition-colors duration-1000"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-samurai-red/10 blur-[180px] rounded-full pointer-events-none" />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-24"
        >
          <div className="text-samurai-red text-sm font-bold tracking-[0.35em] uppercase mb-6">
            Cybersecurity
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 dark:text-white">
            Defending What <br />
            <span className="text-samurai-red">
              Matters Most.
            </span>
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-steel-silver/70 max-w-3xl">
            End-to-end protection for the enterprise — proactive,
            integrated cybersecurity operations that safeguard
            data, infrastructure, and people.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE — GRAPH */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="glass border border-white/10 rounded-[3rem] p-10 md:p-14 overflow-hidden relative">

              {/* TOP BAR */}
              <div className="flex items-center justify-between mb-12">

                <div>
                  <h3 className="text-2xl font-bold dark:text-white mb-2">
                    Live Threat Telemetry
                  </h3>

                  <p className="text-xs uppercase tracking-[0.25em] opacity-50">
                    Security Operations Intelligence
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />

                  <span className="text-[10px] uppercase tracking-[0.25em] opacity-60 font-bold">
                    SOC ACTIVE
                  </span>
                </div>
              </div>

              {/* GRAPH */}
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={threatData}>

                    <defs>
                      <linearGradient
                        id="threatGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#E11D48"
                          stopOpacity={0.35}
                        />

                        <stop
                          offset="95%"
                          stopColor="#E11D48"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#ffffff"
                      strokeOpacity={0.05}
                    />

                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 10,
                        fill: '#6B7280',
                        fontWeight: 700,
                      }}
                      dy={10}
                    />

                    <YAxis hide />

                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#05060A',
                        border:
                          '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '18px',
                        color: 'white',
                      }}
                      cursor={{
                        stroke: '#E11D48',
                        strokeWidth: 1,
                      }}
                    />

                    <Area
                      type="monotone"
                      dataKey="threats"
                      stroke="#E11D48"
                      strokeWidth={4}
                      fillOpacity={1}
                      fill="url(#threatGradient)"
                      animationDuration={2500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/5">

                <div>
                  <div className="text-3xl font-bold text-samurai-red mb-2">
                    24×7
                  </div>

                  <div className="text-[10px] uppercase tracking-[0.25em] opacity-50">
                    Monitoring
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-bold text-samurai-red mb-2">
                    MITRE
                  </div>

                  <div className="text-[10px] uppercase tracking-[0.25em] opacity-50">
                    ATT&CK Mapping
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-bold text-samurai-red mb-2">
                    NCA ECC
                  </div>

                  <div className="text-[10px] uppercase tracking-[0.25em] opacity-50">
                    Aligned
                  </div>
                </div>
              </div>

            </div>

            {/* DECORATIVE GLOW */}
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-samurai-red/20 blur-[120px] rounded-full -z-10" />

          </motion.div>

          {/* RIGHT SIDE — ACCORDION */}
          <div className="space-y-5">

            {capabilities.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className={`
                    glass
                    border
                    rounded-[2rem]
                    overflow-hidden
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? 'border-samurai-red/30 bg-white/[0.03]'
                        : 'border-white/5'
                    }
                  `}
                >

                  {/* HEADER */}
                  <button
                    onClick={() => setActiveIndex(index)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >

                    <div className="flex items-center gap-5">

                      <div
                        className={`
                          w-16 h-16 rounded-2xl
                          flex items-center justify-center
                          transition-all duration-500
                          ${
                            isActive
                              ? 'bg-samurai-red text-white'
                              : 'bg-samurai-red/10 text-samurai-red'
                          }
                        `}
                      >
                        <Icon className="w-7 h-7" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold dark:text-white">
                          {item.title}
                        </h3>

                        <p className="text-sm opacity-40 mt-1">
                          Click to explore capabilities
                        </p>
                      </div>
                    </div>

                    <motion.div
                      animate={{
                        rotate: isActive ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 opacity-50" />
                    </motion.div>

                  </button>

                  {/* CONTENT */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.45,
                        }}
                        className="overflow-hidden"
                      >

                        <div className="px-8 pb-8">

                          <p className="text-steel-silver/70 leading-relaxed mb-8">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-3">

                            {item.tags.map((tag) => (
                              <div
                                key={tag}
                                className="
                                  px-4
                                  py-2
                                  rounded-full
                                  bg-samurai-red/10
                                  border
                                  border-samurai-red/20
                                  text-[10px]
                                  uppercase
                                  tracking-[0.2em]
                                  font-bold
                                  text-samurai-red
                                "
                              >
                                {tag}
                              </div>
                            ))}

                          </div>

                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}