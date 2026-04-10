"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Points, PointMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
// @ts-expect-error - maath does not have types
import * as random from "maath/random/dist/maath-random.esm";

function DynamicWarpStars() {
  const ref = useRef<THREE.Points>(null);
  // Generate a thick sphere of particles (must be perfectly divisible by 3 to prevent NaN)
  const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 15 }));

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotate the entire particle cloud
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      // Dynamic warp feeling when mouse moves
      const targetZ = (state.pointer.y * Math.PI) / 4;
      ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, targetZ, 0.05);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          color="#E6ECF5" 
          size={0.03} 
          sizeAttenuation={true} 
          depthWrite={false} 
        />
      </Points>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.05} />
        <DynamicWarpStars />
      </Canvas>
      {/* Soft overlay to blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none opacity-50"></div>
    </div>
  );
}
