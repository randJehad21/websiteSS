"use client";
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail,Globe } from 'lucide-react';
import Magnetic from '../Magnetic';
import { Global } from 'recharts';

export default function Contact() {
  return (
    <section id="contact" className="py-40 relative bg-soft-white dark:bg-deep-black transition-colors duration-1000">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[4rem] p-10 md:p-24 grid lg:grid-cols-2 gap-24 overflow-hidden relative border-white/10"
        >
          {/* Decorative element */}
          <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-samurai-red/10 blur-[120px] -z-10 rounded-full" />
          
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-samurai-red font-bold tracking-[0.3em] uppercase mb-8 text-sm"
            >
              Contact Us
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-[1.1] dark:text-white">
              Let's Build a <span className="text-samurai-red">Smarter,</span> <br /> Safer Tomorrow.
            </h2>
            
  
            <div className="space-y-12 mt-16">
              <a href="https://maps.app.goo.gl/1a1nEPpRZ25mtvF28" target="_blank" rel="noopener noreferrer" className="flex gap-6 group">
              <div className="flex gap-6 group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-samurai-red/10 flex items-center justify-center shrink-0 group-hover:bg-samurai-red group-hover:text-white transition-all duration-500">
                  <MapPin className="w-7 h-7 text-samurai-red group-hover:text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl mb-1 dark:text-white">Riyadh Headquarters</div>
                  <div className="text-base opacity-50 dark:text-steel-silver font-light">Office 304, Abdar Commercial Complex, <br />Riyadh, Saudi Arabia</div>
                </div>
              </div>
              </a> 
            
              
              <a href="mailto:connect@samurai.systems" className="flex gap-6 group">
              <div className="flex gap-6 group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-samurai-red/10 flex items-center justify-center shrink-0 group-hover:bg-samurai-red group-hover:text-white transition-all duration-500">
                  <Mail className="w-7 h-7 text-samurai-red group-hover:text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl mb-1 dark:text-white">Email Consultation</div>
                  <div className="text-base opacity-50 dark:text-steel-silver font-light">connect@samurai.systems</div>
                </div>
              </div>
              </a>

              <a href="tel:+966112923918" className="flex gap-6 group">
              <div className="flex gap-6 group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-samurai-red/10 flex items-center justify-center shrink-0 group-hover:bg-samurai-red group-hover:text-white transition-all duration-500">
                  <Phone className="w-7 h-7 text-samurai-red group-hover:text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl mb-1 dark:text-white">Global Inquiries</div>
                  <div className="text-base opacity-50 dark:text-steel-silver font-light">+966 11 292 3918</div>
                </div>
              </div>
              </a>

               <a href="https://www.samurai.systems" target="_blank" rel="noopener noreferrer" className="flex gap-6 group">
               <div className="flex gap-6 group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-samurai-red/10 flex items-center justify-center shrink-0 group-hover:bg-samurai-red group-hover:text-white transition-all duration-500">
                  <Globe className="w-7 h-7 text-samurai-red group-hover:text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl mb-1 dark:text-white">Website</div>
                  <div className="text-base opacity-50 dark:text-steel-silver font-light">www.samurai.systems</div>
                </div>
              </div>
              </a>
            </div>
          </div>

          <motion.form 
            className="space-y-8 bg-black/5 dark:bg-white/5 p-10 md:p-12 rounded-[3rem] border border-white/5 relative z-10" 
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 dark:text-white">Full Name</label>
                <input type="text" className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-samurai-red transition-colors text-deep-navy-text dark:text-white" placeholder="Sultan Al-Saud" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 dark:text-white">Organization</label>
                <input type="text" className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-samurai-red transition-colors text-deep-navy-text dark:text-white" placeholder="Enterprise / Agency" />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 dark:text-white">Corporate Email</label>
              <input type="email" className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-samurai-red transition-colors text-deep-navy-text dark:text-white" placeholder="executive@organization.sa" />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 dark:text-white">Service of Interest</label>
              <input type="text" className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-samurai-red transition-colors text-deep-navy-text dark:text-white" placeholder="Cybersecurity, AI, BCM, GRC…" />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 dark:text-white">Brief Inquiry</label>
              <textarea rows={4} className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-samurai-red transition-colors resize-none text-deep-navy-text dark:text-white" placeholder="How can we help strengthen your digital resilience?" />
            </div>

            <Magnetic>
              <button className="w-full btn-primary flex items-center justify-center gap-3 py-5 text-sm uppercase tracking-widest font-bold group">
                Send Briefing Request <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              </button>
            </Magnetic>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
