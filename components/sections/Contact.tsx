"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Twitter, Instagram, Dribbble, Github } from "lucide-react"; 

const socialLinks = [
    { icon: Dribbble, href: "https://dribbble.com/snaval", label: "Dribbble" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/snaval29/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/snaval001", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/naval_sha.rma/", label: "Instagram" },
    { icon: Github, href: "https://github.com/snaval29", label: "GitHub" },
    { icon: Mail, href: "mailto:snaval294@gmail.com", label: "Email" },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative w-full pt-32 pb-16 px-4 md:px-10 overflow-hidden bg-black scroll-mt-32">
      
      {/* =========================================
          BACKGROUND LAYER
      ========================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         
         {/* 1. FLOATING ORBS (GPU Animated) */}
         <motion.div 
            animate={{ 
                x: [0, 100, 0], 
                y: [0, -50, 0],
                scale: [1, 1.2, 1]
            }}
            transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
            }}
            className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-amber-600/20 blur-[120px] will-change-transform" 
         />
         
         <motion.div 
            animate={{ 
                x: [0, -100, 0], 
                y: [0, 50, 0],
                scale: [1, 1.1, 1]
            }}
            transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
            }}
            className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-orange-800/20 blur-[120px] will-change-transform" 
         />

         {/* 2. CORNER GRIDS (Low Opacity) */}
         
         {/* Top Right Corner Grid */}
         <div 
            className="absolute top-0 right-0 w-[50vh] h-[50vh] opacity-20"
            style={{ 
                backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(circle at top right, black, transparent 80%)'
            }}
         />

         {/* Bottom Left Corner Grid */}
         <div 
            className="absolute bottom-0 left-0 w-[50vh] h-[50vh] opacity-20"
            style={{ 
                backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(circle at bottom left, black, transparent 80%)'
            }}
         />
         
      </div>

      {/* =========================================
          CONTENT LAYER
      ========================================= */}
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
            >
                Let's start a <span className="font-serif italic text-amber-200">Project.</span>
            </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* --- LEFT SIDE --- */}
            <div className="lg:col-span-2 flex flex-col gap-6">
                
                {/* Social Grid */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[24px] border border-amber-500/10 bg-neutral-900/80 p-8 shadow-[0_0_30px_-10px_rgba(245,158,11,0.1)] backdrop-blur-sm"
                >
                    <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-6">Find me on</h4>
                    <div className="grid grid-cols-3 gap-4">
                        {socialLinks.map((item, i) => (
                            <a 
                                key={i} 
                                href={item.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group flex aspect-square items-center justify-center rounded-2xl bg-neutral-800/50 border border-amber-500/10 transition-colors hover:bg-amber-500 hover:border-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                            >
                                <item.icon 
                                    size={28} 
                                    className="text-neutral-400 transition-transform group-hover:scale-110 group-hover:text-black" 
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
                    className="flex-1 rounded-[24px] border border-amber-500/10 bg-neutral-900/80 p-8 shadow-[0_0_30px_-10px_rgba(245,158,11,0.1)] backdrop-blur-sm flex flex-col justify-center"
                >
                    <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">Reach me</h4>
                    <p className="text-white text-lg font-medium mb-6">Got a project? Drop me a line.</p>
                    <a href="mailto:snaval294@gmail.com" className="flex items-center justify-between rounded-xl bg-neutral-800/50 px-5 py-4 border border-amber-500/10 transition-colors hover:border-amber-500/50 hover:bg-neutral-800 group cursor-pointer">
                        <span className="font-mono text-sm text-amber-500">snaval294@gmail.com</span>
                        <ArrowRight size={18} className="text-neutral-500 group-hover:text-amber-500 transition-colors" />
                    </a>
                </motion.div>
            </div>

            {/* --- RIGHT SIDE: FORM --- */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3 rounded-[24px] border border-amber-500/10 bg-neutral-900/80 p-8 md:p-10 shadow-[0_0_30px_-10px_rgba(245,158,11,0.1)] backdrop-blur-sm"
            >
                <form className="flex flex-col gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-neutral-400 ml-1 uppercase tracking-wide">Name</label>
                        <input type="text" placeholder="John Doe" className="w-full rounded-xl bg-neutral-800/50 border border-amber-500/10 px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:bg-neutral-800/80 transition-all placeholder:text-neutral-600" />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-neutral-400 ml-1 uppercase tracking-wide">Email</label>
                        <input type="email" placeholder="john@example.com" className="w-full rounded-xl bg-neutral-800/50 border border-amber-500/10 px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:bg-neutral-800/80 transition-all placeholder:text-neutral-600" />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-neutral-400 ml-1 uppercase tracking-wide">Message</label>
                        <textarea rows={4} placeholder="Tell me about your project..." className="w-full resize-none rounded-xl bg-neutral-800/50 border border-amber-500/10 px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:bg-neutral-800/80 transition-all placeholder:text-neutral-600" />
                    </div>

                    <button type="button" className="mt-4 w-full rounded-xl bg-white text-black font-bold text-lg py-4 hover:bg-amber-400 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg hover:shadow-amber-500/25">
                        Send Message
                    </button>
                </form>
            </motion.div>

        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center border-t border-white/5 pt-8">
            <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Naval.wav. Design driven by vibe.</p>
        </div>
      </div>
    </section>
  );
};