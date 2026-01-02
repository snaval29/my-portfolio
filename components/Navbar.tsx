"use client";

import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Music2, Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  
  // 1. NEW STATE: specific to the Hide/Show logic
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll(); // Framer Motion hook to track scroll pixels

  const links = [
    { name: "Home", href: "/" },
    { name: "About me", href: "#about" },
    { name: "My Work", href: "#work" },
    { name: "Contact me", href: "#contact" },
  ];

  // 2. NEW LOGIC: Handle Scroll Direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // If scrolling DOWN and we are past the hero section (>150px), hide it
    if (latest > previous && latest > 150) {
      setHidden(true);
    } 
    // If scrolling UP, show it
    else {
      setHidden(false);
    }
  });

  // Scroll Spy Logic (Tracks which section is active)
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => {
        if (link.href === "/") return null;
        const id = link.href.replace("#", "");
        return document.getElementById(id);
      });

      const scrollPosition = window.scrollY + 150;

      if (scrollPosition < 400) {
        setActiveSection("Home");
        return;
      }

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            const activeLink = links.find((link) => link.href === `#${section.id}`);
            if (activeLink) setActiveSection(activeLink.name);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => setIsOpen(false);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.nav
      // 3. ANIMATION VARIANTS: Controls the hide/show movement
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-transparent pointer-events-none md:pointer-events-auto"
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto pointer-events-auto">
        
        {/* CENTER PILL CONTAINER (Logo + Links) */}
        <div className="hidden md:flex items-center rounded-full border border-white/10 bg-neutral-950/80 px-4 py-2 shadow-lg backdrop-blur-md mx-auto gap-6">
          
          {/* LOGO (Integrated inside the pill) */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-white group">
            <div className="relative flex items-center justify-center">
               <div className="absolute inset-0 bg-purple-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
               <Music2 className="relative h-4 w-4 text-purple-400" />
            </div>
            <span>Naval.wav</span>
          </Link>

          {/* DIVIDER LINE */}
          <div className="h-4 w-[1px] bg-white/10" />

          {/* NAVIGATION LINKS */}
          {links.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-purple-500/20 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-white z-50 focus:outline-none ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} className="text-purple-400" /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={handleClose}
            className="fixed top-0 left-0 w-full h-screen bg-neutral-950/95 backdrop-blur-2xl pt-24 z-40 md:hidden pointer-events-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="flex flex-col items-center gap-8 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((link, idx) => {
                const isActive = activeSection === link.name;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`text-3xl font-bold transition-colors block py-2 ${
                        isActive ? "text-purple-400" : "text-white hover:text-purple-400"
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
                transition={{ delay: 0.5 }}
                className="mt-10 w-full max-w-xs"
              >
                <a
                  href="/resume.pdf"
                  download="Naval_Sharma_Resume.pdf"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-3 w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-lg font-bold text-white transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};