"use client";

import { motion } from "framer-motion";
import { Figma, Mic2, ArrowRight, Music2 } from "lucide-react";
import { HeroBackground } from "../ui/HeroBackground";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-950 text-white font-sans">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 pb-20 text-center md:pt-32">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium tracking-wide text-neutral-300 backdrop-blur-md"
        >
          <span>⚡Open to opportunity</span>
        </motion.div>

        {/* Heading - Responsive Scaling (5xl -> 9xl) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-none text-white"
        >
          Hi! Naval here.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-lg md:max-w-xl text-base md:text-xl font-light leading-relaxed text-neutral-500"
        >
          I design interfaces that feel musical and build systems that are technically robust.
        </motion.p>

        {/* CTA BUTTONS - Stacked on Mobile, Row on Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          {/* 1. Primary: Glowing Neon (Full width on mobile) */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="group relative inline-flex h-12 w-full sm:w-auto overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-300"
          >
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#a855f7_50%,#000_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-neutral-900">
              Download CV
            </span>
          </a>

          {/* 2. Secondary: Glass Ghost Button (Full width on mobile) */}
          <a
            href="mailto:snaval294@gmail.com"
            className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
          >
            Hire me
          </a>
        </motion.div>

      </div> 

      {/* =======================================================
          Floating Cards - Hidden on Mobile to reduce clutter
      ======================================================= */}
      
      {/* Left Card: The Work */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 0.5 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute left-6 bottom-24 hidden lg:flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-md xl:left-24 xl:bottom-32"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/50 text-purple-400">
          <Figma size={24} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-neutral-500 font-bold">The Work</p>
          <p className="text-sm font-bold text-white">Figma + Code</p>
        </div>
      </motion.div>

      {/* Right Card: The Passion */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 0.7 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute right-6 top-32 hidden lg:flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-md xl:right-24 xl:top-48"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/50 text-pink-400">
          <Mic2 size={24} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-neutral-500 font-bold">The Side Quest</p>
          <p className="text-sm font-bold text-white">Vocalist</p>
        </div>
      </motion.div>

    </section>
  );
};
