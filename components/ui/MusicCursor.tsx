"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// The symbols we will emit
const MUSIC_NOTES = ["♩", "♪", "♫", "♭", "♮", "♯"];
const COLORS = ["#f59e0b", "#d97706", "#fbbf24", "#ffffff"]; // Gold & White

interface Note {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  symbol: string;
  color: string;
  rotation: number;
}

export const MusicCursor = () => {
  // 1. REF for the main cursor (No Re-renders)
  const cursorDotRef = useRef<HTMLDivElement>(null);
  
  // 2. STATE for the Notes (This is okay because notes don't update every millisecond)
  const [notes, setNotes] = useState<Note[]>([]);
  
  // 3. REF to track spawn timing without triggering re-renders
  const lastSpawn = useRef({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // A. Move the Main Dot DIRECTLY (Zero React overhead)
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }

      // B. Check if we should spawn a note
      const now = Date.now();
      const dist = Math.hypot(e.clientX - lastSpawn.current.x, e.clientY - lastSpawn.current.y);

      // Trigger if moved more than 30px (Increased slightly for better performance)
      if (dist > 30 || (now - lastSpawn.current.time > 100 && dist > 10)) {
        
        // Calculate physics
        const angle = Math.random() * Math.PI * 2; 
        const distance = 80 + Math.random() * 50; 
        const targetX = e.clientX + Math.cos(angle) * distance;
        const targetY = e.clientY + Math.sin(angle) * distance;

        // Use 'now' plus random for a truly unique key to prevent collisions
        const uniqueId = now + Math.random();

        const newNote: Note = {
          id: uniqueId, // ✅ Fixes "Duplicate Key" error
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
  }, []); // Empty dependency array = Runs once = No loops

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      
      {/* 1. The Main Cursor (Controlled by Ref) */}
      <div 
        ref={cursorDotRef}
        className="absolute w-3 h-3 bg-white rounded-full mix-blend-difference -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />

      {/* 2. The Bursting Notes */}
      <AnimatePresence>
        {notes.map((note) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 1, scale: 0.2, x: note.x, y: note.y }}
            animate={{ 
                opacity: 0, 
                scale: 1.5,
                x: note.targetX, 
                y: note.targetY, 
                rotate: note.rotation + 180 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute text-xl font-bold pointer-events-none select-none"
            style={{ color: note.color }}
            onAnimationComplete={() => {
                // Cleanup note after animation finishes
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