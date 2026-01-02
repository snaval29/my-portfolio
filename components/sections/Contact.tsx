"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Twitter, Instagram, Dribbble, Github } from "lucide-react"; 
import { ContactBackground } from "../ui/ContactBackground";

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
    <section id="contact" className="relative w-full pt-32 pb-16 px-4 md:px-10 overflow-hidden bg-neutral-950 scroll-mt-32">
      
      {/* ✅ Optimized Background (CSS-based) */}
      <ContactBackground />

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
            <motion.h2 
                className="text-sm font-bold tracking-[0.2em] text-purple-400 uppercase"
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
                Let's start a <span className="font-serif italic text-pink-300">Project.</span>
            </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* --- LEFT SIDE --- */}
            <div className="lg:col-span-2 flex flex-col gap-6">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[24px] border border-purple-500/10 bg-neutral-900/80 p-8 shadow-[0_0_30px_-10px_rgba(168,85,247,0.1)] backdrop-blur-sm"
                >
                    <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-6">Find me on</h4>
                    <div className="grid grid-cols-3 gap-4">
                        {socialLinks.map((item, i) => (
                            <a 
                                key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                                className="group flex aspect-square items-center justify-center rounded-2xl bg-neutral-800/50 border border-purple-500/10 transition-colors hover:bg-purple-500 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                            >
                                <item.icon size={28} className="text-neutral-400 transition-transform group-hover:scale-110 group-hover:text-white" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 rounded-[24px] border border-purple-500/10 bg-neutral-900/80 p-8 shadow-[0_0_30px_-10px_rgba(168,85,247,0.1)] backdrop-blur-sm flex flex-col justify-center"
                >
                    <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">Reach me</h4>
                    <p className="text-white text-lg font-medium mb-6">Got a project? Drop me a line.</p>
                    <a href="mailto:snaval294@gmail.com" className="flex items-center justify-between rounded-xl bg-neutral-800/50 px-5 py-4 border border-purple-500/10 transition-colors hover:border-purple-500/50 hover:bg-neutral-800 group cursor-pointer">
                        <span className="font-mono text-sm text-purple-400">snaval294@gmail.com</span>
                        <ArrowRight size={18} className="text-neutral-500 group-hover:text-purple-400 transition-colors" />
                    </a>
                </motion.div>
            </div>

            {/* --- RIGHT SIDE: FORM --- */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3 rounded-[24px] border border-purple-500/10 bg-neutral-900/80 p-8 md:p-10 shadow-[0_0_30px_-10px_rgba(168,85,247,0.1)] backdrop-blur-sm"
            >
                <form className="flex flex-col gap-8">
                    
                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wide mb-2">Name</label>
                        <input type="text" placeholder="John Doe" className="w-full rounded-xl bg-neutral-800/50 border border-purple-500/10 px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-neutral-800/80 transition-all placeholder:text-neutral-600" />
                    </div>
                    
                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wide mb-2">Email</label>
                        <input type="email" placeholder="john@example.com" className="w-full rounded-xl bg-neutral-800/50 border border-purple-500/10 px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-neutral-800/80 transition-all placeholder:text-neutral-600" />
                    </div>
                    
                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wide mb-2">Message</label>
                        <textarea rows={4} placeholder="Tell me about your project..." className="w-full resize-none rounded-xl bg-neutral-800/50 border border-purple-500/10 px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-neutral-800/80 transition-all placeholder:text-neutral-600" />
                    </div>

                    <button 
                        type="button" 
                        className="group relative inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-xl p-[1px] bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                    >
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-neutral-950/80 px-8 text-lg font-bold text-white backdrop-blur-md transition-colors group-hover:bg-neutral-950/60">
                            Send Message
                        </span>
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