'use client';

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function Blob3D() {
  return (
    <Canvas
      dpr={[1, 1.5]} // Performance optimization for high-DPI screens
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      className="w-full h-full pointer-events-none"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} intensity={1.8} color="#E55B3C" />
      <directionalLight position={[-3, -3, -2]} intensity={1.2} color="#D97962" />
      <pointLight position={[0, 0, 2]} intensity={2.0} color="#F06B4C" />
      
      {/* Primary Matte Terracotta Blob */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <Sphere args={[1.35, 48, 48]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#E55B3C"
            distort={0.4}
            speed={1.8}
            roughness={0.3}
            metalness={0.2}
            clearcoat={0.4}
            clearcoatRoughness={0.3}
          />
        </Sphere>
      </Float>

      {/* Secondary Warm Clay Accent Sphere */}
      <Float speed={2.0} rotationIntensity={1.0} floatIntensity={1.5}>
        <Sphere args={[0.45, 24, 24]} position={[1.8, 1.2, -0.8]}>
          <MeshDistortMaterial
            color="#D97962"
            distort={0.3}
            speed={2.2}
            roughness={0.25}
            metalness={0.3}
          />
        </Sphere>
      </Float>
    </Canvas>
  );
}