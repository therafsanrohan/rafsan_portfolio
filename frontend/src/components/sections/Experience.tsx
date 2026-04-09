"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const experiences = [
  {
    company: "Shenron Communications",
    role: "Creative Designer",
    period: "Nov 2025 — Jan 2026",
    impact: "Shaping brand systems through structured, campaign-driven visuals."
  },
  {
    company: "Innoverse Digital",
    role: "Visualizer",
    period: "Aug 2025 - Oct 2025",
    impact: "Designing intuitive visual experiences that connect users with digital products."
  },
  {
    company: "Jarvis",
    role: "Visualizer",
    period: "Jun 2024 — Aug 2025",
    impact: "Building scalable visual systems for high-impact brand communication."
  },
  {
    company: "OMNI CONNECTS",
    role: "Creative Designer",
    period: "Dec 2022 — July 2024",
    impact: "Developing global-facing brand visuals with clarity and consistency."
  },
  {
    company: "Hotel Chain",
    role: "Creative Designer",
    period: "Dec 2020 — Aug 2022",
    impact: "Driving growth through performance-focused visual communication."
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 px-6 md:px-12 bg-transparent relative z-10 overflow-hidden" ref={containerRef}>
      {/* 10% Opacity Dynamic Star Field exclusive to the Timeline */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={2} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 text-center"
        >
          <h2 className="text-sm tracking-widest text-brand-silver uppercase mb-4 font-mono">Trajectory</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Career Timeline.
          </h3>
        </motion.div>

        <div className="relative max-w-5xl mx-auto mt-12">
          {/* Central Line Background */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
          {/* Animated Glowing Progress Line */}
          <motion.div 
            className="absolute left-[30px] md:left-1/2 top-0 w-[3px] bg-gradient-to-b from-brand-silver via-brand-light-gray to-transparent -translate-x-1/2 shadow-[0_0_20px_rgba(230,236,245,0.5)] z-10 rounded-full"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Glowing Node Connector */}
                  <div className="absolute left-[30px] md:left-1/2 top-10 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-brand-light-gray z-20 shadow-[0_0_15px_rgba(230,236,245,1)]">
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-brand-silver mix-blend-screen"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Card Content */}
                  <div className={`w-full pl-[70px] pr-6 md:pl-0 md:pr-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:border-brand-silver/30 hover:bg-white/[0.02] transition-colors duration-500 group shadow-[0_4px_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                      <div className="absolute -inset-x-0 -bottom-0 h-1/2 bg-gradient-to-t from-brand-silver/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
                      
                      <div className="relative z-10 flex flex-col items-start md:items-stretch">
                        <span className="text-brand-silver font-mono text-[10px] md:text-xs tracking-widest uppercase mb-3 px-3 py-1 border border-white/10 rounded-full bg-white/5 inline-block w-max self-start md:self-auto ${isEven ? 'md:self-end' : ''}">{exp.period}</span>
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-brand-light-gray transition-colors">{exp.company}</h4>
                        <p className="text-brand-silver/90 font-medium text-sm mb-4 block">{exp.role}</p>
                        <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                          {exp.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
