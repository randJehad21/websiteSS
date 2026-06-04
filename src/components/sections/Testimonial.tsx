"use client";
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-40 bg-soft-white dark:bg-deep-black overflow-hidden relative">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto text-center"
        >
          <div className="flex justify-center mb-12">
            <Quote className="w-20 h-20 text-samurai-red/20" />
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.2] mb-16 dark:text-white">
            “They walked into a <span className="text-samurai-red">15-foot spreadsheet</span> and walked out leaving us with six. The board can finally read the <span className="italic">risk dashboard</span> without a translator.”
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-px bg-samurai-red/30 mb-8" />
            <div className="space-y-1">
              <div className="text-xl font-bold uppercase tracking-widest dark:text-white">Chief Information Security Officer</div>
              <div className="text-sm text-samurai-red font-bold uppercase tracking-widest opacity-60">Saudi Financial Institution</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_70%)] -z-10" />
    </section>
  );
}
