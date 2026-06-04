"use client";
import { motion } from 'motion/react';

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-soft-white dark:bg-deep-black transition-colors duration-1000 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-samurai-red/10 blur-[140px] rounded-full" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.4em] font-bold text-samurai-red mb-6"
        >
          Company Overview
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold leading-[1.1] mb-10 dark:text-white"
        >
          We Build <span className="text-samurai-red">Long-Term</span><br />
          Partnerships.
        </motion.h2>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass border border-white/10 rounded-[2.5rem] p-10 md:p-14 mb-12"
        >
          <p className="text-xl md:text-2xl italic text-samurai-red font-light">
            “Deliver excellence, nothing less.”
          </p>
        </motion.div>

        {/* Body */}
        <div className="grid md:grid-cols-2 gap-12 text-base md:text-lg leading-relaxed text-steel-silver/70 dark:text-white/60">

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Founded in Dubai in 2010 by industry experts, Samurai Systems has expanded
            to five countries, delivering customer-focused IT solutions. We provide
            high-quality enterprise systems while ensuring seamless integration across
            back-office platforms and modern digital interfaces.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Our team of architects, engineers, and consultants share one mission:
            empower organizations to thrive in a fast-evolving digital world. From
            securing critical infrastructure to modernizing IT operations, we align
            technology with business outcomes — not complexity.
          </motion.p>

        </div>
      </div>
    </section>
  );
}