"use client";

export const ContactBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-neutral-950">
      
      <style jsx>{`
        @keyframes blob-float-1 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(30px, -30px, 0) scale(1.1); }
        }
        @keyframes blob-float-2 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-30px, 30px, 0) scale(1.2); }
        }
        .animate-blob-1 {
          animation: blob-float-1 20s ease-in-out infinite;
        }
        .animate-blob-2 {
          animation: blob-float-2 25s ease-in-out infinite;
        }
      `}</style>

      {/* Dim Corner Gradients (GPU Accelerated) */}
      <div className="absolute inset-0 z-0 transform-gpu">
         {/* Top Right - Dim Purple */}
         <div className="animate-blob-1 absolute -top-[30%] -right-[30%] h-[800px] w-[800px] rounded-full bg-purple-900/10 blur-[120px] will-change-transform" />

         {/* Bottom Left - Dim Pink */}
         <div className="animate-blob-2 absolute -bottom-[30%] -left-[30%] h-[800px] w-[800px] rounded-full bg-pink-950/10 blur-[120px] will-change-transform" />
      </div>

      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] z-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" 
        style={{ mixBlendMode: "overlay" }}
      />
    </div>
  );
};