"use client";
import { motion } from "framer-motion";
import { Zap, Feather, Code2 } from "lucide-react"; 
import { AboutBackground } from "../ui/AboutBackground";
// ✅ Import Atropos
import Atropos from 'atropos/react';
import 'atropos/css';

export const About = () => {
    const skills = [
        { 
            title: "Design Intuition", 
            icon: Feather, 
            // THEME UPDATE: Purple
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20",
            description: "Turning raw chaos into clean, high-fidelity interfaces in Figma.",
        },
        { 
            title: "Vibe Coding", 
            icon: Code2, 
            // THEME UPDATE: Pink
            color: "text-pink-400",
            bg: "bg-pink-500/10",
            border: "border-pink-500/20",
            description: "Bridging the gap between design and React with AI-assisted workflows.",
        },
        { 
            title: "Sonic Thinking", 
            icon: Zap, 
            // THEME UPDATE: Violet (to keep variety but stay in theme)
            color: "text-violet-400",
            bg: "bg-violet-500/10",
            border: "border-violet-500/20",
            description: "Rhythm and flow aren't just for music—they define good UX.",
        },
    ];

    return (
        <section id="about" className="relative w-full py-32 overflow-hidden bg-neutral-950">
            
            {/* Background Text */}
            <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
                <h1 className="text-[20vw] font-bold text-white whitespace-nowrap leading-none tracking-tighter">
                    THE PROCESS
                </h1>
            </div>

            <AboutBackground /> 

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    
                    {/* --- LEFT: Bio --- */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* THEME UPDATE: Badge color */}
                            <span className="inline-block py-1 px-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
                                Who I Am
                            </span>
                            <h2 className="text-5xl md:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
                                Design isn't just <br />
                                <span className="text-neutral-600">how it looks.</span>
                            </h2>
                        </motion.div>

                        <motion.div 
                            className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <p>
                                I'm <span className="text-white font-medium">Naval Sharma</span>. I don't just push pixels; I build systems. 
                                My work sits at the intersection of <span className="text-purple-400">aesthetic precision</span> and <span className="text-pink-400">engineering reality</span>.
                            </p>
                            <p>
                                Whether it's composing a melody or refactoring a component, I believe everything has a rhythm. 
                                My goal is to make digital experiences feel less like "using a computer" and more like an extension of thought.
                            </p>
                        </motion.div>
                    </div>

                    {/* --- RIGHT: 3D ATROPOS CARDS --- */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className="h-40 w-full"
                            >
                                <Atropos
                                    className="w-full h-full rounded-[24px]"
                                    activeOffset={40}
                                    shadowScale={1.05}
                                >
                                    {/* The Card Background */}
                                    <div className="w-full h-full p-6 bg-neutral-900/80 border border-white/5 rounded-[24px] flex items-center gap-5 relative overflow-hidden group">
                                        
                                        {/* Layer 0: Background Gradient (Dynamic based on skill color) */}
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${skill.color.replace('text-', 'from-')} to-transparent`} />

                                        {/* Layer 1: Icon */}
                                        <div 
                                            data-atropos-offset="5"
                                            className={`p-4 rounded-2xl bg-neutral-950 border border-white/10 ${skill.color} shadow-2xl`}
                                        >
                                            <skill.icon size={28} />
                                        </div>

                                        {/* Layer 2: Text */}
                                        <div data-atropos-offset="2">
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {skill.title}
                                            </h3>
                                            <p className="text-neutral-400 text-sm leading-relaxed">
                                                {skill.description}
                                            </p>
                                        </div>

                                        {/* Layer 3: Decorative Blur */}
                                        <div 
                                            data-atropos-offset="-5"
                                            className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full ${skill.bg} blur-[40px] opacity-50`} 
                                        />
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