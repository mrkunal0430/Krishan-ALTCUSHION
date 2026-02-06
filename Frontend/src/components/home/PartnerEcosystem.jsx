import React, { useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';
import { Layers, Globe, Activity, Zap } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

// Real Data for Partners
const partners = [
  { id: 1, img: "/Partner_Companies/1.webp", size: "md", name: "Partner 1" },
  { id: 2, img: "/Partner_Companies/2.webp", size: "lg", name: "Partner 2" },
  { id: 3, img: "/Partner_Companies/3.webp", size: "sm", name: "Partner 3" },
  { id: 4, img: "/Partner_Companies/4.webp", size: "lg", name: "Partner 4" },
  { id: 5, img: "/Partner_Companies/5.webp", size: "md", name: "Partner 5" },
  { id: 6, img: "/Partner_Companies/6.webp", size: "sm", name: "Partner 12" },
  { id: 7, img: "/Partner_Companies/7.webp", size: "md", name: "Partner 13" },
  { id: 8, img: "/Partner_Companies/8.webp", size: "lg", name: "Partner 14" },
  { id: 9, img: "/Partner_Companies/9.webp", size: "md", name: "Partner 15" },
  { id: 10, img: "/Partner_Companies/10.webp", size: "lg", name: "Partner 16" },  
  { id: 11, img: "/Partner_Companies/11.webp", size: "lg", name: "Partner 16" },  


];

const PartnerEcosystem = () => {
  // Responsive Layout Logic
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // RIGHT-SIDE DENSE GRID LOGIC
  const positionedPartners = useMemo(() => {
    const total = partners.length;
    
    // settings based on device
    const cols = isMobile ? 2 : 3; 
    const colStep = isMobile ? 42 : 22; // Wider horizontal spread on mobile (2 cols)
    const rowStep = isMobile ? 13 : 16; // Tighter vertical packing on mobile (more rows)

    return partners.map((p, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      
      // Stagger logic
      const stagger = row % 2 === 0 ? 0 : (isMobile ? 15 : 10); 
      
      const left = (isMobile ? 5 : 10) + (col * colStep) + stagger; 
      const top = (isMobile ? 5 : 10) + (row * rowStep); 

      return { ...p, top: `${top}%`, left: `${left}%` };
    });
  }, [isMobile]);

  return (
    <SectionWrapper background="transparent" className="relative overflow-hidden py-24">
       {/* Ambient Backlighting (Right Side Focus) */}
       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

       <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
         
         {/* LEFT COLUMN: Content & Stats */}
         <div className="relative z-10 pr-8 lg:col-span-2">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="mb-10 text-left"
           >
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-snug">
               Powering the <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white pb-1">
                 Next Generation
               </span>
             </h2>
             <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-8">
               Trusted by technology leaders and high-growth startups to build scalable, secure digital infrastructure.
             </p>
             
             {/* Integrated Stats Row */}
             <div className="flex justify-start items-center space-x-8 border-t border-white/10 pt-8">
                <StatItem value={partners.length * 5} suffix="+" label="Integrations" />
                <div className="w-px h-10 bg-white/10" />
                <StatItem value={98} suffix="%" label="Retention" />
                <div className="w-px h-10 bg-white/10" />
                <StatItem value={24} suffix="" label="Countries" />
             </div>
           </motion.div>
         </div>

         {/* RIGHT COLUMN: Dense Staggered Grid */}
         <div className="relative w-full lg:col-span-3 h-[600px] lg:h-[500px]">
            {/* Background Texture for Grid area */}
            <div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent rounded-3xl -z-10 blur-3xl opacity-30" />

            <div className="absolute inset-0">
               {positionedPartners.map((item, index) => (
                  <FloatingCard 
                    key={index} 
                    partner={item} 
                    top={item.top} 
                    left={item.left} 
                    delay={index * 0.05} 
                    isMobile={isMobile}
                  />
               ))}
            </div>
         </div>

       </div>
    </SectionWrapper>
  );
};

const FloatingCard = ({ partner, top, left, delay, isMobile }) => {
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  // Interaction Logic (Game-like Pop on Mobile)
  const [isPopped, setIsPopped] = React.useState(false);

  // Fix: Memoize random duration to be pure
  const floatDuration = useMemo(() => 3 + Math.random() * 2, []);

  const handleTap = () => {
    if (isMobile) {
      setIsPopped(true);
      // Reappear after 1 second
      setTimeout(() => {
        setIsPopped(false);
      }, 1000);
    }
  };

  const handleMouseMove = (e) => {
    if (isMobile) return; // Disable tilt on mobile for better performance/touch handling
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 2);
    y.set((e.clientY - centerY) / 2);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
  };

  const isLg = partner.size === 'lg';
  const isSm = partner.size === 'sm';

  return (
    <motion.div
      className={`absolute cursor-pointer group z-10 ${isMobile ? 'touch-manipulation' : ''}`}
      style={{ 
        top, left, 
        rotateX, rotateY,
        perspective: 1000,
        // No translation center here to adhere to strict grid top/left
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay, type: 'spring', stiffness: 50 }}
      animate={{ 
        y: [0, -6, 0], 
      }}
      // Fixed: Use memoized duration
      transition={{ 
        y: { duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: delay } 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleTap}
    >
      <motion.div 
        animate={{ 
          scale: isPopped ? 0 : 1, 
          opacity: isPopped ? 0 : 1,
          rotate: isPopped ? 180 : 0
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className={`
          relative overflow-hidden rounded-full shadow-xl transition-all duration-300 
          bg-white hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]
          flex items-center justify-center border-4 border-white/50
          ${isLg ? 'w-28 h-28 p-4' : isSm ? 'w-16 h-16 p-2' : 'w-20 h-20 p-3'}
        `}
      >
        <img 
          src={partner.img} 
          alt="Partner Logo" 
          className="w-full h-full object-contain pointer-events-none" // pointer-events-none prevents img hijack
        />
        
        {/* Shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

const StatItem = ({ value, suffix, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref}>
      <div className="flex items-baseline text-2xl md:text-3xl font-display font-bold text-white mb-1">
        <motion.span>{rounded}</motion.span>
        <span className="text-primary-500 text-lg ml-0.5">{suffix}</span>
      </div>
      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{label}</div>
    </div>
  );
};

export default PartnerEcosystem;
