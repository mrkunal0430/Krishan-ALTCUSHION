import React from 'react';

const FuturisticGridBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#020c1b]">
      {/* 1. Deep Atmospheric Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[120px] mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/10 blur-[120px] mix-blend-screen" />
      
      {/* 2. CLEAR ISOMETRIC GRID (The "Bright" Color applied globally) */}
      {/* We use the brighter cyan tokens found in the previous "highlight" layer to make the entire grid clear and visible. */}
      <div className="absolute inset-0 w-full h-full">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="isometric-cubes-clear" x="0" y="0" width="40" height="68" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
               {/* Using the 'Bright' colors from the previous animation, but applied statically */}
               {/* Top Face */}
               <path d="M20 0 L40 10 L20 20 L0 10 Z" fill="rgba(100, 255, 218, 0.03)" stroke="rgba(100, 255, 218, 0.3)" strokeWidth="0.5" />
               {/* Right Face */}
               <path d="M40 10 L40 34 L20 44 L20 20 Z" fill="rgba(50, 150, 255, 0.02)" stroke="rgba(50, 150, 255, 0.25)" strokeWidth="0.5" />
               {/* Left Face */}
               <path d="M0 10 L20 20 L20 44 L0 34 Z" fill="rgba(50, 150, 255, 0.02)" stroke="rgba(50, 150, 255, 0.25)" strokeWidth="0.5" />
               
               {/* Staggered Row */}
               <g transform="translate(20, 34)">
                 <path d="M20 0 L40 10 L20 20 L0 10 Z" fill="rgba(100, 255, 218, 0.03)" stroke="rgba(100, 255, 218, 0.3)" strokeWidth="0.5" />
                 <path d="M40 10 L40 34 L20 44 L20 20 Z" fill="rgba(50, 150, 255, 0.02)" stroke="rgba(50, 150, 255, 0.25)" strokeWidth="0.5" />
                 <path d="M0 10 L20 20 L20 44 L0 34 Z" fill="rgba(50, 150, 255, 0.02)" stroke="rgba(50, 150, 255, 0.25)" strokeWidth="0.5" />
               </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#isometric-cubes-clear)" />
        </svg>
      </div>

      {/* 3. Frosted Glass Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 4. Vignette for improved text readability at center */}
      <div className="absolute inset-0 bg-radial-gradient-from-transparent-to-navy pointer-events-none" 
           style={{ background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(2, 12, 27, 0.5) 80%, rgba(2, 12, 27, 0.95) 100%) '}} />
    </div>
  );
};

export default FuturisticGridBackground;
