"use client";
import { NAV_LINKS } from "../constants";
import { cn } from "../lib/utils";
import { motion, useScroll } from "motion/react";
import { Shield } from "lucide-react";
import { useState, useEffect } from "react";
import Magnetic from "./Magnetic";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
        isScrolled ? "py-4" : "py-8",
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-8 py-3",
          isScrolled ? "glass rounded-2xl shadow-2xl mt-0" : "bg-transparent",
        )}
      >
        <Magnetic>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="Samurai Systems Logo"
                width={180}
                height={48}
                className="h-12 w-auto object-contain"
              />

              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-samurai-red blur-lg rounded-full -z-10"
              />
            </div>
            {/* <span className="font-display text-2xl font-bold tracking-tighter dark:text-white">
              SAMURAI<span className="text-samurai-red">SYSTEMS</span>
            </span> */}
          </div>
        </Magnetic>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const id = link.href.replace("#", "");
                const element = document.getElementById(id);
                if (!element) return;

                const offset = 100;
                const target = element.getBoundingClientRect().top + window.scrollY - offset;
                const start = window.scrollY;
                const distance = target - start;
                const duration = 600; // ms — always 600ms regardless of distance
                let startTime: number | null = null;

                const easeInOutCubic = (t: number) =>
                  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

                const step = (timestamp: number) => {
                  if (!startTime) startTime = timestamp;
                  const elapsed = timestamp - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  window.scrollTo(0, start + distance * easeInOutCubic(progress));
                  if (progress < 1) requestAnimationFrame(step);
                };

                requestAnimationFrame(step);
              }}
              className="text-sm font-semibold tracking-wide uppercase opacity-70 hover:opacity-100 hover:text-samurai-red transition-all dark:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <ThemeToggle />
          <Magnetic>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="hidden sm:block btn-primary text-xs uppercase tracking-widest font-bold py-2.5"
            >
              Book a Briefing
            </button>

          </Magnetic>
        </div>
      </div>
    </motion.nav>
  );
}
