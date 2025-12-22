import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
// ❌ REMOVED: import { BentoGallery } from "@/components/sections/BentoGallery";
import { WorkCarousel } from "@/components/sections/WorkCarousel"; // ✅ NEW IMPORT
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-neutral-950 font-sans selection:bg-amber-500/30">
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Me */}
      <About />
      
      {/* Main Selected Projects (e.g., DaalChinni, KIF) */}
      <Work />
      
      {/* ✅ NEW: Horizontal Infinite Scroll (Replaces Bento Grid) */}
      <WorkCarousel />
      
      {/* Contact Section */}
      <Contact />
      
    </main>
  );
}