"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import 3D canvas so it doesn't cause SSR hydration mismatch
const Hero3D = dynamic(() => import("@/components/canvas/Hero3D"), { ssr: false });

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20">
      
      {/* 1. True 3D Elements (Moon & Stars via React Three Fiber) */}
      <Hero3D />

      {/* 3. Lunar Horizon (Foreground Surface) */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden z-0">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-[-150px] md:bottom-[-250px] left-1/2 -translate-x-1/2 w-[150vw] md:w-[120vw] h-[300px] md:h-[400px]"
          style={{ 
            borderRadius: "50% 50% 0 0", 
            boxShadow: "0 -40px 150px rgba(230, 236, 245, 0.05), inset 0 2px 5px rgba(255,255,255,0.02)",
            borderTop: "1px solid rgba(230, 236, 245, 0.1)",
            background: "radial-gradient(ellipse at top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)"
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50px] bg-gradient-to-b from-white/[0.03] to-transparent blur-md"></div>
        </motion.div>
      </div>

      {/* Subtle grid pattern overlay for the strategic/system feel */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_100%)] opacity-[0.03] z-0 pointer-events-none"></div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center text-balance flex flex-col items-center pointer-events-none">
        
        <div className="mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight drop-shadow-2xl flex flex-col items-center gap-2"
          >
            <div className="overflow-hidden">
               <motion.span 
                 initial={{ y: "100%", rotate: 5 }} 
                 animate={{ y: "0%", rotate: 0 }} 
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
                 className="inline-block"
               >
                 Visual Stories
               </motion.span>
            </div>
            
            <div className="overflow-hidden">
               <motion.span 
                 initial={{ y: "100%", rotate: -5 }} 
                 animate={{ y: "0%", rotate: 0 }} 
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} 
                 className="inline-block chrome-text"
               >
                 Impossible to Ignore
               </motion.span>
            </div>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.0 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light drop-shadow-md tracking-wide"
        >
          Creative strategist bridging complex logic with stunning design.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center pointer-events-auto"
        >
          <Link 
            href="#projects" 
            className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto bg-white text-black font-medium rounded-full hover:bg-brand-silver transition-all duration-300 subtle-glow backdrop-blur-sm"
          >
            Explore Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="#contact" 
            className="px-8 py-4 w-full sm:w-auto flex justify-center bg-black/40 text-white font-medium rounded-full border border-gray-600 hover:border-brand-silver hover:text-brand-silver transition-all duration-300 backdrop-blur-md"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
