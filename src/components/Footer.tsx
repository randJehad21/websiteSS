import { LinkedinIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-24 bg-deep-black text-white border-t border-white/5 transition-colors duration-1000">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">

          {/* Logo + Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/images/logo.png"
                alt="Samurai Systems Logo"
                width={180}
                height={48}
                className="h-12 w-auto object-contain"
              />

              {/* <span className="font-display text-2xl font-bold tracking-tighter uppercase">
                SAMURAI<span className="text-samurai-red">SYSTEMS</span>
              </span> */}
            </div>

            <p className="text-lg opacity-50 font-light leading-relaxed mb-10">
              Samurai Systems — an affiliate of Neusol. We build long-term partnerships that empower organizations to thrive in a fast-evolving digital world.
            </p>

            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-samurai-red px-3 py-1 border border-samurai-red/20 inline-block rounded">
              Affiliate of Neusol
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">

            <div className="space-y-6">
              <div className="text-samurai-red uppercase tracking-[0.2em] text-[10px] font-bold">
                Solutions
              </div>
              <div className="flex flex-col gap-4 text-sm font-medium">
                <a href="#cybersecurity" className="opacity-60 hover:opacity-100 transition-all">
                  Cybersecurity & SOC
                </a>
                <a href="#solutions" className="opacity-60 hover:opacity-100 transition-all">
                  AI Solutions
                </a>
                <a href="#compliance" className="opacity-60 hover:opacity-100 transition-all">
                  GRC & Compliance
                </a>
                <a href="#services" className="opacity-60 hover:opacity-100 transition-all">
                  CloudCore & IT Operations
                </a>
                <a href="#bcm" className="opacity-60 hover:opacity-100 transition-all">
                  BCM & DR
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-samurai-red uppercase tracking-[0.2em] text-[10px] font-bold">
                Company
              </div>
              <div className="flex flex-col gap-4 text-sm font-medium">
                <a href="#about" className="opacity-60 hover:opacity-100 transition-all">
                  Company Overview
                </a>
                <a href="#global-presence" className="opacity-60 hover:opacity-100 transition-all">
                  Global Presence
                </a>
                <a href="" className="opacity-60 hover:opacity-100 transition-all">
                  HQ Riyadh
                </a>
                <a href="#contact" className="opacity-60 hover:opacity-100 transition-all">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <div className="text-samurai-red uppercase tracking-[0.2em] text-[10px] font-bold">
                Contact
              </div>
              <div className="flex flex-col gap-4 text-sm font-medium">
                <a href="mailto:connect@samurai.systems" className="opacity-60 hover:opacity-100 transition-all">
                  connect@samurai.systems
                </a>
                <a href="tel:+966112923918" className="opacity-60 hover:opacity-100 transition-all">
                  +966 11 292 3918
                </a>
                <a href="https://www.samurai.systems" className="opacity-60 hover:opacity-100 transition-all">
                  www.samurai.systems
                </a>
                <a href="https://maps.app.goo.gl/G4Ryzk5TTk88Etfu7" className="opacity-60 hover:opacity-100 transition-all">
                  Riyadh, Saudi Arabia
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-6 col-span-2 sm:col-span-1">
              <div className="text-samurai-red uppercase tracking-[0.2em] text-[10px] font-bold">
                Network
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-samurai-red hover:text-white transition-all border-white/5"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>


              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.25em] font-bold opacity-30">
          <div className="text-center md:text-center">
            © 2026 SAMURAI SYSTEMS. ADVANCED TECHNOLOGY FOR THE KINGDOM.
          </div>
        </div>
      </div>
    </footer>
  );
}