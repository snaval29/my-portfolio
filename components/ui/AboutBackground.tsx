"use client";
import { motion } from "framer-motion";

export const AboutBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-950">
      
      {/* 1. Base Gradient (Subtle Vignette to create depth) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]" />

      {/* 2. Beam 1: The Main Scanner (Golden/Warm) - INCREASED BRIGHTNESS */}
      <motion.div
        animate={{ 
          x: ["-100%", "200%"], // Wide range to ensure it crosses the screen
        }}
        transition={{ 
          duration: 15, // Faster to be easily noticeable
          repeat: Infinity, 
          ease: "linear",
        }}
        // FIX: Using brighter amber-500/40 and mix-blend-plus-lighter
        className="absolute top-0 h-full w-[150px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent blur-2xl -skew-x-12 opacity-70 mix-blend-plus-lighter"
      />

      {/* 3. Beam 2: The Secondary Scanner (White/Cool) - INCREASED BRIGHTNESS */}
      <motion.div
        animate={{ 
          x: ["200%", "-100%"], 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear",
          delay: 2
        }}
        // FIX: Using white/20 for contrast
        className="absolute top-0 h-full w-[250px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-3xl -skew-x-12 opacity-50 mix-blend-overlay"
      />

      {/* 4. Ambient Spotlights (Static Glows) */}
      {/* Top Left Glow */}
      <div className="absolute -left-20 -top-20 h-[400px] w-[400px] bg-amber-600/20 blur-[100px] rounded-full opacity-60" />
      
      {/* Bottom Right Glow */}
      <div className="absolute -right-20 -bottom-20 h-[400px] w-[400px] bg-amber-800/20 blur-[100px] rounded-full opacity-60" />

    </div>
  );
};