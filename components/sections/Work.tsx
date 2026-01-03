"use client";
import { useState, useEffect } from "react";
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
// 1. PROJECT DATA (Reordered: Khan -> SwayZest -> DormSpot)
// ============================================================================
const designProjects = [
    {
        name: "Khan Academy Redesign",
        tags: ["Mobile App", "Redesign"],
        description: "A product redesign focused on streamlining onboarding, progress tracking, and in-lesson support.",
        image: "/images/work/khanacademy.png",
        link: "https://www.behance.net/gallery/241257291/Khan-Academy-Reboot-Modern-UI-for-Smarter-Learning",
    },
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
];

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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="work" className="relative w-full py-20 md:py-32 px-4 md:px-8 scroll-mt-32 overflow-hidden bg-neutral-950 font-sans text-white">
      
      <WorkBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="mb-16 md:mb-24">
            <motion.h2 
                className="text-xs md:text-sm font-bold tracking-widest text-purple-400 uppercase"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                My Portfolio
            </motion.h2>
            
            <motion.h3 
                className="mt-4 text-4xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.1]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                Selected <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Works.</span>
            </motion.h3>
        </div>

        {/* ================= ZONE 1: DESIGN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-24 md:mb-32">
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
                        tiltEnable={isDesktop}
                    >
                        <a
                            href={project.link}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative block h-[450px] md:h-[520px] w-full overflow-hidden rounded-[24px] bg-neutral-950 shadow-xl transition-all duration-300 lg:hover:shadow-2xl lg:hover:shadow-purple-500/10 font-sans border border-white/5"
                        >
                            <div className="relative h-[60%] w-full overflow-hidden bg-neutral-800">
                                <Image 
                                    src={project.image} 
                                    alt={project.name}
                                    fill 
                                    className="object-cover object-top transition-transform duration-500 lg:group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 transition-opacity lg:group-hover:opacity-0" />
                            </div>

                            <div 
                                className="absolute bottom-0 left-[-1px] right-0 w-[101%] h-[50%] bg-neutral-950 px-6 md:px-8 pb-8 pt-12 md:pt-16 transition-transform duration-300"
                                style={{
                                    clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
                                    marginTop: "-1px" 
                                }}
                            >
                                <div className="flex flex-col justify-between h-full w-[99%] mx-auto">
                                    <div>
                                        <h4 className="text-xl md:text-2xl font-bold text-white lg:group-hover:text-purple-400 transition-colors duration-300 tracking-tight">
                                            {project.name}
                                        </h4>
                                        <p className="mt-2 text-sm font-medium text-neutral-400 leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-4 md:mt-6">
                                        <div className="flex gap-2">
                                            {project.tags.map((tag) => (
                                                <span 
                                                    key={tag} 
                                                    className="px-2 md:px-3 py-1 text-[10px] md:text-[11px] font-bold uppercase tracking-widest rounded-md transition-all duration-300
                                                    text-neutral-300 bg-white/5 border border-white/10
                                                    lg:group-hover:text-purple-300 lg:group-hover:bg-purple-500/20 lg:group-hover:border-purple-500/30"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 lg:group-hover:bg-gradient-to-r lg:group-hover:from-purple-500 lg:group-hover:to-pink-500 lg:group-hover:text-white lg:group-hover:border-transparent lg:group-hover:-rotate-45">
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

        {/* ================= ZONE 2: ENGINEERING (RESPONSIVE FIX) ================= */}
        <div className="w-full mt-20">
            <div className="flex items-center gap-4 mb-8 opacity-60">
                <Cpu size={24} className="text-purple-400" />
                <h4 className="text-xs md:text-sm font-bold tracking-widest text-white uppercase">
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
                         <div className="group relative w-full overflow-hidden rounded-[24px] bg-neutral-900/50 border border-white/5 lg:hover:border-purple-500/30 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-6 md:p-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">
                                <div className="flex items-center gap-6 w-full xl:max-w-2xl">
                                    <div className="hidden sm:flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-neutral-800 border border-white/10 text-purple-400 lg:group-hover:scale-110 lg:group-hover:bg-purple-500 lg:group-hover:text-white transition-all duration-300">
                                        <Plug size={32} strokeWidth={1.5} /> 
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h4 className="text-2xl font-bold text-white lg:group-hover:text-purple-300 transition-colors tracking-tight">
                                                {project.name}
                                            </h4>
                                            <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded text-neutral-400 bg-white/5 border border-white/10">
                                                {project.type}
                                            </span>
                                        </div>
                                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-medium">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
                                    <a 
                                        href={project.figmaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 w-full sm:w-auto flex items-center justify-center gap-2 px-8 rounded-xl bg-white text-black font-bold text-sm hover:bg-purple-400 hover:text-white transition-all duration-300 whitespace-nowrap tracking-wide"
                                    >
                                        <ExternalLink size={16} /> Try in Figma
                                    </a>
                                    <a 
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 w-full sm:w-auto flex items-center justify-center gap-2 px-8 rounded-xl bg-neutral-800 border border-neutral-700 text-neutral-300 font-bold text-sm hover:border-white hover:text-white transition-all duration-300 whitespace-nowrap tracking-wide"
                                    >
                                        <Github size={16} /> View Code
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