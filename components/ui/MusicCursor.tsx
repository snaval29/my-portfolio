"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// The symbols we will emit
const MUSIC_NOTES = ["♩", "♪", "♫", "♭", "♮", "♯"];
const COLORS = ["#f59e0b", "#d97706", "#fbbf24", "#ffffff"]; // Gold & White

interface Note {
  id: number;
  x: number;
  y: number;
  targetX: number; // Final X position
  targetY: number; // Final Y position
  symbol: string;
  color: string;
  rotation: number;
}

export const MusicCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [notes, setNotes] = useState<Note[]>([]);
  const lastSpawn = useRef({ x: 0, y: 0, time: 0 });
  
  // Clean up old notes automatically
  useEffect(() => {
    if (notes.length > 20) {
        setNotes((prev) => prev.slice(1));
    }
  }, [notes]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // SPAWN LOGIC
      const now = Date.now();
      const dist = Math.hypot(e.clientX - lastSpawn.current.x, e.clientY - lastSpawn.current.y);

      // Trigger if moved more than 20px (slightly more sensitive now)
      if (dist > 20 || (now - lastSpawn.current.time > 100 && dist > 5)) {
        
        // 1. Calculate Random Direction (0 to 360 degrees)
        const angle = Math.random() * Math.PI * 2; 
        const distance = 80 + Math.random() * 50; // Spread distance (80px to 130px)

        // 2. Calculate Final Destination
        const targetX = e.clientX + Math.cos(angle) * distance;
        const targetY = e.clientY + Math.sin(angle) * distance;

        const newNote: Note = {
          id: now,
          x: e.clientX,
          y: e.clientY,
          targetX: targetX,
          targetY: targetY,
          symbol: MUSIC_NOTES[Math.floor(Math.random() * MUSIC_NOTES.length)],
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          rotation: Math.random() * 360,
        };

        setNotes((prev) => [...prev, newNote]);
        lastSpawn.current = { x: e.clientX, y: e.clientY, time: now };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      
      {/* 1. The Main Cursor (Dot) */}
      <div 
        className="absolute w-3 h-3 bg-white rounded-full mix-blend-difference"
        style={{ 
            left: mousePosition.x - 6, 
            top: mousePosition.y - 6,
        }}
      />

      {/* 2. The Bursting Notes */}
      <AnimatePresence>
        {notes.map((note) => (
          <motion.div
            key={note.id}
            // Start at mouse position
            initial={{ opacity: 1, scale: 0.2, x: note.x, y: note.y }}
            // Explode outward to targetX/Y
            animate={{ 
                opacity: 0, 
                scale: 1.5,
                x: note.targetX, 
                y: note.targetY, 
                rotate: note.rotation + 180 // Spin as they fly out
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute text-xl font-bold pointer-events-none select-none"
            style={{ color: note.color }}
            onAnimationComplete={() => {
                setNotes((prev) => prev.filter((n) => n.id !== note.id));
            }}
          >
            {note.symbol}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};