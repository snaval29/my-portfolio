"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const random = (min: number, max: number) => Math.random() * (max - min) + min;

// ============================================================================
// COMPONENT 1: STAR (White)
// ============================================================================
const StarInstance = ({ onComplete }: { onComplete: () => void }) => {
  const top = random(-40, -10); 
  const left = random(-10, 110); 
  
  // Diagonal Angles
  const rotation = Math.random() > 0.5 
    ? random(30, 70) 
    : random(110, 150);

  return (
    <div 
      className="absolute z-10"
      style={{ 
        top: `${top}%`, 
        left: `${left}%`, 
        transform: `rotate(${rotation}deg)` 
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: [0, 1, 1, 0], x: 500 }}
        transition={{ 
          duration: 1.5, // Adjusted for Linear speed
          ease: "linear" // <--- CONSTANT SPEED (No acceleration)
        }}
        onAnimationComplete={onComplete}
      >
        <div className="h-[2px] w-[100px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_white]" />
      </motion.div>
    </div>
  );
};

// ============================================================================
// COMPONENT 2: METEOR (Colored)
// ============================================================================
const MeteorInstance = ({ onComplete }: { onComplete: () => void }) => {
  const top = random(-50, -20);
  const left = random(-20, 120);
  
  const rotation = Math.random() > 0.5 
    ? random(40, 60)
    : random(120, 140);

  return (
    <div 
      className="absolute z-10"
      style={{ 
        top: `${top}%`, 
        left: `${left}%`, 
        transform: `rotate(${rotation}deg)` 
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: [0, 1, 1, 0], x: 700 }}
        transition={{ 
          duration: 1.2, 
          ease: "linear" // <--- CONSTANT SPEED
        }}
        onAnimationComplete={onComplete}
      >
        <div className="h-[4px] w-[180px] rounded-full bg-gradient-to-r from-transparent via-purple-400 to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.8)]" />
      </motion.div>
    </div>
  );
};

// ============================================================================
// CONTROLLERS
// ============================================================================
const StarController = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (active) return;
    const timeout = setTimeout(() => setActive(true), random(2000, 5000));
    return () => clearTimeout(timeout);
  }, [active]);
  if (!active) return null;
  return <StarInstance onComplete={() => setActive(false)} />;
};

const MeteorController = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (active) return;
    const timeout = setTimeout(() => setActive(true), random(7000, 12000));
    return () => clearTimeout(timeout);
  }, [active]);
  if (!active) return null;
  return <MeteorInstance onComplete={() => setActive(false)} />;
};

// ============================================================================
// MAIN EXPORT
// ============================================================================
export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-neutral-950">
      
      {/* GRADIENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(168,85,247,0.25),transparent_70%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_20%,rgba(236,72,153,0.18),transparent_65%)] z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-0" />

      {/* STARS LAYER */}
      <div className="absolute inset-0 z-0">
        <StarController />
        <StarController />
        <StarController />
        <StarController />
        
        <MeteorController />
        <MeteorController />
      </div>
    </div>
  );
}