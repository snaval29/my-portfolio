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
          interactivity: {
            events: {
              onHover: { enable: false },
              onClick: { enable: false },
              resize: true,
            },
          },
          particles: {
            // UPDATED: Purple-400 (#c084fc) is lighter/brighter than before
            color: {
              value: "#c084fc", 
            },
            links: {
              color: "#c084fc",
              distance: 150,
              enable: true,
              // UPDATED: Increased slightly from 0.1 to 0.15
              opacity: 0.15, 
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
              speed: 0.6, 
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 50,
            },
            opacity: {
              // UPDATED: Increased from 0.3 to 0.5 for better visibility
              value: 0.5, 
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

      {/* Film Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-10 mix-blend-overlay"
        style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-20" />
    </div>
  );
};