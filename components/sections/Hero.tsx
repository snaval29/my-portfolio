"use client";

import { motion } from "framer-motion";
import { Figma, Mic2 } from "lucide-react";
import { HeroBackground } from "../ui/HeroBackground";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-950 text-white">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-20 text-center md:pt-32">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-full border border-white/10 bg-white/5 px-5 py-1.5 text-xs tracking-wide text-neutral-300 backdrop-blur"
        >
          ⚡Open to opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-balance text-4xl font-semibold tracking-tighter sm:text-5xl md:text-7xl leading-[1.1]"
        >
          Hi, Naval Here.
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl md:text-5xl leading-tight text-neutral-200"
        >
          I design{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Growth.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg font-light"
        >
          Simplify decisions, improve usability. Blending Design and code to
          create meaningful user experiences.
        </motion.p>

        {/* CTA BUTTONS CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* 1. Primary Button: Download Resume */}
          <a
            href="/resume.pdf"
            download="Naval_Sharma_Resume.pdf"
            className="group relative inline-flex h-12 w-full sm:w-auto overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-300"
          >
            <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#7c3aed_50%,#171717_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-neutral-900/80">
              Download Resume
            </span>
          </a>

          {/* 2. Secondary Button: Hire Me (Gradient Stroke) */}
          <a
            href="mailto:snaval294@gmail.com"
            className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          >
             <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950/80 px-8 text-sm font-medium text-white backdrop-blur-md transition-colors group-hover:bg-neutral-950/60">
                Hire Me
             </span>
          </a>
        </motion.div>
      </div>

      {/* =======================================================
          Floating Cards - FIXED POSITIONS
          I moved xl:left/right from '24' to '36' (and bottom up)
          to bring them closer to the center content.
      ======================================================= */}
      
      {/* Left Card: Figma */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 1 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        // FIX: xl:left-36 (was 24) and xl:bottom-40 (was 28)
        className="absolute left-6 bottom-20 hidden min-w-[200px] rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl lg:block xl:left-36 xl:bottom-40 hover:border-purple-500/40 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800/70 text-purple-400">
            <Figma size={20} />
          </div>
          <div className="text-left">
            <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
              Primary Tool
            </p>
            <p className="text-sm font-medium text-white">
              Figma Master
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Card: Vocalist */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, y: [0, 16, 0] }}
        transition={{
          opacity: { duration: 1 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        // FIX: xl:right-36 (was 24) and xl:top-48 (was 40)
        className="absolute right-6 top-32 hidden min-w-[200px] rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl lg:block xl:right-36 xl:top-48 hover:border-pink-500/40 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800/70 text-pink-400">
            <Mic2 size={20} />
          </div>
          <div className="text-left">
            <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
              Side Quest
            </p>
            <p className="text-sm font-medium text-white">
              Vocalist
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};