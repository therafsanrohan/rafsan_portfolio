"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import rafsanImage from "@/components/images/rafsanheadshot.jpg";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-transparent relative z-10">
      {/* Deep Space Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={2} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
                priority={true}
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

        {/* Skills Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <div className="w-full mb-4">
            <h4 className="text-brand-silver uppercase tracking-widest text-xs font-mono opacity-60">Core Capabilities</h4>
          </div>
          {[
            "Visuals Storytelling", "Brand Strategy & Positioning", "Concept Development", "Creative Direction",
            "Branding Design", "Campaign Design", "Motion Graphics",
            "Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe After Effects",
            "Client Communication", "Creative Collaboration", "Research & Insight Development",
            "Prompt Engineering", "Creative Automation", "Problem Solving", "System & Performance Thinking",
            "Story Writing"
          ].map((skill, index) => {
            const isEven = index % 2 === 0;
            const isThird = index % 3 === 0;
            return (
              <motion.div
                key={skill}
                animate={{ 
                  y: [0, isEven ? -15 : -10, 0],
                  x: [0, isThird ? 8 : (isEven ? -6 : 6), 0],
                  rotate: [0, isEven ? 3 : -3, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6 + (index % 3) * 2, 
                  delay: index * 0.2, 
                  ease: "easeInOut" 
                }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 backdrop-blur-xl text-[11px] md:text-xs font-mono tracking-wide text-gray-300 hover:text-black hover:bg-brand-silver hover:border-brand-silver transition-all duration-500 shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(230,236,245,0.4)] cursor-default"
              >
                {skill}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
