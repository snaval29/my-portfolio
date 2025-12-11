"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Twitter, Instagram, Dribbble, Github } from "lucide-react"; 
import { ContactBackground } from "../ui/ContactBackground"; 

// ============================================================================
// 🔗 SOCIAL LINKS CONFIGURATION
// Paste your actual profile URLs inside the quotes below.
// ============================================================================
const socialLinks = [
    { 
        icon: Dribbble, 
        href: "https://dribbble.com/snaval", 
        label: "Dribbble" 
    },
    { 
        icon: Linkedin, 
        href: "https://www.linkedin.com/in/snaval29/", 
        label: "LinkedIn" 
    },
    { 
        icon: Twitter, 
        href: "https://x.com/snaval001", 
        label: "Twitter" 
    },
    { 
        icon: Instagram, 
        href: "https://www.instagram.com/naval_sha.rma/", 
        label: "Instagram" 
    },
    { 
        icon: Github, 
        href: "https://github.com/snaval29", 
        label: "GitHub" 
    },
    { 
        icon: Mail, 
        href: "mailto:snaval294@gmail.com", 
        label: "Email" 
    },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative w-full pt-32 pb-16 px-4 md:px-10 overflow-hidden bg-transparent scroll-mt-32">
      
      <div className="absolute inset-0 z-0">
        <ContactBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
            <motion.h2 
                className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Contact
            </motion.h2>
            <motion.h3 
                className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                Let's start a <span className="font-serif italic text-neutral-500">Project.</span>
            </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* --- LEFT: Info Cards --- */}
            <div className="lg:col-span-2 flex flex-col gap-6">
                
                {/* Social Grid */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[24px] border border-white/10 bg-neutral-900/80 p-8 backdrop-blur-xl shadow-2xl"
                >
                    <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-6">Find me on</h4>
                    
                    {/* ICON GRID */}
                    <div className="grid grid-cols-3 gap-4">
                        {socialLinks.map((item, i) => (
                            <a 
                                key={i} 
                                href={item.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className="group flex aspect-square items-center justify-center rounded-2xl bg-neutral-800/50 border border-white/5 transition-all duration-300 hover:bg-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            >
                                {/* ICON ANIMATION: Scale up & Tilt on Hover */}
                                <item.icon 
                                    size={32} // Increased Size
                                    className="text-neutral-400 transition-all duration-300 group-hover:scale-125 group-hover:-rotate-6 group-hover:text-black" 
                                />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Email Card */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex-1 rounded-[24px] border border-white/10 bg-neutral-900/80 p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-center"
                >
                    <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">Reach me</h4>
                    <p className="text-white text-lg font-medium mb-6">Got a project? Drop me a line.</p>
                    <a href="mailto:snaval294@gmail.com" className="flex items-center justify-between rounded-xl bg-neutral-800/50 px-5 py-4 border border-white/5 transition-all hover:border-amber-500/50 hover:bg-neutral-800 group cursor-pointer">
                        <span className="font-mono text-sm text-amber-500">snaval294@gmail.com</span>
                        <ArrowRight size={18} className="text-neutral-500 group-hover:text-amber-500 transition-colors" />
                    </a>
                </motion.div>
            </div>

            {/* --- RIGHT: The Form --- */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3 rounded-[24px] border border-white/10 bg-neutral-900/80 p-8 md:p-10 backdrop-blur-xl shadow-2xl"
            >
                <form className="flex flex-col gap-6">
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-neutral-400 ml-1 uppercase tracking-wide">Name</label>
                        <input type="text" placeholder="John Doe" className="w-full rounded-xl bg-neutral-800/50 border border-white/5 px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-neutral-400 ml-1 uppercase tracking-wide">Email</label>
                        <input type="email" placeholder="john@example.com" className="w-full rounded-xl bg-neutral-800/50 border border-white/5 px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-neutral-400 ml-1 uppercase tracking-wide">Message</label>
                        <textarea rows={4} placeholder="Tell me about your project..." className="w-full resize-none rounded-xl bg-neutral-800/50 border border-white/5 px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" />
                    </div>

                    <button type="button" className="mt-4 w-full rounded-xl bg-white text-black font-bold text-lg py-4 transition-transform hover:scale-[1.01] hover:bg-amber-400 active:scale-[0.99] shadow-lg hover:shadow-amber-500/25">
                        Send Message
                    </button>
                </form>
            </motion.div>

        </div>
        
        {/* Footer Text */}
        <div className="mt-12 text-center border-t border-white/5 pt-8">
            <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Naval.wav. Design driven by vibe.</p>
        </div>
      </div>
    </section>
  );
};