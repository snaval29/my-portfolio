"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Music2, Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home"); // ⬅️ NEW: Tracks active section

  const links = [
    { name: "Home", href: "/" }, // Maps to top of page
    { name: "About me", href: "#about" },
    { name: "My Work", href: "#work" },
    { name: "Contact me", href: "#contact" },
  ];

  // ⬅️ NEW: Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => {
        if (link.href === "/") return null; // Skip Home for ID lookup
        const id = link.href.replace("#", "");
        return document.getElementById(id);
      });

      const scrollPosition = window.scrollY + 150; // Offset for better triggering

      // Check if we are at the top (Home)
      if (scrollPosition < 400) {
        setActiveSection("Home");
        return;
      }

      // Check other sections
      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            // Find the link name associated with this section ID
            const activeLink = links.find(link => link.href === `#${section.id}`);
            if (activeLink) setActiveSection(activeLink.name);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };
  
  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 backdrop-blur-xl bg-neutral-950/20"
    >
      <div className="flex items-center justify-between w-full">
        
        {/* 1. Logo */}
        <div className="flex items-center gap-2 text-lg font-bold tracking-tighter text-white z-20">
            <Music2 className="h-5 w-5 text-amber-400" />
            <span>Naval.wav</span>
        </div>

        {/* 2. DESKTOP CENTERED PILL (With Active State) */}
        <div className="hidden md:flex items-center rounded-full border border-white/10 px-6 py-2 shadow-lg backdrop-blur-md absolute left-1/2 -translate-x-1/2">
          {links.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                // ⬅️ NEW: Conditional Styling for Active State
                className={`text-sm font-medium transition-all duration-300 mx-2 px-3 py-1 rounded-full ${
                  isActive 
                    ? "text-amber-400 bg-white/5 shadow-[0_0_10px_rgba(251,191,36,0.1)]" // Active Style
                    : "text-neutral-400 hover:text-white" // Inactive Style
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* 3. Right Anchor Placeholder */}
        <div className="hidden md:block h-6 w-20"></div>
        
        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={handleClose} 
            className="fixed top-0 left-0 w-full h-screen bg-neutral-950/95 backdrop-blur-lg pt-24 z-40 md:hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="flex flex-col items-center gap-8 px-6"
              onClick={(e) => e.stopPropagation()} 
            >
              {links.map((link) => {
                const isActive = activeSection === link.name;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + links.indexOf(link) * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`text-3xl font-bold transition-colors block py-2 ${
                        isActive ? "text-amber-400" : "text-white hover:text-amber-400"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-10 w-full max-w-xs"
              >
                 <button 
                    onClick={handleLinkClick}
                    className="flex items-center justify-center gap-3 w-full rounded-xl bg-amber-400 p-4 text-lg font-bold text-black transition-transform hover:scale-[1.02] shadow-amber-500/30 shadow-xl"
                  >
                    <Download className="h-5 w-5" />
                    Download Resume
                  </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};