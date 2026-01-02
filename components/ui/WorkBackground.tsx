"use client";

import { useEffect, useRef } from "react";

// 1. Define the props interface
interface WorkBackgroundProps {
  density?: number; 
  opacity?: number; 
}

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number; 
  twinkleSpeed: number; 
  twinkleOffset: number; 
  tint: string; 
}

// 2. Add 'export const' and destructure the props
export const WorkBackground = ({ density = 150, opacity = 1 }: WorkBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let frameCount = 0;

    const starTints = ["#ffffff", "#f8fafc", "#e0e7ff", "#fefce8"];

    const initStars = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Use the density prop
      const count = Math.floor((width * height) / (1920 * 1080) * density);
      
      stars = [];
      for (let i = 0; i < count; i++) {
        const radius = Math.pow(Math.random(), 2.5) * 1.5 + 0.3; 
        
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: radius,
          baseAlpha: Math.random() * 0.4 + (radius > 0.8 ? 0.3 : 0.1), 
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          tint: starTints[Math.floor(Math.random() * starTints.length)],
        });
      }
    };

    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter"; 
      
      // Use the opacity prop
      ctx.globalAlpha = opacity;

      stars.forEach((star) => {
        const twinkleVariance = Math.sin(frameCount * star.twinkleSpeed + star.twinkleOffset);
        const currentAlpha = Math.max(0.1, Math.min(1, star.baseAlpha + twinkleVariance * 0.2));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.tint}${Math.floor(currentAlpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        if (star.radius > 1.2) {
             ctx.shadowBlur = star.radius * 3;
             ctx.shadowColor = "rgba(255, 255, 255, 0.3)";
        } else {
             ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(); 
    };

    handleResize();
    render();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, opacity]); 

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,27,75,0.3)_0%,rgba(0,0,0,0.8)_100%)]" />
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 h-full w-full mix-blend-screen"
      />
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" 
        style={{ mixBlendMode: "overlay" }}
      />
    </div>
  );
};

// 3. Add default export for safety (fixes import issues)
export default WorkBackground;