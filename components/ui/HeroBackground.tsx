"use client";
import { motion } from "framer-motion";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
      
      {/* =========================================================
          LAYER 1: THE LIGHT SOURCE (Behind the Glass)
          We need deep, moving colors for the glass to blur.
         ========================================================= */}
      
      {/* Moving Gold Blob (Left) */}
      <motion.div
        animate={{ 
          x: ["-20%", "20%", "-20%"],
          y: ["0%", "30%", "0%"],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-amber-600/30 rounded-full blur-[120px] opacity-60 mix-blend-screen"
      />

      {/* Moving Amber Blob (Right) */}
      <motion.div
        animate={{ 
          x: ["20%", "-20%", "20%"],
          y: ["0%", "-30%", "0%"],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-orange-500/20 rounded-full blur-[120px] opacity-50 mix-blend-screen"
      />

      {/* =========================================================
          LAYER 2: THE FROSTED GLASS TEXTURE
          This creates the "physical" feel of the material.
         ========================================================= */}
      
      {/* Heavy Noise Overlay (The "Frost") */}
      <div 
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none z-10"
        style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* =========================================================
          LAYER 3: THE GLASS STRUCTURE (Reflections & Edges)
          This defines the "Panes" of glass.
         ========================================================= */}

      {/* The Vertical "Panes" (Sharp White Lines) */}
      <div className="absolute inset-0 z-20 flex justify-center">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent 0,
                transparent 150px,
                rgba(255, 255, 255, 0.03) 150px,
                rgba(255, 255, 255, 0.03) 151px
              )
            `,
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'
          }}
        />
      </div>

      {/* The "Sheen" (Light reflecting off the surface) */}
      {/* This moving gradient simulates light sweeping across the glass */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-20 w-[60%] -skew-x-12 opacity-20 pointer-events-none"
        style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
        }}
      />

      {/* =========================================================
          LAYER 4: DEPTH & FOCUS
         ========================================================= */}
      
      {/* Bottom Glow (Grounding the user) */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-10" />
      
    </div>
  );
};