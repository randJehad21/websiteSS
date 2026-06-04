"use client";
import { PARTNERS } from '../../constants';
import { motion } from 'motion/react';

export default function Partners() {
  return (
    <section className="py-24 bg-soft-white dark:bg-deep-black border-y border-white/5 overflow-hidden transition-colors duration-1000">
      <div className="container max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 text-center block mb-4"
        >
          Technology Alliance
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-bold dark:text-white">Global Ecosystem <span className="text-samurai-red">Partners.</span></h2>
      </div>
      
      <div className="flex overflow-hidden relative">
        <div className="flex items-center gap-24 animate-marquee whitespace-nowrap py-4">
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <div key={i} className="text-3xl md:text-5xl font-display font-medium text-deep-navy-text/10 dark:text-white/10 select-none grayscale hover:grayscale-0 hover:text-samurai-red transition-all cursor-default uppercase tracking-tighter">
              {partner}
            </div>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-soft-white dark:from-deep-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-soft-white dark:from-deep-black to-transparent z-10" />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
