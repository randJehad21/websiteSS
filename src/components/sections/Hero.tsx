"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Magnetic from "@/components/Magnetic";
const stats = [
  { label: 'Founded', value: 2010 },
  { label: 'Years of Expertise', value: 15, suffix: '+' },
  { label: 'Countries / Global Presence', value: 5, suffix: '' },
  { label: 'Organizations Served', value: 2800, suffix: '+' },
];

const rotatingPhrases = [
  'Cybersecurity',
  'AI Solutions',
  'Digital Transformation',
  'GRC & Compliance',
];

import dynamic from "next/dynamic";

const Hyperspeed = dynamic(
  () => import("../Hyperspeed"),
  {
    ssr: false,
  }
);

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-deep-black select-none"
    >
      {/* ─── BACKGROUND STACK ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Layer 1 — Hyperspeed driving animation */}
        <div className="absolute inset-0 opacity-60">
          <Hyperspeed
            effectOptions={{
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [12, 80],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          />
        </div>

        {/* Layer 2 — Subtle grid lines (parallax) */}
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"
        />

        {/* Layer 3 — Red radial glow at center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(225,29,72,0.1),transparent_70%)] pointer-events-none" />

        {/* Layer 4 — Bottom fade to deep black */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/20 via-deep-black/60 to-deep-black pointer-events-none" />

      </div>
      {/* ─── END BACKGROUND STACK ─── */}


      {/* ─── CONTENT ─── */}
      <div className="container relative z-10 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div style={{ opacity: opacityText }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass mb-12 border-white/5"
          >
            <span className="w-2 h-2 rounded-full bg-samurai-red shadow-[0_0_10px_rgba(225,29,72,1)] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-steel-silver">
              Affiliate of Neusol · Riyadh, Saudi Arabia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 max-w-5xl leading-[1.1] text-white"
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Your Trusted Partner in <br />
            <span className="text-samurai-red italic font-light">
              Digital Resilience & Innovation.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-steel-silver/60 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            Empowering enterprises to thrive in an ever-evolving digital landscape through
            comprehensive cybersecurity, IT excellence, and transformative technology solutions.
          </motion.p>

        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 mb-24 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Magnetic>
            <button
              className="btn-primary flex items-center justify-center gap-3 px-10 py-5 group"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Book a Briefing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </Magnetic>
          <Magnetic>
            <button className="btn-secondary px-10 py-5 border-white/20 text-white hover:bg-white/5 backdrop-blur-md uppercase tracking-widest text-xs font-bold" onClick={() =>
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              >
              Explore Solutions
            </button>
          </Magnetic>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-5xl border-t border-white/5 pt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i + 0.8 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-white group-hover:text-samurai-red transition-colors duration-500">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-steel-silver font-bold opacity-60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* ─── END CONTENT ─── */}


      {/* ─── AMBIENT FLOATING BLOBS ─── */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-samurai-red/5 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-cyan-edge/5 rounded-full blur-[120px] pointer-events-none"
      />

      {/* ─── SCROLL INDICATOR ─── */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 text-white">
          Explore
        </span>
        <div className="w-px h-8 bg-samurai-red/30" />
      </motion.div>
    </section>
  );
}