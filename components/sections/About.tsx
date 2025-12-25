"use client";
import { motion } from "framer-motion";
import { Zap, Feather, Code2 } from "lucide-react"; 
import { AboutBackground } from "../ui/AboutBackground"; 

export const About = () => {
    const skills = [
        { 
            title: "Design Intuition", 
            icon: Feather, 
            color: "text-amber-500",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20",
            description: "Turning raw concepts into interactive, high-fidelity experiences (Figma, Prototyping).",
        },
        { 
            title: "Vibe Coding", 
            icon: Code2, 
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20",
            description: "Using AI tools to assist with design-to-code exploration and rapid prototyping.",
        },
        { 
            title: "Creative Catalyst", 
            icon: Zap, 
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20",
            description: "Music, sketching, and curiosity—the essential fuel for original design thinking.",
        },
    ];

    return (
        <motion.section 
            id="about" 
            // CHANGE: Added 'pt-24' (96px) for top spacing. Kept 'pb-32'.
            className="relative w-full pt-24 pb-32 scroll-mt-32 overflow-hidden" 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            
            <AboutBackground /> 

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10 flex flex-col gap-16 lg:flex-row lg:items-start"> 
                
                {/* Left Column: Typography */}
                <div className="lg:w-1/2 pt-8">
                    <motion.h2 
                        className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        LEARNING BY DOING
                    </motion.h2>
                    
                    <motion.h3 
                        className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1]"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        I build experiences that <span className="text-amber-500">feel alive.</span>
                    </motion.h3>

                    <motion.div 
                        className="mt-10 space-y-6 text-lg text-neutral-400 leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p>
                            <strong className="text-white">Naval Sharma</strong> is a UI/UX Designer who bridges the gap between vision and execution. I specialize in blending sharp design principles with <strong className="text-white">front-end capabilities</strong> to deliver tangible, flawlessly executed digital experiences.
                        </p>
                        <p>
                            My work is driven by a dual passion for <strong className="text-white">rhythm</strong> and <strong className="text-white">structure</strong>. This unique combination fuels my approach to problem-solving and ensures my designs are always infused with life.
                        </p>
                    </motion.div>
                </div>

                {/* Right Column: Solid Cards */}
                <div className="lg:w-1/2">
                    <div className="grid grid-cols-1 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden rounded-[24px] border border-white/5 bg-neutral-900 p-8 transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:translate-y-[-4px]"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:items-start">
                                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${skill.bg} ${skill.border} ${skill.color}`}>
                                        <skill.icon size={26} />
                                    </div>
                                    
                                    <div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                                            {skill.title}
                                        </h4>
                                        <p className="mt-2 text-base text-neutral-400 leading-relaxed">
                                            {skill.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};