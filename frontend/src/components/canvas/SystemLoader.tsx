"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, useTexture, Stars } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

function OrbitingPlanet({ distance, speed, size, color }: { distance: number, speed: number, size: number, color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x = Math.sin(state.clock.elapsedTime * speed) * distance;
      ref.current.position.z = Math.cos(state.clock.elapsedTime * speed) * distance;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere args={[size, 32, 32]} ref={ref}>
      <meshStandardMaterial color={color} roughness={0.8} metalness={0.2} />
    </Sphere>
  );
}

function UniverseSystem({ phase }: { phase: number }) {
  const moonRef = useRef<THREE.Mesh>(null);
  
  // High fidelity moon texture. Using a highly reliable remote public source for rapid integration without bloat.
  const colorMap = useTexture("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg");
  
  const { camera } = useThree();

  useEffect(() => {
    // Initial camera deep space position
    camera.position.z = 40;
  }, [camera]);

  useFrame((state) => {
    if (moonRef.current) {
      // Very slow, realistic physical rotation
      moonRef.current.rotation.y += 0.003;
      moonRef.current.rotation.x += 0.0005;
    }

    // Camera Depth Physics (Universe Distance -> Approach -> Focus)
    if (phase === 1) {
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 28, 0.01);
    } else if (phase === 2) {
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 7, 0.03);
    } else if (phase >= 3) {
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 5, 0.04);
    }
  });

  return (
    <>
      <ambientLight intensity={0.01} />
      {/* Primary Sun / Light Source */}
      <directionalLight 
        position={[10, 5, 10]} 
        intensity={phase >= 2 ? 1.8 : 0.2} 
        color="#e4e4e7"
      />
      {/* Subtle Space Rim Light highlighting craters */}
      <directionalLight position={[-10, 0, -5]} intensity={0.1} color="#a1a1aa" />
      
      {/* Background Universe */}
      <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
      
      {/* Orbiting Planets in Universe */}
      <OrbitingPlanet distance={8} speed={0.5} size={0.2} color="#71717a" />
      <OrbitingPlanet distance={15} speed={0.25} size={0.5} color="#52525b" />
      <OrbitingPlanet distance={22} speed={0.1} size={0.8} color="#3f3f46" />

      {/* Main Focus Moon */}
      <Sphere args={[2, 64, 64]} ref={moonRef}>
        <meshStandardMaterial 
          map={colorMap}
          bumpMap={colorMap}
          bumpScale={0.08}
          metalness={0.1}
          roughness={0.8}
        />
      </Sphere>
    </>
  );
}

export default function SystemLoader() {
  const [phase, setPhase] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Prevent scroll while loading
      
    // Timeline logic
    const t1 = setTimeout(() => setPhase(2), 1200); // 0-30% - Deep Space rotation
    const t2 = setTimeout(() => setPhase(3), 2800); // 30-70% - Approach
    const t3 = setTimeout(() => setPhase(4), 4000); // 70-90% - Focus Lock
    const t4 = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "auto";
    }, 4800); // 90-100% - Stabilization and fade Out

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
          {/* Deep space radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_80%)] pointer-events-none"></div>

          <div className="w-full h-full absolute inset-0">
            <Canvas camera={{ fov: 45 }}>
              <Suspense fallback={null}>
                <UniverseSystem phase={phase} />
              </Suspense>
            </Canvas>
          </div>
          
          <div className="absolute bottom-20 text-center font-mono tracking-[0.3em] text-[10px] text-brand-silver/50 uppercase z-10 flex flex-col items-center">
            <AnimatePresence mode="wait">
              {phase === 1 && <motion.span key="p1" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>Deep Space Link Established...</motion.span>}
              {phase === 2 && <motion.span key="p2" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>Approaching System Core...</motion.span>}
              {phase === 3 && <motion.span key="p3" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>Focus Lock Acquired...</motion.span>}
              {phase >= 4 && <motion.span key="p4" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>System Ready.</motion.span>}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
