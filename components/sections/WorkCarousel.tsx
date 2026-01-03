"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { WorkBackground } from "../ui/WorkBackground";

// ============================================================================
// 1. HIGH-PERFORMANCE VIDEO COMPONENT
// ============================================================================
const OptimizedVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Observer: Only play when 10% of the video is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play safely (catches abort errors if user scrolls fast)
            video.play().catch(() => {}); 
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted={true}          // REQUIRED for autoplay
      playsInline={true}    // REQUIRED for iOS
      loop={true}
      preload="auto"        // Aggressively load video data
      className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 will-change-transform bg-neutral-900" 
    />
  );
};

// ============================================================================
// 🔧 CONFIGURATION ZONE
// ============================================================================
const workItems = [
  { id: 1, type: "video", src: "/videos/demo.mp4", alt: "Project 1" },
  { id: 2, type: "image", src: "/images/work/1.webp", alt: "Project 2" },
  { id: 3, type: "image", src: "/images/work/2.jpg", alt: "Project 3" },
  { id: 4, type: "image", src: "/images/work/3.webp", alt: "Project 4" },
  { id: 5, type: "image", src: "/images/work/4.webp", alt: "Project 5" },
  { id: 6, type: "image", src: "/images/work/6.png", alt: "Project 6" },
];

const duplicatedItems = [...workItems, ...workItems];

export const WorkCarousel = () => {
  return (
    <section className="relative w-full pb-32 pt-10 overflow-hidden bg-neutral-950">
      
      <WorkBackground density={40} opacity={0.6} />

      <style jsx>{`
        @keyframes scroll-infinite {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-scroll {
          animation: scroll-infinite 60s linear infinite;
        }
        /* Pause on hover to let user watch the video */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 w-full">

        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 md:px-10 mb-16">
            <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-purple-500/30" />
                <span className="text-sm font-bold tracking-widest text-white uppercase">
                    Visual Playground
                </span>
                <div className="h-px flex-1 bg-purple-500/30" />
            </div>
        </div>

        {/* Infinite Slider */}
        <div className="relative w-full">
            
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />

            <div className="flex gap-8 w-max animate-scroll transform-gpu translate-z-0 will-change-transform">
                {duplicatedItems.map((item, index) => (
                    <div 
                        key={`${item.id}-${index}`} 
                        className="relative w-[300px] md:w-[500px] aspect-video flex-shrink-0 rounded-[2rem] overflow-hidden border border-purple-500/10 bg-neutral-900 group cursor-pointer shadow-lg transform-gpu"
                    >
                        {item.type === "video" ? (
                            <OptimizedVideo src={item.src} />
                        ) : (
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCarousel;