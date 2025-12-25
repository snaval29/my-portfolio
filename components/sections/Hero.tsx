"use client";
import { motion } from "framer-motion";
import { Download, Mail, Figma, Mic2 } from "lucide-react"; 
import { HeroBackground } from "../ui/HeroBackground"; 

export const Hero = () => {
  return (
    <section 
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-950 text-white"
    >
      
      {/* 1. Background */}
      <HeroBackground />

      {/* 2. Main Content */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6 text-center pt-28 md:pt-32"> 
        
        {/* Top Badge - Added extra bottom margin for mobile breathing room */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-10 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-amber-200/80 backdrop-blur-md"
        >
          ⚡ Open to Opportunities
        </motion.div>

        {/* Headline - FIX: Increased leading (line-height) to 1.1 for mobile so it doesn't overlap */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl text-5xl font-medium tracking-tight sm:text-7xl md:text-8xl lg:text-9xl leading-[1.1] sm:leading-[0.9]"
        >
          Hi, <span className="font-serif italic text-amber-500 font-light">Naval</span> Here.
        </motion.h1>

        {/* Sub-Headline - FIX: Increased top margin to mt-8 (32px) for clear separation */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mt-8 md:mt-6 max-w-5xl text-4xl font-medium tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] sm:leading-[0.9]"
        >
          I design <span className="font-serif italic font-light text-neutral-300">Growth.</span>
        </motion.h2>

        {/* Subtext - Adjusted margin to mt-8 (32px) */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 text-lg text-neutral-400 md:text-xl max-w-2xl font-light leading-relaxed px-4"
        >
          Simplify decisions, improve usability. Blending <span className="text-white font-medium">Design</span> and code to create meaningful user experiences.
        </motion.p>

        {/* ACTION BUTTONS - Spacing: 48px */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          {/* 1. DOWNLOAD RESUME BUTTON */}
          <a 
            href="/resume.pdf" 
            download="Naval_Sharma_Resume.pdf"
            className="w-full sm:w-auto group relative flex items-center justify-center gap-4 rounded-full bg-gradient-to-b from-orange-500 to-amber-700 px-8 py-4 text-lg font-medium text-white shadow-[0_0_40px_-10px_rgba(245,158,11,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(245,158,11,0.6)]"
          >
            <span className="relative z-10">Download Resume</span>
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-1 relative z-10" />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>

          {/* 2. HIRE ME / EMAIL BUTTON */}
          <a 
            href="mailto:snaval294@gmail.com"
            className="w-full sm:w-auto group flex items-center justify-center gap-4 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-amber-500/30"
          >
            <Mail className="h-4 w-4 text-amber-400 group-hover:text-white transition-colors" />
            <span>Hire Me</span>
          </a>
        </motion.div>
      </div>

      {/* 3. FLOATING DARK GLASS CARDS (Unchanged) */}

      {/* Left Card: UI/UX Designer */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { duration: 1 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" }}}
        className="absolute left-8 bottom-24 hidden w-auto min-w-[200px] rounded-2xl border border-white/5 bg-black/40 p-6 backdrop-blur-xl shadow-2xl lg:block xl:left-32 xl:bottom-32"
      >
        <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800/50 border border-white/5 text-purple-400">
                <Figma size={24} /> 
            </div>
            <div className="text-left">
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Primary Tool</p>
                <p className="text-xl font-bold text-white tracking-tight">Figma</p>
            </div>
        </div>
      </motion.div>

      {/* Right Card: Vocalist */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, y: [0, 15, 0] }}
        transition={{ opacity: { duration: 1 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}}
        className="absolute right-8 top-32 hidden w-auto min-w-[220px] rounded-2xl border border-white/5 bg-black/40 p-6 backdrop-blur-xl shadow-2xl lg:block xl:right-32 xl:top-40"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800/50 border border-white/5 text-amber-400">
             <Mic2 size={24} />
          </div>
          <div className="text-left">
            <p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Side Quest</p>
            <p className="text-lg font-bold text-white tracking-tight">Vocalist</p>
          </div>
        </div>
        
        {/* Static Audio Viz */}
        <div className="flex gap-1.5 items-end h-4 pl-1">
            <div className="w-1.5 h-2 bg-amber-500/60 rounded-full" />
            <div className="w-1.5 h-4 bg-amber-500/60 rounded-full" />
            <div className="w-1.5 h-3 bg-amber-500/60 rounded-full" />
            <div className="w-1.5 h-4 bg-amber-500/60 rounded-full" />
            <div className="w-1.5 h-2 bg-amber-500/60 rounded-full" />
        </div>
      </motion.div>

    </section>
  );
};