"use client";
import { motion } from "framer-motion";

export const ContactBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-neutral-950">
      
      {/* 1. Deep Base Shadow (The "Trough" of the wave) - Slow drift */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          x: [-20, 20, -20],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] -left-[10%] h-[100%] w-[120%] rounded-[100%] bg-gradient-to-tr from-black via-amber-950 to-transparent blur-[120px] opacity-80"
      />

      {/* 2. Main Body (The Rich Amber Fluid) - Floating diagonally */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1], 
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] -right-[20%] h-[120%] w-[120%] rounded-[100%] bg-gradient-to-bl from-amber-600/40 via-orange-900/30 to-transparent blur-[150px]"
      />

      {/* 3. The Highlight Ridge (Bright Gold/White - Creates the "Fold") */}
      {/* This is the key element for the "Silk" look. It's thinner and brighter. */}
      <motion.div 
        animate={{ 
          rotate: [-15, -10, -15],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] h-[140%] w-[80%] rounded-[100%] bg-gradient-to-t from-amber-400/20 via-yellow-200/5 to-transparent blur-[100px] mix-blend-overlay"
      />

      {/* 4. Secondary Highlight (Top Left - Balances the composition) */}
      <motion.div 
         animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
         className="absolute -top-[20%] -left-[10%] h-[80%] w-[80%] rounded-full bg-amber-500/10 blur-[120px]"
      />

      {/* 5. Smooth Grain Texture (Reduces color banding) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};