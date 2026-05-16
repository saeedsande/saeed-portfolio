import { Canvas, useFrame } from "@react-three/fiber";

import { useRef } from "react";

function AnimatedCube() {

  const meshRef = useRef();

  useFrame(() => {

    if (meshRef.current) {

      meshRef.current.rotation.x += 0.003;

      meshRef.current.rotation.y += 0.004;

      meshRef.current.position.y =
        Math.sin(Date.now() * 0.001) * 0.2;

    }

  });

  return (
    <mesh ref={meshRef}>

      <icosahedronGeometry args={[2, 0]} />

      <meshStandardMaterial
        color="#00ffff"
        wireframe
      />

    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>

      {/* Lights */}
      <ambientLight intensity={1} />

      <pointLight
        position={[10, 10, 10]}
      />

      {/* Animated Shape */}
      <AnimatedCube />

    </Canvas>
  );
}