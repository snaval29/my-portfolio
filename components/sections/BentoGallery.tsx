"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// ============================================================================
// 🔧 CONFIGURATION ZONE - UPDATED FOR MOBILE RESPONSIVENESS
// ============================================================================
const bentoItems = [
  // 1. The Main Highlight (Big Square)
  {
    id: 1,
    type: "video",
    src: "/videos/demo.mp4",
    alt: "Main Highlight",
    // FIX: Added 'aspect-video' for mobile so it keeps its shape
    className: "aspect-video md:aspect-auto md:col-span-2 md:row-span-2", 
  },
  // 2. The Video Reel (Tall Vertical)
  {
    id: 2,
    type: "image",
    src: "/images/work/1.webp",
    alt: "Motion Reel",
    // FIX: Added 'aspect-[9/16]' (Tik-Tok style vertical) for mobile
    className: "aspect-[9/16] md:aspect-auto md:col-span-1 md:row-span-2",
  },
  // 3. Small Square 1
  {
    id: 3,
    type: "image",
    src: "/images/work/2.jpg",
    alt: "Detail Shot 1",
    // FIX: Added 'aspect-square' for mobile
    className: "aspect-square md:aspect-auto md:col-span-1 md:row-span-1",
  },
  // 4. Small Square 2
  {
    id: 4,
    type: "image",
    src: "/images/work/3.webp",
    alt: "Detail Shot 2",
    className: "aspect-square md:aspect-auto md:col-span-1 md:row-span-1",
  },
  // 5. Small Square 3
  {
    id: 5,
    type: "image",
    src: "/images/work/4.webp",
    alt: "Detail Shot 3",
    className: "aspect-square md:aspect-auto md:col-span-1 md:row-span-1",
  },
];

// ============================================================================
// 🎨 COMPONENT CODE
// ============================================================================
export const BentoGallery = () => {
  return (
    <section className="w-full pb-32 px-4 md:px-10 scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        
        {/* Optional Header */}
        <div className="mb-12 flex items-center gap-4">
           <div className="h-px flex-1 bg-white/10" />
           <span className="text-sm font-bold tracking-widest text-neutral-500 uppercase">
             Visual Playground
           </span>
           <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* The Grid Layout */}
        {/* FIX: Changed 'auto-rows-[200px]' to 'auto-rows-auto' for mobile */}
        {/* This tells the grid: "On mobile, let the item decide its height. On Laptop, force 250px rows." */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto md:auto-rows-[250px]">
          
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`group relative overflow-hidden rounded-[24px] border border-white/5 bg-neutral-900 ${item.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              
              {/* Media Renderer */}
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  // FIX: Changed 'object-cover' to conditional object fit if you really want NO cropping
                  // But usually 'object-cover' is better if aspect-ratio is set correctly above
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt || "Gallery Item"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              )}
              
              <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
              
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};