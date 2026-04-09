"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "project-1",
    title: "Fintech Rebranding",
    description: "Redefined a legacy financial institution into a modern, accessible digital brand. Increased user trust metrics by 40%.",
    color: "from-blue-900/20 to-black"
  },
  {
    id: "project-2",
    title: "Global E-Commerce System",
    description: "Designed a comprehensive design system for a global marketplace, scaling across 15+ sub-brands while maintaining visual integrity.",
    color: "from-purple-900/20 to-black"
  },
  {
    id: "project-3",
    title: "SaaS Dashboard Architecture",
    description: "Restructured a complex analytics platform into an intuitive narrative flow. Reduced user onboarding time by half.",
    color: "from-emerald-900/20 to-black"
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-sm tracking-widest text-brand-silver uppercase mb-2 font-medium">Selected Work</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">
              Featured Projects.
            </h3>
          </div>
          <Link href="/projects" className="text-sm font-medium text-brand-silver hover:text-white transition-colors flex items-center gap-1 group">
            View All Work <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/case-study/${project.id}`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative cursor-pointer block"
              >
                <div className={`w-full h-[400px] md:h-[500px] rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br ${project.color} relative`}>
                  {/* Mockup Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                    <div className="w-3/4 h-3/4 bg-black/50 border border-white/5 shadow-2xl rounded-xl backdrop-blur-sm flex flex-col">
                      <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2">
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      </div>
                      <div className="flex-1 p-8">
                        <div className="w-1/3 h-4 bg-white/10 rounded mb-4"></div>
                        <div className="w-full h-32 bg-white/5 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                <div className="absolute bottom-0 left-0 p-8 w-full md:w-2/3">
                  <div className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10 group-hover:border-brand-silver/50 transition-colors duration-500">
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-silver transition-colors">{project.title}</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
