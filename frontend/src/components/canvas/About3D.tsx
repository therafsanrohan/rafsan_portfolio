"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Sparkles, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Rocket() {
  const rocketRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (rocketRef.current) {
      rocketRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.15; // Hovering effect
      rocketRef.current.rotation.y = state.clock.getElapsedTime() * 0.3; // Slow majestic rotation
      rocketRef.current.rotation.z = Math.sin(state.clock.getElapsedTime()) * 0.05; // Slight atmospheric turbulent tilt
    }
  });

  const rocketMaterial = new THREE.MeshPhysicalMaterial({
      color: "#E6ECF5",
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1,
      transparent: true,
      opacity: 0.9,
  });

  const accentMaterial = new THREE.MeshPhysicalMaterial({
      color: "#8090A0",
      metalness: 1,
      roughness: 0.3,
  });

  return (
    <group ref={rocketRef} scale={1.2}>
      {/* Main Body Cylindar */}
      <mesh position={[0, 0, 0]} material={rocketMaterial}>
        <cylinderGeometry args={[0.8, 1, 3, 32]} />
      </mesh>
      
      {/* Nose Cone */}
      <mesh position={[0, 2.5, 0]} material={accentMaterial}>
        <coneGeometry args={[0.8, 2, 32]} />
      </mesh>

      {/* Cockpit Window */}
      <mesh position={[0, 0.5, 0.85]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
        <meshPhysicalMaterial color="#000000" metalness={1} roughness={0} clearcoat={1} emissive="#102030" />
      </mesh>
      
      {/* Stabilizing Fins */}
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[
            Math.cos((i * Math.PI) / 2) * 1.1,
            -1.2,
            Math.sin((i * Math.PI) / 2) * 1.1
          ]}
          rotation={[0, (-i * Math.PI) / 2, Math.PI / 8]}
          material={accentMaterial}
        >
          <boxGeometry args={[0.1, 1.5, 1]} />
        </mesh>
      ))}

      {/* Engine Trust Glow */}
      <mesh position={[0, -2, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        <pointLight color="#a0c0ff" intensity={5} distance={10} />
      </mesh>
    </group>
  );
}

export default function About3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#E6ECF5" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#A0B0D0" />
        
        <Center>
          <Rocket />
        </Center>
        <Sparkles count={150} scale={12} size={3} speed={0.8} opacity={0.3} color="#a0c0ff" />
      </Canvas>
    </div>
  );
}
