"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Loader2, CheckCircle2 } from "lucide-react";
import dynamic from "next/dynamic";

const Contact3D = dynamic(() => import("@/components/canvas/Contact3D"), { ssr: false });

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/contact";
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!res.ok) throw new Error("Failed to send message");
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Backend transmission failed:", error);
      setStatus("error");
      setErrorMessage("System offline. Please use direct contact overrides.");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-transparent border-t border-white/5 relative overflow-hidden">
      {/* 3D Floating Elements and glow */}
      <Contact3D />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-silver/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-8 tracking-tight leading-tight drop-shadow-lg"
          >
            Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-silver to-white drop-shadow-[0_0_15px_rgba(230,236,245,0.5)]">clear, strong,</span> and impactful.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg font-light mb-12 max-w-lg leading-relaxed"
          >
            Whether you&apos;re fundamentally rethinking your brand strategy or looking to elevate your visual system, I&apos;m here to help you communicate with clarity.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <a href="mailto:knock.rafsan@gmail.com" className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors group w-max">
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-silver group-hover:shadow-[0_0_20px_rgba(230,236,245,0.3)] transition-all duration-300 bg-white/5 backdrop-blur-sm">
                <Mail size={20} />
              </div>
              <span className="text-lg font-light tracking-wide">knock.rafsan@gmail.com</span>
            </a>
            
            <a href="https://wa.me/8801581479195" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors group w-max">
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-silver group-hover:shadow-[0_0_20px_rgba(230,236,245,0.3)] transition-all duration-300 bg-white/5 backdrop-blur-sm">
                <Phone size={20} />
              </div>
              <span className="text-lg font-light tracking-wide">+880 1581 479 195 (WhatsApp)</span>
            </a>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button 
                type="button"
                onClick={() => {
                   const el = document.getElementById('qr-block');
                   if(el) {
                      const isOpening = el.style.display === 'none';
                      el.style.display = isOpening ? 'block' : 'none';
                      // Trigger reflow
                      void el.offsetWidth;
                      el.style.opacity = isOpening ? '1' : '0';
                      el.style.transform = isOpening ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)';
                      
                      if (isOpening) {
                          // Unique auto close animation 
                          setTimeout(() => {
                             const activeEl = document.getElementById('qr-block');
                             if(activeEl && activeEl.style.opacity === '1') {
                                activeEl.style.opacity = '0';
                                activeEl.style.transform = 'translateY(20px) scale(0.9) rotateX(15deg)';
                                setTimeout(() => { activeEl.style.display = 'none'; }, 600);
                             }
                          }, 15000);
                      }
                   }
                }}
                className="px-6 py-3 bg-brand-silver/5 border border-white/10 rounded-full hover:bg-brand-silver hover:text-black hover:border-brand-silver transition-all duration-500 flex items-center justify-center gap-3 w-max text-sm text-gray-300 hover:shadow-[0_0_20px_rgba(230,236,245,0.3)] outline-none group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-pulse"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                <span>Connect by QR Code</span>
              </button>

              <a 
                href={`data:text/vcard;charset=utf-8,${encodeURIComponent("BEGIN:VCARD\nVERSION:3.0\nN:Rohan;Rafsan;;;\nFN:Rafsan Rohan\nTITLE:Visual Strategist\nTEL;TYPE=CELL:+8801581479195\nEMAIL:knock.rafsan@gmail.com\nURL:https://rafsanrohan.com\nEND:VCARD")}`} 
                download="Rafsan_Rohan.vcf" 
                className="px-6 py-3 bg-gradient-to-r from-brand-silver/5 to-transparent border border-white/20 rounded-full hover:bg-brand-silver hover:border-brand-silver text-gray-300 hover:text-black transition-all duration-500 flex items-center justify-center gap-2 w-max text-sm outline-none font-mono uppercase tracking-widest text-[10px] group/save shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(230,236,245,0.4)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/save:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/save:animate-bounce"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Import Core Profile
                </span>
              </a>
            </div>

            <div id="qr-block" style={{display: 'none', opacity: 0, transform: 'translateY(-10px) scale(0.95)', transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'}} className="mt-2 p-6 bg-black/40 rounded-3xl border border-white/10 backdrop-blur-md w-max shadow-2xl relative overflow-hidden group/qr">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-silver/10 to-transparent opacity-0 group-hover/qr:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="relative z-10 p-2 bg-white rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent("BEGIN:VCARD\nVERSION:3.0\nN:Rohan;Rafsan;;;\nFN:Rafsan Rohan\nTITLE:Visual Strategist\nTEL;TYPE=CELL:+8801581479195\nEMAIL:knock.rafsan@gmail.com\nURL:https://rafsanrohan.com\nEND:VCARD")}&bgcolor=ffffff&color=000000&margin=0`} 
                    alt="Rafsan V-Card" 
                    className="w-[160px] h-[160px]"
                  />
                </div>
                
                <div className="flex flex-col gap-2 mt-5">
                   <p className="text-[9px] uppercase tracking-widest text-center text-gray-500 font-mono">Scan to Import</p>
                </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative block md:col-start-2"
        >
          {/* Form Backdrop Glow */}
          <div className="absolute -inset-4 bg-brand-silver/5 blur-[50px] rounded-full pointer-events-none z-0"></div>
          
          <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-2xl p-10 rounded-[2rem] border border-white/10 space-y-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative z-10 group hover:border-brand-silver/30 transition-colors duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-silver/5 to-transparent rounded-[2rem] pointer-events-none"></div>
            
            <div className="relative z-10">
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-silver focus:ring-1 focus:ring-brand-silver/50 transition-all duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
                placeholder="John Doe"
              />
            </div>
            
            <div className="relative z-10">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-silver focus:ring-1 focus:ring-brand-silver/50 transition-all duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
                placeholder="john@example.com"
              />
            </div>

            <div className="relative z-10">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-silver focus:ring-1 focus:ring-brand-silver/50 transition-all duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {status === "error" && <p className="text-red-400 text-sm relative z-10">{errorMessage}</p>}
            {status === "success" && (
              <p className="text-brand-silver text-sm flex items-center gap-2 relative z-10">
                <CheckCircle2 size={16} />
                Transmission received! I&apos;ll be in orbit soon.
              </p>
            )}

            <button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              className="w-full relative z-10 flex items-center justify-center gap-3 px-8 py-5 bg-transparent border border-white/20 text-white font-medium rounded-2xl hover:bg-brand-silver hover:border-brand-silver hover:text-black hover:shadow-[0_0_30px_rgba(230,236,245,0.4)] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group/btn overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : "Initiate Contact"}
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
