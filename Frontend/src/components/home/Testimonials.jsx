import React from "react";
import { Quote, Star, UserCheck } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CTO @ FinEdge",
    content:
      "360kavach transformed our legacy systems into a modern, scalable architecture. The ROI was evident effectively instantly.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Director @ LogiStream",
    content:
      "Outstanding technical expertise. They engineered a solution that optimized our entire supply chain workflow.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder @ HealthVantage",
    content:
      "HIPAA-compliant, secure, and incredibly user-friendly. The team understood our compliance needs deeply.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "VP Eng @ CloudScale",
    content:
      "We moved from monthly deployments to daily releases with zero downtime. Simply incredible.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 5,
    name: "Michael Chang",
    role: "Architect @ DataFlow",
    content:
      "Top-tier code quality. The most professional dev team we've worked with hands down.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 6,
    name: "Anita Patel",
    role: "CPO @ InnovateX",
    content:
      "True partners in product development. Our user engagement tripled after the redesign.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 7,
    name: "Robert Fox",
    role: "CEO @ TechCorp",
    content:
      "The scalability they built into our core product allowed us to handle 10x traffic during launch week.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 8,
    name: "Lisa Wong",
    role: "Head of Product @ SoftSys",
    content:
      "Their design-first approach made our complex data look simple and actionable. Beautiful work.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 9,
    name: "Marcus Johnson",
    role: "Ops Lead @ SecureNet",
    content:
      "Security was our #1 concern. 360kavach delivered a fortress without compromising usability.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const Testimonials = () => {
  return (
    <SectionWrapper
      background="transparent"
      className="py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/3 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
              <UserCheck className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-primary-400 font-medium">
                Happy Clients
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              We don't just build software. <br />
              <span className="text-slate-500">We build legacies.</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              Read why forward-thinking companies trust 360kavach to handle
              their most critical digital transformations.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-navy-900 bg-slate-700 overflow-hidden"
                  >
                    <img
                      src={`https://randomuser.me/api/portraits/men/${
                        i + 20
                      }.jpg`}
                      alt="User"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold text-white">
                500+{" "}
                <span className="text-slate-500 font-normal">
                  Projects Delivered
                </span>
              </div>
            </div>
          </div>

          {/* Right Content: Vertical Wall of Love */}
          <div className="w-full md:w-2/3 h-[400px] sm:h-[600px] overflow-hidden relative mask-gradient-y">
            {/* Gradient Masks for smooth top/bottom fade */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-navy-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-navy-950 to-transparent z-20 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
              {/* Column 1 - Down Slow */}
              <MarqueeColumn
                testimonials={testimonials.slice(0, 3)}
                speed="40s"
                direction="normal"
              />

              {/* Column 2 - Up Normal (Hidden on mobile) */}
              <div className="hidden sm:block">
                <MarqueeColumn
                  testimonials={testimonials.slice(3, 6)}
                  speed="35s"
                  direction="reverse"
                />
              </div>

              {/* Column 3 - Down Slow (Hidden on Tablet) */}
              <div className="hidden lg:block">
                <MarqueeColumn
                  testimonials={testimonials.slice(6, 9)}
                  speed="45s"
                  direction="normal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-y {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); } 
        }
        .animate-scroll-y {
          animation: scroll-y linear infinite;
        }
        .pause-hover:hover {
            animation-play-state: paused;
        }
      `}</style>
    </SectionWrapper>
  );
};

const MarqueeColumn = ({ testimonials, speed, direction }) => {
  // Duplicate for infinite effect
  const items = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className="animate-scroll-y flex flex-col gap-6"
        style={{
          animationDuration: speed,
          animationDirection: direction,
        }}
      >
        {items.map((t, i) => (
          <Card key={`${t.id}-${i}`} data={t} />
        ))}
      </div>
      {/* Hover Overlay to pause the WHOLE column - applying pause class to parent via css selector logic or direct on element */}
      <div className="absolute inset-0 z-10 opacity-0 hover:opacity-100 transition-opacity" />
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 rounded-xl bg-navy-900/60 border border-white/5 backdrop-blur-sm hover:border-primary-500/40 hover:bg-navy-800 transition-all duration-300 group cursor-default">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-white text-xs font-bold">{data.name}</h4>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider">
              {data.role}
            </p>
          </div>
        </div>
        <Quote size={14} className="text-primary-500/50" />
      </div>

      <p className="text-slate-300 text-sm leading-relaxed mb-3">
        "{data.content}"
      </p>

      <div className="flex space-x-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={10} className="fill-primary-400 text-primary-400" />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
