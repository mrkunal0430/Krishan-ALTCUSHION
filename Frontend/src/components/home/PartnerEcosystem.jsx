import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";

const partners = [
  { id: 1, img: "/Partner_Companies/1.webp", name: "Partner 1" },
  { id: 2, img: "/Partner_Companies/2.webp", name: "Conserv" },
  { id: 3, img: "/Partner_Companies/3.webp", name: "Partner 3" },
  { id: 4, img: "/Partner_Companies/4.webp", name: "Centle" },
  { id: 5, img: "/Partner_Companies/5.webp", name: "Partner 5" },
  { id: 6, img: "/Partner_Companies/6.webp", name: "Partner 6" },
  { id: 7, img: "/Partner_Companies/7.webp", name: "Partner 7" },
  { id: 8, img: "/Partner_Companies/8.webp", name: "Partner 8" },
  { id: 9, img: "/Partner_Companies/9.webp", name: "Partner 9" },
  { id: 10, img: "/Partner_Companies/10.webp", name: "Partner 10" },
  { id: 11, img: "/Partner_Companies/11.webp", name: "Partner 11" },
  { id: 12, img: "/Partner_Companies/12.webp", name: "AccuKnox" },
  { id: 13, img: "/Partner_Companies/13.webp", name: "Indusface" },
  { id: 14, img: "/Partner_Companies/14.webp", name: "Partner 14", dark: true },
  { id: 15, img: "/Partner_Companies/15.webp", name: "Be4Breach" },
  {
    id: 16,
    img: "/Partner_Companies/16.webp",
    name: "YourFearless",
    dark: true,
  },
  { id: 17, img: "/Partner_Companies/17.webp", name: "miniOrange" },
  { id: 18, img: "/Partner_Companies/18.webp", name: "Partner 18", dark: true },
  {
    id: 19,
    img: "/Partner_Companies/0c72b69ce2f14e62a2326f16ac36abe2.webp",
    name: "Sophos",
  },
];

const PartnerEcosystem = () => {
  return (
    <SectionWrapper
      background="transparent"
      className="relative overflow-hidden"
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10 md:mb-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full mb-5">
            Trusted Partners
          </span>
          <h2 className="text-2xl md:text-5xl font-display font-bold mb-4 leading-snug">
            Powering the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white">
              Next Generation
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Trusted by technology leaders and high-growth startups to build
            scalable, secure digital infrastructure.
          </p>
        </motion.div>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
        {partners.map((partner, i) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.03 }}
            className={`
              group flex items-center justify-center
              h-16 sm:h-20 md:h-24 rounded-xl p-2.5 sm:p-3 md:p-4
              transition-all duration-300
              hover:scale-[1.04] hover:-translate-y-0.5
              ${
                partner.dark
                  ? "bg-navy-800 border border-white/10 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/5"
                  : "bg-white/90 border border-white/20 hover:bg-white hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/5"
              }
            `}
          >
            <img
              src={partner.img}
              alt={partner.name}
              className="max-h-full max-w-full object-contain transition-opacity duration-300 opacity-80 group-hover:opacity-100"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
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
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-1">
        <motion.span>{rounded}</motion.span>
        <span className="text-primary-500 text-base sm:text-lg ml-0.5">
          {suffix}
        </span>
      </div>
      <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export default PartnerEcosystem;
