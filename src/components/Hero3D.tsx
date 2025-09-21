import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedSphere = ({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={5}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-10 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <AnimatedSphere position={[-2, 1, 0]} color="#00d4ff" speed={1} />
        <AnimatedSphere position={[2, -1, -1]} color="#8b5cf6" speed={1.5} />
        <AnimatedSphere position={[0, 2, -2]} color="#00ff88" speed={0.8} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Hero3D;