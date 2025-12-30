"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import type { Engine } from "tsparticles-engine";

export const AboutBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-neutral-950">
      
      {/* 1. The Particle Network (The "Code" Vibe) */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 h-full w-full"
        options={{
          fullScreen: { enable: false },
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 120,
          // 🛑 INTERACTIVITY DISABLED: This prevents conflict with your Music Cursor
          interactivity: {
            events: {
              onHover: { enable: false },
              onClick: { enable: false },
              resize: true,
            },
          },
          particles: {
            // ✅ THEME COLOR: Amber-400 (Gold)
            color: {
              value: "#fbbf24", 
            },
            // The connecting lines (The "System" Vibe)
            links: {
              color: "#fbbf24",
              distance: 150,
              enable: true,
              opacity: 0.08, // Very subtle, barely visible lines
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.6, // Slow, premium float speed
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900, // Spreads them out so it's not cluttered
              },
              value: 50, // Perfect amount for a background
            },
            opacity: {
              value: 0.3, 
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* 2. Film Grain Texture (The "Designer" Vibe) */}
      {/* Adds a high-end textured finish so it doesn't look like a cheap screensaver */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-10 mix-blend-overlay"
        style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* 3. Vignette Overlay (Focus) */}
      {/* Darkens the corners to keep focus on your text */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-20" />
    </div>
  );
};