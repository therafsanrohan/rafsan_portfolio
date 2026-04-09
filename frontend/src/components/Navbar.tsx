"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScrollActive = () => {
      const sections = ["home", "projects", "about", "publications", "contact"];
      let currentSection = "";

      for (const section of sections) {
        const el = document.getElementById(section);
        // Give a 300px offset to trigger slightly before crossing the exact pixel line
        if (el && window.scrollY >= el.offsetTop - 300) {
          currentSection = section;
        }
      }
      setActiveSection(`#${currentSection}`);
    };

    window.addEventListener("scroll", handleScrollActive);
    // Trigger on mount
    handleScrollActive();
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150 && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Publications", href: "#publications" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.nav
          variants={{
            visible: { y: 0, scale: 1 },
            hidden: { y: "-150%", scale: 0.95 },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto mt-6 flex items-center justify-between px-6 py-3 transition-all duration-500 rounded-[2rem] w-full md:w-auto md:min-w-[700px] border ${
            isScrolled ? "bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : "bg-transparent border-transparent"
          }`}
        >
          <Link href="/" className="text-xl font-bold tracking-tight z-50 text-white">
            Rafsan
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href 
                    ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
                    : "text-brand-light-gray hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === "#contact"
                  ? "bg-brand-silver text-black shadow-[0_0_20px_rgba(230,236,245,0.4)]"
                  : "text-black bg-white hover:bg-brand-silver hover:shadow-[0_0_20px_rgba(230,236,245,0.4)]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.nav>
      </div>

      {/* Clean Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={link.href}
                  className="text-3xl font-light text-brand-light-gray hover:text-white transition-colors relative group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
            >
              <Link
                href="#contact"
                className="mt-8 inline-block px-10 py-4 text-xl font-medium text-black bg-brand-silver rounded-full transition-all active:scale-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
