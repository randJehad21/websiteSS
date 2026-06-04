"use client";
import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import Magnetic from '../Magnetic';

export default function FinalCTA() {
  return (
    <section className="py-40 relative overflow-hidden bg-deep-black text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(225,29,72,0.1),transparent_70%)]" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-samurai-red font-bold tracking-[0.4em] uppercase mb-10 text-sm"
          >
            Engagement Phase
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-16 tracking-tighter">
            Briefing. <br />
            <span className="italic font-light text-samurai-red">Not pitch.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
            <Magnetic>
              <button className="btn-primary flex items-center justify-center gap-4 px-12 py-6 text-lg group"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              >
                Book a Briefing
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </button>
            </Magnetic>
            
            <a 
              href="mailto:connect@samurai.systems" 
              className="flex items-center gap-3 text-lg font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              <Mail className="w-6 h-6" />
              connect@samurai.systems
            </a>
          </div>
          
          <div className="pt-20 border-t border-white/5 opacity-30 text-[10px] uppercase tracking-[0.5em] font-bold">
            Delivering Excellence, nothing less.
          </div>
        </motion.div>
      </div>

      {/* Ambient Visuals */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-samurai-red/10 rounded-full blur-[100px]" />
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-edge/10 rounded-full blur-[100px]" />
    </section>
  );
}
