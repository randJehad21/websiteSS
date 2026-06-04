"use client";
import { motion } from 'motion/react';
import { Landmark, BadgeCheck, Activity, ShieldAlert, Radar, GraduationCap} from 'lucide-react';
// Business Continuity Management (BCM) Section 
const industries = [
  { name: 'SAMA BCM Framework', icon: Landmark, description: 'End-to-end delivery of SAMA’s BCM regulatory requirements — covering governance structures, BIA, recovery strategies, and testing cycles.' },
  { name: 'ISO 22301 Certification', icon: BadgeCheck, description: 'Gap assessments, BCMS design, documentation, internal audits, and certification readiness aligned with ISO 22301 international standards.' },
  { name: 'Business Impact Analysis', icon: Activity, description: 'Identifying critical business functions, RTOs, RPOs, and single points of failure to build a risk-informed continuity strategy.' },
  { name: 'Technical Disaster Recovery', icon: ShieldAlert, description: 'Design and implementation of DR environments — active-passive, active-active — across on-premise, cloud, and hybrid infrastructure with automated failover.' },
  { name: ' DR Testing & Simulation', icon: Radar, description: 'Structured DR drills, tabletop exercises, and full failover tests validated against RTOs and RPOs with NCA-compliant reporting.' },
  { name: 'BCM Governance & Training', icon: GraduationCap, description: 'BCM policy development, crisis management plans, staff awareness programs, and executive reporting dashboards.' },
];

export default function Industries() {
  return (
    <section id="bcm" className="py-40 bg-deep-black text-white overflow-hidden transition-colors duration-1000">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-samurai-red font-bold tracking-[0.3em] uppercase mb-6 text-sm"
            >
              Business Continuity
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Reduced Downtime. <br /><span className="text-samurai-red">Enterprise Resilience.</span></h2>
            <p className="text-xl opacity-60 font-light max-w-xl leading-relaxed text-steel-silver">
              We help organizations design, implement, and sustain enterprise-grade BCM programs fully aligned with SAMA BCM Framework and ISO 22301 — covering governance, risk, continuity strategies, and full technical Disaster Recovery implementation. 
            </p>
          </div>
          
          <div className="hidden lg:block">
            <div className="w-px h-32 bg-linear-to-b from-samurai-red/0 via-samurai-red/50 to-samurai-red/0" />
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-16 scrollbar-hide no-scrollbar -mx-6 px-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="min-w-[340px] md:min-w-[400px] glass p-12 rounded-[3.5rem] hover:bg-white/10 dark:hover:bg-samurai-red/10 border-white/5 transition-all duration-700 group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-12 group-hover:bg-samurai-red group-hover:text-white transition-all duration-700">
                <industry.icon className="w-8 h-8 text-samurai-red group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-samurai-red transition-colors">{industry.name}</h3>
              <p className="text-lg opacity-50 group-hover:opacity-100 leading-relaxed font-light transition-all duration-500">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background visual element */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-[20%] right-[-5%] w-[800px] h-[800px] border border-cyan-edge/10 rounded-full" />
         <div className="absolute top-[25%] right-[-10%] w-[800px] h-[800px] border border-cyan-edge/5 rounded-full" />
      </div>
    </section>
  );
}
