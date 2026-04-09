"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import rafsanImage from "@/components/images/rafsanheadshot.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="mb-4">
              <h2 className="text-sm tracking-widest text-brand-silver uppercase mb-4 font-mono">Captain&apos;s Log</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl tracking-tighter">
                I design with intent. <br className="hidden md:block"/> Visuals are not decoration, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-silver to-gray-500 drop-shadow-[0_0_15px_rgba(230,236,245,0.3)]">but decisions.</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light max-w-2xl border-l border-white/10 pl-6">
              <p className="text-white font-medium text-xl">
                I’m Rafsan Rohan, a visual strategist focused on turning complex ideas into clear, high-impact systems.
              </p>
              <p>
                My work connects design with strategy to help brands communicate better, scale consistently, and perform across platforms. My approach is simple: combine structure, storytelling, and system thinking to create visuals that are not only compelling, but purposeful.
              </p>
            </div>
          </motion.div>

          {/* Fluid Portrait Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center group"
          >
            {/* Ambient Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-silver/10 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-brand-silver/20 group-hover:scale-110"></div>
            
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-10 border border-white/5 bg-black">
              <Image 
                src={rafsanImage}
                alt="Rafsan Rohan"
                fill
                className="object-cover object-top filter grayscale-[30%] contrast-110 brightness-90 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 500px"
                placeholder="blur"
                loading="lazy"
              />
              
              {/* Dynamic Gradients for seamless blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)] pointer-events-none z-10"></div>
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(255,255,255,0.05)] rounded-[2rem] pointer-events-none z-20"></div>
            </div>
            
            {/* Subtle floating accent element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-white/5 backdrop-blur-md bg-white/[0.02] flex items-center justify-center -z-10 shadow-[0_0_30px_rgba(0,0,0,0.3)] hidden md:flex"
            >
              <div className="w-2 h-2 rounded-full bg-brand-silver shadow-[0_0_10px_rgba(230,236,245,0.8)]"></div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
