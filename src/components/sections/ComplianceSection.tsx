"use client";
import { motion } from 'motion/react';
import { COMPLIANCE_FRAMEWORKS } from '../../constants';
import { ShieldCheck, FileText, ClipboardCheck, Lock, Binary, Database, Activity } from 'lucide-react';

export default function ComplianceSection() {
  return (
    <section id="compliance" className="py-40 relative bg-soft-white dark:bg-deep-black transition-colors duration-1000">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-samurai-red font-bold tracking-[0.3em] uppercase mb-6 text-sm"
            >
              Regulatory Alignment
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-10 leading-[1.1] dark:text-white"
            >
              Built for the <br />
              <span className="text-samurai-red">Regulator's Desk.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl opacity-60 mb-12 font-light dark:text-steel-silver max-w-xl leading-relaxed"
            >
              In Saudi Arabia’s maturing digital landscape, compliance is the non-negotiable foundation of trust. We engineer 
              resilience that satisfies both local mandates and global benchmarks — NCA ECC, PDPL, NDMO, and ISO standards. 
            </motion.p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {COMPLIANCE_FRAMEWORKS.map((framework, i) => (
                <motion.div
                  key={framework}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 rounded-xl bg-samurai-red/5 border border-samurai-red/10 text-samurai-red text-[10px] font-bold tracking-widest uppercase flex items-center justify-center text-center"
                >
                  {framework}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-samurai-red/20 relative z-10 border-white/10"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-compliance-green/20 flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-compliance-green" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Resilience Health Score</div>
                    <div className="text-xs opacity-50 uppercase tracking-widest font-bold">Real-time GRC Audit</div>
                  </div>
                </div>
                <div className="text-3xl font-display font-bold text-compliance-green">99.8%</div>
              </div>

              <div className="space-y-8">
                {[
                  { label: 'PDPL Data Sovereignty', progress: 100, icon: Lock, status: 'Compliant' },
                  { label: 'NCA ECC Implementation', progress: 98, icon: ClipboardCheck, status: 'Verified' },
                  { label: 'NDMO Data Governance', progress: 99, icon: FileText, status: 'Active' },
                ].map((item, i) => (
                  <div key={item.label} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm font-bold">
                        <item.icon className="w-5 h-5 text-samurai-red" />
                        {item.label}
                      </div>
                      <span className="text-[10px] bg-samurai-red/10 text-samurai-red px-2 py-1 rounded font-bold uppercase">{item.status}</span>
                    </div>
                    <div className="h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                        className="h-full bg-linear-to-r from-samurai-red to-cyan-edge"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Boardroom Insights Element */}
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-10">
                 <div className="text-center">
                    <Binary className="w-6 h-6 mx-auto mb-2 opacity-30" />
                    <div className="text-[10px] uppercase font-bold opacity-40">Encryption</div>
                    <div className="text-sm font-bold">AES-256</div>
                 </div>
                 <div className="text-center">
                    <Database className="w-6 h-6 mx-auto mb-2 opacity-30" />
                    <div className="text-[10px] uppercase font-bold opacity-40">Sovereignty</div>
                    <div className="text-sm font-bold">On-Prem</div>
                 </div>
                 <div className="text-center">
                    <Activity className="w-6 h-6 mx-auto mb-2 opacity-30" />
                    <div className="text-[10px] uppercase font-bold opacity-40">Latency</div>
                    <div className="text-sm font-bold">12ms</div>
                 </div>
              </div>
            </motion.div>
            
            {/* Visual background accents */}
            <div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-samurai-red/10 to-transparent blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
