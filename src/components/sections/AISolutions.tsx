"use client";
import { motion } from 'motion/react';
import {Brain,BrainCircuit, ChartNoAxesCombined,MessagesSquare,ScanSearch,Bot,Server,}from 'lucide-react';
import { use } from 'react';


const aiCapabilities = [
  { title: 'AI Strategy & Consulting', icon: BrainCircuit, description: 'Develop AI roadmaps aligned with enterprise goals, compliance frameworks, and ethical governance.' },
  { title: 'Predictive Analytics & ML', icon: ChartNoAxesCombined, description: 'Advanced models for demand forecasting, anomaly detection, and performance optimization.' },
  { title: 'Conversational AI & NLP', icon: MessagesSquare, description: 'Build multilingual chatbots and virtual assistants that improve customer engagement.' },
  { title: 'Computer Vision & OCR', icon: ScanSearch, description: 'Automate visual inspection, data extraction, and identity validation using AI and OCR models.' },
  { title: 'AI Agents & Automation', icon: Bot, description: 'Integrate AI agents (LangChain, AutoGPT) for decision support, threat detection, and workflow orchestration.' },
  { title: 'AI Infrastructure', icon: Server, description: 'On-premise AI deployment and AI service enablement for sovereign, regulated environments.' },
];

export default function EngineeredIntelligence() {
  return (
    <section id="solutions" className="py-40 relative overflow-hidden bg-soft-white dark:bg-deep-black transition-colors duration-1000">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-16">
          <div className="max-w-2xl relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-samurai-red font-bold tracking-[0.2em] uppercase mb-6 text-sm"
            >
              Artificial Intelligence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]"
            >
              From Vision to<br />
              <span className="italic font-light text-samurai-red">Intelligent Enterprise.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl opacity-70 leading-relaxed font-light dark:text-steel-silver"
            >
              We help organizations operationalize AI responsibly, transforming data into decisions, automating critical processes,
              and enhancing efficiency across the enterprise — with full governance and compliance alignment.
            </motion.p>
          </div>

          <div className="relative w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px]"
            >
              {/* Central Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      '0 0 50px rgba(225,29,72,0.2)',
                      '0 0 100px rgba(225,29,72,0.4)',
                      '0 0 50px rgba(225,29,72,0.2)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-samurai-red flex items-center justify-center relative z-20"
                >
                  <Brain className="w-16 h-16 md:w-24 md:h-24 text-white" strokeWidth={1} />
                </motion.div>
              </div>

              {/* Orbiting Nodes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ transform: `rotate(${i * 60}deg)` }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-edge rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                  />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-linear-to-b from-cyan-edge/30 to-transparent" />
                </motion.div>
              ))}

              {/* Outer Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-samurai-red/20 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-cyan-edge/10 animate-reverse-spin-slow" />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {aiCapabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[2.5rem] group transition-all duration-500 hover:bg-samurai-red/10 border-white/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-samurai-red/10 flex items-center justify-center mb-8 group-hover:bg-samurai-red group-hover:text-white transition-all duration-700">
                <cap.icon className="w-8 h-8 text-samurai-red group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-samurai-red transition-colors">{cap.title}</h3>
              <p className="text-base opacity-60 leading-relaxed font-light group-hover:opacity-100 transition-opacity">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section Decorative Asset */}
        <div className="absolute top-1/2 right-0 w-1/2 h-full -z-10 opacity-10 pointer-events-none">
          <img
            src="/src/assets/images/ai_visual_abstract_1779022719546.png"
            alt="AI Visual"
            className="w-full h-full object-contain filter invert dark:invert-0"
          />
        </div>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 60s linear infinite;
        }
        .animate-reverse-spin-slow {
          animation: spin 45s linear infinite reverse;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
