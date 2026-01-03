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
    // ✅ Applied font-sans
    <section id="contact" className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-neutral-950 scroll-mt-32 font-sans">
      
      <ContactBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header - Typography Scaled */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
            <motion.h2 
                className="text-xs md:text-sm font-bold tracking-widest text-purple-400 uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Contact
            </motion.h2>
            <motion.h3 
                className="mt-4 text-4xl md:text-7xl font-semibold tracking-tighter text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                Let's start a <span className="font-serif italic text-pink-300">Project.</span>
            </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* --- LEFT SIDE: SOCIALS & EMAIL --- */}
            <div className="lg:col-span-2 flex flex-col gap-6">
                
                {/* Social Grid */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[24px] border border-white/5 bg-neutral-900/50 p-6 md:p-8 backdrop-blur-md"
                >
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">Find me on</h4>
                    <div className="grid grid-cols-3 gap-3 md:gap-4">
                        {socialLinks.map((item, i) => (
                            <a 
                                key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                                className="group flex aspect-square items-center justify-center rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 hover:bg-purple-500 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                            >
                                <item.icon size={24} className="text-neutral-400 transition-transform group-hover:scale-110 group-hover:text-white" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Email Box */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex-1 rounded-[24px] border border-white/5 bg-neutral-900/50 p-6 md:p-8 backdrop-blur-md flex flex-col justify-center"
                >
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Reach me</h4>
                    <p className="text-white text-base md:text-lg font-medium mb-6">Got a project? Drop me a line.</p>
                    <a href="mailto:snaval294@gmail.com" className="flex items-center justify-between rounded-xl bg-black/40 px-5 py-4 border border-white/5 transition-colors hover:border-purple-500/50 hover:bg-neutral-900 group cursor-pointer">
                        <span className="font-mono text-xs md:text-sm text-purple-400 truncate mr-2">snaval294@gmail.com</span>
                        <ArrowRight size={18} className="text-neutral-500 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                    </a>
                </motion.div>
            </div>

            {/* --- RIGHT SIDE: FORM --- */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-3 rounded-[24px] border border-white/5 bg-neutral-900/50 p-6 md:p-10 backdrop-blur-md"
            >
                <form className="flex flex-col gap-6 md:gap-8">
                    
                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">Name</label>
                        <input 
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-neutral-900 transition-all placeholder:text-neutral-700 font-medium" 
                        />
                    </div>
                    
                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">Email</label>
                        <input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-neutral-900 transition-all placeholder:text-neutral-700 font-medium" 
                        />
                    </div>
                    
                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">Message</label>
                        <textarea 
                            rows={4} 
                            placeholder="Tell me about your project..." 
                            className="w-full resize-none rounded-xl bg-black/40 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-neutral-900 transition-all placeholder:text-neutral-700 font-medium" 
                        />
                    </div>

                    <button 
                        type="button" 
                        className="group relative inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-white text-black font-bold text-sm tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Send Message
                    </button>

                </form>
            </motion.div>

        </div>
        
        {/* Footer */}
        <div className="mt-16 text-center border-t border-white/5 pt-8">
            <p className="text-xs md:text-sm text-neutral-600 font-medium">© {new Date().getFullYear()} Naval.wav. Design driven by vibe.</p>
        </div>
      </div>
    </section>
  );
};