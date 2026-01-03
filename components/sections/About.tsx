"use client";
import { motion } from "framer-motion";
import { Mic, Palette, Terminal } from "lucide-react"; 
import { AboutBackground } from "../ui/AboutBackground";
import Atropos from 'atropos/react';
import 'atropos/css';

export const About = () => {
    const skills = [
        { 
            title: "Design & Motion", 
            icon: Palette, 
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            description: "Figma (UI/UX), Framer (Web), Spline (3D), Rive & Lottiefy.",
        },
        { 
            title: "Engineering", 
            icon: Terminal, 
            color: "text-pink-400",
            bg: "bg-pink-500/10",
            description: "Python, Django, Node.js, SAS Model Studio, AWS, Vibe Coding.",
        },
        { 
            title: "Vocalist", 
            icon: Mic, 
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            description: "Finding the rhythm in logic. Interfaces that feel musical, not mechanical.",
        },
    ];

    return (
        <section id="about" className="relative w-full py-20 md:py-32 overflow-hidden bg-neutral-950 font-sans">
            
            <AboutBackground /> 

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="py-1 px-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                    Designer
                                </span>
                                <span className="py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                    Vocalist
                                </span>
                                <span className="py-1 px-3 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                    Engineer
                                </span>
                            </div>

                            {/* Font size 4xl -> 7xl */}
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white leading-[1.1] tracking-tighter">
                                I treat code like <br />
                                <span className="text-neutral-600">sheet music.</span>
                            </h2>
                        </motion.div>

                        <motion.div 
                            className="text-base sm:text-lg md:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <p>Most see design and logic as opposites. I see them as <span className="text-white font-medium">rhythm and structure</span>.</p>
                            <p>Currently finishing my Master's in AI/ML at <span className="text-white">Chandigarh University</span>.</p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="pt-8 mt-4 border-t border-white/10 flex items-center gap-4"
                        >
                             <div className="h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center font-bold text-lg md:text-xl bg-neutral-950 border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]">N</div>
                            <div>
                                <p className="text-white font-bold text-base md:text-lg leading-none mb-1 tracking-tight">Naval Sharma</p>
                                <p className="text-neutral-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">Chandigarh University</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT CONTENT - ATROPOS CARDS */}
                    <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6 w-full">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                // pointer-events-none disables touch on mobile, auto enables hover on desktop
                                className="w-full h-auto md:h-40 pointer-events-none lg:pointer-events-auto"
                            >
                                <Atropos
                                    className="w-full h-full rounded-[24px]"
                                    activeOffset={40}
                                    shadowScale={1.05}
                                >
                                    <div className="w-full h-full p-5 md:p-6 bg-neutral-900/80 border border-white/5 rounded-[24px] flex flex-row items-center gap-4 md:gap-5 relative overflow-hidden">
                                        
                                        {/* Hover Gradient */}
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${skill.color.replace('text-', 'from-')} to-transparent`} />

                                        <div className={`flex-shrink-0 p-3 md:p-4 rounded-2xl bg-neutral-950 border border-white/10 ${skill.color} shadow-2xl`}>
                                            <skill.icon size={24} className="md:w-[28px] md:h-[28px]" />
                                        </div>

                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 tracking-tight">{skill.title}</h3>
                                            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed font-medium">{skill.description}</p>
                                        </div>
                                    </div>
                                </Atropos>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};