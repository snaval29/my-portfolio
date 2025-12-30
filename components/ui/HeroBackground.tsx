"use client";
import { motion } from "framer-motion";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
      
      {/* OPTIMIZATION TIP: 
        We use 'radial-gradient' here instead of 'bg-amber-500 + blur-3xl'.
        Gradients are rendered natively by the GPU and are much faster than blur filters.
      */}

      {/* 1. Moving Gold Light (Left) - GPU Accelerated */}
      <motion.div
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        // Using translateZ(0) forces hardware acceleration
        style={{ transform: "translateZ(0)" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen will-change-transform"
      >
         {/* Native Gradient = No Blur Lag */}
         <div className="w-full h-full bg-[radial-gradient(circle,rgba(245,158,11,0.15)_0%,transparent_70%)]" />
      </motion.div>

      {/* 2. Moving Amber Light (Right) - GPU Accelerated */}
      <motion.div
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        style={{ transform: "translateZ(0)" }}
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen will-change-transform"
      >
         <div className="w-full h-full bg-[radial-gradient(circle,rgba(217,119,6,0.15)_0%,transparent_70%)]" />
      </motion.div>

      {/* 3. The Glass Grid (Lightweight CSS) */}
      <div className="absolute inset-0 z-0 flex justify-center opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent 0,
                transparent 100px,
                rgba(255, 255, 255, 0.05) 100px,
                rgba(255, 255, 255, 0.05) 101px
              )
            `,
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
          }}
        />
      </div>

      {/* 4. The "Sheen" Animation (Simpler Transform) */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-10 w-[50%] -skew-x-12 opacity-10 pointer-events-none will-change-transform"
        style={{
            background: 'linear-gradient(90deg, transparent, white, transparent)'
        }}
      />

      {/* 5. Vignette (Dark Edges) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)] pointer-events-none z-20" />
      
    </div>
  );
};