"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Sphere, Torus, useTexture } from "@react-three/drei";
import { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";

function MeteorImpact() {
  const meteorRef = useRef<THREE.Mesh>(null);
  const dustRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  
  // Reuse the lightweight moon texture
  const colorMap = useTexture("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg");

  useFrame((state) => {
    // Meteor Drop Physics (Zero Gravity Drift)
    if (meteorRef.current && meteorRef.current.position.y > 0.5) {
      meteorRef.current.position.x += 0.02;
      meteorRef.current.position.y -= 0.08;
      
      // Zero Gravity subtle camera float
      camera.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      camera.position.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.5;
    } 
    else if (meteorRef.current && meteorRef.current.position.y <= 0.5) {
      // Impact occurred
      meteorRef.current.visible = false;
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.1);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0, 0.1);
      
      // Dust Ring Expansion
      if (dustRef.current) {
        dustRef.current.visible = true;
        dustRef.current.scale.x += 0.4;
        dustRef.current.scale.y += 0.4;
        dustRef.current.scale.z += 0.4;
        const mat = dustRef.current.material as THREE.MeshStandardMaterial;
        mat.opacity = Math.max(0, mat.opacity - 0.015);
      }
    }
    
    camera.lookAt(0, 0, 0);
  });

  return (
    <group position={[0, -2, -5]}>
      {/* Huge Lunar Horizon */}
      <Sphere args={[20, 64, 64]} position={[0, -20.5, 0]} rotation={[0, Math.PI / 4, 0]}>
        <meshStandardMaterial map={colorMap} bumpMap={colorMap} bumpScale={0.1} metalness={0.2} roughness={0.8} />
      </Sphere>

      {/* Meteor Object */}
      <Sphere args={[0.3, 16, 16]} ref={meteorRef} position={[-15, 30, 0]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffcbad" emissiveIntensity={3} />
      </Sphere>

      {/* Impact Dust Ring */}
      <Torus args={[0.5, 0.5, 16, 64]} ref={dustRef} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]} visible={false}>
        <meshStandardMaterial color="#a1a1aa" transparent opacity={0.6} />
      </Torus>
    </group>
  );
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-brand-silver/30 selection:text-white relative overflow-hidden flex flex-col items-center justify-center font-sans mt-20 md:mt-0">
      
      {/* Subtle UI Grid Offset */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center mix-blend-screen opacity-90">
        {mounted && (
          <Canvas camera={{ position: [0, 2, 8], fov: 45 }} dpr={[1, 2]}>
            <ambientLight intensity={0.05} />
            <directionalLight position={[10, 5, 5]} intensity={1} color="#ffffff" />
            <directionalLight position={[-10, 0, -5]} intensity={0.2} color="#a1a1aa" />
            <Suspense fallback={null}>
              <MeteorImpact />
            </Suspense>
            <Environment preset="studio" />
          </Canvas>
        )}
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto text-center px-6 mt-32 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative inline-block"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-4 h-4 rounded-full bg-red-600 animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.8)] border border-red-400"></div>
            <h1 className="text-5xl md:text-7xl font-black tracking-widest text-[#a1a1aa] blur-[1px]">
              OFFLINE
            </h1>
          </motion.div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="text-gray-400 font-light text-lg md:text-xl mb-12"
        >
          Signal shattered. The structure has collapsed.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link 
            href="/" 
            className="px-10 py-4 bg-transparent border border-white/10 text-white font-medium rounded-full hover:bg-brand-silver hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(230,236,245,0.05)] hover:shadow-[0_0_25px_rgba(230,236,245,0.4)] w-full sm:w-auto text-center tracking-widest text-sm"
          >
            RETURN TO BASE
          </Link>
          <Link 
            href="/#contact" 
            className="px-10 py-4 bg-brand-silver/5 border border-brand-silver/30 text-brand-silver font-medium rounded-full hover:bg-brand-silver hover:text-black transition-all duration-500 shadow-[inset_0_0_15px_rgba(230,236,245,0.1)] hover:shadow-[0_0_25px_rgba(230,236,245,0.4)] w-full sm:w-auto text-center tracking-widest text-sm"
          >
            ESTABLISH CONTACT
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
