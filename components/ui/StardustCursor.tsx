"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Space-themed colors: White, slight Cyan, faint Purple
const COLORS = ["#ffffff", "#e0f2fe", "#f0abfc", "#818cf8"];

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  driftX: number;
  driftY: number;
}

export const StardustCursor = () => {
  // 1. REF for the main cursor (The "Head" of the comet)
  const cursorDotRef = useRef<HTMLDivElement>(null);
  
  // 2. STATE for the Stardust Trail
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // 3. REF to track spawn timing
  const lastSpawn = useRef({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // A. Move the Main Dot DIRECTLY (High Performance)
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }

      // B. Check if we should spawn a particle
      const now = Date.now();
      const dist = Math.hypot(e.clientX - lastSpawn.current.x, e.clientY - lastSpawn.current.y);

      // Spawn faster than notes (smoother trail)
      if (dist > 20 || (now - lastSpawn.current.time > 50 && dist > 5)) {
        
        const uniqueId = now + Math.random();
        
        const newParticle: Particle = {
          id: uniqueId,
          x: e.clientX,
          y: e.clientY,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          // Random size between 2px and 5px
          size: Math.random() * 4 + 2, 
          // Slight random drift so it feels organic, not a straight line
          driftX: (Math.random() - 0.5) * 20, 
          driftY: (Math.random() - 0.5) * 20, 
        };

        setParticles((prev) => [...prev, newParticle]);
        lastSpawn.current = { x: e.clientX, y: e.clientY, time: now };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      
      {/* 1. The Main Star (Glowing Cursor) */}
      <div 
        ref={cursorDotRef}
        className="absolute w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] mix-blend-difference will-change-transform"
      />

      {/* 2. The Stardust Trail */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
                opacity: 1, 
                scale: 1, 
                x: particle.x, 
                y: particle.y 
            }}
            animate={{ 
                opacity: 0, 
                scale: 0,
                // Drifts slightly in random direction
                x: particle.x + particle.driftX, 
                y: particle.y + particle.driftY, 
            }}
            exit={{ opacity: 0 }}
            transition={{ 
                duration: 1.2, // Particles linger a bit longer than notes
                ease: "easeOut" 
            }}
            className="absolute rounded-full pointer-events-none"
            style={{ 
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                // Soft glow for each particle
                boxShadow: `0 0 8px ${particle.color}`, 
                transform: 'translate(-50%, -50%)'
            }}
            onAnimationComplete={() => {
                setParticles((prev) => prev.filter((p) => p.id !== particle.id));
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};