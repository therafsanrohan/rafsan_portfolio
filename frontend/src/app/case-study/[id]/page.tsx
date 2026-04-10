"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useParams } from "next/navigation";

// Mock data (in a real app, this would be fetched from the backend or a CMS)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const projectDetails: Record<string, any> = {
  "project-1": {
    title: "Fintech Rebranding",
    category: "Branding & UI/UX",
    timeline: "3 Months",
    role: "Visual Strategist",
    heroColor: "from-blue-900/40 to-black",
    sections: {
      problem: "The legacy financial institution was perceived as outdated, complex, and unapproachable by younger demographics. The existing visual system lacked consistency across digital touchpoints, leading to fragmented user experiences.",
      strategy: "We positioned the brand as a confident, modern, and transparent partner in financial growth. The approach was to strip away unnecessary complexity and focus on radical clarity, utilizing a system-driven design methodology.",
      visual: "The new visual system uses a deep midnight blue paired with vibrant teal accents. Typography was updated to a highly legible geometric sans-serif. We introduced a modular grid system that scales seamlessly from mobile apps to large-format outdoor advertising.",
      application: "The system was applied across a new responsive website, mobile banking application, physical card designs, and corporate collateral. Motion principles were defined to make interactions feel deliberate and smooth.",
      outcome: "Post-launch, user trust metrics increased by 40%, and the new mobile app saw a 65% increase in daily active users. The brand successfully penetrated the millennial and Gen Z markets while retaining its core enterprise clients."
    }
  },
  "project-2": {
    title: "Global E-Commerce System",
    category: "Design Systems",
    timeline: "6 Months",
    role: "Lead Designer",
    heroColor: "from-purple-900/40 to-black",
    sections: {
      problem: "A global e-commerce entity operating 15+ sub-brands was suffering from design inconsistency, leading to massive engineering overhead and poor cross-selling conversion rates.",
      strategy: "Creating a unified design language that allowed for brand expression while maintaining structural consistency. We prioritized a component-first architecture, treating design tokens as the single source of truth.",
      visual: "We developed a master token architecture. Typography, spacing, and core UI components were standardized. The visual layer enabled theming through simple configuration, allowing sub-brands to maintain their unique DNA (colors, typography nuances, imagery styles).",
      application: "We delivered a comprehensive UI kit, extensive documentation, and partnered with engineering to build the React component library. This included complex product grids, checkout flows, and user dashboards.",
      outcome: "Design to development handoff time was reduced by 70%. Cross-brand technical debt was drastically lowered, and the unified experience led to a 15% increase in multi-brand cart conversions."
    }
  },
  "project-3": {
    title: "SaaS Dashboard Architecture",
    category: "Product Design",
    timeline: "4 Months",
    role: "Product Designer",
    heroColor: "from-emerald-900/40 to-black",
    sections: {
      problem: "A complex analytics platform had become overwhelmingly data-dense. Users struggled to find actionable insights, leading to long onboarding times and high churn rates among non-technical users.",
      strategy: "Transforming the dashboard from a purely analytical tool into a narrative-first interface. We focused on progressive disclosure, showing users high-level insights first and allowing them to drill down into the data when needed.",
      visual: "The UI was stripped back to absolute minimal framing. We utilized a dark mode specifically designed to reduce eye strain for power users, with data visualization employing a high-contrast, accessible color palette.",
      application: "The core dashboard, reporting interfaces, and user customization flows were completely redesigned. We introduced micro-interactions that guided the user's eye to critical state changes without being distracting.",
      outcome: "User onboarding time was cut in half. The platform saw a 30% increase in weekly active usage, and customer support tickets related to finding specific features decreased by 50%."
    }
  }
};

export default function CaseStudyPage() {
  const params = useParams();
  const id = params?.id as string;
  const project = projectDetails[id] || projectDetails["project-1"]; // Fallback for demo

  return (
    <div className="bg-brand-black min-h-screen text-white pt-24 pb-32 selection:bg-brand-silver selection:text-black">
      {/* Hero */}
      <div className={`w-full h-[60vh] bg-gradient-to-b ${project.heroColor} relative border-b border-white/10`}>
        <div className="absolute top-8 left-6 md:left-12 z-10">
          <Link href="/#projects" className="flex items-center gap-2 text-brand-silver hover:text-white transition-colors group text-sm font-medium">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>
        
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-brand-black opacity-80"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-silver text-sm tracking-widest uppercase mb-4">{project.category}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-4xl">{project.title}</h1>
            
            <div className="flex flex-wrap gap-8 text-sm font-light text-gray-400">
              <div>
                <p className="text-gray-500 uppercase tracking-widest text-xs mb-1">Role</p>
                <p className="text-white">{project.role}</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase tracking-widest text-xs mb-1">Timeline</p>
                <p className="text-white">{project.timeline}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-24 space-y-32">
        {/* Problem & Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold sticky top-32">Problem / Context</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-300 text-lg leading-relaxed font-light">{project.sections.problem}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold sticky top-32">Strategy / Approach</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-300 text-lg leading-relaxed font-light">{project.sections.strategy}</p>
          </div>
        </div>

        {/* Visual Mockup 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-video bg-gray-900 border border-white/5 rounded-2xl relative overflow-hidden group"
        >
          <div className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] bg-[url('/grid.svg')] bg-center opacity-10 blur-sm group-hover:blur-0 transition-all duration-700"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500 text-sm tracking-widest uppercase">System Architecture Visual</p>
          </div>
        </motion.div>

        {/* Visual System & Application */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold sticky top-32">Visual System</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-300 text-lg leading-relaxed font-light">{project.sections.visual}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold sticky top-32">Application</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-300 text-lg leading-relaxed font-light">{project.sections.application}</p>
          </div>
        </div>

        {/* Visual Mockup 2 (Grid)*/}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="aspect-square bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-black to-gray-800 opacity-50"></div>
            <p className="text-gray-500 text-sm tracking-widest uppercase z-10 text-center px-4">Typography & Grids</p>
          </div>
          <div className="aspect-square bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-bl from-brand-black to-gray-800 opacity-50"></div>
            <p className="text-gray-500 text-sm tracking-widest uppercase z-10 text-center px-4">UI Components</p>
          </div>
        </motion.div>

        {/* Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold sticky top-32 text-brand-silver">Outcome / Impact</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-white text-xl leading-relaxed font-normal">{project.sections.outcome}</p>
          </div>
        </div>

        {/* Next Project CTA */}
        <div className="pt-32 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Up Next</p>
          <Link href="/#projects" className="text-3xl md:text-5xl font-bold text-white hover:chrome-text transition-all duration-300 flex items-center justify-center gap-4 group">
            View More Work
            <ArrowUpRight size={40} className="text-brand-silver group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
