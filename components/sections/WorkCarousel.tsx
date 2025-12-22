"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// ============================================================================
// 🔧 CONFIGURATION ZONE
// ============================================================================
const workItems = [
  { id: 1, type: "video", src: "/videos/demo.mp4", alt: "Project 1" },
  { id: 2, type: "image", src: "/images/work/1.webp", alt: "Project 2" },
  { id: 3, type: "image", src: "/images/work/2.jpg", alt: "Project 3" },
  { id: 4, type: "image", src: "/images/work/3.webp", alt: "Project 4" },
  { id: 5, type: "image", src: "/images/work/4.webp", alt: "Project 5" },
];

// We duplicate the array to create the seamless "infinite loop" effect
const duplicatedItems = [...workItems, ...workItems];

export const WorkCarousel = () => {
  return (
    <section className="w-full pb-32 pt-10 overflow-hidden">
      
      {/* 1. Header (Kept consistent with previous design) */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-16">
        <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-sm font-bold tracking-widest text-neutral-500 uppercase">
                Visual Playground
            </span>
            <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>

      {/* 2. The Infinite Slider Track */}
      <div className="relative w-full">
          
          {/* Gradient Masks (Fade edges) */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

          <motion.div 
            className="flex gap-8 w-max"
            // The Animation: Moves from 0% to -50% (halfway) then snaps back instantly to create illusion
            animate={{ x: "-50%" }}
            transition={{ 
                ease: "linear", 
                duration: 25, // Adjust speed (Higher = Slower)
                repeat: Infinity 
            }}
          >
            {duplicatedItems.map((item, index) => (
                <div 
                    key={`${item.id}-${index}`} 
                    className="relative w-[300px] md:w-[500px] aspect-video flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/5 bg-neutral-900 group cursor-pointer"
                >
                    {item.type === "video" ? (
                        <video
                            src={item.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                        />
                    ) : (
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                        />
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            ))}
          </motion.div>
      </div>

    </section>
  );
};