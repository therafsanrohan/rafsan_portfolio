"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

const skills = [
  "Visual Storytelling", "Brand Strategy", "Concept Development", 
  "Creative Direction", "Branding Design", "Campaign Design", 
  "Motion Graphics", "Figma", "Photoshop", "Illustrator", 
  "Premiere Pro", "After Effects", "Client Comms", 
  "Creative Collab", "Research & Insights", "Prompt Engineering", 
  "Creative Automation", "Problem Solving", "System Thinking", "Story Writing"
];

const desktopRings = [
   { radius: 140, speed: 1.2, items: skills.slice(0, 5) },
   { radius: 250, speed: 0.8, items: skills.slice(5, 12) },
   { radius: 370, speed: 0.5, items: skills.slice(12, 20) }
];

export default function CoreCapabilities() {
  const [hovered, setHovered] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Global Angle for deterministic orbital sync
  const globalAngle = useMotionValue(0);
  const speedScale = useRef(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useAnimationFrame((t, delta) => {
    // Smoothly interpolate speed scale for fluid slowdown/speed up
    const targetScale = hovered || selectedSkill ? 0.1 : 1;
    speedScale.current += (targetScale - speedScale.current) * 0.05;
    
    // Increment angle
    // Base speed: roughly 10 degrees per second
    const step = 0.5 * speedScale.current * (delta / 16);
    globalAngle.set(globalAngle.get() + step);
  });

  return (
    <div className="w-full relative mt-16 pt-0 border-transparent flex flex-col items-center select-none overflow-hidden pb-16">
      
      {/* Title block re-added */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full text-center mb-0 block relative z-10"
      >
        <h4 className="inline-block text-brand-silver tracking-[0.3em] text-sm md:text-sm font-mono opacity-80 pb-3 uppercase glow-text shadow-brand-silver">
          ORBITAL CAPABILITIES
        </h4>
      </motion.div>

      {/* Orbital System (True 3D Perspective Space) */}
      <div 
        className="relative flex w-full max-w-[900px] aspect-square items-center justify-center scale-[0.85] md:scale-[1.1] transition-transform duration-500 -mt-20 md:-mt-32"
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Tilting the entire orbital plane into 3D */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center" style={{ transform: "rotateX(65deg)", transformStyle: "preserve-3d" }}>
          
          {/* Core Energy Source */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/[0.05] rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.1)] z-0">
          <div className="w-2 h-2 rounded-full bg-brand-silver animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
          {/* Subtle radiating rings limit 3 */}
          {[1,2,3].map(i => (
             <div key={i} className="absolute inset-0 border border-white/[0.02] rounded-full" style={{ transform: `scale(${i * 2 + 1})` }}></div>
          ))}
        </div>

          {/* Visible Orbital Rings Moving Light Motion */}
          {mounted && desktopRings.map((ring, ringIdx) => (
             <OrbitingLightRing 
               key={`ring-line-${ringIdx}`} 
               radius={ring.radius} 
               speed={ring.speed} 
               globalAngle={globalAngle} 
             />
          ))}

          {/* Orbital Rings Map */}
          {mounted && desktopRings.map((ring, ringIdx) => (
            <div key={`ring-${ringIdx}`} className="absolute w-0 h-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
              {ring.items.map((skill, itemIdx) => {
                const phaseOffset = (360 / ring.items.length) * itemIdx;
                return (
                  <OrbitingCard 
                    key={skill}
                    skill={skill}
                    ringRadius={ring.radius}
                    speed={ring.speed}
                    phaseOffset={phaseOffset}
                    globalAngle={globalAngle}
                    onClick={() => setSelectedSkill(skill)}
                    isFocused={selectedSkill === skill}
                    hasActiveFocus={!!selectedSkill}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Central Focus Overlay */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-[3rem]"
              onClick={() => setSelectedSkill(null)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-silver/20 blur-[80px] rounded-full pointer-events-none"></div>
              
              <motion.div 
                layoutId={`card-${selectedSkill}`}
                className="px-10 py-5 rounded-full bg-black/80 border border-brand-silver/30 backdrop-blur-2xl text-lg font-mono tracking-widest text-white shadow-[0_0_50px_rgba(200,200,210,0.3)] z-50 cursor-pointer text-center"
              >
                {selectedSkill}
                <div className="text-[9px] mt-2 text-gray-500 uppercase tracking-widest block">System Engaged . Click to Dismiss</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function OrbitingLightRing({ radius, speed, globalAngle }: { radius: number, speed: number, globalAngle: any }) {
  const lineSpin = useTransform(globalAngle, a => -(a * speed * 0.5) % 360);
  return (
    <div 
      className="absolute rounded-full border border-white/[0.03] pointer-events-none"
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{ 
          rotateZ: lineSpin, 
          borderTop: '1px solid rgba(255,255,255,0.3)',
          borderRight: '1px solid transparent',
          borderBottom: '1px solid transparent',
          borderLeft: '1px solid transparent',
          boxShadow: 'inset 0 10px 20px -10px rgba(255,255,255,0.1), 0 -5px 15px rgba(255,255,255,0.05)'
        }}
      />
    </div>
  );
}

function OrbitingCard({ 
  skill, ringRadius, speed, phaseOffset, globalAngle, onClick, isFocused, hasActiveFocus 
}: { 
  skill: string, ringRadius: number, speed: number, phaseOffset: number, globalAngle: any, onClick: () => void, isFocused: boolean, hasActiveFocus: boolean 
}) {
  // Compute my specific angle based on global time
  const myAngle = useTransform(globalAngle, (a: number) => {
    return (a * speed + phaseOffset) % 360;
  });

  const rad = useTransform(myAngle, (a: number) => (a * Math.PI) / 180);

  // Responsive scale down for tablet (e.g., max-width constraint) internally we can just use CSS scale on the parent, 
  // but Framer Motion x/y requires absolute values. We'll use CSS clamp or calc, or just let CSS layout handle the bounding box.
  // Actually, standard math is fine, we scale the entire parent container using CSS if needed.

  // True 3D Orbital Math
  const x = useTransform(rad, r => Math.cos(r) * ringRadius);
  const y = useTransform(rad, r => Math.sin(r) * ringRadius); // Perfect circle, handled natively by CSS rotateX
  
  // Z acts as depth purely to calculate fading towards the back conceptually if needed
  const zNorm = useTransform(rad, r => Math.sin(r));
  const dynamicOpacity = useTransform(zNorm, [-1, 1], [0.1, 1]);
  
  const currentOpacity = hasActiveFocus ? 0.02 : dynamicOpacity;

  if (isFocused) {
    return null; 
  }

  return (
    <motion.div
      style={{
        x,
        y,
        rotateX: -65, // Counter-tilt so the card stands facing the camera!
        opacity: currentOpacity,
        position: 'absolute'
      }}
      className="cursor-crosshair flex items-center justify-center origin-center"
      onClick={!hasActiveFocus ? onClick : undefined}
    >
      <div style={{ transform: "translate(-50%, -50%)" }}>
        <motion.div 
          layoutId={`card-${skill}`}
          whileHover={!hasActiveFocus ? { 
            scale: 1.1, 
            borderColor: 'rgba(255,255,255,0.3)', 
            backgroundColor: 'rgba(255,255,255,0.05)',
            boxShadow: '0 0 20px rgba(255,255,255,0.1)'
          } : {}}
          className="px-4 py-2 md:px-5 md:py-2.5 whitespace-nowrap rounded-full bg-black/40 border border-white/10 backdrop-blur-xl text-[12px] md:text-[11px] font-mono tracking-widest text-brand-silver transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          {skill}
        </motion.div>
      </div>
    </motion.div>
  );
}
