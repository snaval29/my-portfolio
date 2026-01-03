"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  Github, 
  ExternalLink, 
  Plug, 
  Cpu 
} from "lucide-react"; 
import Tilt from "react-parallax-tilt"; 
import { WorkBackground } from "../ui/WorkBackground";

// ============================================================================
// 1. DESIGN CASE STUDIES
// ============================================================================
const designProjects = [
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

// ============================================================================
// 2. ENGINEERING & BUILDS
// ============================================================================
const codeProjects = [
    {
        name: "Nav Architect Pro",
        type: "Figma Plugin",
        description: "Instantly create navigation bar design components in Figma. Automates the boring parts of UI setup so designers can focus on creativity.",
        figmaLink: "https://www.figma.com/community/plugin/1586611732146203206",
        githubLink: "https://github.com/snaval29/Nav-Bar-Plugin.git", 
    }
];

export const Work = () => {
  return (
    <section id="work" className="relative w-full py-32 px-4 md:px-8 scroll-mt-32 overflow-hidden bg-neutral-950">
      
      <WorkBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="mb-24">
            <motion.h2 
                className="text-sm font-bold tracking-[0.2em] text-purple-400 uppercase"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                My Portfolio
            </motion.h2>
            
            <motion.h3 
                className="mt-4 text-5xl md:text-7xl font-semibold tracking-tighter text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                Selected <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Works.</span>
            </motion.h3>
        </div>

        {/* ================= ZONE 1: DESIGN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            {designProjects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Tilt
                        tiltMaxAngleX={12} 
                        tiltMaxAngleY={12}
                        scale={1.05} 
                        transitionSpeed={400} 
                        className="h-full"
                    >
                        <a
                            href={project.link}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative block h-[520px] w-full overflow-hidden rounded-[24px] bg-neutral-950 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                        >
                            {/* Image Area */}
                            <div className="relative h-[65%] w-full overflow-hidden bg-neutral-800">
                                <Image 
                                    src={project.image} 
                                    alt={project.name}
                                    fill 
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                            </div>

                            {/* Angled Content Box */}
                            <div 
                                className="absolute bottom-0 left-[-1px] right-0 w-[101%] h-[46%] bg-neutral-950 px-8 pb-8 pt-16 transition-transform duration-300"
                                style={{
                                    clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
                                    marginTop: "-1px" 
                                }}
                            >
                                <div className="flex flex-col justify-between h-full w-[99%] mx-auto">
                                    <div>
                                        <h4 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
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
                                                <span 
                                                    key={tag} 
                                                    className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-300
                                                    text-neutral-300 bg-white/5 border border-white/10
                                                    group-hover:text-purple-300 group-hover:bg-purple-500/20 group-hover:border-purple-500/30"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white group-hover:border-transparent group-hover:-rotate-45">
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

        {/* ================= ZONE 2: ENGINEERING & BUILDS ================= */}
        <div className="w-full">
            
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8 opacity-60">
                <Cpu size={24} className="text-purple-400" />
                <h4 className="text-sm font-bold tracking-widest text-white uppercase">
                    Engineering & Builds
                </h4>
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
            </div>

            <div className="flex flex-col gap-6">
                {codeProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                         <div className="group relative w-full overflow-hidden rounded-[16px] bg-neutral-900/50 border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                            
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                                
                                {/* Left: Info */}
                                {/* ✅ FIXED: Changed 'items-start' to 'items-center' to align Icon with Text Block */}
                                <div className="flex items-center gap-6 max-w-2xl">
                                    <div className="hidden md:flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-neutral-800 border border-white/10 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                        <Plug size={32} strokeWidth={1.5} /> 
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h4 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                                {project.name}
                                            </h4>
                                            <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded text-neutral-400 bg-white/5 border border-white/10">
                                                {project.type}
                                            </span>
                                        </div>
                                        <p className="text-neutral-400 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Actions */}
                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <a 
                                        href={project.figmaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 flex-1 md:flex-none flex items-center justify-center gap-2 px-6 rounded-xl bg-white text-black font-bold text-sm hover:bg-purple-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
                                    >
                                        <ExternalLink size={16} />
                                        Try in Figma
                                    </a>
                                    <a 
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 flex-1 md:flex-none flex items-center justify-center gap-2 px-6 rounded-xl bg-neutral-800 border border-neutral-700 text-neutral-300 font-bold text-sm hover:border-white hover:text-white transition-colors duration-300 whitespace-nowrap"
                                    >
                                        <Github size={16} />
                                        View Code
                                    </a>
                                </div>
                            </div>
                         </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};