"use client";
import { motion } from 'motion/react';
import { CORE_SERVICES } from '../../constants';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../lib/utils';

export default function CoreServices() {
  return (
    <section id="services" className="py-40 bg-soft-white dark:bg-deep-black transition-colors duration-1000 overflow-hidden relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-samurai-red font-bold tracking-[0.3em] uppercase mb-6 text-sm"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-8 text-deep-navy-text dark:text-white"
          >
            Seven pillars. <br />
            <span className="text-samurai-red">One operating system.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl opacity-60 max-w-3xl mx-auto font-light dark:text-steel-silver"
          >
            A holistic ecosystem engineered to protect, modernize, and scale your most critical digital assets — fully aligned with Saudi regulatory frameworks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {CORE_SERVICES.map((service, i) => {
            // @ts-ignore
            const Icon = LucideIcons[service.icon];
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className={cn(
                  "p-12 rounded-[2.5rem] flex flex-col justify-between group cursor-pointer transition-all duration-700 relative overflow-hidden",
                  i === 0 
                  ? "lg:col-span-2 bg-deep-black text-white shadow-2xl shadow-samurai-red/10" 
                  : "glass hover:shadow-2xl hover:shadow-samurai-red/5 border-deep-navy-text/5 dark:border-white/5"
                )}
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-samurai-red/5 rounded-full blur-3xl group-hover:bg-samurai-red/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-700",
                    i === 0 ? "bg-samurai-red text-white" : "bg-samurai-red/10 text-samurai-red group-hover:bg-samurai-red group-hover:text-white"
                  )}>
                    {Icon && <Icon className="w-8 h-8" />}
                  </div>
                  <h3 className={cn(
                    "font-bold mb-6 group-hover:text-samurai-red transition-colors duration-500",
                    i === 0 ? "text-4xl" : "text-2xl"
                  )}>{service.title}</h3>
                </div>

                <p className={cn(
                  "text-lg leading-relaxed font-light relative z-10",
                  i === 0 ? "text-white/80" : "opacity-60 dark:text-steel-silver"
                )}>
                  {service.description}
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <LucideIcons.ArrowRight className="w-6 h-6 text-samurai-red" />
                </div>
              </motion.div>
            )
          })}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-12 rounded-[2.5rem] bg-samurai-red flex flex-col items-center justify-center text-center text-white shadow-2xl shadow-samurai-red/20 transition-all duration-500"
          >
            <LucideIcons.Zap className="w-16 h-16 mb-8 text-white/40 animate-pulse" />
            <h3 className="text-3xl font-bold mb-4">Enterprise Customization</h3>
            <p className="text-white/80 mb-10 font-light text-lg">Your specific security roadmap, engineered from the ground up.</p>
            <button className="px-10 py-4 rounded-full bg-white text-samurai-red font-bold text-sm uppercase tracking-widest hover:bg-soft-white transition-colors">
              Request Briefing
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-0 w-1/4 h-full bg-samurai-red/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
