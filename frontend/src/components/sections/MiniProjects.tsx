"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const miniProjects = [
  { title: "NeoBanking UI UI/UX", category: "UI/UX" },
  { title: "Zeta Motion System", category: "Motion" },
  { title: "Aura Brand Identity", category: "Branding" },
  { title: "Nexus Design System", category: "Systems" },
  { title: "Voyage Ad Campaign", category: "Art Direction" },
  { title: "Lumina Typeface", category: "Typography" },
];

export default function MiniProjects() {
  return (
    <section className="py-24 px-6 md:px-12 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Other Experiments & Studies.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {miniProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative h-48 bg-gray-900 overflow-hidden border border-white/5 hover:border-brand-silver/50 transition-colors duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-brand-silver text-xs font-medium uppercase tracking-widest mb-1">{project.category}</p>
                  <h4 className="text-white font-bold flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight size={16} className="text-brand-silver" />
                  </h4>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-black opacity-30 group-hover:scale-105 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
