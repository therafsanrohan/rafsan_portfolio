"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function SystemWireframe() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <group ref={groupRef} position={[5, 0, -5]}>
      <Icosahedron args={[12, 1]}>
        <meshStandardMaterial 
          color="#d4d4d8" 
          wireframe={true} 
          transparent={true} 
          opacity={0.08} 
        />
      </Icosahedron>
      
      {/* Inner core */}
      <Icosahedron args={[6, 0]}>
        <meshStandardMaterial 
          color="#a1a1aa" 
          wireframe={true} 
          transparent={true} 
          opacity={0.1} 
        />
      </Icosahedron>
    </group>
  );
}

export default function Contact3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Background Mask to ensure the wireframe blends into deep space */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
      
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <SystemWireframe />
      </Canvas>
    </div>
  );
}
