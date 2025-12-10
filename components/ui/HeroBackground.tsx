"use client";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
      
      {/* 1. The Glass Grid (Enhanced Visibility) */}
      <div className="absolute inset-0 z-0 flex justify-center">
        {/* We use a repeating gradient to create distinct 'panes' */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent 0,
                transparent 12rem,
                rgba(255, 255, 255, 0.03) 12rem,
                rgba(255, 255, 255, 0.03) calc(12rem + 1px)
              )
            `,
            maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)', // Fades out at bottom to blend with glow
            WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
          }}
        />
        
        {/* 2. Vertical Light Pillars (Simulating Glass Reflection) */}
        {/* Left Pillar */}
        <div className="absolute left-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-50" />
        {/* Right Pillar */}
        <div className="absolute right-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-50" />
      </div>

      {/* 3. The Warm Bottom Glow (Intensified) */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] w-full bg-gradient-to-t from-orange-950 via-amber-950/50 to-transparent blur-3xl opacity-80" />
      
      {/* 4. Central Spotlight (The 'Sun') */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 h-[500px] w-[80vw] max-w-[1000px] rounded-[100%] bg-orange-600/30 blur-[100px]" />

      {/* 5. Noise Texture (Optional, adds realism) */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};