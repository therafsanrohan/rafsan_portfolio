import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaBehance, FaDribbble, FaPinterestP, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative mt-32 pt-32 pb-12 px-6 md:px-12 overflow-hidden bg-transparent border-t border-white/5">
      {/* Subtle top glow to softly blend into the bottom of the starry void */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-silver/30 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[100px] bg-brand-silver/5 blur-[50px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center md:flex-row justify-between md:items-center">
        <div className="mb-12 md:mb-0 text-center md:text-left">
          <Link href="#home" className="text-3xl font-bold tracking-tight text-white drop-shadow-md">
            Rafsan
          </Link>
          <p className="text-sm text-gray-400 mt-2 max-w-sm font-light">
            Visual Stories. Impossible to Ignore.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          <p className="text-xs text-gray-500 font-light mb-4 text-center md:text-right w-full">Stay in Orbit</p>
          <div className="grid grid-cols-3 gap-4 max-w-[200px]">
            <a href="https://www.linkedin.com/in/therafsanrohan/" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-silver/5 border border-white/10 rounded-full text-brand-silver hover:bg-brand-silver hover:text-black hover:border-brand-silver transition-all duration-300 drop-shadow-md">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://www.behance.net/therafsanrohan" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-silver/5 border border-white/10 rounded-full text-brand-silver hover:bg-brand-silver hover:text-black hover:border-brand-silver transition-all duration-300 drop-shadow-md">
              <FaBehance size={18} />
            </a>
            <a href="https://dribbble.com/therafsanrohan" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-silver/5 border border-white/10 rounded-full text-brand-silver hover:bg-brand-silver hover:text-black hover:border-brand-silver transition-all duration-300 drop-shadow-md">
              <FaDribbble size={18} />
            </a>
            <a href="https://www.pinterest.com/therafsanrohan/" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-silver/5 border border-white/10 rounded-full text-brand-silver hover:bg-brand-silver hover:text-black hover:border-brand-silver transition-all duration-300 drop-shadow-md">
              <FaPinterestP size={18} />
            </a>
            <a href="https://x.com/therafsanrohan" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-silver/5 border border-white/10 rounded-full text-brand-silver hover:bg-brand-silver hover:text-black hover:border-brand-silver transition-all duration-300 drop-shadow-md">
              <FaXTwitter size={18} />
            </a>
            <a href="https://www.instagram.com/therafsanrohan/" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-silver/5 border border-white/10 rounded-full text-brand-silver hover:bg-brand-silver hover:text-black hover:border-brand-silver transition-all duration-300 drop-shadow-md">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-mono tracking-widest uppercase gap-4 md:gap-0">
        <p className="text-center md:text-left leading-relaxed w-full md:w-auto">&copy; {new Date().getFullYear()} Rafsan Rohan <span className="mx-2 text-brand-silver hidden md:inline-flex">|</span><br className="block md:hidden" /> Development by Creatiancy</p>
        <div className="flex space-x-6">
          <Link href="/legal" className="hover:text-brand-silver transition-colors">Orbit Protocol</Link>
        </div>
      </div>
    </footer>
  );
}
