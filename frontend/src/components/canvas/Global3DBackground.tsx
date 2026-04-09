"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function GiantMoon() {
  const moonRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (moonRef.current) {
      moonRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      moonRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Sphere args={[8, 64, 64]} position={[12, -8, -15]} ref={moonRef}>
      <MeshDistortMaterial
        color="#a1a1aa"
        envMapIntensity={0.5}
        clearcoat={0.1}
        clearcoatRoughness={0.8}
        metalness={0.6}
        roughness={0.9}
        distort={0.05}
        speed={0.5}
      />
    </Sphere>
  );
}

function DynamicStars() {
  const starsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (starsRef.current) {
      // Swirling universe effect
      const scrollY = window.scrollY || 0;
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.01 + scrollY * 0.0005;
      starsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.005) * 0.1 + scrollY * 0.0002;
    }
  });
  
  // Reduced count and factor (size) for better foreground readability
  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={60} count={3500} factor={3} saturation={0} fade speed={1} />
    </group>
  );
}

export default function Global3DBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[-10, 10, 5]} intensity={0.5} color="#ffffff" />
        <directionalLight position={[10, -10, -5]} intensity={0.2} color="#a1a1aa" />
        <DynamicStars />
        <GiantMoon />
      </Canvas>
      {/* Heavy vignette overlay to drastically darken the stars, ensuring readable text */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.5)_0%,_rgba(0,0,0,0.95)_100%)] pointer-events-none z-10"></div>
      
      {/* Subtle global grid to keep the system/strategy vibe */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.015] pointer-events-none z-20"></div>
    </div>
  );
}
