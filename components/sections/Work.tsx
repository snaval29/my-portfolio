"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Tilt from "react-parallax-tilt"; 

// ============================================================================
// 🔗 PASTE YOUR BEHANCE LINKS HERE
// ============================================================================
const projects = [
    {
        name: "SwayZest",
        tags: ["UI Design", "Branding"],
        description: "Designed a modern brand identity and clean user interface for a smart vending machine solution.",
        image: "/images/work/SwayZest.png", 
        link: "https://www.behance.net/gallery/227257103/SwayZest-A-vending-machine-solution", 
    },
    {
        name: "DormSpot",
        tags: ["Case Study", "UX Research"],
        description: "A comprehensive platform connecting students with safe, affordable housing options.",
        image: "/images/work/dromspot.png",
        link: "https://www.behance.net/gallery/207552759/DromSpot-UIUX-Case-Study",
    },
    {
        name: "Khan Academy Redesign",
        tags: ["Mobile App", "Redesign"],
        description: "A product redesign focused on streamlining onboarding, progress tracking, and in-lesson support.",
        image: "/images/work/khanacademy.png",
        link: "https://www.behance.net/gallery/241257291/Khan-Academy-Reboot-Modern-UI-for-Smarter-Learning",
    },
];

export const Work = () => {
  return (
    <section id="work" className="relative w-full py-32 px-4 md:px-10 scroll-mt-32 overflow-hidden bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24">
            <motion.h2 
                className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                My Portfolio
            </motion.h2>
            <motion.h3 
                className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                Selected <span className="font-serif italic text-neutral-500">Works.</span>
            </motion.h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    {/* ✅ UPDATED TILT SETTINGS FOR FASTER MOTION */}
                    <Tilt
                        tiltMaxAngleX={12}   // Increased from 3 to 12 (More Rotation)
                        tiltMaxAngleY={12}
                        scale={1.05}         // Slightly more pop on hover
                        transitionSpeed={400} // Reduced from 1000ms to 400ms (Faster Response)
                        className="h-full"
                    >
                        <a
                            href={project.link}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative block h-[520px] w-full overflow-hidden rounded-[24px] bg-neutral-950 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10"
                        >
                            {/* Image Area */}
                            <div className="relative h-[65%] w-full overflow-hidden bg-neutral-800">
                                <Image 
                                    src={project.image} 
                                    alt={project.name}
                                    fill 
                                    // Sped up duration from 700 to 500
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                            </div>

                            {/* Angled Content Box */}
                            <div 
                                // Sped up duration from 500 to 300
                                className="absolute bottom-0 left-[-1px] right-0 w-[101%] h-[46%] bg-neutral-950 px-8 pb-8 pt-16 transition-transform duration-300"
                                style={{
                                    clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
                                    marginTop: "-1px" 
                                }}
                            >
                                <div className="flex flex-col justify-between h-full w-[99%] mx-auto">
                                    <div>
                                        <h4 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                                            {project.name}
                                        </h4>
                                        <p className="mt-3 text-sm font-medium text-neutral-400 leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-300 bg-white/5 border border-white/10 rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 group-hover:-rotate-45">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Tilt>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};