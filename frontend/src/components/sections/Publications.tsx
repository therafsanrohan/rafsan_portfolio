"use client";

import { motion } from "framer-motion";
import { BookOpenText, Library, FileText } from "lucide-react";

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6 md:px-12 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-sm tracking-widest text-brand-silver uppercase mb-2 font-medium">Thoughts & Writing</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
            Publications.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Designing Brand Stories That Work */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 border border-white/10 bg-gradient-to-b from-gray-900/80 to-black hover:border-brand-silver/40 rounded-[2rem] transition-all duration-500 group relative flex flex-col items-start h-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="w-full mb-8">
              <span className="text-[10px] text-brand-silver uppercase tracking-widest border border-brand-silver/30 bg-brand-silver/10 px-3 py-1 rounded-full font-mono">Live on Amazon</span>
            </div>
            
            {/* Meaningful 3D-Type Isometric Glass Icon */}
            <div className="relative w-16 h-16 mb-8 transform transition-transform duration-700 group-hover:-translate-y-3 z-10 perspective-[1000px]">
              <div className="absolute inset-0 bg-brand-silver/20 rounded-2xl blur-xl group-hover:bg-brand-silver/40 transition-colors duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-white/20 shadow-[inset_0_0_20px_rgba(230,236,245,0.05)_0_10px_20px_rgba(0,0,0,0.5)] rounded-2xl flex items-center justify-center transform preserve-3d rotate-x-[15deg] rotate-y-[-15deg] group-hover:rotate-x-0 group-hover:rotate-y-0 transition-transform duration-700 backdrop-blur-xl">
                <BookOpenText className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] filter transition-all duration-500 scale-100 group-hover:scale-110" size={32} />
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4 leading-tight">Designing Brand Stories That Work</h4>
            <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow text-sm">
              From concept to execution, visual communication must do more than look good, it must work. Designing Brand Stories That Work shows creative professionals how to think, design, and lead campaigns that connect strategy with measurable impact.
            </p>
            <a 
              href="https://a.co/d/0aBfVeuW" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto inline-block px-6 py-3 border border-brand-silver/50 text-white text-sm font-medium rounded-full hover:bg-brand-silver hover:text-black transition-all duration-300 w-full text-center group-hover:shadow-[0_0_20px_rgba(230,236,245,0.4)]"
            >
              View on Amazon
            </a>
          </motion.div>

          {/* Two Novels */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 border border-white/10 bg-gradient-to-b from-gray-900/80 to-black hover:border-brand-silver/40 rounded-[2rem] transition-all duration-500 group relative flex flex-col items-start h-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="w-full mb-8">
              <span className="text-[10px] text-brand-silver uppercase tracking-widest border border-white/10 bg-white/5 px-3 py-1 rounded-full font-mono">Ekushey Book Fair Publications</span>
            </div>
            
            {/* Meaningful 3D-Type Isometric Glass Icon */}
            <div className="relative w-16 h-16 mb-8 transform transition-transform duration-700 group-hover:-translate-y-3 z-10 perspective-[1000px]">
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl group-hover:bg-white/20 transition-colors duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)_0_10px_20px_rgba(0,0,0,0.5)] rounded-2xl flex items-center justify-center transform preserve-3d rotate-x-[15deg] rotate-y-[-15deg] group-hover:rotate-x-0 group-hover:rotate-y-0 transition-transform duration-700 backdrop-blur-xl">
                <Library className="text-gray-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] filter transition-all duration-500 scale-100 group-hover:scale-110 group-hover:text-white" size={32} />
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4 leading-tight">Two Novels</h4>
            <div className="space-y-4 mb-8 flex-grow w-full">
              <div className="border-l-2 border-white/10 pl-4 py-1">
                <p className="text-white font-medium text-sm mb-1">Ami Paina Chute Tomay</p>
                <p className="text-gray-400 font-light text-xs">A short story novel focused on social awareness, published at the Ekushey Book Fair 2023 by Darikoma.</p>
              </div>
              <div className="border-l-2 border-white/10 pl-4 py-1">
                <p className="text-white font-medium text-sm mb-1">Niruddesh</p>
                <p className="text-gray-400 font-light text-xs">A thriller novel focused on social awareness, published at the Ekushey Book Fair 2022 by Durbiin.</p>
              </div>
            </div>
            <a 
              href="https://www.rokomari.com/book/author/84430/rafsan-rohan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto inline-block px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 w-full text-center group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              View on Rokomari
            </a>
          </motion.div>

          {/* Weekly Columnist */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 border border-white/10 bg-gradient-to-b from-gray-900/80 to-black hover:border-brand-silver/40 rounded-[2rem] transition-all duration-500 group relative flex flex-col items-start h-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="w-full mb-8">
              <span className="text-[10px] text-brand-silver uppercase tracking-widest border border-white/10 bg-white/5 px-3 py-1 rounded-full font-mono">The Daily Samakal</span>
            </div>
            
            {/* Meaningful 3D-Type Isometric Glass Icon */}
            <div className="relative w-16 h-16 mb-8 transform transition-transform duration-700 group-hover:-translate-y-3 z-10 perspective-[1000px]">
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl group-hover:bg-brand-silver/30 transition-colors duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)_0_10px_20px_rgba(0,0,0,0.5)] rounded-2xl flex items-center justify-center transform preserve-3d rotate-x-[15deg] rotate-y-[-15deg] group-hover:rotate-x-0 group-hover:rotate-y-0 transition-transform duration-700 backdrop-blur-xl">
                <FileText className="text-gray-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] filter transition-all duration-500 scale-100 group-hover:scale-110" size={32} />
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4 leading-tight">Weekly Columnist</h4>
            <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow text-sm">
              I contribute feature stories on innovation and culture, uncovering the hidden rhythm behind people and ideas through clear, engaging narratives.
            </p>
            <div className="mt-auto w-full pt-12">
               <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
