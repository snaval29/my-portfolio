import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { BentoGallery } from "@/components/sections/BentoGallery";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-neutral-950 font-sans selection:bg-amber-500/30">
      
      <Navbar />
      
      <Hero />
      
      {/* ❌ DELETED: <div className="mt-24"></div> - This was causing the gap! */}
      
      <About />
      
      <Work />
      
      <BentoGallery />
      
      <Contact />
      
    </main>
  );
}