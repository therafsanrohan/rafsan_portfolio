"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();
  
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Only track scroll if on the main page
    if (pathname !== "/") return;

    const handleScrollActive = () => {
      const sections = ["home", "projects", "about", "publications", "contact"];
      let currentSection = "";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 300) {
          currentSection = section;
        }
      }
      setActiveSection(`#${currentSection}`);
    };

    window.addEventListener("scroll", handleScrollActive);
    handleScrollActive();
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname !== "/") {
      router.push("/");
      // Add smart 500ms delay to allow DOM mapping across router transition
      setTimeout(() => {
        const el = document.getElementById(target.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500); 
    } else {
      const el = document.getElementById(target.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <Link href="/" className="text-xl font-bold tracking-tight z-50 text-white pl-4 md:pl-6">
            Rafsan
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={pathname === "/" ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium cursor-pointer transition-all duration-300 ${
                  activeSection === link.href && pathname === "/"
                    ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
                    : "text-brand-light-gray hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={pathname === "/" ? "#contact" : "/#contact"}
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`px-6 py-2 text-sm font-medium cursor-pointer rounded-full transition-all duration-300 ${
                activeSection === "#contact" && pathname === "/"
                  ? "bg-brand-silver text-black shadow-[0_0_20px_rgba(230,236,245,0.4)]"
                  : "text-black bg-white hover:bg-brand-silver hover:shadow-[0_0_20px_rgba(230,236,245,0.4)]"
              }`}
            >
              Contact
            </a>
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
                <a
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  className={`text-3xl font-light cursor-pointer transition-all duration-300 relative group tracking-wider ${
                    activeSection === link.href && pathname === "/"
                      ? "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                      : "text-brand-light-gray hover:text-white"
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </motion.div>
            ))}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
            >
              <a
                href={pathname === "/" ? "#contact" : "/#contact"}
                className="mt-8 inline-block cursor-pointer px-10 py-4 text-xl font-medium text-black bg-brand-silver rounded-full transition-all active:scale-95"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Contact
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
