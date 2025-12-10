"use client";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
      
      {/* 1. Vertical Glass Grid Lines (The "Side Elements/Curtains") */}
      {/* This creates faint vertical lines every 6rem (approx 96px) */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px)',
          backgroundSize: '8rem 100%', // Spacing of the grid lines
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)', // Fades in from top
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)'
        }}
      />

      {/* 2. The Warm Bottom Glow (Savo Style) */}
      <div className="absolute bottom-0 left-0 right-0 h-[80vh] w-full bg-gradient-to-t from-orange-900/40 via-amber-900/10 to-transparent blur-3xl" />
      
      {/* 3. Central Intense Spotlight (The "Sun" effect at the bottom) */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-orange-600/20 blur-[120px]" />

      {/* 4. Vignette (Darkens the corners to focus center) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80" />
    </div>
  );
};